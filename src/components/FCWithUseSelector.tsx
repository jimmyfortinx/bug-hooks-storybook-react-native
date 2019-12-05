import React from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';
import rootReducer from '../reducers/root.reducer';
import {getCountSelector} from '../selectors/counter.selector';

const FCWithUseSelector: React.FC<{}> = ({}) => {
  const count = useSelector(getCountSelector);

  return (
    <>
      <Text>{count}</Text>
    </>
  );
};

export default FCWithUseSelector;
