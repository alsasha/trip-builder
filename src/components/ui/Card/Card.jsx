import './Card.scss';

const Card = ({ 
  children, 
  className = '',
  hoverable = true,
  ...props 
}) => {
  const classes = [
    'card',
    hoverable && 'card--hoverable',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
