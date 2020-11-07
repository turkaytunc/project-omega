import './app.scss';
import { Posts } from './components/posts/Posts';
import UserMenuContainer from './components/user/UserMenuContainer';
import { GlobalStateProvider } from './context/GlobalContext';
import { PostStateProvider } from './context/PostContext';

function App() {
  return (
    <GlobalStateProvider>
      <PostStateProvider>
        <div className="app">
          <UserMenuContainer />
          <Posts />
        </div>
      </PostStateProvider>
    </GlobalStateProvider>
  );
}

export default App;
