import Component from "./cob-error.twig";
import DefaultContent from "./cob-error.json";
import EsContent from "./cob-error~lang-es.json";

export default {
  title: "Pages/Error",
};

export const PageNotFound = () =>
  Component({
    ...DefaultContent,
  });

export const PageNotFoundSpanish = () =>
  Component({
    ...EsContent,
  });
