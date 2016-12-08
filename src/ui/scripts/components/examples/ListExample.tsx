import * as React from 'react';
import {
    ListProps,
    List,
    ListHeader,
    ListItem,
    MediaListItem,
    Image
} from '../photon';

interface ListExampleComponent extends React.StatelessComponent<ListProps> {
    (props: ListProps): React.ReactElement<HTMLUListElement>;
}

const ListExample: ListExampleComponent = () => (
    <List>
        <ListHeader>List</ListHeader>
        <ListItem>
            <p>Normal Item</p>
        </ListItem>
        <ListItem active>
            <p>Normal Item (active)</p>
        </ListItem>
        <MediaListItem>
            <Image
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=32"
                width="32px"
                height="32px"
            />
            <div>
                <strong>Media Item</strong>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </MediaListItem>
    </List>
);

export default ListExample;
