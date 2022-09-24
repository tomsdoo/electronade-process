import { describe, it } from "mocha";
import { strict as assert } from "assert";

import { handles, preloadObject } from "../src/";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ipcRenderer: {
  invoke: (eventName: string, ...args: any[]) => Promise<any>;
} = {
  invoke: async (eventName: string) => await Promise.resolve(eventName),
};

describe("preloadObject to handles", () => {
  it("preloadObject.process.cwd", async () => {
    // eslint-disable-next-line no-eval
    const myEventName = await eval(preloadObject.process.cwd.toString())();

    assert(handles.find(({ eventName }) => eventName === myEventName));
  });
});
