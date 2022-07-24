import s from './Button.module.scss';

function Button({ icon, text, ariaLabel, onClick }) {

    const handleClick = (event) => {
        if (onClick) {
            onClick(event);
        }
    }

    return (
        <button
            type="button"
            className={s.Button}
            aria-label={ariaLabel}
            onClick={handleClick}
        >
            {text && <span className={s.Button__text}>{text}</span>}
            {icon}
        </button>
    )
}

export default Button;