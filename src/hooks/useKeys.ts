import { useCallback, useEffect, useState } from 'react';

function useKeys(keys: string[]) {
  const [isPressed, setIsPressed] = useState(false);
  const [lastKeyPressed, setLastKeyPressed] = useState('');

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      keys.forEach((key) => {
        if (e.key === key && !isPressed) {
          setIsPressed(true);
          setLastKeyPressed(key);
        }
      });
    },
    [isPressed, keys],
  );

  const handleKeyUp = useCallback(
    (e: KeyboardEvent) => {
      keys.forEach((key) => {
        if (e.key === key) {
          setIsPressed(false);
        }
      });
    },
    [keys],
  );

  const clearKey = useCallback(() => {
    setLastKeyPressed('');
  }, []);

  useEffect(() => {
    document.addEventListener('keypress', handleKeyDown);
    // document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keypress', handleKeyDown);
      // document.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return { lastKeyPressed, clearKey };
}

export default useKeys;
