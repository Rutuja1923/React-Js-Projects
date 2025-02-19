import PropTypes from "prop-types";

function TextDisplay({ fontSize }) {
  return (
    <div>
      <p
        style={{
          fontSize: `${fontSize}px`,
          border: "1px solid black",
          padding: "10px",
          display: "inline-block",
          backgroundColor: "#fff",
          color: "#000",
        }}
      >
        Hello World
      </p>
    </div>
  );
}

export default TextDisplay;

TextDisplay.propTypes = {
  fontSize: PropTypes.number.isRequired,
};
