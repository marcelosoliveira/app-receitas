import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
/* import { Link } from 'react-router-dom'; */

import {
  Ingredient, Recomendations, Video,
  ImageDetails, TitleDetails, Instructions, ButtonDetails,
} from './index';
import FoodAppContext from '../context/FoodAppContext';

function RecipeDetails({ recipes, id }) {
  const { setShowSearch } = useContext(FoodAppContext);
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));

  const enableBtn = () => doneRecipes && doneRecipes.find((recipe) => recipe.id === id);

  const setTextBtn = () => {
    if (inProgressRecipes) {
      if (recipes === 'comidas') {
        const { meals } = inProgressRecipes;
        const ids = Object.keys(meals);
        return ids.find((key) => key === id);
      }
      const { cocktails } = inProgressRecipes;
      const ids = Object.keys(cocktails);
      return ids.find((key) => key === id);
    }
  };

  useEffect(() => {
    setShowSearch(false);
  }, []);

  return (
    <div className="div-recipes-details">
      <div className="image-title-detail">
        <ImageDetails recipes={ recipes } />
        <TitleDetails
          recipes={ recipes }
          pathname={ `https://react-tomperos.herokuapp.com/${recipes}/${id}` }
          id={ id }
        />
      </div>
      <Ingredient recipes={ recipes } />
      <Instructions recipes={ recipes } />
      { recipes === 'comidas' ? <Video /> : ''}
      <Recomendations recipes={ recipes } />
      {enableBtn() ? null : <ButtonDetails
        recipes={ recipes }
        id={ id }
        textBtn={ setTextBtn() ? 'Continuar Receita' : 'Iniciar Receita' }
        dataTestId="start-recipe-btn"
      />}
      {/*   <Link
        to={ `/${recipes}` }
        className="detail-link"
      >
        Back
      </Link> */}
    </div>
  );
}

RecipeDetails.propTypes = {
  recipes: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default RecipeDetails;
