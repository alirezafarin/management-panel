import { type Ref } from 'vue';

export interface IBaseInputProps {
  name?: string;
  label?: string;
  feedbackMsg?: string;
  state?: boolean | null;
  value: string;
}

export type BaseFormProps = {
  submit: [];
};

export type BaseTableProps = {
  items: any[];
  fields?: any[];
  withNumber?: boolean;
};

export interface IDropDownOption {
  id: number;
  text: string;
  onClick?: (slug: string) => void;
}

export interface IBaseDropDownProps {
  text?: string;
  options: IDropDownOption[];
}

export interface IModal {
  showModal: boolean;
  title: string;
  description: string;
  modalProps?: any;
  handleOk?: () => void;
}

export interface IModalInject {
  setModal: (modalValues: IModal) => void;
  modalValues: Ref<IModal>;
}
