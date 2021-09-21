import svg1 from "../../images/svg-1.svg";
import svg2 from "../../images/svg-2.svg";
import svg3 from "../../images/svg-3.svg";

export const homeObject = {
  id: "about",
  lightBg: false,
  lightText: true,
  topLine: "Premium bank",
  headline: "Unlimited Transactions with zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
  buttonLabel: "Get Started",
  imgStart: false,
  img: svg1,
  alt: "transactions",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjectTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  topLine: "Unlimited Access",
  headline: "Login to your account at any time",
  description:
    "We have you covered no matter where you are located. All you need in an internet connection and a phone or computer.",
  buttonLabel: "Learn More",
  imgStart: true,
  img: svg2,
  alt: "transactions",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjectThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  topLine: "Join our Team",
  headline: "Creating an account is extremely easy",
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
  buttonLabel: "Get started",
  imgStart: false,
  img: svg3,
  alt: "transactions",
  dark: false,
  primary: false,
  darkText: true,
};
