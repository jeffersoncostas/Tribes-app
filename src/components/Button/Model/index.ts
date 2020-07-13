type variants = "filled" | "rounded" | "default";

export interface Props {
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;

  variant?: variants;
  customStyles?: string;
  fullWidth?: boolean;
}
