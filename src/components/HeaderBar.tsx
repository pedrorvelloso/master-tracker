import {
  Heading,
  Flex,
  VStack,
  HStack,
  IconButton,
  Tooltip,
  useColorMode,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon, SettingsIcon } from '@chakra-ui/icons';

interface HeaderBarProps {
  title: string;
}

function HeaderBar({ title }: HeaderBarProps) {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex justifyContent="space-between" alignItems="center" mb="4">
      <VStack spacing="0" align="flex-start">
        <Heading size="2xl">{title}</Heading>
        <Heading size="sm">Standard</Heading>
      </VStack>
      <HStack spacing="2" align="flex-start">
        <IconButton
          aria-label={`Change to ${
            colorMode === 'dark' ? 'light' : 'dark'
          } mode`}
          icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
        />
        <Tooltip hasArrow label={`Open "${title}" settings`}>
          <IconButton aria-label="Open settings" icon={<SettingsIcon />} />
        </Tooltip>
      </HStack>
    </Flex>
  );
}

export default HeaderBar;
