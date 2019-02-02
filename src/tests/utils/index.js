import React from 'react';
import { shallow, mount } from 'enzyme';
import checkPropTypes from 'check-prop-types';

/**
 * Factory function to create a ShallowWrapper for the Home component
 * @function setup
 * @param {node} Component - Component to be shallowed
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - initial state for setup.
 * @returns {ShallowWrapper}
 */
export const setup = (Component, props = {}, state = null) => {
  const wrapper = shallow(<Component {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Factory function to create a MountedWrapper for a component
 * @function setupMount
 * @param {node} Component - Component to be shallowed
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - initial state for setup.
 * @returns {MountedWrapper}
 */
export const setupMount = (Component, props = {}, state = null) => {
  const wrapper = mount(<Component {...props} />);
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
