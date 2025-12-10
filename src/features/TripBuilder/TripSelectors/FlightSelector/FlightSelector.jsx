import { useState, useEffect } from 'react';
import { Button, Option, Text } from '../../../../components/ui';
import './FlightSelector.scss';

const FlightSelector = ({ data, onUpdate }) => {
  const [outbound, setOutbound] = useState(data.outbound);
  const [returnFlight, setReturnFlight] = useState(data.return);
  const [activeTab, setActiveTab] = useState('outbound');

  useEffect(() => {
    onUpdate({ ...data, outbound, return: returnFlight });
  }, []);

  const handleFlightSelect = (flight) => {
    if (activeTab === 'outbound') {
      setOutbound(flight);
      onUpdate({ ...data, outbound: flight, return: returnFlight });
    } else {
      setReturnFlight(flight);
      onUpdate({ ...data, outbound, return: flight });
    }
  };

  const handleRemoveFlight = (type) => {
    if (type === 'outbound') {
      setOutbound(null);
      onUpdate({ ...data, outbound: null, return: returnFlight });
    } else {
      setReturnFlight(null);
      onUpdate({ ...data, outbound, return: null });
    }
  };

  const currentFlight = activeTab === 'outbound' ? outbound : returnFlight;
  const flights = activeTab === 'outbound' ? data.outboundOptions : data.returnOptions;

  return (
    <div className="flight-selector">
      <div className="flight-selector__tabs">
        <button 
          className={`flight-selector__tab ${activeTab === 'outbound' ? 'flight-selector__tab--active' : ''}`}
          onClick={() => setActiveTab('outbound')}
        >
          ✈️ Outbound
          {outbound && <span className="flight-selector__tab-check">✓</span>}
        </button>
        <button 
          className={`flight-selector__tab ${activeTab === 'return' ? 'flight-selector__tab--active' : ''}`}
          onClick={() => setActiveTab('return')}
        >
          🛬 Return
          {returnFlight && <span className="flight-selector__tab-check">✓</span>}
        </button>
      </div>

      {currentFlight && (
        <div className="flight-selector__current">
          <div className="flight-selector__current-info">
            <Text variant="p" weight="semibold">{currentFlight.route}</Text>
            <Text variant="caption" color="muted">
              {currentFlight.date} • {currentFlight.airline} • {currentFlight.time}
            </Text>
          </div>
          <Button 
            color="default" 
            size="small"
            onClick={() => handleRemoveFlight(activeTab)}
          >
            Remove
          </Button>
        </div>
      )}

      <div className="flight-selector__options">
        <Text variant="caption" color="muted" className="flight-selector__label">
          {currentFlight ? 'Change flight' : 'Select flight'}
        </Text>
        {flights.map(flight => (
          <Option
            key={flight.id}
            selected={currentFlight?.id === flight.id}
            onClick={() => handleFlightSelect(flight)}
          >
            <div className="option__info">
              <Text variant="p" weight="medium" className="option__name">
                <span className="option__icon">{flight.icon}</span>
                {flight.route}
              </Text>
              <Text variant="caption" color="muted" className="option__description">
                {flight.date} • {flight.airline} • {flight.time} • {flight.duration}
              </Text>
            </div>
            <Text variant="p" weight="medium" className="option__price">{flight.price}</Text>
          </Option>
        ))}
      </div>

      <div className="flight-selector__summary">
        <div className="flight-selector__summary-row">
          <Text variant="caption">Outbound:</Text>
          <Text variant="caption" weight="medium">{outbound ? outbound.price : 'Not selected'}</Text>
        </div>
        <div className="flight-selector__summary-row">
          <Text variant="caption">Return:</Text>
          <Text variant="caption" weight="medium">{returnFlight ? returnFlight.price : 'Not selected'}</Text>
        </div>
      </div>
    </div>
  );
};

export default FlightSelector;
