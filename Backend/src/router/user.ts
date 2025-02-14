import e, { Router } from "express";
import { authMiddleware } from "../middlewares";
import { SigninSchema, SignupSchema } from "../types";
import { prismaClient } from "../db";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

const JWT_PASSWORD = process.env.JWT_PASSWORD || "secret";
const router = Router();

// @ts-ignore
router.post("/signup", async (req: Request, res: Response) => {
  const body = req.body;
  const parsedData = SignupSchema.safeParse(body);

  if (!parsedData.success) {
    return res.status(400).json({
      message: "Invalid data",
    });
  }

  const userExists = await prismaClient.user.findFirst({
    where: {
      email: parsedData.data.username,
    },
  });

  if (userExists) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  await prismaClient.user.create({
    data: {
      email: parsedData.data.username,
      password: parsedData.data.password, // TODO: hash password
      name: parsedData.data.name,
    },
  });

  return res.json({
    message: "Signed up",
  });
});

// @ts-ignore
router.get("/signup", (req, res) => {
  return res.json({
    message: "Hello World",
  });
});

// @ts-ignore
router.post("/signin", async (req: Request, res: Response) => {
  const body = req.body;
  const parsedData = SigninSchema.safeParse(body);

  if (!parsedData.success) {
    return res.status(400).json({
      message: "Invalid data",
    });
  }

  const user = await prismaClient.user.findFirst({
    where: {
      email: parsedData.data.username,
      password: parsedData.data.password,
    },
  });

  if (!user) {
    return res.status(400).json({
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign(
    {
      id: user.id,
    },
    JWT_PASSWORD
  );

  return res.json({
    token,
  });
});

export const userRouter = router;
