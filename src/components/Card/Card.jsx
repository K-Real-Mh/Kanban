import cn from 'classnames/bind';
import s from './Card.module.scss';
import Avatars from '../Avatars/Avatars.jsx';
import Icon from '../Icon/Icon';

function Card({ data }) {
    return (
        <div className={s.Card}>
            <div className={s.Card__info}>
                <div className={s.Card__avatars}>
                    <Avatars avatars={data.members} />
                </div>
                <div className={cn(s.Card__rating, s[`Card__rating_${data.importance}`])}>
                    <Icon name="ChevronIcon" color="#9EA7B7" width="34" height="14" />
                </div>
            </div>
            <div className={s.Card__name}>
                #{data.id}: <a href="#" draggable="false">{data.name}</a>
            </div>
        </div>
    );
}

export default Card;