import "./TeaDisplay";

function StaticComponent() {
  const tea = {
    name: "Matcha",
    origin: "Japan",
    description:
      "Matcha is a finely ground powdered green tea, known for its vibrant green color and rich umami flavor. It is traditionally used in Japanese tea ceremonies and is packed with antioxidants.",
  };

  return (
    <div className="tea-container">
      <h2 className="tea-name">{tea.name}</h2>
      <p className="tea-origin">
        <strong>Origin:</strong> {tea.origin}
      </p>
      <p className="tea-description">{tea.description}</p>
    </div>
  );
}

export default StaticComponent;
