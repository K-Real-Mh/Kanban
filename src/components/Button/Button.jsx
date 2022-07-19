import s from './Button.module.scss';

function Button({ icon, text, ariaLabel }) {
    return (
        <button
            type="button"
            className={s.Button}
            aria-label={ariaLabel}
        >
            {text && <span className={s.Button__text}>{text}</span>}
            {icon}
        </button>
    )
}

export default Button;