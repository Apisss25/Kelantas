const Button = ({
  color,
  bgColor,
  hoverBgColor,
  width,
  height,
  rounded,
  title,
  Children,
}) => {
  return (
    <button
      className="flex items-center justify-center font-[Poppins] font-semibold transition-all duration-300 ease-in-out ring-[1.5px] ring-black hover:ring-2 hover:scale-105 hover:shadow-lg"
      style={{
        color: color,
        backgroundColor: bgColor,
        width: width,
        height: height,
        borderRadius: rounded,
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = hoverBgColor || bgColor;
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = bgColor;
      }}
      onClick={() => window.scrollTo({ top: 750, behavior: "smooth" })}
    >
      {Children}
      {title}
    </button>
  );
};

export default Button;
