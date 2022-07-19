import cn from 'classnames/bind'
import s from './Header.module.scss';
import Icon from '../Icon/Icon';
import Navigation from '../Navigation/Navigation';
import Account from '../Account/Account';

const navigationItems = [
    {
        id: 'tasks',
        label: 'Задачи',
    },
    {
        id: 'projects',
        label: 'Проекты',
    },
    {
        id: 'statistics',
        label: 'Статистика',
    },
    {
        id: 'finance',
        label: 'Финансы',
    },
    {
        id: 'plan',
        label: 'План',
    },
    {
        id: 'users',
        label: 'Пользователи',
    },
];

const accountData = {
    sum: 60000,
    currency: '₽',
    src: 'https://raw.githubusercontent.com/K-Real-Mh/Kanban/main/static/Nazir.jpg',
    name: 'Назир',
}

function Header({ className }) {
    return (
        <header className={cn(s.Header, className)}>
            <a href="#" className={s.Header__logo}>
                <Icon width="25" height="24" name="LogoIcon" />
                <span>eveli.todo</span>
            </a>
            <Navigation items={navigationItems} active="projects" />
            <Account data={accountData} />
        </header>
    );
}

export default Header;