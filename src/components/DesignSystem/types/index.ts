export interface ICustomInputProps {
  name?: string;
  label?: string;
  feedbackMsg?: string;
  state?: boolean | null;
  value: string;
}

export type CustomFormProps = {
  submit: [];
};

export type CustomTableProps = {
  items: any[];
  fields?: any[];
  withNumber?: boolean;
};

export interface IOption {
  id: number;
  text: string;
}

export interface ICustomDropDownProps {
  text?: string;
  options: IOption[];
}
