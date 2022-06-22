import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
export interface IBtnProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	load?: boolean;
	children: ReactNode;
}