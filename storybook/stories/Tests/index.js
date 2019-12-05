import React from 'react';

import {storiesOf} from '@storybook/react-native';
import FCWithUseState from '../../../src/components/FCWithUseState';
import FCWithUseEffect from '../../../src/components/FCWithUseEffect';
import FCWithAnotherFC from '../../../src/components/FCWithAnotherFC';
import FCWithUseSelector from '../../../src/components/FCWithUseSelector';
import FCWithUseCallback from '../../../src/components/FCWithUseCallback';

storiesOf('Tests', module)
  .add('hook with useState', () => <FCWithUseState name="something" />)
  .add('hook with useEffect', () => <FCWithUseEffect name="something" />)
  .add('hook with another hook', () => <FCWithAnotherFC />)
  .add('hook with useSelector', () => <FCWithUseSelector />)
  .add('hook with useCallback', () => <FCWithUseCallback />);

storiesOf('Tests', module);
