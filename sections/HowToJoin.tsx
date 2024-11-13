import Icon from "site/components/ui/Icon.tsx";

export default function HowToJoin() {
  return (
    <div class="lg:container text-sm md:px-5 md:p-16">
      <div class="space-y-10 flex justify-center">
        <div class="w-full md:max-w-[1354px] flex flex-col gap-12 py-24 px-16 justify-center items-start md:rounded-lg bg-blue-700">
          <h2 class="text-5xl font-semibold text-white">
            Como se filiar a ANTRA
          </h2>
          <div class="flex flex-col md:flex-row gap-5 w-full">
            <div class="w-full p-12 flex flex-col gap-6 bg-white rounded-xl">
              <span class="text-blue-200 text-[100px] font-bold leading-none">
                01
              </span>

              <div class="flex justify-between items-center">
                <p class="text-3xl font-semibold">Leia nosso Estatuto Social</p>
                <a
                  href="/affiliation"
                  class="p-3 text-white rounded-full bg-pink-500 hover:bg-pink-600 transition duration-300"
                >
                  <Icon id="ArrowNorthEast" size={16} strokeWidth={1} />
                </a>
              </div>
            </div>
            <div class="w-full p-12 flex flex-col gap-6 bg-white rounded-xl">
              <span class="text-blue-200 text-[100px] font-bold leading-none">
                02
              </span>
              <div class="flex justify-between items-center">
                <p class="text-3xl font-semibold">Preencha nosso formulário</p>
                <a
                  href="/affiliation"
                  class="p-3 text-white rounded-full bg-pink-500 hover:bg-pink-600 transition duration-300"
                >
                  <Icon id="ArrowNorthEast" size={16} strokeWidth={1} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
