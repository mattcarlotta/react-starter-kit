import App from '../index.js';

describe('App', () => {
  const wrapper = mount(<App />);

  it('renders without errors', () => {
    const homeComponent = wrapper.find('.app');
    expect(homeComponent).toHaveLength(1);
  });
});
