"use client";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FormProvider } from "./contexts/FormContext";
import { Header } from "./components/Header";
import { SideBarItem } from "./components/SideBarItem";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <div className="bg-[#02044a] text-white min-h-screen">
          <div className="m-auto max-w-[980px] min-h-screen flex flex-col">
            <Header />
            <FormProvider>
              <div className="flex-1 flex">
                <div className="w-[250px] border-r-[1px] border-solid border-[#16195c]">
                  <SideBarItem
                    title="Pessoal"
                    description="Se identifique"
                    icon="profile"
                    path="/"
                    step={1}
                  />
                  <SideBarItem
                    title="Profissional"
                    description="Seu nível"
                    icon="book"
                    path="/step2"
                    step={2}
                  />
                  <SideBarItem
                    title="Contatos"
                    description="Como te encontrar"
                    icon="mail"
                    path="/step3"
                    step={3}
                  />
                  <SideBarItem
                    title="Concluído"
                    description="Sucesso"
                    icon="done"
                    path="/step4"
                    step={4}
                  />
                </div>
                <div className="flex-1 pl-[40px] pt-[40px]">{children}</div>
              </div>
            </FormProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
