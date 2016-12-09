export type FormProps = React.HTMLProps<HTMLFormElement>;

export interface FormComponent extends React.StatelessComponent<FormProps> {
    (props: FormProps): React.ReactElement<HTMLFormElement>;
}

export type FormGroupProps = React.HTMLProps<HTMLElement>;

export interface FormGroupComponent extends React.StatelessComponent<FormGroupProps> {
    (props: FormGroupProps): React.ReactElement<HTMLElement>;
}

export type LabelProps = React.HTMLProps<HTMLLabelElement>;

export interface LabelComponent extends React.StatelessComponent<LabelProps> {
    (props: LabelProps): React.ReactElement<HTMLLabelElement>;
}

export type InputProps = React.HTMLProps<HTMLInputElement>;

export interface InputComponent extends React.StatelessComponent<InputProps> {
    (props: InputProps): React.ReactElement<HTMLInputElement>;
}

export type TextAreaProps = React.HTMLProps<HTMLTextAreaElement>;

export interface TextAreaComponent extends React.StatelessComponent<TextAreaProps> {
    (props: TextAreaProps): React.ReactElement<HTMLTextAreaElement>;
}

export type SelectProps = React.HTMLProps<HTMLSelectElement>;

export interface SelectComponent extends React.StatelessComponent<SelectProps> {
    (props: SelectProps): React.ReactElement<HTMLSelectElement>;
}

export type SelectOptionProps = React.HTMLProps<HTMLOptionElement>;

export interface SelectOptionComponent extends React.StatelessComponent<SelectOptionProps> {
    (props: SelectOptionProps): React.ReactElement<HTMLOptionElement>;
}

export type SelectOptionGroupProps = React.HTMLProps<HTMLOptGroupElement>;

export interface SelectOptionGroupComponent extends React.StatelessComponent<SelectOptionGroupProps> {
    (props: SelectOptionGroupProps): React.ReactElement<HTMLOptGroupElement>;
}

export interface CheckableProps extends React.HTMLProps<HTMLInputElement> {
    inline?: boolean;
}

export interface CheckboxComponent extends React.StatelessComponent<CheckableProps> {
    (props: CheckableProps): React.ReactElement<HTMLInputElement>;
}

export interface RadioComponent extends React.StatelessComponent<CheckableProps> {
    (props: CheckableProps): React.ReactElement<HTMLInputElement>;
}

export type FormActionsProps = React.HTMLProps<HTMLElement>;

export interface FormActionsComponent extends React.StatelessComponent<FormActionsProps> {
    (props: FormActionsProps): React.ReactElement<HTMLElement>;
}
