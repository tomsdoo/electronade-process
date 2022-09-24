import { describe, it } from "mocha";
import { strict as assert } from "assert";

import { handles, preloadObject } from "../src/";

const ipcRenderer: {
  invoke: (eventName: string, ...args: any[]) => Promise<any>;
} = {
  invoke: (eventName: string) => Promise.resolve(eventName),
};

describe("preloadObject to handles", () => {
  it("preloadObject.process.cwd", async () => {
    const myEventName = await eval(preloadObject.process.cwd.toString())();

    assert(handles.find(({ eventName }) => eventName === myEventName));
  });
});
