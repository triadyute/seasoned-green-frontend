export default function RecipeItem(props) {
  return (
    <div className='col-lg-4'>
      <div className='post-box'>
        <div className='post-img'>
          <img src={props.recipeImage} className='img-fluid' alt='' />
        </div>
        <h3 className='post-title'>{props.reciPeTitle}</h3>
        <p className='recipe-description'>{props.recipeDescription}</p>
        <div className='read-more-btn'>
          <button>View Recipe</button>
        </div>
      </div>
    </div>
  );
}
