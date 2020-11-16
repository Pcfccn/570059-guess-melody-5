import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

describe(`App component tests`, () => {
  it(`Render App, snapshotTest`, () => {
    const tree = renderer
      .create(
          <App />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
