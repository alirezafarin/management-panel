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

export interface IDropDownOption {
  id: number;
  text: string;
  onClick?: (slug: string) => void;
}

export interface ICustomDropDownProps {
  text?: string;
  options: IDropDownOption[];
}
