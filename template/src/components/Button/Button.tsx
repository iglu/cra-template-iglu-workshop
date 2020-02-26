import React from 'react';
import Icon from '@material-ui/core/Icon';

import './Button.css';

export interface ButtonProps {
  icon?: string;
  variant?: 'primary';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = () => {
  return (
    <button className="button" type="button">
      <span className="button__icon">
        <Icon>add</Icon>
      </span>
      <span className="button__label">Add new</span>
    </button>
  );
};

export default Button;
