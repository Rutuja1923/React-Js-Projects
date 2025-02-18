import "./MenuItem.css";
import PropTypes from "prop-types";

function MenuItem({ imgSrc, name, price, description }) {
  return (
    <div className="menu-container">
      <img src={imgSrc} alt={`${name}-image`} className="menu-image" />
      <div className="info-container">
        <h3 className="menu-name">{name}</h3>
        <h2 className="menu-price">₹{price}</h2>
      </div>
      <p className="menu-description">{description}</p>
    </div>
  );
}

export default MenuItem;

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};
