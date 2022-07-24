import s from './Breadcrumbs.module.scss';
import Icon from '../Icon/Icon';

function Breadcrumbs({ breadcrumbs, icon }) {
    return (
        <div className={s.Breadcrumbs}>
            <Icon name={icon} color="#E96880" />
            <nav aria-label="Breadcrumb">
                <ul className={s.Breadcrumbs__list}>
                    {breadcrumbs.map((breadcrumb, idx) => {
                        return (
                            <li key={idx} className={s.Breadcrumbs__item}>
                                {idx === breadcrumbs.length - 1 ? (
                                    <span aria-current="page">{breadcrumb}</span>
                                ) : (
                                    <a href="#">{breadcrumb}</a>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}

export default Breadcrumbs;