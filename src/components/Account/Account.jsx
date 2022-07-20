import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import Avatar from '../Avatar/Avatar';
import numberWithSpaces from '../../helpers/numberWithSpaces';
import s from './Account.module.scss';

function Account({ data }) {
    return (
        <div className={s.Account}>
            <span className={s.Account__price}>
                <span>{numberWithSpaces(data.sum)}</span>
                <span>{data.currency}</span>
            </span>
            <div className={s.Account__button}>
                <Button ariaLabel="Notifications" icon={
                    <Icon name="BellIcon" color="#B8B8B8" width="22" height="22" />
                } />
            </div>
            <div className={s.Account__info}>
                <Avatar src={data.src} />
                <Button
                    text={data.name}
                    icon={<Icon name="ArrowDownIcon" width="10" height="5" />}
                />
            </div>
        </div>
    );
}

export default Account;