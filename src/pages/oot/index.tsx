import { Switch, Route } from 'react-router-dom';

import { HintsProvider } from 'modules/HintsProvider';

import OcarinaOfTimeStd, { defaultHints } from './std/std';

import items from './std/hints/utils/items';
import locations from './std/hints/utils/locations';

function OcarinaOfTime() {
  return (
    <Switch>
      <Route path="/">
        <HintsProvider
          items={items}
          locations={locations}
          defaultHints={defaultHints}
        >
          <OcarinaOfTimeStd />
        </HintsProvider>
      </Route>
    </Switch>
  );
}

export default OcarinaOfTime;
