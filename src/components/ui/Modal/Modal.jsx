import Button from '../Button/Button';
import Text from '../Text/Text';
import './Modal.scss';

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children,
  onConfirm,
  confirmText = 'Confirm'
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <div className="modal__header">
          <Text variant="h3" as="h2">{title}</Text>
          <button className="modal__close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal__content">
          {children}
        </div>
        <div className="modal__footer">
          <Button color="default" size="small" onClick={onClose}>
            Cancel
          </Button>
          <Button color="primary" size="small" onClick={onConfirm}>
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
