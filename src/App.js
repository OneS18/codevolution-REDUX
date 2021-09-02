import "./App.css";
import HooksCakeContainer from "./components/HooksCakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import IceCreamContainer from "./components/IceCreamContainer";
import CakeContainer from "./components/CakeContainer";
import BookComponent from "./components/bookComponent";
import NewCakeContainer from "./components/newCakeContainer";
import ItemContainer from "./components/itemContainer";
import UserContainer from "./components/userContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        <ItemContainer cake />
        <ItemContainer book />
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <BookComponent />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
