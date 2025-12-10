import { useState, useRef, useMemo, useCallback } from 'react';

import { Modal, Text } from '../../components/ui';
import RecommendedResort from '../../components/RecommendedResort';
import TripCard from '../../components/TripCard';
import { TotalPrice, MobileTotalPrice } from '../../components/TotalPrice';
import RecommendedForYou from '../../components/RecommendedForYou';
import { TripSelectorContent } from './TripSelectorContent';
import { calculatePrices } from '../../utils/formatters';

import { 
  recommendedResort, 
  tripComponents as initialTripComponents,
  userPreferences,
  recommendations
} from '../../data/mockData';

import './TripBuilder.scss';

const CONFIRM_TEXT = {
  flight: 'Confirm Flights',
  skipass: 'Confirm Skipass',
  room: 'Confirm Room',
  activities: 'Save Activities',
  default: 'Apply Changes'
};

const TripBuilder = () => {
  const [tripComponents, setTripComponents] = useState(initialTripComponents);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const updateDataRef = useRef(null);

  const { breakdown, total } = useMemo(() => calculatePrices(tripComponents), [tripComponents]);

  const handleChangeClick = useCallback((item) => {
    setSelectedComponent(item);
    updateDataRef.current = { id: item.id, data: null };
    setModalOpen(true);
  }, []);

  const handleSelectorUpdate = useCallback((newData) => {
    if (updateDataRef.current) {
      updateDataRef.current.data = newData;
    }
  }, []);

  const handleConfirm = useCallback(() => {
    const { id, data } = updateDataRef.current || {};
    if (id && data) {
      setTripComponents(prev => 
        prev.map(item => 
          item.id === id ? { ...item, data } : item
        )
      );
    }
    setModalOpen(false);
    setSelectedComponent(null);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
    setSelectedComponent(null);
  }, []);

  return (
    <>
      <main className="main-content">
        <RecommendedResort resort={recommendedResort} />
        
        <div className="trip-layout">
          <div className="trip-components">
            <div className="section-header">
              <Text variant="h2" as="h2">Your Trip</Text>
              <Text variant="caption" color="muted">Customize each component of your ski trip</Text>
            </div>
            
            {tripComponents.map(item => (
              <TripCard 
                key={item.id} 
                item={item} 
                onChangeClick={handleChangeClick}
              />
            ))}
          </div>
          
          <div className="sidebar">
            <TotalPrice breakdown={breakdown} total={total} />
          </div>
        </div>
        
        <RecommendedForYou 
          recommendations={recommendations} 
          userPreferences={userPreferences} 
        />
      </main>
      
      <MobileTotalPrice total={total} />
      
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        title={selectedComponent ? `Change ${selectedComponent.type}` : ''}
        onConfirm={handleConfirm}
        confirmText={CONFIRM_TEXT[selectedComponent?.selectorType] || CONFIRM_TEXT.default}
      >
        <TripSelectorContent 
          selectedComponent={selectedComponent} 
          onUpdate={handleSelectorUpdate} 
        />
      </Modal>
    </>
  );
};

export default TripBuilder;
