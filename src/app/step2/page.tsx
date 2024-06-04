"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, FormActions } from "../contexts/FormContext";
import { useEffect } from "react";
import { SelectOption } from "../components/SelectOption";

const FormStep2 = () => {
  const router = useRouter();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      router.push("/");
    } else {
      dispatch({ type: FormActions.setCurrentStep, payload: 2 });
    }
  }, []);

  const handleNextStep = () => {
    if (state.name) {
      router.push("/step3");
    } else {
      alert("Preencha os dados");
    }
  };

  const handleSelectLevel = (level: 0 | 1) => {
    dispatch({ type: FormActions.setLevel, payload: level });
  };

  return (
    <div className="h-full">
      <p className="text-[13px] font-[#b8b8d4]">Passo {state.currentStep}/3</p>
      <h1 className="m-0 p-0 text-[26px]">
        {state.name}, o que melhor descreve você?
      </h1>
      <p className="text-[13px] font-[#b8b8d4]">
        Escolha a opção que melhor condiz com seu estado atual,
        profissionalmente
      </p>

      <hr className="h-[1px] border-0 bg-[#16195c] my-[30px] mx-0" />

      <SelectOption
        title="Sou iniciante"
        description="Comecei a aprograma há menos de 2 anos"
        icon="🥳"
        selected={state.level === 0}
        handleSetLevel={() => handleSelectLevel(0)}
      />
      <SelectOption
        title="Sou programador"
        description="Já programo há 2 anos ou mais"
        icon="😎"
        selected={state.level === 1}
        handleSetLevel={() => handleSelectLevel(1)}
      />

      <Link href="/" className="text-[16px] py-[20px] px-[40px] text-[#B8b8d4]">
        Voltar
      </Link>
      <button
        onClick={handleNextStep}
        className="inline-block bg-[#25cd89] text-white text-[14px] font-bold py-[20px] px-[40px] border-0 rounded-[30px] cursor-pointer mt-[30px]"
      >
        Próximo
      </button>
    </div>
  );
};
export default FormStep2;
