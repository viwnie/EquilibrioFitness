import React, { useEffect } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background: #fff;
  color: #111;
  line-height: 1.6;
  padding: 2rem;
  border-radius: 1rem;
  max-width: 90vw;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 2px 16px rgba(0,0,0,0.2);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #ec240f;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10000;
`;

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, title, children }) => {
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow || '';
    };
  }, [open]);

  if (!open) return null;
  return (
    <Overlay role="dialog" aria-modal="true">
      <ModalContent>
        <CloseButton onClick={onClose} aria-label="Fechar">×</CloseButton>
        {title && <h2 style={{marginTop:0}}>{title}</h2>}
        {children}
      </ModalContent>
    </Overlay>
  );
};

export default Modal;