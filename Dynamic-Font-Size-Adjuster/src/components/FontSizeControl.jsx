import PropTypes from "prop-types";

function FontSizeControl({ fontSize, setFontSize }) {
  return (
    <div>
      <input
        type="range"
        min="10"
        max="100"
        value={fontSize}
        onChange={(e) => setFontSize(e.target.value)}
      />
      <p>Selected Font Size : {fontSize} px</p>
    </div>
  );
}

export default FontSizeControl;

FontSizeControl.propTypes = {
  fontSize: PropTypes.number.isRequired,
  setFontSize: PropTypes.func.isRequired,
};
