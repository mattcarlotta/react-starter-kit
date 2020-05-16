import NotFound from "../index.js";

describe("NotFound", () => {
  const wrapper = shallow(<NotFound />);

  it("renders without errors", () => {
    const notFoundComponent = wrapper.find(".notfoundContainer");
    expect(notFoundComponent).toHaveLength(1);
  });
});
