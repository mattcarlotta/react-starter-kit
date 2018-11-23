import { setup, findByTestAttr } from '../../tests/utils';
import Home from './Home.js';

describe('Home component', () => {
  const wrapper = setup(Home);

  it('renders without errors', () => {
    const homeComponent = findByTestAttr(wrapper, 'home-component');
    expect(homeComponent).toHaveLength(1);
  });
});
