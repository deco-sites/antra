// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_app from "./routes/_app.tsx";
import * as $all_research_pagination from "./islands/all-research-pagination.tsx";
import * as $card_what_we_do from "./islands/card-what-we-do.tsx";
import * as $header_mobile_site from "./islands/header-mobile-site.tsx";
import * as $header_site from "./islands/header-site.tsx";
import * as $projects_pagination from "./islands/projects-pagination.tsx";
import * as $slider_island from "./islands/slider-island.tsx";
import * as $text1_history from "./islands/text1-history.tsx";
import * as $text2_history from "./islands/text2-history.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_app.tsx": $_app,
  },
  islands: {
    "./islands/all-research-pagination.tsx": $all_research_pagination,
    "./islands/card-what-we-do.tsx": $card_what_we_do,
    "./islands/header-mobile-site.tsx": $header_mobile_site,
    "./islands/header-site.tsx": $header_site,
    "./islands/projects-pagination.tsx": $projects_pagination,
    "./islands/slider-island.tsx": $slider_island,
    "./islands/text1-history.tsx": $text1_history,
    "./islands/text2-history.tsx": $text2_history,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
