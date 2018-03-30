import React from 'react';
import { mount, shallow } from 'enzyme';

import Modal from '../src';

describe('Modal', () => {
  it('Should obey open=false prop', () => {
    const wrapper = mount(<Modal open={false} />);

    expect(wrapper.props().open).toEqual(false);
    expect(wrapper.state('open')).toEqual(false);
  });

  it('Should open when setting open=true', () => {
    const wrapper = mount(<Modal open={false} />);

    expect(wrapper.props().open).toEqual(false);
    expect(wrapper.state('open')).toEqual(false);

    wrapper.setProps({ open: true });

    expect(wrapper.props().open).toEqual(true);
    expect(wrapper.state('open')).toEqual(true);
  });

  it('Should execute callback functions', () => {
    const onOpen = jest.fn();
    const onClose = jest.fn();

    const wrapper = mount(<Modal open={false} onOpen={onOpen} onClose={onClose} />);

    expect(wrapper.props().onOpen).toBe(onOpen);
    expect(wrapper.props().onClose).toBe(onClose);

    expect(onOpen).toHaveBeenCalledTimes(0);
    expect(onClose).toHaveBeenCalledTimes(0);

    wrapper.setProps({ open: true });

    expect(wrapper.props().open).toEqual(true);
    expect(wrapper.state('open')).toEqual(true);

    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(0);

    wrapper.setProps({ open: false });

    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('Should pass props', () => {
    const wrapper = mount(<Modal foo="bar" />);
    const deepModal = wrapper.children().instance().props.children.props.children.props.children;
    expect(deepModal.props.foo).toBeDefined();
    expect(deepModal.props.foo).toEqual('bar');
  });
});
