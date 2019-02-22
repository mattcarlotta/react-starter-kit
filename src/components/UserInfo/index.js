/* @flow */

import loadable from 'react-loadable';
import Loading from '../Loading';

export default loadable({
  loader: () => import('./UserInfo'),
  loading: Loading
});
