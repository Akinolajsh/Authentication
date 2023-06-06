export interface iButton {
  title?: string;
  icon?: any;
  color?: string;
  bg?: string;
  onClick?: ()=>void;
}

export interface iInput {
  name?: boolean;
  password?: boolean;
  email?: boolean;
  confirm?: boolean;

  name1?: string;
  email1?: string;
  password1?: string;
  confirm1?: string;

  name2?: string;
  email2?: string;

  password2?: string;

  confirm2?: string;
}
