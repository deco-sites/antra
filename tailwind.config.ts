import daisyui from "daisyui";
import { colors } from "$fresh/src/server/deps.ts";

export default {
  fontWeight: {
    hairline: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    "extra-bold": "800",
    black: "900",
  },
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      animation: {
        sliding: "sliding 30s linear infinite",
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      colors: {
        "custom-gray": "#303030",
        "pink-500": "#F45777",
        "pink-600": "#9E133F",
      },
    },
    screens: {
      sm: "640px", // Telas pequenas (mobile)
      md: "768px", // Telas médias (tablets)
      lg: "1024px", // Telas grandes (desktop)
      xl: "1280px", // Telas extra grandes (laptops grandes / telas HD)
      "2xl": "1536px", // Telas muito grandes (ex: telas 4K)
    },
  },
};
