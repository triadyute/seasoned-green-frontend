import recipeImage1 from '../assets/img/blog/recipe-1.jpg';
import recipeImage2 from '../assets/img/blog/recipe-2.jpg';
import recipeImage3 from '../assets/img/blog/recipe-3.jpg';
import recipeImage4 from '../assets/img/blog/recipe-4.jpg';
import recipeImage5 from '../assets/img/blog/recipe-5.jpg';
import recipeImage6 from '../assets/img/blog/recipe-6.jpg';

const recipes = [
  {
    recipeTitle: 'Vegan Salad',
    recipeImage: recipeImage1,
    recipeDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,eprehenderit velit',
  },
  {
    recipeTitle: 'Vegan Pizza',
    recipeImage: recipeImage2,
    recipeDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,eprehenderit velit',
  },
  {
    recipeTitle: 'Vegan Burger',
    recipeImage: recipeImage3,
    recipeDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,eprehenderit velit',
  },
  {
    recipeTitle: 'Vegan Wrap',
    recipeImage: recipeImage4,
    recipeDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,eprehenderit velit',
  },
  {
    recipeTitle: 'Vegan Smootjie',
    recipeImage: recipeImage5,
    recipeDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,eprehenderit velit',
  },
  {
    recipeTitle: 'Vegan Pasta',
    recipeImage: recipeImage6,
    recipeDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,eprehenderit velit',
  },
];
export default function Recipes() {
  return (
    <div>
      <div className='about-header'></div>
      <section id='recent-blog-posts' className='recipes'>
        <div className='container' data-aos='fade-up' data-aos-duration='1000'>
          <header
            className='recipes-section-header'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <h1>Recipes</h1>
          </header>
          <div
            className='recipes-description'
            data-aos='fade-up'
            data-aos-delay='100'
            data-aos-duration='1000'
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem explicabo, sint excepturi quasi, eligendi maiores
              repellendus ullam unde optio asperiores temporibus fugiat esse
              consequatur doloribus dolorum culpa perferendis libero soluta.
            </p>
          </div>
          <div
            className='row'
            data-aos='fade-up'
            data-aos-delay='200'
            data-aos-duration='1000'
          >
            {recipes.map((recipe) => (
              <div className='col-lg-4' key={recipe.recipeTitle}>
                <div className='post-box'>
                  <div className='post-img'>
                    <img
                      src={recipe.recipeImage}
                      className='img-fluid'
                      alt=''
                    />
                  </div>
                  <h3 className='post-title'>{recipe.recipeTitle}</h3>
                  <p className='recipe-description'>
                    {recipe.recipeDescription}
                  </p>
                  <div className='read-more-btn'>
                    <button>View Recipe</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className='recipe-pagination'>
        <div className='container'>
          <button>SHOW MORE</button>
        </div>
      </div>
    </div>
  );
}
