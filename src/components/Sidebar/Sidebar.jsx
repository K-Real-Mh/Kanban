import cn from 'classnames/bind';
import s from './Sidebar.module.scss';
import Icon from '../Icon/Icon.jsx';
import Button from '../Button/Button.jsx';

function Sidebar({ className }) {
    return (
        <aside className={cn(s.Sidebar, className)}>
            <div className={s.Sidebar__top}>
                <Button ariaLabel="Search" icon={
                    <Icon name="SearchIcon" />
                } />
                <Button ariaLabel="Add" icon={
                    <Icon name="PlusIcon" />
                } />
                <Button ariaLabel="Table view" icon={
                    <Icon name="TableIcon" />
                } />
            </div>
            <div className={s.Sidebar__openBtn}>
                <Button ariaLabel="Expand" icon={
                    <Icon name="ArrowRightIcon" width="10" height="18" />
                } />
            </div>
            <div className={s.Sidebar__bottom}>
                <Button ariaLabel="Help" icon={
                    <Icon name="QuestionIcon" width="24" height="24" />
                } />
            </div>
        </aside>
    )
}

export default Sidebar;