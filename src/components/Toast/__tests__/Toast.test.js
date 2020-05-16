import {
  FaInfo,
  FaCheck,
  FaExclamationTriangle,
  FaBug,
  FaExclamationCircle,
} from "react-icons/fa";
import Toast, { displayIcon } from "../index";

const style = {
  marginTop: 3,
};

const initProps = {
  message: "Hello",
  type: "success",
};

const wrapper = mount(<Toast {...initProps} />);
describe("ShowMemberDetails", () => {
  it("renders without errors", () => {
    expect(wrapper.find("ToastMessage").props().message).toEqual("Hello");
    expect(wrapper.find("ToastMessage").props().type).toEqual("success");
  });

  it("renders an success icon", () => {
    const icon = displayIcon("success");
    expect(icon).toEqual(<FaCheck style={style} />);
  });

  it("renders an info icon", () => {
    const icon = displayIcon("info");
    expect(icon).toEqual(<FaInfo style={style} />);
  });

  it("renders an error icon", () => {
    const icon = displayIcon("error");
    expect(icon).toEqual(<FaExclamationCircle style={style} />);
  });

  it("renders a warning icon", () => {
    const icon = displayIcon("warning");
    expect(icon).toEqual(<FaExclamationTriangle style={style} />);
  });

  it("renders a bug icon if missing type", () => {
    const icon = displayIcon("");
    expect(icon).toEqual(<FaBug style={style} />);
  });
});
