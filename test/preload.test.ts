import { describe, it } from "mocha";
import { strict as assert } from "assert";
import { mock } from "sinon";

import { preloadObject } from "../src/";

const ipcRenderer: {
  invoke: (eventName: string, ...args: any[]) => Promise<any>;
} = {
  invoke: (eventName: string) => Promise.resolve("value")
};

describe("preloadObject", () => {
  it("preloadObject.process exists", () => {
    assert(preloadObject.process);
  });

  it("preloadObject.process.cwd exists", () => {
    assert(preloadObject.process.cwd);
  });

  it("preloadObject.process.cwd calling", async () => {
    const mocked = mock(ipcRenderer);
    const mockedValue = "mocked value";
    mocked
      .expects("invoke")
      .once()
      .withArgs("electronade-process:cwd")
      .returns(Promise.resolve(mockedValue));

    assert.equal(
      await eval(preloadObject.process.cwd.toString())(),
      mockedValue
    );
    mocked.verify();
    mocked.restore();
  });
});
