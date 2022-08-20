import { cwd } from "process";
const { ipcRenderer } = require("electron");

export const handles = [
  {
    eventName: "electronade-process:cwd",
    handler: () => cwd()
  }
];

export const preloadObject = {
  process: {
    cwd: () => ipcRenderer.invoke("electronade-process:cwd")
  }
};
