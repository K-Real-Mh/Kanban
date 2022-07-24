import cn from 'classnames/bind'
import s from './Header.module.scss';
import Icon from '../Icon/Icon';
import Navigation from '../Navigation/Navigation';
import Account from '../Account/Account';
import { navigationData } from '../../data/navigationData.js';
import { accountData } from '../../data/accountData.js';

function Header({ className }) {
    return (
        <header className={cn(s.Header, className)}>
            <a href="#" className={s.Header__logo}>
                <Icon width="25" height="24" name="LogoIcon" />
                <span>eveli.todo</span>
            </a>
            <Navigation items={navigationData} active="projects" />
            <Account data={accountData} />
        </header>
    );
}

export default Header;