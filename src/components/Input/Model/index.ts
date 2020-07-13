export interface Props {
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  value?: string | number | readonly string[] | undefined;
  fullWidth?: boolean;
  labelText?: string;
  type?: "text" | "number" | "password";
  customStyles?: string;
}
