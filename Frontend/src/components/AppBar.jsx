import Button from "./Button";

const AppBar = () => {
  return (
    <div className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center p-4">
        <h1 className="text-black text-4xl font-bruce">ThriveU</h1>
        <div className="flex gap-5 mt-4 md:mt-0">
          <Button/>
        </div>
      </div>
    </div>
  );
};

export default AppBar;