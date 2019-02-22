import { shallow, mount } from 'enzyme';
import checkPropTypes from 'check-prop-types';

/**
 * Factory function to create a ShallowWrapper for a component
 * @function shallowWrap
 * @param {node} Component - Component to be shallowed
 * @param {object} state - initial state for setup.
 * @returns {ShallowWrapper}
 */
export const shallowWrap = (Component, state = null) => {
  const wrapper = shallow(Component);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Factory function to create a MountedWrapper for a component
 * @function mountWrap
 * @param {node} Component - Component to be shallowed
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - initial state for setup.
 * @returns {MountedWrapper}
 */
export const mountWrap = (Component, state = null) => {
  const wrapper = mount(Component);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Component PropType error checking
 * @param {node} Component - Component to be checked.
 * @param {conformingProps} object - Component props to be checked against.
 */
export const checkProps = (Component, conformingProps) => {
  const propError = checkPropTypes(
    Component.propTypes,
    conformingProps,
    'prop',
    Component.name,
  );
  expect(propError).toBeUndefined();
};
