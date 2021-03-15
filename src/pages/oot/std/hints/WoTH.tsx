import { useMemo } from 'react';
import {
  Box,
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import fuzzysearch from 'utils/fuzzysearch';
import useFuseState from 'hooks/useFuseState';

import Hints from 'components/Hints';
import { useOcarinaHints } from '../std';

function WayOfTheHero() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { locations } = useOcarinaHints();

  const [searchLocation, setSearchLocation] = useFuseState<OOT.Location>();

  const fuzzyLocation = useMemo(() => fuzzysearch(locations, ['name']), [
    locations,
  ]);

  const handleLocationSearch = (locationName: string) => {
    const search = fuzzyLocation.search(locationName);

    setSearchLocation(search);
  };

  return (
    <>
      <Hints name="Way of The Hero" color="woth" action={onOpen}>
        hints goes here
      </Hints>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Input onChange={(e) => handleLocationSearch(e.target.value)} />
          <Box height="120px" overflow="auto">
            {searchLocation?.map((location) => (
              <p key={location.item.name}>{location.item.name}</p>
            ))}
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}

export default WayOfTheHero;
