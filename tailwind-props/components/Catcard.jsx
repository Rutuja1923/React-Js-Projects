import PropTypes from 'prop-types';

function Catcard({ name, someObj, imgSrc }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="flex flex-col items-center justify-center min-h-screen max-w-xs rounded-md shadow-md bg-black text-gray-100 mb-6">
        <img
          src={imgSrc}
          alt={`${name}'s image`}
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-800  m-4 p-2"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
            <p className="text-gray-400">
              {name}, a {someObj.age} year old cat, lived a simple yet
              delightful life. With her soft fur and playful nature, she spent
              most of her days purring contentedly, especially when enjoying her
              favorite meal—{someObj.favorite}.
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Catcard

Catcard.propTypes = {
  name: PropTypes.string.isRequired,  
  someObj: PropTypes.shape(
    {
        age: PropTypes.number.isRequired,    
    favorite: PropTypes.string.isRequired
    }
  ).isRequired,
  imgSrc: PropTypes.string.isRequired 
};
