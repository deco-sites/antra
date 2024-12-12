import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";
import { useState } from "preact/hooks";
import Toast from "../components/utils/Toast.tsx";

export interface Subscribe {
  title: string;
  description: string;
  /** @format rich-text */
  instructions: string;
}

export interface Social {
  network: "Facebook" | "Instagram" | "Linkedin" | "Twitter";
  href: string;
}

export interface Props {
  background?: {
    src?: ImageWidget;
  };
  title?:string;
  links?: {
    label: string;
    href: string;
  }[];
  subscribe?: Subscribe;
  madeWith?: {
    label?: string;
    src?: ImageWidget;
    href?: string;
  };
  copyright?: string;
  social?: Social[];
  privacyPolicy:string
}

export default function FooterIsland({
  background,
  subscribe,
  copyright,
  social,
  links,
  title,
  privacyPolicy
}: Props) {
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");

  const handleFormSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const nomeInput = document.getElementById("name") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;

    if (nomeInput && emailInput) {
      const nome = nomeInput.value;
      const email = emailInput.value;

      const url =
        "https://script.google.com/macros/s/AKfycbwqnjxHoQGTmb0LHr4NUeLFPfxabVfuubEbpRqQpog6qmLxPNQZ5oqVr--UaRPowrof/exec";

      try {
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify({ nome, email }),
        });

        const result = await response.json();
        if (result.status === "sucesso") {
          setToastMessage("Salvo com sucesso!");
          setToastType("sucesso");
        } else {
          setToastMessage("Erro ao salvar.");
          setToastType("erro");
        }
      } catch (err) {
        setToastMessage("Erro na requisição.");
        setToastType("erro");
        console.error(err);
      }
    }
  };

  return (
    <div class="w-full bg-[#0459C5] rounded-t-[16px] px-5 mt-16">
      <div class="lg:container px-5 lg:px-16 text-sm py-16 lg:py-20">
        <div
          class="relative bg-cover bg-center rounded-[16px] p-12 -translate-y-[65%] md:-translate-y-[70%] shadow-lg"
          style={`background-image: url(${background?.src})`}
        >
          <div class="relative z-10 text-white">
            <h2 class="text-[22px] lg:text-[48px] font-medium leading-tight text-left max-w-[600px]">
              {subscribe?.title}
            </h2>
            <form class="flex flex-col gap-6 mt-6" onSubmit={handleFormSubmit}>
              <div class="flex flex-col lg:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Nome"
                  id="name"
                  class="p-3 rounded-md text-black w-full lg:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="E-mail"
                  id="email"
                  class="p-3 rounded-md text-black w-full lg:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  class="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-md transition duration-300 ease-in-out"
                  aria-label="Subscribe"
                >
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="-translate-y-[45%]">
          <h1 class="text-[42px] lg:text-[48px] font-semibold text-left text-white leading-tight">
            {title}
          </h1>

          <nav class="mt-8 grid grid-cols-2 gap-4 lg:flex lg:space-x-8">
            {links?.map((link) => (
              <a
                href={link.href}
                class="underline text-white font-light hover:text-gray-300 transition"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div class="flex flex-col md:flex-row items-start md:items-center space-x-6 mt-8">
            <div class="flex gap-5 mb-5">
              {social?.map((social) => (
                <a
                  href={social.href}
                  class="bg-white rounded-lg w-[40px] h-[40px] flex items-center justify-center hover:bg-gray-200 transition"
                >
                  <Icon
                    id={social.network as AvailableIcons}
                    size={18}
                    strokeWidth={2}
                    class="text-black flex items-center justify-center"
                  />
                </a>
              ))}
            </div>
            <a
              href="mailto:contato@antrabrasil.org"
              class="text-base hover:text-gray-200 text-white pl-4"
            >
              contato@antrabrasil.org
            </a>
          </div>

          <div class="flex flex-col md:flex-row gap-5 justify-between text-sm font-light mt-6 text-white">
            <span>{copyright}</span>
            <a href="#" class="underline hover:text-gray-300 transition">
            {privacyPolicy}
            </a>
          </div>
        </div>
      </div>
      {toastMessage && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setToastMessage("")}
        />
      )}
    </div>
  );
}
