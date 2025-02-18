import './MenuItem.css';

function HardCodeMenu() {
  const menu = {
    imgSrc: "https://t4.ftcdn.net/jpg/04/39/31/29/360_F_439312935_lxOEQSqasYc5GeyHKgYJXWCIFm8gmQUN.jpg",
    name: "Idli",
    price: 40,
    description: "Soft steamed rice cakes, served with chutney and sambar.",
  };

  return (
    <div className="menu-container">
      <img src={menu.imgSrc} alt={`${menu.name}-image`} className="menu-image" />
      <div className="info-container">
        <h3 className="menu-name">{menu.name}</h3>
        <h2 className="menu-price">₹{menu.price}</h2>
      </div>
      <p className="menu-description">{menu.description}</p>
    </div>
  );
}

export default HardCodeMenu;
