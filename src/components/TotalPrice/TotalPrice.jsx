import { memo } from 'react';
import { Button, Text } from '../ui';
import './TotalPrice.scss';

const TotalPrice = memo(({ breakdown, total }) => {
  return (
    <div className="total-price">
      <div className="total-price__header">
        <Text variant="h3" as="h3">Trip Summary</Text>
        <Text variant="caption" color="muted">Estimated total for your trip</Text>
      </div>
      
      <div className="total-price__breakdown">
        {breakdown.map((item, index) => (
          <div key={index} className="total-price__item">
            <Text variant="caption" color="muted">{item.label}</Text>
            <Text variant="caption" color="muted">{item.amount}</Text>
          </div>
        ))}
      </div>
      
      <div className="total-price__total">
        <Text variant="h3">Total</Text>
        <Text variant="h3">{total}</Text>
      </div>
      
      <Button 
        color="primary" 
        size="big" 
        className="total-price__button"
      >
        Continue to Checkout
      </Button>
    </div>
  );
});

TotalPrice.displayName = 'TotalPrice';

export default TotalPrice;
