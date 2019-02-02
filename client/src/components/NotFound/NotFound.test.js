import { setup } from '../../tests/utils';
import NotFound from './NotFound.js';

describe('NotFound', () => {
  const wrapper = setup(NotFound);

  it('renders without errors', () => {
    const notFoundComponent = wrapper.find('.notfoundContainer');
    expect(notFoundComponent).toHaveLength(1);
  });
});
