import React, { useState } from 'react';

const useSearch = () => {
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    window.location.assign(`/search?q=${value}`);
  };

  const onClear = () => {
    setValue('');
  };

  return { value, onChange, onKeyDown, onClear };
};

export { useSearch };
