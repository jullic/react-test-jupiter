import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
export interface ITitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement> {
	children: ReactNode;
}