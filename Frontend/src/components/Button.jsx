const Button = ({ width = '' }) => {
  return (
    <button
      className={`${width} bg-transparent border-1 border-black hover:bg-[#49d45b] hover:border-[#49D470] text-black font-bold text-xl  px-20 py-4 rounded-full transition-colors duration-300`}
    >
      Get Started
    </button>
  );
};

export default Button;
