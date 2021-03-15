import { Box, VStack } from '@chakra-ui/react';

import { useHints } from 'modules/HintsProvider';

import HeaderBar from 'components/HeaderBar';

import WayOfTheHero from './hints/WoTH';
import BarrenLocations from './hints/Barren';
import ItemsLocations from './hints/Items';
import DeadLocations from './hints/Dead';

export const defaultHints: MM.Hints = {
  woth: {
    locations: [],
  },
};

export function useMajorasHints() {
  const majoras = useHints<MM.Hints, MM.Item, MM.Location>();

  return majoras;
}

function MajorasMask() {
  return (
    <>
      <HeaderBar title="Majora's mask" />
      <Box width="100%">
        <VStack align="initial" spacing="4">
          <WayOfTheHero />
          <BarrenLocations />
          <ItemsLocations />
          <DeadLocations />
        </VStack>
      </Box>
    </>
  );
}

export default MajorasMask;
