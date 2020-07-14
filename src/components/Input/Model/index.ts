export interface Props {
  onChange?:
    | ((
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => void)
    | undefined;
  value?: string | number | readonly string[] | undefined;
  fullWidth?: boolean;
  labelText?: string;
  type?: "text" | "number" | "password";
  customStyles?: string;
  labelCenter?: boolean;
  textArea?: boolean;
  maxLength?: number;
  placeholder?: string;
}
