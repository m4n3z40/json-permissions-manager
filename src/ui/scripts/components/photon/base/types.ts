export type WindowProps = React.HTMLProps<HTMLElement>;

export interface WindowComponent extends React.StatelessComponent<WindowProps> {
    (props: WindowProps): React.ReactElement<HTMLElement>;
}

export type WindowContentProps = WindowProps;
export type WindowContentComponent = WindowComponent;
