import addons from '@storybook/addons';
import withReduxEnhancer from 'addon-redux/enhancer';
import withReduxCore from 'addon-redux/withRedux';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from '../../src/reducers/root.reducer';

export const StoreDecorator = (state: any) =>
  withReduxCore(addons)({
    Provider,
    store: createStore(rootReducer, withReduxEnhancer),
    state,
  }) as any;
