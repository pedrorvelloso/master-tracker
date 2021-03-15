import Fuse from 'fuse.js';

export default function fuzzysearch<T>(
  list: ReadonlyArray<T>,
  keys: Array<keyof T>,
) {
  const kys = keys as string[];
  return new Fuse<T>(list, {
    includeScore: true,
    keys: kys,
  });
}
