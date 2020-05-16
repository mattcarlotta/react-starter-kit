import { resetMessage, setMessage } from "../messages";

describe("Message Actions", () => {
  let store;
  let serverMessage;
  beforeEach(() => {
    store = createStoreFactory();
    serverMessage = "Welcome to the React Starter Kit!";
  });

  it("adds a message to redux state", async () => {
    await store.dispatch(setMessage(serverMessage));
    const { message } = store.getState();
    expect(message).toEqual(serverMessage);
  });

  it("removes all messages from redux state", async () => {
    await store.dispatch(setMessage(serverMessage));
    await store.dispatch(resetMessage());
    const { message } = store.getState();
    expect(message).toEqual("");
  });
});
