import React from 'react';
import { shallow } from 'enzyme';
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
 * Return ShallowWrapper containing node(s) with the given data-test val.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) =>
  wrapper.find(`[data-test="${val}"]`);

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
