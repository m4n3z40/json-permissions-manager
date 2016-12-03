export interface ToolbarProps extends React.HTMLProps<HTMLElement> {
    title?: string;
    borderless?: boolean;
}

export interface ToolbarComponent extends React.StatelessComponent<ToolbarProps> {
    (props: ToolbarProps): React.ReactElement<HTMLElement>;
}

export type ToolbarActionsProps = React.HTMLProps<HTMLElement>;

export interface ToolbarActionsComponent extends React.StatelessComponent<ToolbarActionsProps> {
    (props: ToolbarActionsProps): React.ReactElement<HTMLElement>;
}
