import './App.css'
import TeaDisplay from '../Components/TeaDisplay'
import StaticComponent from '../Components/staticComponent'

function App() {
  const Teas = [
    {
      name: 'Chamomile tea',
      origin: 'Europe and the Mediterranean',
      description: 'The name chamomile comes from the Greek word “chamomaela” or “ground apple”. Chamomile is used to treat anxiety and settle stomachs. It is also used for its fragrance and flavor profile.',
      imgSrc: 'https://bioneurix.com/cdn/shop/articles/cup-gd7aef6e8d_1280_1400x.progressive.jpg?v=1689978292'
    },
    {
      name: 'Black tea',
      origin: 'China and Mongolia',
      description: "Black tea's flavor can range from savory to sweet, depending on how it's processed and oxidized.Drinking at least two cups of tea daily may reduce the risk of stroke by 16%.",
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7sE2H7LFthyDUk1H5yPkHyx3RHs-RqcB4dw&s',
    },
    {
      name: 'Green tea',
      origin: 'China',
      description: 'Green tea is rich in flavonoids such as catechins, which have antioxidant properties. Green tea is considered a good beverage to improve fatty liver index and hepatic function.',
      imgSrc: 'https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_735966_16739612170418135.jpg',
    },
    {
      name: 'Rooibos tea',
      origin: 'South Africa',
      description: "A caffeine-free herbal tea that's native to South Africa. It has a full body similar to black tea and has anti-inflammatory effects and is rich in antioxidants.",
      imgSrc: 'https://www.livemint.com/lm-img/img/2024/10/11/600x338/rooibos_tea_india_1728651709390_1728651714152.jpg',
    },
    {
      name: 'Darjeeling tea',
      origin: 'India',
      description: 'Considered the best tea in the world, Darjeeling tea has many varieties, including green, black, white, and oolong. Each variety has a distinct aroma and flavor profile.',
      imgSrc: 'https://www.theteashelf.com/cdn/shop/articles/tea-glass-cup-wooden-table-tea-plantations-background_1024x1024.jpg?v=1679396414'
    },
    {
      name: 'Oolong tea',
      origin: 'China and Taiwan',
      description: 'Oolong tea is partially oxidized, giving it a flavor that falls between black and green tea. It has a rich aroma and is known for aiding digestion and weight management.',
      imgSrc: 'https://tastecooking.com/wp-content/uploads/2019/06/04.07_oolong.jpg',
    },
    {
      name: 'White tea',
      origin: 'China',
      description: 'White tea is the least processed tea, made from young tea leaves. It has a delicate flavor and is packed with antioxidants that support skin health and overall well-being.',
      imgSrc: 'https://images.healthshots.com/healthshots/en/uploads/2024/03/02201650/White-tea-1.jpg',
    },
    {
      name: 'Herbal tea',
      origin: 'Various regions worldwide',
      description: 'Herbal teas are caffeine-free infusions made from herbs, flowers, and spices. Popular varieties include peppermint, hibiscus, and ginger tea, each with unique health benefits.',
      imgSrc: 'https://www.treehugger.com/thmb/uWQw8MStw9Zetyqli_5F3qoS9Dc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tea-cup-with-several-dried-tea-leaves-and-flowers-1201496311-55f0a4dfdbc54605966a0a9ec2f40f3c.jpg',
    },
    {
      name: 'Masala chai',
      origin: 'India',
      description: 'Masala chai is a spiced tea made with black tea, milk, and a blend of warming spices such as cinnamon, cardamom, cloves, and ginger. It is a staple in Indian households.',
      imgSrc: 'https://www.teacupsfull.com/cdn/shop/articles/maaa.jpg?v=1698776743',
    },
    {
      name: 'Mint Tea',
      origin: 'Morocco',
      description: 'Mint tea, also known as Maghrebi tea, has a long history in Morocco. The origins of mint tea are debated, with theories including British merchants, Arab traders, and the Berbers.',
      imgSrc: 'https://techatea.com/wp-content/uploads/2023/05/tea-2.jpg',
    },
    {
      name: 'Nilgiri tea',
      origin: 'India (Nilgiri Hills, Tamil Nadu)',
      description: 'Nilgiri tea is known for its smooth, brisk, and fragrant flavor with floral and fruity notes. It is often used in iced teas and blends well with other flavors due to its naturally sweet taste.',
      imgSrc: 'https://senchateabar.com/cdn/shop/articles/5e46df9c1892f18f3cdee574_AdobeStock_316822193_1024x1024.jpeg?v=1596842745'
    }
];

  return (
    <div className='main-container'>
      <StaticComponent />
      {Teas.map((tea, index) => (
      <TeaDisplay 
        key={index}  
        name={tea.name} 
        origin={tea.origin} 
        description={tea.description}
        imgSrc={tea.imgSrc}
      />
    ))}
    </div>
  )
}

export default App
