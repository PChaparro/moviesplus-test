import { Modal as ResponsiveModal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

interface ModalProps {
  children: React.ReactElement;
  isOpen: boolean;
  onCloseCallback: () => void;
}

export const Modal = ({ children, isOpen, onCloseCallback }: ModalProps) => {
  return (
    <ResponsiveModal
      open={isOpen}
      onClose={onCloseCallback}
      classNames={{ modal: '!max-w-4xl rounded-md' }}
      center
    >
      {children}
    </ResponsiveModal>
  );
};
