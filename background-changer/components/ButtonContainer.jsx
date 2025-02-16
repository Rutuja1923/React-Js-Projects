import Button from "./button";
import PropTypes from "prop-types";

const colors = [
    "bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500",
    "bg-purple-500", "bg-pink-500", "bg-orange-500", "bg-teal-500",
    "bg-indigo-500", "bg-lime-500", "bg-amber-500", "bg-emerald-500",
    "bg-cyan-500", "bg-rose-500", "bg-violet-500", "bg-fuchsia-500",
    "bg-sky-500", "bg-gray-500", "bg-zinc-500", "bg-stone-500",
    "bg-gray-900", "bg-blue-900", "bg-green-900", "bg-purple-900",
    "bg-slate-900", "bg-neutral-900", "bg-zinc-900", "bg-stone-900",
    "bg-black", "bg-white", 
];

function ButtonContainer({ setBgColor }) {
  return (
    <div className="fixed bottom-0 left-0 w-full flex flex-wrap gap-4 p-4">
      {colors.map((color) => (
        <Button key={color} colorName={color} onClick={setBgColor} />
      ))}
    </div>
  );
}

export default ButtonContainer;

ButtonContainer.propTypes = {
  setBgColor: PropTypes.func.isRequired,
};
