import React, {useState} from 'react';
import FCWithUseEffect from './FCWithUseEffect';

const FCWithAnotherFC: React.FC<{}> = ({}) => {
  const [value] = useState('something');

  return <FCWithUseEffect name={value} />;
};

export default FCWithAnotherFC;
