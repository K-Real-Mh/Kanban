import cn from 'classnames/bind';
import s from './Router.module.scss';
import PageTitle from '../PageTitle/PageTitle.jsx';
import Processes from '../../pages/Processes/Processes.jsx';
import { pageData } from '../../data/pageData.js';

function Router({ className }) {
    return (
        <main className={cn(s.Router, className)}>
            <div className={s.Router__header}>
                <PageTitle data={pageData} />
            </div>
            <Processes />
        </main>
    );
}

export default Router;