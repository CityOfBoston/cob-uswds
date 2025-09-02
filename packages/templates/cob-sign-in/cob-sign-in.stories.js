import SignInForm from "./cob-sign-in.twig";
import SignInMultipleForm from "./cob-sign-in--multiple/cob-sign-in--multiple.twig";
import DefaultContent from "./cob-sign-in.json";
import EsContent from "./cob-sign-in~lang-es.json";
import MultipleContent from "./cob-sign-in--multiple/cob-sign-in--multiple.json";
import EsMultipleContent from "./cob-sign-in--multiple/cob-sign-in--multiple~lang-es.json";

export default {
  title: "Pages/Sign-In",
};

export const SignInPage = () =>
  SignInForm({
    ...DefaultContent,
  });

export const SignInPageSpanish = () =>
  SignInForm({
    ...EsContent,
  });

export const MultipleSignInPage = () =>
  SignInMultipleForm({
    ...MultipleContent,
  });

export const MultipleSignInPageSpanish = () =>
  SignInMultipleForm({
    ...EsMultipleContent,
  });
