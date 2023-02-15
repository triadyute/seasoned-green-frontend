import recipeImage1 from '../assets/img/blog/recipe-1.jpg';
import recipeImage2 from '../assets/img/blog/recipe-2.jpg';
import recipeImage3 from '../assets/img/blog/recipe-3.jpg';
import recipeImage4 from '../assets/img/blog/recipe-4.jpg';
import recipeImage5 from '../assets/img/blog/recipe-5.jpg';
import recipeImage6 from '../assets/img/blog/recipe-6.jpg';

export default function Recipes() {
  return (
    <div>
      <div className='about-header'></div>
      <section id='recent-blog-posts' className='recipes'>
        <div className='container' data-aos='fade-up'>
          <header className='recipes-section-header'>
            <h1>Recipes</h1>
          </header>
          <div className='recipes-description'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem explicabo, sint excepturi quasi, eligendi maiores
              repellendus ullam unde optio asperiores temporibus fugiat esse
              consequatur doloribus dolorum culpa perferendis libero soluta.
            </p>
          </div>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='post-box'>
                <div className='post-img'>
                  <img src={recipeImage1} className='img-fluid' alt='' />
                </div>
                <h3 className='post-title'>Vegan Salad</h3>
                <p className='recipe-description'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate, reprehenderit velit
                </p>
                <div className='read-more-btn'>
                  <button>View Recipe</button>
                </div>
              </div>
            </div>

            <div className='col-lg-4'>
              <div className='post-box'>
                <div className='post-img'>
                  <img src={recipeImage2} className='img-fluid' alt='' />
                </div>
                <h3 className='post-title'>Vegan Pizza</h3>
                <p className='recipe-description'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate, reprehenderit velit
                </p>
                <div className='read-more-btn'>
                  <button>View Recipe</button>
                </div>
              </div>
            </div>

            <div className='col-lg-4'>
              <div className='post-box'>
                <div className='post-img'>
                  <img src={recipeImage3} className='img-fluid' alt='' />
                </div>
                <h3 className='post-title'>Vegan Burger</h3>
                <p className='recipe-description'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate, reprehenderit velit
                </p>
                <div className='read-more-btn'>
                  <button>View Recipe</button>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='post-box'>
                <div className='post-img'>
                  <img src={recipeImage4} className='img-fluid' alt='' />
                </div>
                <h3 className='post-title'>Vegan Wrap</h3>
                <p className='recipe-description'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate, reprehenderit velit
                </p>
                <div className='read-more-btn'>
                  <button>View Recipe</button>
                </div>
              </div>
            </div>

            <div className='col-lg-4'>
              <div className='post-box'>
                <div className='post-img'>
                  <img src={recipeImage5} className='img-fluid' alt='' />
                </div>
                <h3 className='post-title'>Vegan Smoothie</h3>
                <p className='recipe-description'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate, reprehenderit velit
                </p>
                <div className='read-more-btn'>
                  <button>View Recipe</button>
                </div>
              </div>
            </div>

            <div className='col-lg-4'>
              <div className='post-box'>
                <div className='post-img'>
                  <img src={recipeImage6} className='img-fluid' alt='' />
                </div>
                <h3 className='post-title'>Vegan Pasta</h3>
                <p className='recipe-description'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
                <div className='read-more-btn'>
                  <button>VIEW RECIPE</button>
                </div>
              </div>
            </div>
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
