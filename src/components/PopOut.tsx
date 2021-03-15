import ReactDOM from 'react-dom';
import { useCallback, useEffect, useRef, useState } from 'react';
import copyStyles from 'utils/copystyles';

interface PopOutProps {
  onClose: () => void;
  isOpen: boolean;
}

function PopOut({
  children,
  onClose,
  isOpen,
}: React.PropsWithChildren<PopOutProps>) {
  const containerEl = document.createElement('div');
  const externalWindow = useRef<Window | null>();

  useEffect(() => {
    if (isOpen) {
      externalWindow.current = window.open(
        '',
        '',
        'width=600,height=400,left=200,top=200',
      );

      if (externalWindow.current?.document)
        copyStyles(document, externalWindow.current?.document);

      externalWindow.current?.document.body.append(containerEl);

      externalWindow.current?.addEventListener('beforeunload', () => onClose());
    }

    return () => {
      externalWindow.current?.close();
    };
  }, [containerEl, isOpen, onClose]);

  return isOpen ? ReactDOM.createPortal(children, containerEl) : null;
}

export function usePopOut(defaultIsOpen?: boolean) {
  const [isOpen, setIsOpen] = useState(defaultIsOpen || false);

  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);
  const onToggle = useCallback(() => setIsOpen((prevOpen) => !prevOpen), []);

  return { isOpen, onOpen, onClose, onToggle };
}

export default PopOut;
