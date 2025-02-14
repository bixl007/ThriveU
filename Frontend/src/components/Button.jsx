const Button = ({ width = '' }) => {
  return (
    <button
      className={`${width} bg-transparent border-1 border-black hover:bg-[#D8E82E] hover:border-[#233a20] text-black font-bold text-xl  px-20 py-4 rounded-full transition-colors duration-300 ease-in-out cursor-pointer`}
      onClick={() => {
        window.location.href = '/signup';
      }}
    >
      Get Started
    </button>
  );
};

export default Button;
