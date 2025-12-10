export const recommendedResort = {
  name: 'Courchevel 1850',
  region: 'French Alps',
  difficulty: 'All Levels',
  vibe: 'Luxury & Family',
  description: 'World-class skiing with 150km of pristine slopes, Michelin-starred dining, and breathtaking Alpine views. Perfect for families and luxury seekers alike.',
  image: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=1400&q=80'
};

export const tripComponents = [
  {
    id: 'resort',
    type: 'Resort',
    selectorType: 'default',
    icon: '🏔️',
    data: {
      selectedId: 1,
      options: [
        { id: 1, icon: '🏔️', name: 'Courchevel 1850', description: 'French Alps • 150km of slopes', price: 'Included' },
        { id: 2, icon: '⛰️', name: 'Val Thorens', description: 'French Alps • Highest resort in Europe', price: '+€0' },
        { id: 3, icon: '🗻', name: 'Zermatt', description: 'Swiss Alps • Views of Matterhorn', price: '+€150' },
        { id: 4, icon: '🎿', name: 'St. Anton', description: 'Austrian Alps • Expert terrain', price: '+€80' }
      ]
    }
  },
  {
    id: 'hotel',
    type: 'Hotel',
    selectorType: 'default',
    icon: '🏨',
    data: {
      selectedId: 1,
      options: [
        { id: 1, icon: '👑', name: 'Le K2 Palace', description: '5-star • Ski-in/Ski-out', price: '€2,400' },
        { id: 2, icon: '🌟', name: 'Hotel Barrière Les Neiges', description: '5-star • Spa & Pool', price: '€2,100' },
        { id: 3, icon: '🏡', name: 'La Sivolière', description: '4-star • Boutique hotel', price: '€1,600' },
        { id: 4, icon: '🍽️', name: 'Hotel Le Chabichou', description: '4-star • 2 Michelin star restaurant', price: '€1,800' }
      ]
    }
  },
  {
    id: 'room',
    type: 'Room',
    selectorType: 'room',
    icon: '🛏️',
    aiSuggestion: 'AI recommends Family Suite for €50/night extra — perfect for your group!',
    data: {
      guests: { adults: 2, children: 0 },
      selectedRoom: { id: 1, icon: '🛏️', name: 'Deluxe Suite', description: '55m² • Mountain View', price: 'Included', amenities: ['🛏️ King Bed', '🏔️ Mountain View', '📶 Free WiFi'] },
      rooms: [
        { id: 1, icon: '🛏️', name: 'Deluxe Suite', description: '55m² • Mountain View', price: 'Included', amenities: ['🛏️ King Bed', '🏔️ Mountain View', '📶 Free WiFi'] },
        { id: 2, icon: '🛋️', name: 'Junior Suite', description: '45m² • Valley View', price: '+€300', amenities: ['🛏️ Queen Bed', '🏞️ Valley View', '📶 Free WiFi'] },
        { id: 3, icon: '👨‍👩‍👧‍👦', name: 'Family Suite', description: '75m² • 2 Bedrooms', price: '+€400', amenities: ['🛏️ 2 Beds', '🏔️ Mountain View', '🧒 Kids Area'] },
        { id: 4, icon: '🏰', name: 'Penthouse', description: '120m² • Panoramic View', price: '+€1,200', amenities: ['🛏️ King Bed', '🌄 Panoramic View', '🛁 Jacuzzi', '🍾 Minibar'] }
      ]
    }
  },
  {
    id: 'skipass',
    type: 'Skipass',
    selectorType: 'skipass',
    icon: '🎿',
    aiSuggestion: 'AI suggests group discount available — save €25 per person!',
    data: {
      selectedZone: { id: 1, icon: '🏔️', name: 'Three Valleys', description: '600km of slopes • Largest ski area', pricePerDay: 65 },
      selectedDays: 6,
      selectedLevel: 'all',
      zones: [
        { id: 1, icon: '🏔️', name: 'Three Valleys', description: '600km of slopes • Largest ski area', pricePerDay: 65 },
        { id: 2, icon: '⛷️', name: 'Courchevel Only', description: '150km of slopes • Local area', pricePerDay: 48 },
        { id: 3, icon: '🎿', name: 'Méribel Valley', description: '200km of slopes • Family friendly', pricePerDay: 52 }
      ],
      dayOptions: [1, 2, 3, 4, 5, 6, 7, 14],
      levels: [
        { id: 'beginner', icon: '🟢', name: 'Beginner', discount: '-20%' },
        { id: 'all', icon: '🔵', name: 'All Levels', discount: null },
        { id: 'expert', icon: '⚫', name: 'Expert', discount: '+20%' }
      ]
    }
  },
  {
    id: 'transfer',
    type: 'Transfer',
    selectorType: 'default',
    icon: '🚐',
    data: {
      selectedId: 1,
      options: [
        { id: 1, icon: '🚙', name: 'Private SUV Transfer', description: 'Geneva Airport → Resort • 2.5h', price: '€320' },
        { id: 2, icon: '🚐', name: 'Shared Shuttle', description: 'Geneva Airport → Resort • 3.5h', price: '€85' },
        { id: 3, icon: '🚁', name: 'Private Helicopter', description: 'Geneva Airport → Resort • 30min', price: '€2,800' },
        { id: 4, icon: '🚂', name: 'Train + Taxi', description: 'Scenic route • 4h', price: '€120' }
      ]
    }
  },
  {
    id: 'flight',
    type: 'Flight',
    selectorType: 'flight',
    icon: '✈️',
    data: {
      outbound: { id: 1, icon: '🛫', route: 'London → Geneva', date: 'Dec 15', airline: 'British Airways', time: '08:30', duration: '1h 45m', price: '€280' },
      return: { id: 5, icon: '🛬', route: 'Geneva → London', date: 'Dec 22', airline: 'British Airways', time: '18:00', duration: '1h 50m', price: '€280' },
      outboundOptions: [
        { id: 1, icon: '🛫', route: 'London → Geneva', date: 'Dec 15', airline: 'British Airways', time: '08:30', duration: '1h 45m', price: '€280' },
        { id: 2, icon: '✈️', route: 'London → Geneva', date: 'Dec 15', airline: 'EasyJet', time: '06:15', duration: '1h 50m', price: '€120' },
        { id: 3, icon: '🇫🇷', route: 'London → Lyon', date: 'Dec 15', airline: 'Air France', time: '10:00', duration: '1h 35m', price: '€180' },
        { id: 4, icon: '🛫', route: 'London → Chambéry', date: 'Dec 15', airline: 'BA', time: '09:15', duration: '1h 40m', price: '€220' }
      ],
      returnOptions: [
        { id: 5, icon: '🛬', route: 'Geneva → London', date: 'Dec 22', airline: 'British Airways', time: '18:00', duration: '1h 50m', price: '€280' },
        { id: 6, icon: '✈️', route: 'Geneva → London', date: 'Dec 22', airline: 'EasyJet', time: '20:30', duration: '1h 55m', price: '€95' },
        { id: 7, icon: '🇫🇷', route: 'Lyon → London', date: 'Dec 22', airline: 'Air France', time: '16:45', duration: '1h 40m', price: '€160' },
        { id: 8, icon: '🛬', route: 'Chambéry → London', date: 'Dec 22', airline: 'BA', time: '17:30', duration: '1h 45m', price: '€200' }
      ]
    }
  },
  {
    id: 'insurance',
    type: 'Insurance',
    selectorType: 'default',
    icon: '🛡️',
    aiSuggestion: 'AI recommends Full Coverage for off-piste skiing — only €55 more',
    data: {
      selectedId: 1,
      options: [
        { id: 1, icon: '🛡️', name: 'Premium Ski Insurance', description: 'Medical + Equipment + Cancellation', price: '€95' },
        { id: 2, icon: '💊', name: 'Basic Ski Insurance', description: 'Medical only', price: '€45' },
        { id: 3, icon: '🚁', name: 'Full Coverage', description: 'All risks + Helicopter rescue', price: '€150' },
        { id: 4, icon: '❌', name: 'No Insurance', description: 'Not recommended', price: '€0' }
      ]
    }
  },
  {
    id: 'addons',
    type: 'Add-ons',
    selectorType: 'activities',
    icon: '✨',
    data: {
      activities: [
        { id: 1, icon: '🎿', name: 'Ski Lessons (3 days)', description: 'Group lessons • ESF certified', price: 210, selected: true },
        { id: 2, icon: '👨‍🏫', name: 'Private Instructor', description: '3 days • Personal coaching', price: 850, selected: false },
        { id: 3, icon: '🎿', name: 'Equipment Rental', description: 'Premium skis + boots + poles', price: 180, selected: false },
        { id: 4, icon: '💆', name: 'Spa Package', description: '3 sessions • Massage & sauna', price: 350, selected: true },
        { id: 5, icon: '🎉', name: 'Nightlife Package', description: 'VIP access to top clubs & bars', price: 120, selected: false },
        { id: 6, icon: '🍷', name: 'Wine Tasting Tour', description: 'Alpine vineyard experience', price: 85, selected: false },
        { id: 7, icon: '🏂', name: 'Snowboard Lessons', description: '2 days • Beginner friendly', price: 160, selected: false },
        { id: 8, icon: '🚡', name: 'Scenic Cable Car Tour', description: 'Panoramic mountain views', price: 45, selected: false }
      ]
    }
  }
];

