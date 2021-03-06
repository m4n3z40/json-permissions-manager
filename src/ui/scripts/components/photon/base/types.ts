import { IconProps } from './types';
export type WindowProps = React.HTMLProps<HTMLElement>;

export interface WindowComponent extends React.StatelessComponent<WindowProps> {
    (props: WindowProps): React.ReactElement<HTMLElement>;
}

export type WindowContentProps = WindowProps;
export type WindowContentComponent = WindowComponent;

export type IconName = string;

export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
    name?: IconName;
    precedesText?: boolean;
}

export interface IconComponent extends React.StatelessComponent<HTMLSpanElement> {
    (props: IconProps): React.ReactElement<HTMLSpanElement>;
}

export type ImageStyleVariation = 'default' | 'circle' | 'rounded';

export interface ImageProps extends React.HTMLProps<HTMLImageElement> {
    styleVariation?: ImageStyleVariation;
}

export interface ImageComponent extends React.StatelessComponent<HTMLImageElement> {
    (props: ImageProps): React.ReactElement<HTMLImageElement>;
}
