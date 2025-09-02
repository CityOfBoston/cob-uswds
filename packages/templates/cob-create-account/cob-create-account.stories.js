// Import page content
import Component from "./cob-create-account.twig";
import DefaultContent from "./cob-create-account.json";
import EsContent from "./cob-create-account~lang-es.json";

export default {
  title: "Pages/Create Account",
};

export const CreateAccountPage = () =>
  Component({
    ...DefaultContent,
  });

export const CreateAccountPageSpanish = () =>
  Component({
    ...EsContent,
  });
