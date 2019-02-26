import { createBrowserHistory } from "history";
import { App } from "../App";
import routes from "../../../routes";
import configureStore from "../../../store/configureStore";

const history = createBrowserHistory();
const initialState = window.__INITIAL_STATE__;
const store = configureStore(history, initialState);

const wrapper = mount(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App route={routes} />
    </ConnectedRouter>
  </Provider>
);

describe("App", () => {
  it("renders without errors", () => {
    expect(wrapper.find(".appContainer")).toHaveLength(1);
  });
});
