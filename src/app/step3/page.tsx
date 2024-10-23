"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, FormActions } from "../contexts/FormContext";
import { useEffect } from "react";

const FormStep3 = () => {
  const router = useRouter();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      router.push("/");
    } else {
      dispatch({ type: FormActions.setCurrentStep, payload: 3 });
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
      router.push("./step4");
    } else {
      alert("Preencha os dados");
    }
  };
  return (
    <div className="h-full">
      <p className="text-[13px] font-[#b8b8d4]">
        <p className="text-[13px] font-[#b8b8d4]">
          Passo {state.currentStep}/3
        </p>
      </p>
      <h1 className="m-0 p-0 text-[26px]">
        Legal {state.name}, onde te achamos?
      </h1>
      <p className="text-[13px] font-[#b8b8d4]">
        Preencha com seus dados para conseguirmos entrar em contato.
      </p>

      <hr className="h-[1px] border-0 bg-[#16195c] my-[30px] mx-0" />
      <label className="text-[13px]" htmlFor="">
        Qual o seu e-mail?
        <input
          className="block mt-[7px] box-border w-full py-[20px] px-[10px] border-[2px] border-solid border-[#25cd89] rounded-[10px] text-white outline-none text-[15px] bg-[#02044a]"
          type="email"
          value={state.email}
          onChange={(e) => handleEmailChange(e.target.value)}
        />
      </label>
      <label className="text-[13px]" htmlFor="">
        Qual o seu Github?
        <input
          className="block mt-[7px] box-border w-full py-[20px] px-[10px] border-[2px] border-solid border-[#25cd89] rounded-[10px] text-white outline-none text-[15px] bg-[#02044a]"
          type="url"
          value={state.github}
          onChange={(e) => handleGithubChange(e.target.value)}
        />
      </label>
      <Link
        href="/step2"
        className="text-[16px] py-[20px] px-[40px] text-[#B8b8d4]"
      >
        Voltar
      </Link>
      <button
        onClick={handleNextStep}
        className="inline-block bg-[#25cd89] text-white text-[14px] font-bold py-[20px] px-[40px] border-0 rounded-[30px] cursor-pointer mt-[30px]"
      >
        Finalizar Cadastro
      </button>
    </div>
  );
};
export default FormStep3;
