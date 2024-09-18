type InputProps = {
  type: string;
  placeholder: string;
};

export const Input = ({ type, placeholder, className }: InputProps & Partial<HTMLInputElement>) => (
  <input className={`px-8 py-3 w-fit h-max font-semibold rounded-2xl outline-0 ${className}`} type={type} placeholder={placeholder} />
);
