import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const JWT_PASSWORD = process.env.JWT_PASSWORD || "secret";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization as unknown as string;

  try {
    const payload = jwt.verify(token, JWT_PASSWORD);
    // @ts-ignore
    req.id = payload.id;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Your are not logged in",
    });
  }
}