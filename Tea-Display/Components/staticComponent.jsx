import "./TeaDisplay";

function StaticComponent() {
  const tea = {
    name: "Matcha",
    origin: "Japan",
    description:
      "Matcha is a finely ground powdered green tea, known for its vibrant green color and rich umami flavor. It is traditionally used in Japanese tea ceremonies and is packed with antioxidants.",
    imgSrc : "https://info.ehl.edu/hubfs/Blog-EHL-Insights/Images-EHL-Insights/EHL-Passugg_Blog_Matcha_Header.jpg"
  };

  return (
    <div className="tea-container">
      <img src={tea.imgSrc} alt={`${tea.name}`} className="tea-image" />
      <h2 className="tea-name">{tea.name}</h2>
      <p className="tea-origin">
        <strong>Origin:</strong> {tea.origin}
      </p>
      <p className="tea-description">{tea.description}</p>
    </div>
  );
}

export default StaticComponent;
