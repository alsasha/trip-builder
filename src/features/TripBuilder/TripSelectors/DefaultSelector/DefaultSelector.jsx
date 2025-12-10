import { useState, useEffect } from 'react';
import { Option, Text } from '../../../../components/ui';
import './DefaultSelector.scss';

const DefaultSelector = ({ data, onUpdate }) => {
  const [selectedId, setSelectedId] = useState(data.selectedId || data.options[0].id);

  useEffect(() => {
    onUpdate({ ...data, selectedId });
  }, []);

  const handleOptionSelect = (id) => {
    setSelectedId(id);
    onUpdate({ ...data, selectedId: id });
  };

  return (
    <div className="default-selector">
      {data.options.map(option => (
        <Option
          key={option.id}
          selected={selectedId === option.id}
          onClick={() => handleOptionSelect(option.id)}
        >
          <div className="option__info">
            <Text variant="p" weight="medium" className="option__name">
              {option.icon && <span className="option__icon">{option.icon}</span>}
              {option.name}
            </Text>
            <Text variant="caption" color="muted" className="option__description">{option.description}</Text>
          </div>
          <Text variant="p" weight="medium" className="option__price">{option.price}</Text>
        </Option>
      ))}
    </div>
  );
};

export default DefaultSelector;
