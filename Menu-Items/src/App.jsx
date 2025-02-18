import "./App.css";
import MenuItem from "../components/MenuItem";
import HardcodeMenu from "../components/HardcodeMenu";

function App() {
  const foodItems = [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvc2F8ZW58MHx8MHx8fDA%3D",
      name: "Dosa",
      price: 60,
      description: "Crispy South Indian crepe made from rice and lentils.",
    },
    {
      imgSrc:
        "https://media.istockphoto.com/id/1292633263/photo/indian-fried-snack-medu-vada-with-sambar-and-coconut-chutney-in-plate-on-rustic-wooden.jpg?s=612x612&w=0&k=20&c=I24Sl76Qq4ly7WlI3HJJa8VfCIkBxvsgVZ8mAb81ZEA=",
      name: "Medu Vada",
      price: 50,
      description: "Deep-fried lentil doughnuts with coconut chutney.",
    },
    {
      imgSrc: "https://justhomemade.files.wordpress.com/2011/01/pongal.jpg",
      name: "Pongal",
      price: 70,
      description: "A savory rice and lentil dish tempered with spices.",
    },
    {
      imgSrc:
        "https://www.indianveggiedelight.com/wp-content/uploads/2017/07/thumnail_avrekalu_upma_final.jpg",
      name: "Upma",
      price: 50,
      description: "A flavorful semolina-based breakfast dish.",
    },
    {
      imgSrc:
        "https://ftnnews.com/wp-content/uploads/2024/09/Margherita-pizza-with-cherry-tomatos.webp",
      name: "Pizza",
      price: 250,
      description: "Cheesy delight with a crispy base and assorted toppings.",
    },
    {
      imgSrc:
        "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
      name: "Burger",
      price: 150,
      description: "Juicy patty with fresh veggies and sauce in a soft bun.",
    },
    {
      imgSrc:
        "https://www.spicebangla.com/wp-content/uploads/2024/08/Spicy-Pasta-recipe-optimised-scaled.webp",
      name: "Pasta",
      price: 180,
      description: "Creamy and flavorful Italian pasta with herbs.",
    },
    {
      imgSrc:
        "https://i.ytimg.com/vi/vcSn6-sDrWg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDNWlpYe1SAFDiL9wLXm0XUcurAZw",
      name: "Noodles",
      price: 120,
      description: "Spicy and stir-fried with fresh veggies and sauces.",
    },
    {
      imgSrc:
        "https://www.recipefunnel.com/images/recipe/veg-manchurian-1629182469577.webp?compress=false",
      name: "Manchurian",
      price: 130,
      description: "Crispy Indo-Chinese dish tossed in a tangy sauce.",
    },
    {
      imgSrc:
        "https://junifoods.com/wp-content/uploads/2023/11/Easy-Chicken-Momo-Dumplings-Sajilo-Kukhura-ko-Momo-%E0%A4%B8%E0%A4%9C%E0%A4%BF%E0%A4%B2%E0%A5%8B-%E0%A4%95%E0%A5%81%E0%A4%96%E0%A5%81%E0%A4%B0%E0%A4%BE%E0%A4%95%E0%A5%8B-%E0%A4%AE%E0%A4%AE-500x375.jpg",
      name: "Momo",
      price: 100,
      description: "Smenumed dumplings filled with spiced veggies or meat.",
    },
    {
      imgSrc:
        "https://img.freepik.com/premium-photo/north-indian-street-food-chole-bhature-best-fast-food-chole-bhature-picture-photography_1020697-111379.jpg",
      name: "Chole Bhature",
      price: 90,
      description: "Fluffy fried bread served with spicy chickpea curry.",
    },
    {
      imgSrc:
        "https://biryanibonanza.com/wp-content/uploads/2024/06/Rajma-Chawal-cover-image-2.jpg",
      name: "Rajma Chawal",
      price: 80,
      description: "Kidney beans curry served with smenumed rice.",
    },
    {
      imgSrc:
        "https://i0.wp.com/beextravegant.com/wp-content/uploads/2021/08/Palak-paneer-7-edited.jpg?fit=1152%2C864&ssl=1",
      name: "Palak Paneer",
      price: 140,
      description: "Creamy spinach curry with soft paneer cubes.",
    },
    {
      imgSrc:
        "https://www.thespruceeats.com/thmb/MReCj8olqrCsPaGvikesPJie02U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/naan-leavened-indian-flatbread-1957348-final-08-116a2e523f6e4ee693b1a9655784d9b9.jpg",
      name: "Butter Naan",
      price: 50,
      description: "Soft Indian bread topped with butter.",
    },
    {
      imgSrc:
        "https://pipingpotcurry.com/wp-content/uploads/2024/04/Chicken-Biryani-Piping-Pot-Curry.jpg",
      name: "Biryani",
      price: 200,
      description: "Aromatic spiced rice with tender meat or veggies.",
    },
    {
      imgSrc:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/samosa-recipe.jpg",
      name: "Samosa",
      price: 30,
      description: "Crispy stuffed pastry filled with spicy potatoes.",
    },
    {
      imgSrc:
        "https://reetikamitra.com/wp-content/uploads/2020/07/Kolkata-Kathi-Rolls-scaled.jpg",
      name: "Kathi Roll",
      price: 100,
      description: "Spicy wrap filled with paneer or chicken.",
    },
    {
      imgSrc:
        "https://carveyourcraving.com/wp-content/uploads/2021/09/Best-Malai-Kofta-recipe-500x500.jpg",
      name: "Malai Kofta",
      price: 160,
      description: "Creamy tomato-based curry with paneer dumplings.",
    },
    {
      imgSrc:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/10/khaman-dhokla-recipe.jpg",
      name: "Dhokla",
      price: 70,
      description: "Soft and spongy smenumed gram flour snack.",
    },
    {
      imgSrc:
        "https://i2.wp.com/wp-backend.thefearlesscooking.com/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-10-at-4.45.10-PM.jpeg?fit=1536%2C1024&ssl=1",
      name: "Pani Puri",
      price: 50,
      description: "Crispy puris filled with tangy and spicy water.",
    },
    {
      imgSrc:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/05/Best-Pav-Bhaji-Recipe.jpg",
      name: "Pav Bhaji",
      price: 120,
      description: "Spicy mashed veggie curry with buttered buns.",
    },
    {
      imgSrc:
        "https://i0.wp.com/curryandvanilla.com/wp-content/uploads/2019/01/misal-pav-11b.jpg?resize=654%2C567&ssl=1",
      name: "Misal Pav",
      price: 110,
      description: "Spicy Maharashtrian curry served with bread.",
    },
    {
      imgSrc:
        "https://c.ndtvimg.com/2023-04/ghgdqak8_poha_625x300_03_April_23.jpg",
      name: "Poha",
      price: 60,
      description: "Flattened rice cooked with onions and spices.",
    },
    {
      imgSrc:
        "https://c.ndtvimg.com/2022-07/g2rnr1u_saag_120x90_08_July_22.png",
      name: "Makki di Roti & Sarson da Saag",
      price: 140,
      description: "Corn flatbread served with mustard greens curry.",
    },
    {
      imgSrc: "https://i.ytimg.com/vi/CeTlCt_WvsM/maxresdefault.jpg",
      name: "Litti Chokha",
      price: 100,
      description: "Bihari dish of wheat balls with mashed veggies.",
    },
    {
      imgSrc:
        "https://media.istockphoto.com/id/1155432413/photo/bombay-chat-food-in-group.jpg?s=612x612&w=0&k=20&c=yro01Ir05bPnYSaOzgobQxpk9oCMR1E3BMlxCFP2-jI=",
      name: "Kachori",
      price: 50,
      description: "Spicy deep-fried snack filled with lentils or potatoes.",
    },
    {
      imgSrc:
        "https://static.vecteezy.com/system/resources/previews/048/815/860/non_2x/delicious-indian-thali-featuring-diverse-dishes-served-on-a-traditional-metal-platter-free-photo.jpeg",
      name: "Indian Thali",
      price: 250,
      description: "A wholesome platter with multiple Indian dishes.",
    },
    {
      imgSrc:
        "https://media.istockphoto.com/id/1831760238/photo/famous-south-indian-food-uthappam-with-chutney.jpg?s=612x612&w=0&k=20&c=QbbQgPY9zfp9y7uIpntSrKVqBCv2lEzX-VL5MRGb5zs=",
      name: "Uttapam",
      price: 90,
      description: "South Indian thick pancake with veggies.",
    },
    {
      imgSrc:
        "https://thumbs.dreamstime.com/b/masala-puri-masalpuri-beloved-indian-snack-originating-karnataka-especially-popular-as-spicy-chaat-flavorful-343030205.jpg",
      name: "Chaat",
      price: 80,
      description: "Tangy and spicy Indian street food mix.",
    },
    {
      imgSrc:
        "https://t3.ftcdn.net/jpg/10/12/36/22/360_F_1012362289_gnv0syyLStw7Koy9WNbaR6goqbmIIOvH.jpg",
      name: "Sweet Lassi",
      price: 60,
      description: "Refreshing yogurt-based drink with sugar.",
    },
    {
      imgSrc:
        "https://www.archanaskitchen.com//images/archanaskitchen/Indian_Sweets_Mithai/Kesar_Pista_Kulfi_Recipe_Indian_Ice_Cream-1-2.jpg",
      name: "Kulfi",
      price: 70,
      description: "Traditional Indian ice cream made with milk.",
    },
    {
      imgSrc:
        "https://www.foodie-trail.com/wp-content/uploads/2020/04/PHOTO-2022-02-12-20-04-41_1.jpg",
      name: "Gulab Jamun",
      price: 50,
      description: "Soft milk dumplings soaked in sugar syrup.",
    },
    {
      imgSrc:
        "https://cdn.zeptonow.com/production///tr:w-600,ar-100-100,pr-true,f-auto,q-80/web/recipes/rasgulla.png",
      name: "Rasgulla",
      price: 60,
      description: "Spongy cottage cheese balls in sugar syrup.",
    },
    {
      imgSrc: "https://4.imimg.com/data4/WP/DD/MY-29535772/icecream-faluda.jpg",
      name: "Faluda Ice Cream",
      price: 120,
      description:
        "A rich, creamy dessert with vermicelli, rose syrup, and ice cream.",
    },
    {
      imgSrc:
        "https://media.assettype.com/gulfnews%2Fimport%2F2022%2F12%2F27%2Fcassata_17dfbca50c9_large.jpg?w=480&auto=format%2Ccompress&fit=max",
      name: "Cassatta",
      price: 150,
      description: "A layered ice cream dessert with nuts and sponge cake.",
    },
  ];

  return (
    <div className="main-container">
      <HardcodeMenu />
      {foodItems.map((menu, index) => (
        <MenuItem
          key={index}
          name={menu.name}
          price={menu.price}
          description={menu.description}
          imgSrc={menu.imgSrc}
        />
      ))}
    </div>
  );
}

export default App;
