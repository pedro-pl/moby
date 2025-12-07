import type { InputHTMLAttributes } from "react";
import type { UseFormRegister } from "react-hook-form";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  register: UseFormRegister<any>;
  isRequired?: boolean;
  name: string;
};

export function Input({ register, isRequired, name, ...rest }: InputProps) {
  return <input {...register(name, { required: isRequired ? "Preenchimento obrigatório" : false })} {...rest} />;
}