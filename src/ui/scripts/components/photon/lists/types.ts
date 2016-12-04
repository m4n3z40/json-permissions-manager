export type ListProps = React.HTMLProps<HTMLUListElement>;

export interface ListComponent extends React.StatelessComponent<ListProps> {
    (props: ListProps): React.ReactElement<HTMLUListElement>;
}

export type ListHeaderProps = React.HTMLProps<HTMLLIElement>;

export interface ListHeaderComponent extends React.StatelessComponent<ListHeaderProps> {
    (props: ListHeaderProps): React.ReactElement<HTMLLIElement>;
}

export interface ListItemProps extends ListHeaderProps {
    active?: boolean;
}

export interface ListItemComponent extends React.StatelessComponent<ListItemProps> {
    (props: ListItemProps): React.ReactElement<HTMLLIElement>;
}

export type MediaListItemImageAlignment = 'left' | 'right';

export interface MediaListItemProps extends ListItemProps {
    imageAlignment?: MediaListItemImageAlignment;
}

export interface MediaListItemComponent extends React.StatelessComponent<MediaListItemProps> {
    (props: MediaListItemProps): React.ReactElement<HTMLLIElement>;
}
