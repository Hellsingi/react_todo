import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');

  return {
    value,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    reset: () => setValue(''),
  };
};
