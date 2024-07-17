import React, { forwardRef, useImperativeHandle, useRef } from 'react';

type Props = {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
};

export type TextInputHandle = {
  focus: () => void;
  clear: () => void;
};

const TextInput = forwardRef<TextInputHandle, Props>(({ value, onChange, placeholder, type = 'text' }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
    clear: () => {
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    },
  }));

  return (
    <input className='border w-full h-full rounded-md px-2 focus:outline-primary'
      ref={inputRef}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
});

export default TextInput;
