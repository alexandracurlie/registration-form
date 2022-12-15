import { ChangeEvent } from 'react';

export type IField = {
  name: string,
  label: string,
  placeholder: string,
  value?: string,
  icon: string,
  secure?: boolean,
  type?: string,
  error?: string,
  autoComplete: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  isValid?: boolean;
}

export type IButton = {
  children?: 'Submit' | 'Save' | 'Login' | 'Next',
  type: 'button' | 'submit',
  onClick?: () => void,
}
