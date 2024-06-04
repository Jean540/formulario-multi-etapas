"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, FormActions } from "./contexts/FormContext";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({ type: FormActions.setCurrentStep, payload: 1 });
  }, []);

  const handleNameChange = (e: string) => {
    dispatch({ type: FormActions.setName, payload: e });
  };

  const handleNextStep = () => {
    if (state.name) {
      router.push("/step2");
    } else {
      alert("Preencha os dados");
    }
  };
  return (
    <div className="h-full">
      <p className="text-[13px] font-[#b8b8d4]">Passo {state.currentStep}/3</p>
      <h1 className="m-0 p-0 text-[26px]">Vamos começar com seu nome</h1>
      <p className="text-[13px] font-[#b8b8d4]">
        Preencha o campo abaixo com seu nome completo.
      </p>

      <hr className="h-[1px] border-0 bg-[#16195c] my-[30px] mx-0" />
      <label className="text-[13px]" htmlFor="">
        Seu nome completo
        <input
          className="block mt-[7px] box-border w-full py-[20px] px-[10px] border-[2px] border-solid border-[#25cd89] rounded-[10px] text-white outline-none text-[15px] bg-[#02044a]"
          type="text"
          value={state.name}
          autoFocus
          onChange={(e) => handleNameChange(e.target.value)}
        />
      </label>

      <button
        onClick={handleNextStep}
        className="inline-block bg-[#25cd89] text-white text-[14px] font-bold py-[20px] px-[40px] border-0 rounded-[30px] cursor-pointer mt-[30px]"
      >
        Próximo
      </button>
    </div>
  );
};
export default Page;
