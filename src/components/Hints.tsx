import { Heading, Skeleton, VStack } from '@chakra-ui/react';

const colors = {
  woth: 'orange.400',
  barren: 'red.400',
  items: 'twitter.400',
  dead: 'blue.400',
};

interface HintsProps {
  name: string;
  color: keyof typeof colors;
  hasHints?: boolean;
  action?: () => void;
}

function Hints({
  name,
  color,
  hasHints = false,
  action,
  children,
}: React.PropsWithChildren<HintsProps>) {
  return (
    <VStack align="strech" onClick={action}>
      <Heading size="lg" color={colors[color]} mb="2">
        {name}
      </Heading>
      <Skeleton
        height={hasHints ? 'auto' : '10px'}
        startColor="gray.600"
        endColor="gray.500"
        isLoaded={hasHints}
      >
        {children}
      </Skeleton>
    </VStack>
  );
}
export default Hints;
