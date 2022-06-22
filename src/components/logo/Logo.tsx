import { FC } from 'react';
import { ILogo } from './Logo.props';
import './Logo.style.scss';
import logo from '../../resources/img/logo.svg';

const Logo: FC<ILogo> = ({ className }) => {
	return (
		<div className={`logo ${className}`}>
			<img className="logo__img" src={logo} alt="" />
			<p className="logo__text">Agency</p>
		</div>
	);
}

export default Logo;