const Button = ({ width = '' }) => {
  return (
    <button
      className={`${width} bg-transparent border-2 border-black hover:bg-[#49D470] hover:border-[#49D470] text-black font-bold text-xl md:text-2xl px-6 py-3 rounded-full transition-colors duration-300`}
    >
      Get Started
    </button>
  );
};

export default Button;
