type variants = "filled" | "rounded" | "default";

export type ButtonVariants = {
  [key in variants]: React.FunctionComponent;
};
export interface Props {
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;

  variant?: variants;
  customStyles?: string;
  fullWidth?: boolean;
  startIcon?: JSX.Element;
}
