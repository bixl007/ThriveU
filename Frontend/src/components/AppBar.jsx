import Button from "./Button";

const AppBar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 lg:px-50 md:px-10 shadow-xl">
      <div className="text-3xl py-2">Thrive</div>
      <div><Button /></div>
    </div>
  );
};

export default AppBar;