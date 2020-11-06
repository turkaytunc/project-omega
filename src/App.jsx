import './app.scss';
import { Posts } from './components/posts/Posts';
import UserMenuContainer from './components/user/UserMenuContainer';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <div className="app">
        <UserMenuContainer />
        <Posts />
      </div>
    </UserProvider>
  );
}

export default App;
