import Vue from "vue";
import GAuth from "vue-google-oauth2";

const gauthOption = {
  clientId:
    "468310613534-4t55uodndqef68ouvgd0s7tgsmaush70.apps.googleusercontent.com",
  scope: "profile email",
  prompt: "select_account"
};
Vue.use(GAuth, gauthOption);
