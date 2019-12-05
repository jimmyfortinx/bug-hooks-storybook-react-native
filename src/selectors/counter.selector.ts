import rootReducer from '../reducers/root.reducer';
import {createSelector} from 'reselect';

export const getCounterRessourceSelector = (
  state: ReturnType<typeof rootReducer>,
) => state.counter;

export const getCountSelector = createSelector(
  getCounterRessourceSelector,
  counter => counter.count,
);
