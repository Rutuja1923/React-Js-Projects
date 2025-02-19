import PropTypes from "prop-types";

function ColorSelector({ colors, onSelectColor }) {
  return (
    <div>
      {colors.map((color) => (
        <button
          key={color}
          style={{ backgroundColor: color }}
          onClick={() => onSelectColor(color)}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default ColorSelector;

ColorSelector.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelectColor: PropTypes.func.isRequired,
};
