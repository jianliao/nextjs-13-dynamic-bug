import * as React from "react";
import { createComponent } from "@lit-labs/react";
import { Theme as SpTheme } from "@spectrum-web-components/theme";

import "@spectrum-web-components/theme/sp-theme.js";
import "@spectrum-web-components/theme/express/theme-dark.js";
import "@spectrum-web-components/theme/express/theme-light.js";
import "@spectrum-web-components/theme/express/scale-medium.js";

export const Theme = createComponent({
  displayName: "Theme",
  elementClass: SpTheme,
  react: React,
  tagName: "sp-theme",
  events: {},
});

export type ThemeType = SpTheme;
