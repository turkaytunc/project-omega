import './app.scss';
import { Posts } from './components/PostContainer/posts/Posts';
import UserMenuContainer from './components/user/UserMenuContainer';
import { GlobalStateProvider } from './context/GlobalContext';
import { ModalContextProvider } from './context/ModalContext';
import { PostStateProvider } from './context/PostContext';
import { RemovePostContextProvider } from './context/RemovePostContext';
import { DetailsModal } from './components/PostContainer/hover-menu/details-modal/DetailsModal';
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
                <DetailsModal></DetailsModal>
              </div>
            </ModalStateContextProvider>
          </ModalContextProvider>
        </RemovePostContextProvider>
      </PostStateProvider>
    </GlobalStateProvider>
  );
}

export default App;
