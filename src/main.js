import { createApp } from "vue";
import "./assets/scss/style.scss";
import App from "./App.vue";
import * as bootstrap from "bootstrap";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faGooglePlus,
  faYoutube
);
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
