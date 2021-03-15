import { Box, VStack } from '@chakra-ui/react';

import HeaderBar from 'components/HeaderBar';

import { useHints } from 'modules/HintsProvider';

import WayOfTheHero from './hints/WoTH';

export const defaultHints: OOT.Hints = {
  woth: {
    locations: [],
  },
};

export function useOcarinaHints() {
  const oot = useHints<OOT.Hints, OOT.Item, OOT.Location>();

  return oot;
}

function OcarinaOfTimeStd() {
  return (
    <>
      <HeaderBar title="Ocarina of Time" />
      <Box width="100%">
        <VStack align="initial" spacing="4">
          <WayOfTheHero />
        </VStack>
      </Box>
    </>
  );
}

export default OcarinaOfTimeStd;
