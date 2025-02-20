import './App.css'
import BookReview from './components/BookReview'

function App() {
  const book1 = {
    name : "The Fates Divide",
    author : "Vernica Roth",
    rating : "4.5",
    review : "The Fates Divide by Veronica Roth is a gripping sequel to Carve the Mark, deepening the complexities of fate, power, and identity. With rich world-building and evolving character dynamics, the novel explores destiny's fluidity and the weight of choices. Though pacing issues arise at times, Roth delivers an emotionally charged narrative that keeps readers engaged till the end.",
    imgSrc : "https://veronicarothbooks.com/wp-content/uploads/2016/04/ctm-homepage-198x300.png",
  }
  return (
    <>
      <BookReview name={book1.name} author={book1.author} rating={book1.rating} review={book1.review} imgSrc={book1.imgSrc}/>
    </>
  )
}

export default App
