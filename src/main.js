import { createApp } from "vue";
import "./assets/scss/style.scss";
import App from "./App.vue";
import * as bootstrap from "bootstrap";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDribbble, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { faCashRegister } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faSkype } from "@fortawesome/free-brands-svg-icons";

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
