import { useState, useContext, createContext } from "react";
import { isEmpty } from "lodash";

const formContext = createContext({});

const FormProvider = ({ children }: Props) => {
  const [createStatus, setCreateStatus] = useState([]);

  const resetStatus = () => {
    setCreateStatus([]);
  };

  const contextStates = { createStatus };
  const contextMethods = { setCreateStatus, resetStatus };

  return (
    <formContext.Provider value={{ ...contextStates, ...contextMethods }}>
      {children}
    </formContext.Provider>
  );
};

const useFormCoffee = () => {
  const context = useContext(formContext);

  if (typeof context === "object" && !isEmpty(context)) {
    new Error("FormProvider must be used within a FormContext");
  }

  return context;
};

type Props = {
  children?: React.ReactNode;
};

export { FormProvider, useFormCoffee };
