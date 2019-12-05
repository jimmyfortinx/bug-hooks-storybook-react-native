import {StoreDecorator} from './decorators/store';
import {addDecorator} from '@storybook/react-native';

setTimeout(() => {
  addDecorator(
    StoreDecorator({
      counter: {
        count: 5,
      },
    }),
  );
}, 0);
