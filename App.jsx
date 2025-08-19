import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import * as stylex from "@stylexjs/stylex";

const fadeIn = stylex.keyframes({
  "100%": { opacity: 1 },
});

const escalar = stylex.keyframes({
  "0%": { transform: "scaleX(0)" },
  "100%": { transform: "scaleX(1)" },
});

const rotar = stylex.keyframes({
  "0%": { transform: "rotate(0deg) scale(1)" },
  "100%": { transform: "rotate(-15deg) scale(1.7)" },
});

const styles = stylex.create({
  global: {
    "*": {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
      fontFamily:
        "sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue'",
    },
    a: { WebkitTapHighlightColor: "transparent" },
    html: {
      scrollBehavior: "smooth",
      scrollbarWidth: "thin",
      scrollbarColor: "white transparent",
    },
    body: {
      height: "100vh",
      width: "100%",
      overflow: "hidden",
    },
  },
  container: {
    height: "100vh",
    width: "100%",
    position: "relative",
    animationName: rotar,
    animationDuration: "1s",
    animationTimingFunction: "linear",
    animationFillMode: "forwards",
    animationDelay: "2s",
  },
  symbol: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "14vmax",
    height: "14vmax",
    transform: "translate(-50%, -50%)",
    animationName: fadeIn,
    animationDuration: "0.5s",
    animationTimingFunction: "ease-in-out",
    animationFillMode: "forwards",
    animationDelay: "3s",
    opacity: 0,
  },
  row: {
    height: "33vh",
    width: "100%",
    position: "absolute",
    animationName: escalar,
    animationDuration: "1s",
    animationTimingFunction: "linear",
    animationFillMode: "both",
  },
  rowtop: {
    top: 0,
    left: 0,
    backgroundColor: "dodgerblue",
    transformOrigin: "left",
  },
  rowbottom: {
    right: 0,
    bottom: 0,
    backgroundColor: "mediumturquoise",
    transformOrigin: "right",
    animationDelay: "1s",
  },
});

function App() {
  useEffect(() => {
    let currentOrientation = window.screen.orientation.type;
    function handleOrientation() {
      let newOrientation = window.screen.orientation.type;
      if (
        newOrientation.startsWith("portrait") &&
        currentOrientation.startsWith("landscape")
      ) {
        currentOrientation = newOrientation;
        location.reload();
      } else if (
        newOrientation.startsWith("landscape") &&
        currentOrientation.startsWith("portrait")
      ) {
        currentOrientation = newOrientation;
        location.reload();
      }
    }
    screen.orientation.addEventListener("change", handleOrientation);
    return () =>
      screen.orientation.removeEventListener("change", handleOrientation);
  }, []);

  return (
    <section {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.row, styles.rowtop)}></div>
      <img
        src="assets/simbolo.png"
        alt="simbolo"
        {...stylex.props(styles.symbol)}
      />
      <div {...stylex.props(styles.row, styles.rowbottom)}></div>
    </section>
  );
}

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <stylex.Style {...stylex.props(styles.global)} />
    <App />
  </React.StrictMode>
);
