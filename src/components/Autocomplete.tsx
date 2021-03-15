import { useEffect, useMemo } from 'react';

import { Input } from '@chakra-ui/react';

import useFuseState from 'hooks/useFuseState';
import fuzzysearch, { FuzzyResult } from 'utils/fuzzysearch';

interface AutocompleteProps<T> {
  items: T[];
  searchKeys: Array<keyof T>;
  onSearch: (result?: FuzzyResult<T>[]) => void;
}

/**
 * This autocomplete component was made to work with in memory data.
 * if at any point we decide to move our hints stuff to an api this component
 * should be refactored (probably not gonna happen).
 */
function Autocomplete<T>({
  items,
  searchKeys,
  onSearch,
}: React.PropsWithChildren<AutocompleteProps<T>>) {
  const [search, setSearch] = useFuseState<T>();

  const fuzzyLocation = useMemo(() => fuzzysearch(items, searchKeys), [
    searchKeys,
    items,
  ]);

  useEffect(() => {
    onSearch(search);
  }, [onSearch, search]);

  const handleSearch = (locationName: string) => {
    const searchResult = fuzzyLocation.search(locationName);

    setSearch(searchResult);
  };

  return <Input onChange={(e) => handleSearch(e.target.value)} />;
}

export default Autocomplete;
