export type PaneGroupProps = React.HTMLProps<HTMLElement>;

export interface PaneGroupComponent extends React.StatelessComponent<PaneGroupProps> {
    (props: PaneGroupProps): React.ReactElement<HTMLElement>;
}

export type PaneHSize = 'full' | 'sm' | 'mini' | 'one-fourth' | 'one-third';

export interface PaneProps extends React.HTMLProps<HTMLElement> {
    hSize?: PaneHSize;
}

export interface PaneComponent extends React.StatelessComponent<PaneProps> {
    (props: PaneProps): React.ReactElement<HTMLElement>;
}

export type SidebarPaneProps = React.HTMLProps<HTMLElement>;

export interface SidebarPaneComponent extends React.StatelessComponent<SidebarPaneProps> {
    (props: SidebarPaneProps): React.ReactElement<HTMLElement>;
}
