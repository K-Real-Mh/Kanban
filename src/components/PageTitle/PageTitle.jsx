import s from './PageTitle.module.scss';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs.jsx';

function PageTitle({ data }) {
    return (
        <div className={s.PageTitle}>
            <h1 className={s.PageTitle__header}>{data.title}</h1>
            <Breadcrumbs icon={data.icon} breadcrumbs={data.breadcrumbs} />
        </div>
    );
}

export default PageTitle