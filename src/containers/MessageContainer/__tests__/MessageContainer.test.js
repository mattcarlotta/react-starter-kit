import { MessageContainer } from "../index";

const resetMessage = jest.fn();

const initProps = {
  message: "",
  resetMessage,
};

describe("Message Container", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<MessageContainer {...initProps} />);
  });

  afterEach(() => {
    resetMessage.mockClear();
  });

  it("automatically resets server messages after 8 seconds", done => {
    jest.useFakeTimers();
    wrapper.setProps({
      message: "This message auto resets in 8 seconds.",
    });
    jest.advanceTimersByTime(8500);

    expect(resetMessage).toHaveBeenCalledTimes(1);
    jest.runAllTimers();
    done();
  });

  it("doesn't call resetMessage if the message has been reset", () => {
    const nextProps = { ...initProps, message: "Hello" };
    wrapper = mount(<MessageContainer {...nextProps} />);

    wrapper.setProps({
      message: "",
    });

    expect(resetMessage).toHaveBeenCalledTimes(0);
  });

  it("resets the timer and hide the message on unmount", () => {
    wrapper.unmount();

    expect(resetMessage).toHaveBeenCalledTimes(1);
  });
});
