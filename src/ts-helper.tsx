import { ChangeEvent } from 'react';

interface MyFormChangeElement { // this goes in event.target object
  name: string;
  value: string;
  type:string;
  checked:boolean;
}

export type FormChangeEvent = ChangeEvent<MyFormChangeElement>;

// Handler for forms
export type FormChangeHandler = (formEvent: FormChangeEvent) => void;
