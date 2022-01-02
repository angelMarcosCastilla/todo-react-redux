import { Provider } from "react-redux";
import Form from "./components/Form";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <Form/>
    </Provider>
  );
}

export default App;
