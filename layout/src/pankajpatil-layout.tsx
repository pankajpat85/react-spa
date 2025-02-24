import React from "react";
import ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const RenderApp = (props) => {
  return <Root />
}

const lifecycles = singleSpaReact({
  renderType: "createRoot", // Use createRoot for React 18 and above
  React,
  ReactDOMClient,
  rootComponent: RenderApp,
  errorBoundary(err, info, props) {
    return <div>Error: {err.message}</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
