import "https://unpkg.com/franken-ui@2.0.0-internal.42/dist/js/core.iife.js";
import "https://unpkg.com/franken-ui@2.0.0-internal.42/dist/js/icon.iife.js";

const htmlElement = document.documentElement;

const __FRANKEN__ = JSON.parse(
  localStorage.getItem("__FRANKEN__") || "{}"
);

if (
  __FRANKEN__.mode === "dark" ||
  (!__FRANKEN__.mode &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  htmlElement.classList.add("dark");
} else {
  htmlElement.classList.remove("dark");
}

htmlElement.classList.add(__FRANKEN__.theme || "uk-theme-blue");
htmlElement.classList.add(__FRANKEN__.radii || "uk-radii-md");
htmlElement.classList.add(__FRANKEN__.shadows || "uk-shadows-sm");
htmlElement.classList.add(__FRANKEN__.font || "uk-font-sm");
