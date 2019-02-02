import { setup } from '../../tests/utils';
import Home from './Home.js';

describe('Home', () => {
  const wrapper = setup(Home);

  it('renders without errors', () => {
    const homeComponent = wrapper.find('.app');
    expect(homeComponent).toHaveLength(1);
  });
});
