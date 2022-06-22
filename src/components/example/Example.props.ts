import { DetailedHTMLProps, HTMLAttributes } from 'react';
export interface IExampleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	active?: 'active';
}