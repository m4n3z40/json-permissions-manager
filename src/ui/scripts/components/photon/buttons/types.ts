export type ButtonGroupProps = React.HTMLProps<HTMLElement>;

export interface ButtonGroupComponent extends React.StatelessComponent<ButtonGroupProps> {
    (props: ButtonGroupProps): React.ReactElement<HTMLElement>;
}

export type ButtonSizeVariation = 'normal' | 'large' | 'mini';
export type ButtonStyleVariation = 'default' | 'primary' | 'positive' | 'negative' | 'warning'

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    sizeVariation?: ButtonSizeVariation;
    styleVariation?: ButtonStyleVariation;
    withinForm?: boolean;
    active?: boolean;
}

export interface ButtonComponent extends React.StatelessComponent<ButtonProps> {
    (props: ButtonProps): React.ReactElement<HTMLButtonElement>;
}
