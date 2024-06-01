//Context(Caixa que armazenará os dados), Reducer(quem executa açoes especificas), Provider(ambiente onde temos acessos aos dados do contexto), Hook(ele vai simplificar o processo de acesso ao nosso contexto dentro das paginas)
import { ReactNode, createContext, useContext, useReducer } from "react";

type State = {
  currentStep: number;
  name: string;
  level: 0 | 1;
  email: string;
  github: string;
};

type Action = {
  type: FormActions;
  payload: any;
};

type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
};

const initialData: State = {
  currentStep: 0,
  name: "",
  level: 0,
  email: "",
  github: "",
};

// Context
const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer
export enum FormActions /*enum = enumerado */ {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub,
}
const FormReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormActions.setName:
      return { ...state, name: action.payload };
    case FormActions.setLevel:
      return { ...state, level: action.payload };
    case FormActions.setEmail:
      return { ...state, email: action.payload };
    case FormActions.setGithub:
      return { ...state, github: action.payload };
    default:
      return state;
  }
};

// Provider
export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(
    FormReducer,
    initialData
  ); /*Dispatch é a função que utilizamos para executar as ações */
  const value = { state, dispatch };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

// Context Hook
export const useForm = () => {
  const context = useContext(FormContext);

  /* se context for undefined quer dizer que estamos tentando acessar o Hook em um componente que está fora do nosso provider */
  if (context === undefined) {
    throw new Error("UseForm precisa ser usado dentro do FormProvider");
  }
  return context;
};
