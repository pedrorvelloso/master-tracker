import {
  Box,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import useFuseState from 'hooks/useFuseState';

import Hints from 'components/Hints';
import Autocomplete from 'components/Autocomplete';

import { useOcarinaHints } from '../std';

function WayOfTheHero() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { locations } = useOcarinaHints();

  const [searchLocation, setSearchLocation] = useFuseState<OOT.Location>();

  return (
    <>
      <Hints name="Way of The Hero" color="woth" action={onOpen}>
        hints goes here
      </Hints>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Autocomplete
            items={locations}
            searchKeys={['name']}
            onSearch={(result) => setSearchLocation(result)}
          />
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
