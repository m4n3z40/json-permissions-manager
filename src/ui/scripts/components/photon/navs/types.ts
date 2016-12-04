export type NavProps = React.HTMLProps<HTMLElement>;

export interface NavComponent extends React.StatelessComponent<NavProps> {
    (props: NavProps): React.ReactElement<HTMLElement>;
}

export type NavTitleProps = React.HTMLProps<HTMLHeadingElement>;

export interface NavTitleComponent extends React.StatelessComponent<NavTitleProps> {
    (Props: NavTitleProps): React.ReactElement<HTMLHeadingElement>;
}

export interface NavItemProps extends React.HTMLProps<HTMLAnchorElement> {
    active?: boolean;
}

export interface NavItemComponent extends React.StatelessComponent<NavItemProps> {
    (props: NavItemProps): React.ReactElement<HTMLAnchorElement>;
}
