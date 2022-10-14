import React from "react";
import * as ReactDOMClient from "react-dom/client";
import reactToWebComponent from "react-to-webcomponent";

import { Test } from "./test";

customElements.define(
  "react-test",
  // @ts-ignore
  reactToWebComponent(Test, React, ReactDOMClient, {
    // props: ["header"],
  })
);
