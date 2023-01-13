/// <reference types="vite/client" />

type ModuleList = {
  path?: string;
  name?: string;
  icon?: string;
  children?: ModuleList[];
};

type Size = "small" | "normal" | "large";
