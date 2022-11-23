import React from 'react'
import "./Recipe.css"

const Recipecard = ({recipe}) => {
    const {idMeal,strMeal,strMealThumb,strCategory,strArea}=recipe;

    function enlargeimage(img){
      

    }
  return (
    <div className='whole-recipe'>
    <div className='recipe-card'>
        <img onMouseOver={enlargeimage} src={strMealThumb} alt="meal" className='card-image'/>
        <div className='info'>
            <h3>{strMeal}</h3>
            <h4>{strCategory}</h4>
            <h4>{strArea}</h4>
            <a className="tag" href={"https://www.themealdb.com/meal/"+ idMeal}>Ingredients</a>
        </div>
    </div>
    </div>

  )
}

export default Recipecard