import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { createRoot } from "react-dom/client";
import { Player } from "@websim/remotion/player";
import { FascistRally } from "./composition.jsx";
createRoot(document.getElementById("app")).render(
  /* @__PURE__ */ jsxDEV("div", { style: { width: "100%", height: "100%" }, children: /* @__PURE__ */ jsxDEV(
    Player,
    {
      component: FascistRally,
      durationInFrames: 1200,
      fps: 30,
      compositionWidth: 540,
      compositionHeight: 960,
      loop: true,
      controls: true,
      autoplay: true,
      style: { maxWidth: "100%", maxHeight: "100%" }
    },
    void 0,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 8,
      columnNumber: 5
    }
  ) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 7,
    columnNumber: 3
  })
);
