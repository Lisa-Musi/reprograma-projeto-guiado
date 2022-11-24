import { Router } from './Router';
import style from './styles/components/app.module.css';

const App = () => (
  <div className={style.appContainer}>
    <Router />
  </div>
);

export default App;
