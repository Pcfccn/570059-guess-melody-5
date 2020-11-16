import React from "react";
import renderer from "react-test-renderer";
import {GameOverScreen} from "./game-over-screen";

const noop = () => {};

it(`Should GameOverScreen render correctly`, () => {
  const tree = renderer
    .create(
        <GameOverScreen
          onReplayButtonClick={noop}
          resetGame={noop}
        />

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
