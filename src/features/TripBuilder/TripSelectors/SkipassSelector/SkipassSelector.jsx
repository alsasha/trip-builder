import { useState, useEffect } from 'react';
import { Option, Text } from '../../../../components/ui';
import './SkipassSelector.scss';

const SkipassSelector = ({ data, onUpdate }) => {
  const [zone, setZone] = useState(data.selectedZone || data.zones[0]);
  const [days, setDays] = useState(data.selectedDays || 6);
  const [level, setLevel] = useState(data.selectedLevel || 'all');

  useEffect(() => {
    onUpdate({ ...data, selectedZone: zone, selectedDays: days, selectedLevel: level });
  }, []);

  const calculatePrice = (z, d, l) => {
    const levelMultiplier = l === 'beginner' ? 0.8 : l === 'expert' ? 1.2 : 1;
    return Math.round(z.pricePerDay * d * levelMultiplier);
  };

  const handleZoneChange = (newZone) => {
    setZone(newZone);
    onUpdate({ ...data, selectedZone: newZone, selectedDays: days, selectedLevel: level });
  };

  const handleDaysChange = (newDays) => {
    setDays(newDays);
    onUpdate({ ...data, selectedZone: zone, selectedDays: newDays, selectedLevel: level });
  };

  const handleLevelChange = (newLevel) => {
    setLevel(newLevel);
    onUpdate({ ...data, selectedZone: zone, selectedDays: days, selectedLevel: newLevel });
  };

  return (
    <div className="skipass-selector">
      <div className="skipass-selector__section">
        <Text variant="label" className="skipass-selector__label">🗺️ Select Zone</Text>
        <div className="skipass-selector__zones">
          {data.zones.map(z => (
            <Option
              key={z.id}
              selected={zone.id === z.id}
              onClick={() => handleZoneChange(z)}
            >
              <div className="option__info">
                <Text variant="p" weight="medium" className="option__name">
                  <span className="option__icon">{z.icon}</span>
                  {z.name}
                </Text>
                <Text variant="caption" color="muted" className="option__description">{z.description}</Text>
              </div>
              <Text variant="p" weight="medium" className="option__price">€{z.pricePerDay}/day</Text>
            </Option>
          ))}
        </div>
      </div>

      <div className="skipass-selector__section">
        <Text variant="label" className="skipass-selector__label">📅 Number of Days</Text>
        <div className="skipass-selector__days">
          {data.dayOptions.map(d => (
            <button
              key={d}
              className={`skipass-selector__day ${days === d ? 'skipass-selector__day--active' : ''}`}
              onClick={() => handleDaysChange(d)}
            >
              {d} {d === 1 ? 'day' : 'days'}
            </button>
          ))}
        </div>
      </div>

      <div className="skipass-selector__section">
        <Text variant="label" className="skipass-selector__label">⛷️ Skill Level</Text>
        <div className="skipass-selector__levels">
          {data.levels.map(l => (
            <button
              key={l.id}
              className={`skipass-selector__level ${level === l.id ? 'skipass-selector__level--active' : ''}`}
              onClick={() => handleLevelChange(l.id)}
            >
              <span className="skipass-selector__level-icon">{l.icon}</span>
              <Text variant="caption" weight="medium">{l.name}</Text>
              {l.discount && <Text variant="caption" color="primary" className="skipass-selector__level-discount">{l.discount}</Text>}
            </button>
          ))}
        </div>
      </div>

      <div className="skipass-selector__summary">
        <Text variant="caption" color="muted" className="skipass-selector__summary-details">
          {zone.name} • {days} days • {data.levels.find(l => l.id === level)?.name}
        </Text>
        <div className="skipass-selector__summary-price">
          <Text variant="p" weight="medium">Total:</Text>
          <Text variant="price" color="primary">€{calculatePrice(zone, days, level)}</Text>
        </div>
      </div>
    </div>
  );
};

export default SkipassSelector;
