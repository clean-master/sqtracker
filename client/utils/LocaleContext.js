import { createContext } from "react";

export default createContext({
  locale: "zh",
  setLocale: () => {},
  locales: [],
  getLocaleString: () => {},
});
