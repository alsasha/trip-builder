import { useState, useEffect } from 'react';
import { Button, Option, Text } from '../../../../components/ui';
import './RoomSelector.scss';

const RoomSelector = ({ data, onUpdate }) => {
  const [selectedRoom, setSelectedRoom] = useState(data.selectedRoom || data.rooms[0]);
  const [guests, setGuests] = useState(data.guests || { adults: 2, children: 0 });

  useEffect(() => {
    onUpdate({ ...data, selectedRoom, guests });
  }, []);

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    onUpdate({ ...data, selectedRoom: room, guests });
  };

  const handleGuestsChange = (type, delta) => {
    const newGuests = {
      ...guests,
      [type]: Math.max(0, Math.min(type === 'adults' ? 6 : 4, guests[type] + delta))
    };
    if (type === 'adults' && newGuests.adults < 1) newGuests.adults = 1;
    setGuests(newGuests);
    onUpdate({ ...data, selectedRoom, guests: newGuests });
  };

  return (
    <div className="room-selector">
      <div className="room-selector__section">
        <Text variant="label" className="room-selector__label">👥 Guests</Text>
        <div className="room-selector__guests">
          <div className="room-selector__guest-row">
            <div className="room-selector__guest-info">
              <Text variant="p" weight="medium">Adults</Text>
              <Text variant="caption" color="muted">Age 18+</Text>
            </div>
            <div className="room-selector__guest-controls">
              <Button 
                color="default" 
                size="icon"
                onClick={() => handleGuestsChange('adults', -1)}
                disabled={guests.adults <= 1}
              >
                −
              </Button>
              <Text variant="p" weight="semibold" className="room-selector__guest-count">{guests.adults}</Text>
              <Button 
                color="default" 
                size="icon"
                onClick={() => handleGuestsChange('adults', 1)}
                disabled={guests.adults >= 6}
              >
                +
              </Button>
            </div>
          </div>
          <div className="room-selector__guest-row">
            <div className="room-selector__guest-info">
              <Text variant="p" weight="medium">Children</Text>
              <Text variant="caption" color="muted">Age 0-17</Text>
            </div>
            <div className="room-selector__guest-controls">
              <Button 
                color="default" 
                size="icon"
                onClick={() => handleGuestsChange('children', -1)}
                disabled={guests.children <= 0}
              >
                −
              </Button>
              <Text variant="p" weight="semibold" className="room-selector__guest-count">{guests.children}</Text>
              <Button 
                color="default" 
                size="icon"
                onClick={() => handleGuestsChange('children', 1)}
                disabled={guests.children >= 4}
              >
                +
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="room-selector__section">
        <Text variant="label" className="room-selector__label">🛏️ Room Type</Text>
        <div className="room-selector__rooms">
          {data.rooms.map(room => (
            <Option
              key={room.id}
              selected={selectedRoom.id === room.id}
              onClick={() => handleRoomSelect(room)}
            >
              <div className="option__info">
                <Text variant="p" weight="medium" className="option__name">
                  <span className="option__icon">{room.icon}</span>
                  {room.name}
                </Text>
                <Text variant="caption" color="muted" className="option__description">{room.description}</Text>
                <div className="room-selector__amenities">
                  {room.amenities.map((amenity, i) => (
                    <Text key={i} variant="caption" color="muted" className="room-selector__amenity">{amenity}</Text>
                  ))}
                </div>
              </div>
              <div className="room-selector__room-price">
                <Text variant="p" weight="semibold">{room.price}</Text>
                <Text variant="caption" color="muted">per night</Text>
              </div>
            </Option>
          ))}
        </div>
      </div>

      <div className="room-selector__summary">
        <div className="room-selector__summary-info">
          <Text variant="p" weight="medium">{selectedRoom.name}</Text>
          <Text variant="caption" color="muted">
            {guests.adults} {guests.adults === 1 ? 'adult' : 'adults'}
            {guests.children > 0 && `, ${guests.children} ${guests.children === 1 ? 'child' : 'children'}`}
          </Text>
        </div>
        <Text variant="price" color="primary">{selectedRoom.price}/night</Text>
      </div>
    </div>
  );
};

export default RoomSelector;
