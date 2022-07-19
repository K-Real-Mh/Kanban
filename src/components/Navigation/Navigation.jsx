import cn from 'classnames/bind';
import s from './Navigation.module.scss';

function Navigation({ items, active }) {
    return (
        <nav className={s.Navigation}>
            <ul className={s.Navigation__list}>
                { items.map(item => (
                    <li
                        key={item.id}
                        className={s.Navigation__item}
                    >
                        <a href="#" className={cn(s.Navigation__link, { [s.Navigation__link_active]: item.id === active })}>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation;