import { createContext } from "react";

interface IMyAppContext {
  meta: {
    name: string;
    subtitle: string;
  };
}
const MyAppContext = createContext<IMyAppContext>(null as any);

export { MyAppContext };
