export interface TableProps extends React.HTMLProps<HTMLTableElement> {
    striped?: boolean;
}

export interface TableComponent extends React.StatelessComponent<TableProps> {
   (props: TableProps): React.ReactElement<HTMLTableElement>;
}

export type TableHeaderProps = React.HTMLProps<HTMLTableSectionElement>;

export interface TableHeaderComponent extends React.StatelessComponent<TableHeaderProps> {
   (props: TableHeaderProps): React.ReactElement<HTMLTableSectionElement>;
}

export type TableBodyProps = React.HTMLProps<HTMLTableSectionElement>;

export interface TableBodyComponent extends React.StatelessComponent<TableBodyProps> {
   (props: TableBodyProps): React.ReactElement<HTMLTableSectionElement>;
}

export type TableFooterProps = React.HTMLProps<HTMLTableSectionElement>;

export interface TableFooterComponent extends React.StatelessComponent<TableFooterProps> {
   (props: TableFooterProps): React.ReactElement<HTMLTableSectionElement>;
}

export type TableRowProps = React.HTMLProps<HTMLTableRowElement>;

export interface TableRowComponent extends React.StatelessComponent<TableRowProps> {
   (props: TableRowProps): React.ReactElement<HTMLTableRowElement>;
}

export type TableCellProps = React.HTMLProps<HTMLTableCellElement>;

export interface TableCellComponent extends React.StatelessComponent<TableCellProps> {
   (props: TableCellProps): React.ReactElement<HTMLTableRowElement>;
}

export type TableHeaderCellProps = React.HTMLProps<HTMLTableCellElement>;

export interface TableHeaderCellComponent extends React.StatelessComponent<TableHeaderCellProps> {
   (props: TableHeaderCellProps): React.ReactElement<HTMLTableCellElement>;
}
