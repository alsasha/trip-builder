import './Button.scss';

const Button = ({ 
  children, 
  color = 'default', 
  size = 'small', 
  onClick,
  className = '',
  ...props 
}) => {
  const classes = [
    'btn',
    `btn--${color}`,
    `btn--${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
