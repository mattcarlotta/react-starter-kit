import { resetPopMessages, setPopMessage, setPopErrorMessage } from '../server';

const initialState = {
  error: '',
  message: '',
};

describe('Server Actions', () => {
  let store;
  let serverMessage;
  let serverError;
  beforeEach(() => {
    store = createStoreFactory();
    serverMessage = 'Welcome to the React SSR boilerplate';
    serverError = 'Error';
  });

  it('adds a serverMessage to redux state', async () => {
    await store.dispatch(setPopMessage(serverMessage));
    const {
      server: { message },
    } = store.getState();
    expect(message).toBe(serverMessage);
  });

  it('adds an serverError to redux state', async () => {
    await store.dispatch(setPopErrorMessage(serverError));
    const {
      server: { error },
    } = store.getState();
    expect(error).toBe(serverError);
  });

  it('removes all server messages from redux state', async () => {
    await store.dispatch(setPopMessage(serverMessage));
    await store.dispatch(setPopErrorMessage(serverError));
    await store.dispatch(resetPopMessages());
    const { server } = store.getState();
    expect(server).toEqual(initialState);
  });
});
