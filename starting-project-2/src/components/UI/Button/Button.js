import styled from 'styled-components';

import './Button.css';

//styled.button`` is a tagged template literal
//default JS feature
//button is a method on styled that is called using the backticks
//what is passed into the backticks will be used in the method
//styled also has p, h1, h2, etc. methods
const Button = styled.button`
    width: 100%;
    font: inherit;
    padding: 0.5rem 1.5rem;
    border: 1px solid #8b005d;
    color: white;
    background: #8b005d;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
    cursor: pointer;

    @media (min-width: 768px) {
      width: auto;
    }
  

    &:focus {
      outline: none;
    }

    &:hover,
    &:active {
      background: #ac0e77;
      border-color: #ac0e77;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
    }
`;

export default Button;
