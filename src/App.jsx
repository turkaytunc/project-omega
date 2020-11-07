import './app.scss';
import { Posts } from './components/posts/Posts';
import UserMenuContainer from './components/user/UserMenuContainer';
import { GlobalStateProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalStateProvider>
      <div className="app">
        <UserMenuContainer />
        <Posts />
      </div>
    </GlobalStateProvider>
  );
}

export default App;
