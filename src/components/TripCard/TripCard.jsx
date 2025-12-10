import { memo, useCallback } from 'react';
import { Button, Card, Text } from '../ui';
import { getDisplayData } from '../../utils/formatters';
import './TripCard.scss';

const TripCard = memo(({ item, onChangeClick }) => {
  const { value, meta, price } = getDisplayData(item);
  
  const handleClick = useCallback(() => {
    onChangeClick(item);
  }, [onChangeClick, item]);

  return (
    <Card className="trip-card">
      <div className="trip-card__main">
        <div className="trip-card__info">
          <div className="trip-card__icon">{item.icon}</div>
          <div className="trip-card__content">
            <Text variant="caption" color="muted">{item.type}</Text>
            <Text variant="p" weight="medium">{value}</Text>
            {meta && <Text variant="caption" color="light">{meta}</Text>}
          </div>
        </div>
        <div className="trip-card__actions">
          <Text variant="p" weight="medium">{price}</Text>
          <Button color="default" size="small" onClick={handleClick}>
            Change
          </Button>
        </div>
      </div>
      {item.aiSuggestion && (
        <div className="trip-card__ai-suggestion">
          <span className="trip-card__ai-icon">✨</span>
          <Text variant="caption" weight="medium">{item.aiSuggestion}</Text>
        </div>
      )}
    </Card>
  );
});

TripCard.displayName = 'TripCard';

export default TripCard;
