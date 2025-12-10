import { memo } from 'react';
import { Text } from '../ui';
import './RecommendedResort.scss';

const RecommendedResort = memo(({ resort }) => {
  return (
    <div 
      className="recommended-resort"
      style={{ backgroundImage: `url(${resort.image})` }}
    >
      <div className="recommended-resort__overlay" />
      <div className="recommended-resort__content">
        <Text variant="label" color="white" className="recommended-resort__label">Recommended Resort</Text>
        <Text variant="h2" color="white" as="h2" className="recommended-resort__name">{resort.name}</Text>
        {resort.description && (
          <Text variant="p" color="white" className="recommended-resort__description">{resort.description}</Text>
        )}
        <div className="recommended-resort__details">
          <Text variant="caption" color="white" className="recommended-resort__detail">
            📍 {resort.region}
          </Text>
          <Text variant="caption" color="white" className="recommended-resort__detail">
            ⛷️ {resort.difficulty}
          </Text>
          <Text variant="caption" color="white" className="recommended-resort__detail">
            ✨ {resort.vibe}
          </Text>
        </div>
      </div>
    </div>
  );
});

RecommendedResort.displayName = 'RecommendedResort';

export default RecommendedResort;
