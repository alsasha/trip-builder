import { memo } from 'react';
import { Button, Text } from '../ui';
import './MobileTotalPrice.scss';

const MobileTotalPrice = memo(({ total }) => {
  return (
    <div className="mobile-total-price">
      <div className="mobile-total-price__content">
        <div className="mobile-total-price__info">
          <Text variant="caption" color="muted">Total</Text>
          <Text variant="h3">{total}</Text>
        </div>
        <Button color="primary" size="big">
          Pay Now
        </Button>
      </div>
    </div>
  );
});

MobileTotalPrice.displayName = 'MobileTotalPrice';

export default MobileTotalPrice;
