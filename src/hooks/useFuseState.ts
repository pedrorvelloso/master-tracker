import { useState } from 'react';
import Fuse from 'fuse.js';

export default function useFuseState<ResultType>() {
  return useState<Fuse.FuseResult<ResultType>[]>();
}
