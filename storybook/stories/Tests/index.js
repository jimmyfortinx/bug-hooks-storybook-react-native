import React from 'react';

import {storiesOf} from '@storybook/react-native';
import FCWithUseState from '../../../src/FCWithUseState';
import FCWithUseEffect from '../../../src/FCWithUseEffect';
import FCWithAnotherFC from '../../../src/FCWithAnotherFC';

storiesOf('Tests', module).add('hook with useState', () => (
  <FCWithUseState name="something" />
));

storiesOf('Tests', module).add('hook with useEffect', () => (
  <FCWithUseEffect name="something" />
));

storiesOf('Tests', module).add('hook with another hook', () => (
  <FCWithAnotherFC />
));
