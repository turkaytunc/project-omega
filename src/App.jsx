import './app.scss';
import { Posts } from './components/PostContainer/posts/Posts';
import UserMenuContainer from './components/user/UserMenuContainer';
import { GlobalStateProvider } from './context/GlobalContext';
import { ModalContextProvider } from './context/ModalContext';
import { PostStateProvider } from './context/PostContext';
import { RemovePostContextProvider } from './context/RemovePostContext';
import { Modal } from './components/PostContainer/hover-menu/modal/Modal';
import { ModalStateContextProvider } from './context/ModalStateContext';

function App() {
  return (
    <GlobalStateProvider>
      <PostStateProvider>
        <RemovePostContextProvider>
          <ModalContextProvider>
            <ModalStateContextProvider>
              <div className="app">
                <UserMenuContainer />
                <Posts />
                <Modal></Modal>
              </div>
            </ModalStateContextProvider>
          </ModalContextProvider>
        </RemovePostContextProvider>
      </PostStateProvider>
    </GlobalStateProvider>
  );
}

export default App;
