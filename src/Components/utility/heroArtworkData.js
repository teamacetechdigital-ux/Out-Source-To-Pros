import seoHeroDashboard from "../../assets/imgs/seo/seo-hero.png";
import webdesignHeroDashboard from "../../assets/imgs/webdesign/bannerimg.png";
import devHeroDashboard from "../../assets/imgs/webdevelopment/developmentImg.png";
import brandingHeroDashboard from "../../assets/imgs/branding/branding-img.png";
import appHeroDashboard from "../../assets/imgs/appdevelopment/app-development.png";

const seoBlue = "#719AF3";
const editorTopIcon = { crop: { x: 313, y: 0, width: 75, height: 75 } };
const editorTopConnector = { d: "M 388 36 H 533 V 88", color: "#1550E4", dash: "8 6" };
const editorBottomConnector = { d: "M 439 521 V 587 H 545", color: "#fff", dash: "8 6" };
const editorBorderRepair = { d: "M 439 521 V 545", x: 5 };

// Coordinates are in SVG viewBox units so the layers scale together.
const heroArtwork = {
  seoHeroDashboard: {
    image: seoHeroDashboard,
    width: 1756,
    height: 1288,
    icons: [
      { crop: { x: 606, y: 0, width: 148, height: 148 } },
      { crop: { x: 932, y: 8, width: 100, height: 100 } },
      { crop: { x: 828, y: 174, width: 100, height: 100 } },
      { crop: { x: 190, y: 490, width: 148, height: 148 } },
      { crop: { x: 1596, y: 524, width: 148, height: 148 } },
    ],
    connectors: [
      { d: "M 754 72 H 932", cut: "M 754 72 H 926", color: seoBlue, dash: "14 14" },
      { d: "M 650 148 V 226 H 828", cut: "M 650 148 V 226 H 822", color: seoBlue, dash: "15 13" },
      { d: "M 503 568 H 338", color: seoBlue, dash: "16 15", dot: [503, 567] },
      { d: "M 1478 727 V 596 H 1598", cut: "M 1588 596 H 1478 V 727", color: seoBlue, dash: "14 14", dot: [1479, 727] },
    ],
    repairs: [
      { d: "M 338 568 H 503", y: -5 },
      { d: "M 1588 596 H 1476", y: 5 },
      { d: "M 1478 595 V 727", x: 5 },
      { dot: [503, 567], x: -20 },
      { dot: [1479, 727], x: 20 },
    ],
  },
  webdesignHeroDashboard: {
    image: webdesignHeroDashboard,
    width: 969,
    height: 622,
    icons: [editorTopIcon, { crop: { x: 545, y: 547, width: 75, height: 75 } }],
    connectors: [editorTopConnector, editorBottomConnector],
    repairs: [editorBorderRepair],
  },
  devHeroDashboard: {
    image: devHeroDashboard,
    width: 998,
    height: 672,
    icons: [editorTopIcon, { crop: { x: 561, y: 564, width: 42, height: 43 }, backing: "white" }],
    connectors: [editorTopConnector, editorBottomConnector],
    repairs: [editorBorderRepair, { d: "M 499 587 H 545", y: -5 }],
  },
  brandingHeroDashboard: {
    image: brandingHeroDashboard,
    width: 961,
    height: 672,
    icons: [editorTopIcon, { crop: { x: 560, y: 563, width: 44, height: 44 }, backing: "white" }],
    connectors: [editorTopConnector, editorBottomConnector],
    repairs: [editorBorderRepair, { d: "M 519 587 H 545", y: -5 }],
  },
  appHeroDashboard: {
    image: appHeroDashboard,
    width: 999,
    height: 695,
    icons: [
      editorTopIcon,
      { crop: { x: 560, y: 560, width: 48, height: 48 }, backing: "white" },
      { crop: { x: 114, y: 620, width: 76, height: 75 } },
    ],
    connectors: [
      editorTopConnector,
      editorBottomConnector,
      { d: "M 189 659 H 279 V 543", color: "#fff", dash: "8 6" },
    ],
    repairs: [editorBorderRepair, { d: "M 279 542 V 562", x: 5 }],
  },
};

export default heroArtwork;
