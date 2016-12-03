export type PaneGroupProps = React.HTMLProps<HTMLElement>;

export interface PaneGroupComponent extends React.StatelessComponent<PaneGroupProps> {
    (props: PaneGroupProps): React.ReactElement<HTMLElement>;
}

export type PaneWidth = 'full' | 'sm' | 'mini' | 'one-fourth' | 'one-third';

export interface PaneProps extends React.HTMLProps<HTMLElement> {
    width?: PaneWidth;
};

export interface PaneComponent extends React.StatelessComponent<PaneProps> {
    (props: PaneProps): React.ReactElement<HTMLElement>;
}
