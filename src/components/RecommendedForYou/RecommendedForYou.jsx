import { memo } from 'react';
import { Card, Text } from '../ui';
import './RecommendedForYou.scss';

const RecommendedForYou = memo(({ recommendations, userPreferences }) => {
  return (
    <div className="recommended-for-you">
      <div className="section-header">
        <Text variant="h2" as="h2">Recommended for You</Text>
        <Text variant="caption" color="muted">
          Based on your preferences: {userPreferences.join(', ')}
        </Text>
      </div>
      
      <div className="recommended-for-you__grid">
        {recommendations.map((item) => (
          <Card key={item.id} className="recommendation-card">
            <div 
              className="recommendation-card__image"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className="recommendation-card__content">
              <Text variant="caption" color="primary" weight="medium">{item.category}</Text>
              <Text variant="h4" as="h3">{item.title}</Text>
              <Text variant="caption" color="muted">{item.description}</Text>
              <div className="recommendation-card__footer">
                <Text variant="caption" color="primary" weight="medium">
                  {item.matchScore}% match
                </Text>
                {item.price && (
                  <Text variant="caption" weight="medium">{item.price}</Text>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
});

RecommendedForYou.displayName = 'RecommendedForYou';

export default RecommendedForYou;
