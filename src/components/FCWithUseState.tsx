import React, {useState} from 'react';
import {Text} from 'react-native';

interface Props {
  name: string;
}

const FCWithUseState: React.FC<Props> = ({name}) => {
  const [newValue] = useState(name);

  return <Text>{newValue}</Text>;
};

export default FCWithUseState;
