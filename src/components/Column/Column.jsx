import s from './Column.module.scss';
import Icon from '../Icon/Icon';
import Button from '../Button/Button.jsx';
import Card from '../Card/Card.jsx';

function Column({ data, onDelete, onDragStart, onDragEnd }) {
    const handleDelete = () => onDelete(data.id);

    return (
        <div className={s.Column}>
            <div className={s.Column__header}>
                <div className={s.Column__name}>
                    <Icon name={data.icon} color="#5C81C2" />
                    <span>{data.name}</span>
                </div>
                <div className={s.Column__btns}>
                    <Button icon={<Icon name="PencilIcon" color="#98999B" width="14" height="15" />} />
                    <Button onClick={handleDelete} icon={<Icon name="TrashIcon" color="#98999B" width="14" height="15" />} />
                </div>
            </div>
            <ul className={s.Column__cards}>
                {data.cards.map(card => {
                    return (
                        <li
                            key={card.id}
                            className={s.Column__card}
                            id={card.id}
                            onDragStart={(e) => onDragStart(e, data.id, card.id)}
                            onDragEnd={onDragEnd}
                            draggable="true"
                        >
                            <Card data={card} />
                        </li>
                    );
                })}
            </ul>
            <div className={s.Column__button}>
                <Button ariaLabel="Add card" icon={<Icon name="PlusIcon" width="14" height="14" />} />
            </div>
        </div>
    );
}

export default Column;