import { describe, it } from "mocha";
import { strict as assert } from "assert";

import { handles } from "../src/";
import { cwd } from "process";

describe("handles", () => {
  it("electronade-process:cwd eventName exists", () => {
    assert(
      handles.find(
        ({ eventName }) =>
          eventName === "electronade-process:cwd"
      )
    );
  });

  it("electronade-process:cwd handler", () => {
    assert.equal(
      (handles.find(
        ({ eventName }) =>
          eventName === "electronade-process:cwd"
      ) as { handler: Function })
        .handler(),
      cwd()
    );
  });
});
