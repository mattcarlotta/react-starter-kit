import { setup, findByTestAttr } from '../../tests/utils';
import NotFound from './NotFound.js';

describe('NotFound component', () => {
  const wrapper = setup(NotFound);

  it('renders without errors', () => {
    const notFoundComponent = findByTestAttr(wrapper, 'notfound-component');
    expect(notFoundComponent).toHaveLength(1);
  });
});
