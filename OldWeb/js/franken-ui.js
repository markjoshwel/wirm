import "franken-ui/js/core.iife";
import "franken-ui/js/icon.iife";

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
