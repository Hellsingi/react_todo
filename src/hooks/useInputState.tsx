import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const reset = () => setValue('');

  return {
    value,
    onChange,
    reset,
  };
};
