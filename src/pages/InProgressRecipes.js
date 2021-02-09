import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Ingredient,
  ImageDetails,
  TitleDetails,
} from '../components/index';
import FoodAppContext from '../context/FoodAppContext';
import '../styles/details.css';

function InProgressRecipes({ match }) {
  const { handleClickDetail } = useContext(FoodAppContext);

  const { url } = match;
  const urlSplitArray = url.split('/');
  const recipes = urlSplitArray[1];
  const id = urlSplitArray[2];

  useEffect(() => {
    handleClickDetail(recipes, id);
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
      <Ingredient recipes={ recipes } inProgress id={ id } />
    </div>
  );
}

InProgressRecipes.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};

export default InProgressRecipes;
