import './Option.scss';

const Option = ({ 
  children,
  selected = false,
  onClick,
  className = '',
  ...props 
}) => {
  const classes = [
    'option',
    selected && 'option--selected',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} onClick={onClick} {...props}>
      {children}
    </div>
  );
};

export default Option;
