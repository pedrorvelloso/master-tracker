import { Switch, Route } from 'react-router-dom';

import { HintsProvider } from 'modules/HintsProvider';

import MajorasMask, { defaultHints as mmHints } from './mm';
import OcarinaOfTime from './oot';

import { items as mmItems, locations as mmLocations } from './mm/hints/utils';

function Pages() {
  return (
    <Switch>
      <Route path="/mm">
        <HintsProvider
          items={mmItems}
          locations={mmLocations}
          defaultHints={mmHints}
        >
          <MajorasMask />
        </HintsProvider>
      </Route>
      <Route path="/oot">
        <OcarinaOfTime />
      </Route>
    </Switch>
  );
}

export default Pages;
