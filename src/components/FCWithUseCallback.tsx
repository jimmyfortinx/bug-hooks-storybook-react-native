import React, {useCallback} from 'react';
import {Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import rootReducer from '../reducers/root.reducer';
import {getCountSelector} from '../selectors/counter.selector';

const FCWithUseCallback: React.FC<{}> = ({}) => {
  const dispatch = useDispatch();

  const count = useSelector(getCountSelector);

  const click = useCallback(() => dispatch({type: 'click'}), [dispatch]);

  return (
    <>
      <Text>{count}</Text>
      <Button onPress={click} title="CLICK" />
    </>
  );
};

export default FCWithUseCallback;
