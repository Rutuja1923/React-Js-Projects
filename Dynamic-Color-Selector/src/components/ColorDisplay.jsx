import PropTypes from "prop-types";

function ColorDisplay({ color }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          margin: "20px auto",
          backgroundColor: color,
        }}
      ></div>
    </div>
  );
}

export default ColorDisplay;

ColorDisplay.propTypes = {
  color: PropTypes.string.isRequired,
};
