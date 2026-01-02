import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { AbsoluteFill, Audio, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
const FascistRally = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const officerOpacity = interpolate(frame, [0, 60], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const officerY = spring({
    fps,
    frame,
    config: { damping: 200 }
  });
  const handRaiseDelay = 90;
  const handRaise = frame >= handRaiseDelay ? spring({
    fps,
    frame: frame - handRaiseDelay,
    config: { damping: 150 }
  }) : 0;
  const firstChantDelay = 120;
  const firstChantScale = frame >= firstChantDelay ? spring({
    fps,
    frame: frame - firstChantDelay,
    config: { damping: 100 }
  }) : 0;
  const secondChantDelay = 180;
  const secondChantScale = frame >= secondChantDelay ? spring({
    fps,
    frame: frame - secondChantDelay,
    config: { damping: 100 }
  }) : 0;
  const crowdBreath = interpolate(frame, [0, 1200], [0, Math.PI * 20], { extrapolateRight: "clamp" });
  const crowdScale = 1 + Math.sin(crowdBreath) * 0.02;
  return /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: { backgroundColor: "#1a1a1a" }, children: [
    /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: {
      transform: `scale(${crowdScale})`,
      opacity: 0.9
    }, children: [...Array(25)].map((_, i) => /* @__PURE__ */ jsxDEV("div", { style: {
      position: "absolute",
      left: `${i % 5 * 20 + 10}%`,
      top: `${Math.floor(i / 5) * 15 + 20}%`,
      width: "60px",
      height: "80px",
      backgroundColor: "#2a2a2a",
      borderRadius: "30px 30px 0 0",
      transform: frame >= handRaiseDelay ? `translateY(-${handRaise * 20}px)` : "none",
      transition: "transform 0.3s ease-out"
    } }, i, false, {
      fileName: "<stdin>",
      lineNumber: 53,
      columnNumber: 11
    })) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 47,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: {
      bottom: 0,
      height: "30%",
      backgroundColor: "#8B0000",
      borderTop: "4px solid #FFD700"
    } }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 68,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: {
      bottom: "25%",
      left: "50%",
      transform: `translateX(-50%) translateY(-${officerY * 50}px)`,
      opacity: officerOpacity
    }, children: /* @__PURE__ */ jsxDEV("div", { style: {
      width: "120px",
      height: "150px",
      backgroundColor: "#4a0000",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.5)",
      position: "relative"
    }, children: /* @__PURE__ */ jsxDEV("div", { style: {
      width: "40px",
      height: "40px",
      backgroundColor: "#d4a574",
      borderRadius: "50%",
      position: "absolute",
      top: "10px",
      left: "50%",
      transform: "translateX(-50%)"
    } }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 91,
      columnNumber: 11
    }) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 82,
      columnNumber: 9
    }) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 76,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: {
      top: "15%",
      left: "50%",
      transform: `translateX(-50%) scale(${officerY})`,
      opacity: officerOpacity
    }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: {
        color: "#FFD700",
        fontSize: "28px",
        fontWeight: "bold",
        textAlign: "center",
        textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
        fontFamily: "serif"
      }, children: "\u0633\u0627\u062F\u0629! \u0627\u0644\u0642\u0627\u0626\u062F \u0627\u0644\u0639\u0638\u064A\u0645 \u0645\u062D\u0645\u062F \u062E\u0627\u0644\u062F \u0627\u0644\u062D\u0631\u0628\u064A\u060C \u0645\u0646\u0642\u0630 \u0627\u0644\u0639\u0631\u0628!" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 111,
        columnNumber: 9
      }),
      /* @__PURE__ */ jsxDEV("div", { style: {
        color: "#FFFFFF",
        fontSize: "20px",
        textAlign: "center",
        marginTop: "10px",
        fontFamily: "sans-serif"
      }, children: "Gentlemen! The Great Leader Muhammad Khalid al-Harbi, Savior of the Arabs!" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 121,
        columnNumber: 9
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 105,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: {
      top: "35%",
      left: "50%",
      transform: `translateX(-50%) scale(${1 + firstChantScale * 0.2})`,
      opacity: frame >= firstChantDelay ? 1 : 0
    }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: {
        color: "#FF6B6B",
        fontSize: "32px",
        fontWeight: "bold",
        textAlign: "center",
        textShadow: "3px 3px 6px rgba(0,0,0,0.9)"
      }, children: "\u062A\u0647\u0626 \u0627\u0644\u0642\u0627\u0626\u062F!" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 139,
        columnNumber: 9
      }),
      /* @__PURE__ */ jsxDEV("div", { style: {
        color: "#FFFFFF",
        fontSize: "24px",
        textAlign: "center",
        marginTop: "8px"
      }, children: "Hail The Leader!" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 148,
        columnNumber: 9
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 133,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: {
      top: "50%",
      left: "50%",
      transform: `translateX(-50%) scale(${1 + secondChantScale * 0.15})`,
      opacity: frame >= secondChantDelay ? 1 : 0
    }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: {
        color: "#FFD700",
        fontSize: "22px",
        fontWeight: "bold",
        textAlign: "center",
        textShadow: "2px 2px 4px rgba(0,0,0,0.8)"
      }, children: "\u0646\u062D\u0646 \u0646\u062A\u0628\u0639 \u062D\u0643\u0645\u062A\u0643 \u0627\u0644\u0639\u0638\u064A\u0645\u0629 \u0648\u0631\u0624\u064A\u062A\u0643 \u0627\u0644\u0639\u0638\u064A\u0645\u0629 \u0644\u0644\u0634\u0639\u0628 \u0627\u0644\u0639\u0631\u0628\u064A!" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 165,
        columnNumber: 9
      }),
      /* @__PURE__ */ jsxDEV("div", { style: {
        color: "#FFFFFF",
        fontSize: "16px",
        textAlign: "center",
        marginTop: "8px"
      }, children: "We follow your great wisdom and your great vision for the Arab People!" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 174,
        columnNumber: 9
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 159,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: {
      background: `radial-gradient(circle at center, rgba(255, 215, 0, ${interpolate(frame, [60, 120], [0, 0.3], { extrapolateRight: "clamp" })}) 0%, transparent 70%)`,
      mixBlendMode: "screen"
    } }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 185,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV(Audio, { src: "fascist_rally_chants.mp3" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 191,
      columnNumber: 7
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 45,
    columnNumber: 5
  });
};
export {
  FascistRally
};
