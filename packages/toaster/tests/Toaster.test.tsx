import React from "react";
import { shallow, mount } from "enzyme";
import { Toaster, Toast } from "../";
import { DELAY_TIME } from "../components/Toaster";

describe("Toaster", () => {
  it("stores toasts in state", () => {
    const component = shallow(
      <Toaster children={[<Toast id={0} title="I Am Toast" key={0} />]} />
    );
    expect(Object.keys(component.state("toasts")).length).toBe(1);
  });

  it("clears timers on mouseEnter and sets timers on mouseLeave", () => {
    const clearTimeoutsSpy = spyOn(Toaster.prototype, "clearTimeouts");
    const setTimerSpy = spyOn(Toaster.prototype, "setTimer");
    const component = shallow(
      <Toaster children={[<Toast id={0} title="I Am Toast" key={0} />]} />
    );

    component.find("ol").simulate("mouseEnter");
    expect(clearTimeoutsSpy).toHaveBeenCalled();
    component.find("ol").simulate("mouseLeave");
    expect(setTimerSpy).toHaveBeenCalled();
  });

  it("dismisses toasts", () => {
    const testToast = [<Toast id={0} title="I Am Toast" key={0} />];
    const component = shallow(<Toaster children={testToast} />);
    const instance = component.instance() as Toaster;
    instance.dismissToast(testToast[0].props.id);

    expect(component.state("toasts")).not.toContain(testToast[0].props.id);
  });

  it("dismisses toasts after specified time", () => {
    const testToast = [<Toast id={0} title="I Am Toast" key={0} />];
    const component = shallow(<Toaster children={testToast} />);

    expect(Object.keys(component.state("toasts")).length).toBe(1);
    setTimeout(() => {
      expect(Object.keys(component.state("toasts")).length).toBe(0);
    }, DELAY_TIME + 1);
  });

  it("dismisses autodismiss toasts after specified time", () => {
    const testToast = [
      <Toast id={0} autodismiss={true} title="I Am Toast" key={0} />
    ];
    const component = shallow(<Toaster children={testToast} />);

    expect(Object.keys(component.state("toasts")).length).toBe(1);
    setTimeout(() => {
      expect(Object.keys(component.state("toasts")).length).toBe(0);
    }, DELAY_TIME + 1);
  });

  it("adds new `toast` with new toast received via props", () => {
    const testToastId = "testToastId";
    const ToastWithProps = passedProps => (
      <Toaster
        children={[
          <Toast {...passedProps} title="I Am Toast" key={1} id={testToastId} />
        ]}
      />
    );
    const newProps = {
      children: [<Toast id={0} key={0} title="I Am Toast" />]
    };
    const component = mount(<ToastWithProps />);
    const instance = component.find(Toaster).instance() as Toaster;

    expect(instance.state.toasts && instance.state.toasts.length).toEqual(1);
    instance.componentWillReceiveProps(newProps);
    expect(instance.state.toasts && instance.state.toasts.length).toEqual(2);
  });
});
