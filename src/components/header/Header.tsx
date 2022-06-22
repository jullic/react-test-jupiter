import { FC } from 'react';
import Btn from '../btn/Btn';
import Logo from '../logo/Logo';
import Nav from '../nav/Nav';
import Text from '../text/Text';
import Title from '../title/Title';
import { IHeaderProps } from './Header.props';
import './Header.style.scss';

const Header: FC<IHeaderProps> = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__head">
					<Logo className='header__logo' />
					<Nav className='header__nav' />
					<Btn className='header__btn'>Contact</Btn>
				</div>
				<div className="header__info">
					<Title className='header__title'>Partfolio</Title>
					<Text className='header__text'>Agency provides a full service range including technical skills, design, business understanding.</Text>
				</div>
			</div>
		</header>
	);
}

export default Header;