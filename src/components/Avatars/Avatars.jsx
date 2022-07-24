import s from './Avatars.module.scss';
import Avatar from '../Avatar/Avatar.jsx';

function Avatars({ avatars }) {
    if (!avatars || avatars.length === 0) return null;

    return (
        <ul className={s.Avatars}>
            {
                avatars.map((avatar, idx) => {
                    return (
                        <li key={idx} className={s.Avatars__avatar}>
                            <Avatar src={avatar} />
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default Avatars;