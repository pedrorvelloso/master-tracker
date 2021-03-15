/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface HintContextData<H, I, L> {
  hints: H;
  updateHints: (hints: H) => void;
  modal: {
    open: (origin: string) => void;
    close: () => void;
    isOpen: boolean;
  };
  defaultHints: H;
  items: I[];
  locations: L[];
}

const HintsContext = React.createContext<HintContextData<any, any, any>>(
  {} as HintContextData<any, any, any>,
);

type HC = HintContextData<any, any, any>;

interface HintsProviderProps {
  items: HC['items'];
  locations: HC['locations'];
  defaultHints: HC['defaultHints'];
}

export function HintsProvider({
  children,
  items,
  locations,
  defaultHints,
}: React.PropsWithChildren<HintsProviderProps>) {
  const [hints, setHints] = React.useState(defaultHints);
  const [modalOpen, setModalOpen] = React.useState({
    isOpen: false,
    origin: '',
  });

  const updateHints = React.useCallback((updatedHints) => {
    setHints((prev: HC['defaultHints']) => ({ ...prev, ...updatedHints }));
  }, []);

  const modal = {
    open(origin: string) {
      setModalOpen({ origin, isOpen: true });
    },
    close() {
      setModalOpen({ origin: '', isOpen: false });
    },
    isOpen: modalOpen.isOpen,
  };

  return (
    <HintsContext.Provider
      value={{ hints, updateHints, items, locations, defaultHints, modal }}
    >
      {children}
    </HintsContext.Provider>
  );
}

export function useHints<HintsType, ItemType, LocationType>(
  defaultHints?: HintsType,
) {
  const context = React.useContext<
    HintContextData<HintsType, ItemType, LocationType>
  >(HintsContext);

  if (!context) throw new Error('useHints should be used within HintsProvider');

  const { updateHints } = context;

  React.useEffect(() => {
    if (defaultHints) updateHints(defaultHints);
  }, [defaultHints, updateHints]);

  return context;
}
