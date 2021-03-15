import ReactDOM from 'react-dom';
import { useCallback, useEffect, useRef, useState } from 'react';

import copyStyles from 'utils/copystyles';

interface PopOutProps {
  onClose: () => void;
  isOpen: boolean;
  width?: number;
  height?: number;
  top?: number;
  left?: number;
}

function PopOut({
  children,
  onClose,
  isOpen,
  width = 600,
  height = 400,
  left = 0,
  top = 0,
}: React.PropsWithChildren<PopOutProps>) {
  const containerEl = document.createElement('div');
  const externalWindow = useRef<Window | null>();

  useEffect(() => {
    if (isOpen) {
      externalWindow.current = window.open(
        '',
        '',
        `width=${width},height=${height},left=${left},top=${top}`,
      );

      if (externalWindow.current?.document)
        copyStyles(document, externalWindow.current?.document);

      externalWindow.current?.document.body.append(containerEl);

      externalWindow.current?.addEventListener('beforeunload', () => onClose());
    }

    return () => {
      externalWindow.current?.close();
    };
  }, [containerEl, height, isOpen, left, onClose, top, width]);

  return isOpen ? ReactDOM.createPortal(children, containerEl) : null;
}

export function usePopOut(defaultIsOpen?: boolean) {
  const [isOpen, setIsOpen] = useState(defaultIsOpen || false);

  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);

  return { isOpen, onOpen, onClose };
}

export default PopOut;
