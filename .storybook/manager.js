import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

const theme = create({
  base: "light",
  colorSecondary: "#D03801",
  appBg: "#F6F9FC",
  appContentBg: "#FFFFFF",
  appBorderColor: "rgba(0,0,0,.1)",
  appBorderRadius: 4,
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",
  textColor: "#333333",
  textInverseColor: "#FFFFFF",
  textMutedColor: "#666666",
  barTextColor: "#999999",
  barSelectedColor: "#D03801",
  barBg: "#FFFFFF",
  inputBg: "#FFFFFF",
  inputBorder: "rgba(0,0,0,.3)",
  inputTextColor: "#333333",
  inputBorderRadius: 4,
  brandTitle: "Bitovi Storybook",
  brandUrl: "https://bitovi.com",
  brandImage:
    "https://2171535.fs1.hubspotusercontent-na1.net/hubfs/2171535/Bitovi_July_2016_Theme/Images/bitovi-logo.png",
});

addons.setConfig({
  theme,
});
