import s from './App.module.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Router from './components/Router/Router.jsx';

function App() {
  return (
    <div className={s.App}>
        <Header className={s.App__header} />
        <Sidebar className={s.App__sidebar} />
        <Router className={s.App__main} />
    </div>
  )
}

export default App
