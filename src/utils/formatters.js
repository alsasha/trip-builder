// Display formatters for trip components
// These derive value, meta, price from raw selector data

// Parse price string to number (e.g., "€320" -> 320, "+€50" -> 50, "Included" -> 0)
export const parsePrice = (priceStr) => {
  if (!priceStr || priceStr === 'Included') return 0;
  const match = priceStr.match(/[+-]?\d+/);
  return match ? parseInt(match[0]) : 0;
};

export const formatters = {
  flight: (data) => {
    const { outbound, return: returnFlight } = data;
    const totalPrice = (outbound ? parseInt(outbound.price.replace('€', '')) : 0) + 
                      (returnFlight ? parseInt(returnFlight.price.replace('€', '')) : 0);
    
    return {
      value: outbound && returnFlight 
        ? `${outbound.route.split(' → ')[0]} ↔ ${outbound.route.split(' → ')[1]}`
        : outbound ? outbound.route : 'No flights selected',
      meta: outbound && returnFlight 
        ? `${outbound.date} - ${returnFlight.date} • ${outbound.airline}`
        : 'Select flights',
      price: `€${totalPrice}`
    };
  },

  skipass: (data) => {
    const { selectedZone, selectedDays, selectedLevel, zones, levels } = data;
    const zone = selectedZone || zones[0];
    const days = selectedDays || 6;
    const level = selectedLevel || 'all';
    
    const levelData = levels.find(l => l.id === level);
    const levelMultiplier = level === 'beginner' ? 0.8 : level === 'expert' ? 1.2 : 1;
    const totalPrice = Math.round(zone.pricePerDay * days * levelMultiplier);
    
    return {
      value: `${days}-Day ${zone.name} Pass`,
      meta: `${zone.description} • ${levelData?.name}`,
      price: `€${totalPrice}`
    };
  },

  room: (data) => {
    const { selectedRoom, guests, rooms } = data;
    const room = selectedRoom || rooms[0];
    const guestData = guests || { adults: 2, children: 0 };
    
    const guestText = `${guestData.adults} ${guestData.adults === 1 ? 'Adult' : 'Adults'}${guestData.children > 0 ? ` + ${guestData.children} ${guestData.children === 1 ? 'Child' : 'Children'}` : ''}`;
    
    return {
      value: room.name,
      meta: `${guestText} • ${room.description}`,
      price: room.price
    };
  },

  activities: (data) => {
    const { activities } = data;
    const selected = activities.filter(a => a.selected);
    const totalPrice = selected.reduce((sum, a) => sum + a.price, 0);
    const names = selected.map(a => a.name).slice(0, 2).join(', ');
    const moreCount = selected.length > 2 ? ` +${selected.length - 2} more` : '';
    
    return {
      value: `${selected.length} ${selected.length === 1 ? 'activity' : 'activities'} selected`,
      meta: names + moreCount || 'No activities selected',
      price: `€${totalPrice}`
    };
  },

  default: (data) => {
    const { options, selectedId } = data;
    const selected = options.find(o => o.id === selectedId) || options[0];
    
    return {
      value: selected.name,
      meta: selected.description,
      price: selected.price
    };
  }
};

export const getDisplayData = (item) => {
  const formatter = formatters[item.selectorType] || formatters.default;
  const data = item.data || { options: item.options, selectedId: item.selectedId };
  return formatter(data);
};

// Calculate price breakdown and total from trip components
export const calculatePrices = (tripComponents) => {
  const breakdown = tripComponents.map(item => {
    const { price } = getDisplayData(item);
    return {
      label: item.type,
      amount: price,
      numericAmount: parsePrice(price)
    };
  });

  const total = breakdown.reduce((sum, item) => sum + item.numericAmount, 0);

  return {
    breakdown: breakdown.map(({ label, amount }) => ({ label, amount })),
    total: `€${total.toLocaleString()}`
  };
};
