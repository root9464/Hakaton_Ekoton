import { InputHTMLAttributes } from 'react';

type InputProps = {
  type: string;
  placeholder: string;
};

export const Input = ({ type, placeholder, className, onChange }: InputProps & Partial<InputHTMLAttributes<HTMLInputElement>>) => (
  <input
    className={`px-8 py-3 min-h-[46px] font-semibold rounded-2xl outline-0 ${className}`}
    type={type}
    placeholder={placeholder}
    onChange={onChange}
  />
);
