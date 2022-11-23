import { createApp } from "vue";
import "./assets/scss/style.scss";
import App from "./App.vue";
import * as bootstrap from "bootstrap";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faDribbble,
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faGooglePlus,
  faYoutube,
  faPinterest,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faMagnifyingGlass,
  faBullhorn,
  faBriefcase,
  faChartLine,
  faPalette,
  faGear,
  faFaceSmile,
  faCashRegister,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faCopyright,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faGooglePlus,
  faYoutube,
  faBars,
  faMagnifyingGlass,
  faBullhorn,
  faBriefcase,
  faUser,
  faBookmark,
  faChartLine,
  faPalette,
  faGear,
  faFaceSmile,
  faCashRegister,
  faChevronLeft,
  faChevronRight,
  faPinterest,
  faSkype,
  faDribbble,
  faCopyright
);
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