export const userPreferences = ['Party vibe', 'Medium budget', 'Group of friends'];

export const recommendations = [
  {
    id: 1,
    category: 'Resort',
    title: 'Val Thorens',
    description: 'Highest resort in Europe with legendary après-ski scene',
    image: 'https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?w=800&q=80',
    matchScore: 95,
    price: 'from €1,200'
  },
  {
    id: 2,
    category: 'Experience',
    title: 'Night Skiing Party',
    description: 'Ski under the stars followed by DJ sets on the slopes',
    image: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800&q=80',
    matchScore: 92,
    price: '€85/person'
  },
  {
    id: 3,
    category: 'Accommodation',
    title: 'Chalet Group Stay',
    description: 'Private chalet for 8-12 people with hot tub and sauna',
    image: 'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?w=800&q=80',
    matchScore: 88,
    price: '€450/night'
  },
  {
    id: 4,
    category: 'Add-on',
    title: 'Après-Ski Tour',
    description: 'Guided tour of the best bars and clubs in the resort',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80',
    matchScore: 90,
    price: '€65/person'
  },
  {
    id: 5,
    category: 'Package',
    title: 'Group Ski Pass Deal',
    description: 'Special rates for groups of 6+ with priority lift access',
    image: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&q=80',
    matchScore: 85,
    price: '€320/person'
  },
  {
    id: 6,
    category: 'Transport',
    title: 'Party Bus Transfer',
    description: 'Fun group transfer with music and refreshments included',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80',
    matchScore: 87,
    price: '€45/person'
  }
];
