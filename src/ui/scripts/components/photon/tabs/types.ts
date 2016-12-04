export type TabProps = React.HTMLProps<HTMLDivElement>;

export interface TabComponent extends React.StatelessComponent<TabProps> {
    (props: TabProps): React.ReactElement<HTMLDivElement>;
}

type OnTabCloseHandler = React.MouseEventHandler<HTMLDivElement>;

export interface TabItemProps extends TabProps {
    active?: boolean;
    fixed?: boolean;
    onTabClose?: OnTabCloseHandler;
}

export interface TabItemComponent extends React.StatelessComponent<TabItemProps> {
    (props: TabItemProps): React.ReactElement<HTMLDivElement>;
}
