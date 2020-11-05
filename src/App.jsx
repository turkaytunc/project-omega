import './app.scss';
import { UserMenu } from './components/user-menu/UserMenu';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <div className="app">
        Hello Etiya
        <UserMenu />
      </div>
    </UserProvider>
  );
}

export default App;
