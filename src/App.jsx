import s from './App.module.scss';

function App() {
  return (
    <div className={s.App}>
        <header className={s.App__header}></header>
        <aside className={s.App__sidebar}></aside>
        <main className={s.App__main}></main>
    </div>
  )
}

export default App
