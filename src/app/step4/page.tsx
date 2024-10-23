"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, FormActions } from "../contexts/FormContext";
import { useEffect } from "react";

const FormStep4 = () => {
  const router = useRouter();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      router.push("/");
    } else {
      dispatch({ type: FormActions.setCurrentStep, payload: 4 });
    }
  }, []);

  const handleEmailChange = (e: string) => {
    dispatch({ type: FormActions.setEmail, payload: e });
  };

  const handleGithubChange = (e: string) => {
    dispatch({ type: FormActions.setGithub, payload: e });
  };

  const handleNextStep = () => {
    if (state.email !== "" && state.github !== "") {
      console.log(state);
    } else {
      alert("Preencha os dados");
    }
  };
  return (
    <div className="h-full pr-2   ">
      <h2 className="text-[35px] font-bold text-[#25cd89]">Parabéns</h2>
      <p className="text-[25px] ">Cadastro enviado com sucesso!</p>
      <p>
        Enviamos um email para: <b className="text-[#25cd89]">{state.email} </b>
        com a confirmação do cadastro
      </p>
    </div>
  );
};
export default FormStep4;
