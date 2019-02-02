import { setupMount } from '../tests/utils';
import App from './root.js';

describe('App', () => {
  const wrapper = setupMount(App);

  it('renders without errors', () => {
    const homeComponent = wrapper.find('.app');
    expect(homeComponent).toHaveLength(1);
  });
});
