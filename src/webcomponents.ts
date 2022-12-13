import React from "react";
import * as ReactDOMClient from "react-dom/client";
import reactToWebComponent from "react-to-webcomponent";

import { Header } from "./Header";

customElements.define(
  "rwc-header",
  // @ts-ignore
  reactToWebComponent(Header, React, ReactDOMClient, {
    props: ["text"],
  })
);
