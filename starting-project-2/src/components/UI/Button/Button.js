import React from 'react';
import styled from 'styled-components';

import './Button.css';

// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

//styled.button`` is a tagged template literal
//default JS feature
//button is a method on styled that is called using the backticks
//what is passed into the backticks will be used in the method
const Button = styled.button``;

export default Button;
