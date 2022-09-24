import { cwd } from "process";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { ipcRenderer } = require("electron");

export const handles = [
  {
    eventName: "electronade-process:cwd",
    handler: () => cwd(),
  },
];

export const preloadObject = {
  process: {
    cwd: async () => await ipcRenderer.invoke("electronade-process:cwd"),
  },
};
