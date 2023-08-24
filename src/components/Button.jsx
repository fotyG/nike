const Button = ({
  label,
  iconURL,
  textColor,
  fullWidth,
  borderColor,
  backgroundColor,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none 
      ${textColor ? textColor : "text-white"} 
      ${borderColor ? borderColor : "border-coral-red"}
      ${backgroundColor ? backgroundColor : "bg-coral-red"} 
      rounded-full ${fullWidth && "w-full"}`}
    >
      {label}

      {iconURL && (
        <img
          alt={label}
          src={iconURL}
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};
export default Button;
