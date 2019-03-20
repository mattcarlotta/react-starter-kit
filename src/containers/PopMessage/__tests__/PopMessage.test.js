import { PopMessage } from '../index';

const resetPopMessages = jest.fn();
const setPopMessage = jest.fn();

const initialProps = {
  resetPopMessages,
  serverError: '',
  serverMessage: '',
  setPopMessage,
};

const infoProps = {
  serverMessage: 'Welcome to the React Starter Kit!',
};

const errorProps = {
  serverError: 'There was a problem seeding the database.',
};

describe('Pop Message', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PopMessage {...initialProps} />);
  });

  it("renders null if there isn't a message", () => {
    expect(wrapper.find('div.popMessageContainer')).toHaveLength(0);
  });

  it('initially displays a welcome message', () => {
    wrapper.instance().componentDidMount();
    expect(setPopMessage).toHaveBeenCalledWith(infoProps.serverMessage);
  });

  it('displays an info message', () => {
    wrapper.setProps({ ...infoProps });
    expect(wrapper.find('div.popMessageContainer')).toHaveLength(1);
    expect(wrapper.find('InfoIcon')).toHaveLength(1);
    expect(wrapper.find('p.popMessageStyle').text()).toContain(
      infoProps.serverMessage,
    );
  });

  it('displays an error message', () => {
    wrapper.setProps({ ...errorProps });
    expect(wrapper.find('div.popMessageContainer')).toHaveLength(1);
    expect(wrapper.find('ErrorIcon')).toHaveLength(1);
    expect(wrapper.find('p.popMessageStyle').text()).toContain(
      errorProps.serverError,
    );
  });

  describe('removes the message', () => {
    beforeEach(() => {
      wrapper.setProps({ ...infoProps });
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.clearAllMocks();
      jest.runAllTimers();
    });

    it('if the user clicks the close button', () => {
      wrapper.find('Close').simulate('click');
      expect(resetPopMessages).toHaveBeenCalledTimes(1);
    });

    it('after a 3.5 second timeout', () => {
      setTimeout(() => {
        expect(resetPopMessages).toHaveBeenCalledTimes(1);
      }, 3500);
    });
  });
});
