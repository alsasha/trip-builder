import {
  FlightSelector,
  SkipassSelector,
  RoomSelector,
  ActivitiesSelector,
  DefaultSelector
} from '../TripSelectors';

const SELECTOR_MAP = {
  flight: FlightSelector,
  skipass: SkipassSelector,
  room: RoomSelector,
  activities: ActivitiesSelector,
  default: DefaultSelector
};

const TripSelectorContent = ({ selectedComponent, onUpdate }) => {
  if (!selectedComponent) return null;

  const selectorType = selectedComponent.selectorType || 'default';
  const SelectorComponent = SELECTOR_MAP[selectorType] || DefaultSelector;

  return (
    <SelectorComponent 
      data={selectedComponent.data} 
      onUpdate={onUpdate}
    />
  );
};

export default TripSelectorContent;
