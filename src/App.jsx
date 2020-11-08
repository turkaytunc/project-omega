import './app.scss';
import { Posts } from './components/PostContainer/posts/Posts';
import UserMenuContainer from './components/user/UserMenuContainer';
import { GlobalStateProvider } from './context/GlobalContext';
import { PostStateProvider } from './context/PostContext';
import { RemovePostContextProvider } from './context/RemovePostContext';

function App() {
  return (
    <GlobalStateProvider>
      <PostStateProvider>
        <RemovePostContextProvider>
          <div className="app">
            <UserMenuContainer />
            <Posts />
          </div>
        </RemovePostContextProvider>
      </PostStateProvider>
    </GlobalStateProvider>
  );
}

export default App;
