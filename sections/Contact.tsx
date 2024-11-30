import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";

interface Social {
  name: string;
  endereco: string;
  link: string;
}
export interface Props {
  background: ImageWidget;
  title: string;
  subtitle: string;
  social: Social[];
  form:{
    name: string
    lastName: string
    canHelp: string
    canHelpOptions: string[]
    mesage: string
    button: string
  }
}

export default function Contact({
  background,
  title,
  subtitle,
  social,
  form
}: Props) {
  return (
    <div class="lg:container text-sm md:px-5 md:p-16 mb-40">
      <div class="space-y-10">
        <div
          class="relative w-full bg-cover bg-center md:rounded-lg px-4 py-8 md:p-16 mb-60 md:mb-40"
          style={`background-image: url(${background})`}
        >
          <div class="p-5 md:p-12 flex flex-col md:flex-row md:justify-between gap-10 lg:gap-40 md:gap-20 bg-white z-50 rounded-lg">
            <div class="md:flex md:flex-col md:justify-between">
              <div class="flex flex-col gap-5">
                <h1 class="text-5xl md:text-5xl font-semibold tracking-tighter w-1/2 md:w-full">
                  {title}
                </h1>
                <p class="text-base md:text-lg text-gray-500 w-[80%] md:w-full mb-5">
                  {subtitle}
                </p>
              </div>
              <div class="flex flex-col gap-6">
                {social.map((item, i) => (
                  <div
                    key={i}
                    class="p-4 flex justify-between items-center border border-gray-300 rounded-2xl"
                  >
                    <div class="flex flex-col gap-2">
                      <Icon id={item.name as AvailableIcons} size={16} strokeWidth={1} />
                      <div class="flex">
                        <p>{item.name}:</p>
                        <p>{item.endereco}</p>
                      </div>
                    </div>
                    <button class="text-pink-500 hover:text-pink-600">
                      <Icon id="ArrowNorthEast" size={16} strokeWidth={1} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div class="w-full h-full">
              <form class="p-6 flex flex-col gap-5 border border-gray-300 rounded-lg">
                <div class="w-full flex flex-col md:flex-row md:gap-2">
                  <div class="w-full flex flex-col gap-2">
                    <label for="nome">{form.name}</label>
                    <input
                      class="px-4 py-3 border border-gray-300 rounded-lg"
                      type="text"
                      id="nome"
                      name="nome"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div class="w-full flex flex-col gap-2">
                    <label class="font-medium" for="sobrenome">
                    {form.lastName}
                    </label>
                    <input
                      class="px-4 py-3 border border-gray-300 rounded-lg"
                      type="text"
                      id="sobrenome"
                      name="sobrenome"
                      placeholder="Seu sobrenome"
                    />
                  </div>
                </div>

                <div class="flex flex-col gap-2">
                  <label for="ajuda">{form.canHelp}</label>
                  <select
                    class="px-4 py-3 border border-gray-300 rounded-lg"
                    id="ajuda"
                    name="ajuda"
                  >
                    <option value="" disabled selected>
                      Selecione
                    </option>
                    {form.canHelpOptions.map((item, i) => (
                      <option key={`${i}+${item}`} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div class="flex flex-col gap-2">
                  <label for="email">E-mail</label>
                  <input
                    class="px-4 py-3 border border-gray-300 rounded-lg"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Seu melhor e-mail"
                  />
                </div>

                <div class="flex flex-col gap-2">
                  <label for="mensagem">{form.mesage}</label>
                  <textarea
                    class="min-h-[110px] px-4 py-3 border border-gray-300 rounded-lg"
                    id="mensagem"
                    name="mensagem"
                    placeholder="Escreva aqui..."
                  ></textarea>
                </div>

                <button
                  class="w-full py-3 text-white bg-pink-500 hover:bg-pink-600 rounded-lg transition duration-300"
                  type="submit"
                >
                  {form.button}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
