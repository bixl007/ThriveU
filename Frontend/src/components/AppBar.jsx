import Button from "./Button";

const AppBar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 lg:px-[50px] md:px-10 ">
      <div className="text-3xl py-2">
        <img
          className="h-24"
          src="https://i.ibb.co/whj9NFjn/Screenshot-2025-02-15-005234.png"
          alt="App Logo"
        />
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
};

export default AppBar;
