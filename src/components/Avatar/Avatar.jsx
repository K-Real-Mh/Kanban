import s from './Avatar.module.scss';

function Avatar({ src }) {
    return <img className={s.Avatar} src={src}  alt="Avatar photo"/>
}

export default Avatar;