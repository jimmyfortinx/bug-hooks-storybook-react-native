import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';

interface Props {
  name: string;
}

const FCWithUseEffect: React.FC<Props> = ({name}) => {
  const [newValue, setNewValue] = useState();

  useEffect(() => {
    setNewValue(`${name} - added`);
  }, []);

  return <Text>{newValue}</Text>;
};

export default FCWithUseEffect;
