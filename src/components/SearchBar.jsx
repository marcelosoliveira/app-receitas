import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import useSearch from '../hooks/useSearch';
import '../styles/search.css'

function SearchBar({ title }) {
  const [handlerChange, handlerClick, clean] = useSearch();
  const history = useHistory();
  const isFocus = useRef();
  return (
    <div className="div-search">
      <input
        name="term"
        placeholder="Buscar receita"
        type="text"
        value={clean}
        ref={isFocus}
        autoFocus
        data-testid="search-input"
        onChange={ handlerChange }
      />
      <label
        className="label-input-ingred"
        htmlFor="ingredient"       
      >
        <input
          data-testid="ingredient-search-radio"
          type="radio"
          id="ingredient"
          name="type"
          value="i"
          onChange={ handlerChange }
        />
        Ingredientes
      </label>
      <label
        className="label-input-nome"
        htmlFor="name"
      >
        <input
          data-testid="name-search-radio"
          type="radio"
          id="name"
          name="type"
          value="s"
          onChange={ handlerChange }
        />
        Nome
      </label>
      <label
        className="label-input-letra"
        htmlFor="first-letter"        
      >
        <input
          data-testid="first-letter-search-radio"
          type="radio"
          id="first-letter"
          name="type"
          value="f"
          onChange={ handlerChange }
        />
        Primeira Letra
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ (e) => {
          handlerClick(e, history)
          isFocus.current.focus(); 
        }}
        value={ title }
      >
        Buscar
      </button>
    </div>
  );
}

SearchBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SearchBar;
