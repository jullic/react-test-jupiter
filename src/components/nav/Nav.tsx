import { FC } from 'react';
import { INavProps } from './Nav.props';
import './Nav.style.scss';

const Nav: FC<INavProps> = ({ className }) => {
	return (
		<nav className={`nav ${className}`}>
			<ul className="nav__list">
				<li className="nav__list-item">About</li>
				<li className="nav__list-item">Services</li>
				<li className="nav__list-item">Pricing</li>
				<li className="nav__list-item">Blog</li>
			</ul>
		</nav>
	);
}

export default Nav;