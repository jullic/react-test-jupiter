import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IFilterItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	isActive?: boolean;
	children: ReactNode;
}	