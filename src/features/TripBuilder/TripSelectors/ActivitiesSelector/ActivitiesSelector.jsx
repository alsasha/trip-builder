import { useState, useEffect } from 'react';
import { Option, Text } from '../../../../components/ui';
import './ActivitiesSelector.scss';

const ActivitiesSelector = ({ data, onUpdate }) => {
  const [activities, setActivities] = useState(data.activities);

  useEffect(() => {
    onUpdate({ activities });
  }, []);

  const handleActivityToggle = (activityId) => {
    const newActivities = activities.map(a => 
      a.id === activityId ? { ...a, selected: !a.selected } : a
    );
    setActivities(newActivities);
    onUpdate({ activities: newActivities });
  };

  const selectedActivities = activities.filter(a => a.selected);
  const totalPrice = selectedActivities.reduce((sum, a) => sum + a.price, 0);

  return (
    <div className="activities-selector">
      <div className="activities-selector__header">
        <Text variant="caption" color="muted">
          {selectedActivities.length} {selectedActivities.length === 1 ? 'activity' : 'activities'} selected
        </Text>
      </div>

      <div className="activities-selector__list">
        {activities.map(activity => (
          <Option
            key={activity.id}
            selected={activity.selected}
            onClick={() => handleActivityToggle(activity.id)}
          >
            <div className="option__info">
              <Text variant="p" weight="medium" className="option__name">
                <span className="option__icon">{activity.icon}</span>
                {activity.name}
              </Text>
              <Text variant="caption" color="muted" className="option__description">{activity.description}</Text>
            </div>
            <div className="option__right">
              <Text variant="p" weight="medium" className="option__price">€{activity.price}</Text>
              <span className={`option__checkbox ${activity.selected ? 'option__checkbox--checked' : ''}`}>
                {activity.selected ? '✓' : ''}
              </span>
            </div>
          </Option>
        ))}
      </div>

      <div className="activities-selector__summary">
        <Text variant="p" weight="medium">Selected total:</Text>
        <Text variant="price" color="primary">€{totalPrice}</Text>
      </div>
    </div>
  );
};

export default ActivitiesSelector;
