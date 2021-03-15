import { useCallback, useState, useMemo } from 'react';

import {
  Box,
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import fuzzysearch from 'utils/fuzzysearch';

import Hints from 'components/Hints';

import { useMajorasHints } from '../mm';

function WayOfTheHero() {
  const [searchLocation, setSearchLocation] = useState<any>([]);

  const {
    hints: { woth },
    locations,
  } = useMajorasHints();
  const { onClose, onOpen, isOpen } = useDisclosure();

  const fuzzyLocation = useMemo(() => fuzzysearch(locations, ['name']), [
    locations,
  ]);

  const handleSearchLocation = useCallback(
    (locationName: string) => {
      setSearchLocation(fuzzyLocation.search(locationName));
    },
    [fuzzyLocation],
  );

  return (
    <>
      <Hints
        name="Way of The Hero"
        color="woth"
        hasHints={woth.locations.length > 0}
        action={onOpen}
      >
        {woth.locations.map((location) => (
          <h1>{location}</h1>
        ))}
      </Hints>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setSearchLocation([]);
          onClose();
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <Input onChange={(e) => handleSearchLocation(e.target.value)} />
          <Box height="120px" overflow="auto">
            {searchLocation.map((search: any) => (
              <p key={search.item.name}>{search.item.name}</p>
            ))}
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}

export default WayOfTheHero;
