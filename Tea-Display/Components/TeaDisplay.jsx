import "./TeaDisplay.css";
import PropTypes from "prop-types";

function TeaDisplay({name, origin, description, imgSrc}) {

  return (
    <div className="tea-container">
      <img src={imgSrc} alt={`${name}`} className="tea-image" />
      <h2 className="tea-name">{name}</h2>
      <p className="tea-origin">
        <strong>Origin:</strong> {origin}
      </p>
      <p className="tea-description">{description}</p>
    </div>
  );
}

export default TeaDisplay;

TeaDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};
