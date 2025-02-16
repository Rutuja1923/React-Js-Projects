import PropTypes from "prop-types";

function Button({ colorName, onClick }) {
  const darkColors = [
    "bg-black",
    "bg-gray-900",
    "bg-blue-900",
    "bg-green-900",
    "bg-purple-900",
    "bg-slate-900",
    "bg-neutral-900",
    "bg-zinc-900",
    "bg-stone-900",
  ];
  const textColor = darkColors.includes(colorName)
    ? "text-white"
    : "text-black";

  const formattedName = colorName
    .replace("bg-", "")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <button
      className={`px-6 py-2 ${colorName} hover:brightness-110 ${textColor} font-semibold rounded-lg shadow-md transition duration-300`}
      onClick={() => onClick(colorName)}
    >
      {formattedName}
    </button>
  );
}

export default Button;

Button.propTypes = {
  colorName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
