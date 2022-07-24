import {useState} from 'react';
import s from './Processes.module.scss';
import Icon from '../../components/Icon/Icon';
import Button from '../../components/Button/Button';
import Column from '../../components/Column/Column';
import { dataColumns } from '../../data/dataColumns.js';

function Processes() {
    const [columns, setColumns] = useState(dataColumns);

    const handleAddColumn = () => {
        setColumns(columns => {
            return [
                ...columns,
                {
                    id: Date.now() + Math.random(),
                    name: 'Без имени',
                    icon: 'DrawingPinIcon',
                    cards: []
                }
            ]
        });
    }

    const handleDeleteColumn = (id) => {
        setColumns(columns => {
            return columns.filter(column => column.id !== id);
        })
    }

    const handleDrop = (event, newColumnId) => {
        event.preventDefault();

        const columnId = event.dataTransfer.getData('columnId');
        const cardId = event.dataTransfer.getData('cardId');

        if (columnId && columnId !== newColumnId) {
            const card = columns.find(column => column.id === columnId).cards.find(card => card.id === cardId);

            setColumns(prevColumns => {
                return prevColumns.map(column => {
                    if (column.id === columnId) {
                        return {
                            ...column,
                            cards:  column.cards.filter(card => card.id !== cardId),
                        }
                    } else if (column.id === newColumnId) {
                        return {
                            ...column,
                            cards:  [...column.cards, card],
                        }
                    }
                    return column;
                })
            });
        }
    }

    const handleDragStart = (event, columnId, cardId) => {
        const target = event.target;
        event.dataTransfer.setData('columnId', columnId);
        event.dataTransfer.setData('cardId', cardId);

        setTimeout(() => {
            target.style.display = "none";
        }, 0)
    }

    const handleDragEnd = (event) => {
        const target = event.target;
        target.style.display = "flex";
    }

    const handleDragOver = event => {
        event.preventDefault();
    }

    return (
        <div className={s.Processes}>
            <div className={s.Processes__header}>
                <div className={s.Processes__titleWrapper}>
                    <Icon name="WavesIcon" color="#3D4044" height="18"/>
                    <h2 className={s.Processes__title}>Процессы проекта CRM - система</h2>
                </div>
                <div className={s.Processes__button}>
                    <Button onClick={handleAddColumn} text={"Добавить столбец"}/>
                </div>
            </div>
            <div className={s.Processes__main}>
                {columns ? (
                    <ul className={s.Processes__list}>
                        {columns.map(column => {
                            return (
                                <li
                                    key={column.id}
                                    className={s.Processes__column}
                                    onDragOver={handleDragOver}
                                    onDrop={(e) => handleDrop(e, column.id)}
                                >
                                    <Column
                                        data={column}
                                        onDelete={handleDeleteColumn}
                                        onDragStart={handleDragStart}
                                        onDragEnd={handleDragEnd}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <div className={s.Processes__message}>
                        Здесь еще нет столбцов
                    </div>
                )}
            </div>
        </div>
    );
}

export default Processes;