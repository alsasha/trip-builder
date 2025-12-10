import './Text.scss';

const Text = ({ 
  children, 
  variant = 'p', 
  color,
  weight,
  className = '',
  as,
  ...props 
}) => {
  const tagMap = {
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    p: 'p',
    caption: 'span',
    label: 'span',
    price: 'span'
  };

  const Tag = as || tagMap[variant] || 'span';
  
  const classes = [
    'text',
    `text--${variant}`,
    color && `text--${color}`,
    weight && `text--${weight}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};

export default Text;
