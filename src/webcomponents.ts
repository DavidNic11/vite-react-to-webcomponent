import React from "react";
import * as ReactDOMClient from "react-dom/client";
import reactToWebComponent from "react-to-webcomponent";

import { Button } from "./Button";
import { Counter } from "./Counter";
import { Header } from "./Header";

customElements.define(
  "rwc-header",
  // @ts-ignore
  reactToWebComponent(Header, React, ReactDOMClient, {
    props: ["title"],
  })
);

customElements.define(
  "rwc-header",
  // @ts-ignore
  reactToWebComponent(Button, React, ReactDOMClient, {
    props: ["primary", "backgroundColor", "size", "label", "onClick"],
  })
);

customElements.define(
  "rwc-header",
  // @ts-ignore
  reactToWebComponent(Counter, React, ReactDOMClient, {
    props: ["title"],
  })
);
