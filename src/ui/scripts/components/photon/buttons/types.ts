export type ButtonGroupProps = React.HTMLProps<HTMLElement>;

export interface ButtonGroupComponent extends React.StatelessComponent<ButtonGroupProps> {
    (props: ButtonGroupProps): React.ReactElement<HTMLElement>;
}

export type ButtonSize = 'normal' | 'large' | 'mini';
export type ButtonVariations = 'default' | 'primary' | 'positive' | 'negative' | 'warning'

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    sizeVariation?: ButtonSize;
    styleVariation?: ButtonVariations;
    withinForm?: boolean;
}

export interface ButtonComponent extends React.StatelessComponent<ButtonProps> {
    (props: ButtonProps): React.ReactElement<HTMLButtonElement>;
}
