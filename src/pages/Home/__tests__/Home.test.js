import Home from "../index.js";

describe("Home", () => {
  const wrapper = shallow(<Home />);

  it("renders without errors", () => {
    const homeComponent = wrapper.find(".app");
    expect(homeComponent).toHaveLength(1);
  });
});
