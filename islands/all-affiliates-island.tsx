import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { BlogPost } from "apps/blog/types.ts";
import Icon from "site/components/ui/Icon.tsx";
import { usePagination } from "site/components/ui/Pagination.tsx";

export interface Props {
  affiliate: BlogPost[] | undefined;
}

const CardAffiliate = (props: any) => {
  return (
    <a href="/affiliation" class="w-full max-w-[350px]">
      <div class="w-full max-w-[350px] px-6 py-8 flex flex-col gap-5 rounded-lg shadow-lg border border-gray-200">
        <div class="flex justify-start">
          <Image
            width={120}
            height={50}
            class="max-h-[70px] h-full object-fit z-10"
            src={props.image}
            alt={props.image}
            decoding="async"
            loading="lazy"
          />
        </div>
        <p class="text-base font-medium">{props.description}</p>
        <div class="flex justify-end">
          <a href="/affiliation" class="p-3 text-pink-500 hover:text-pink-700">
            <Icon id="ArrowNorthEast" size={16} strokeWidth={1} />
          </a>
        </div>
      </div>
    </a>
  );
};

export default function AllAffiliatesIsland({ affiliate }: Props) {
  const itemsPerPage = 13;
  const {
    currentItems,
    currentPage,
    totalPages,
    handlePrevPage,
    handleNextPage,
    goToPage,
  } = usePagination(affiliate ? affiliate : [], itemsPerPage);

  return (
    <div class="lg:container text-sm px-5 p-16 mb-40">
      <div class="space-y-10">
        <div class="flex flex-col md:flex-row justify-center items-center gap-5">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Região
            </label>
            <select
              class="w-full min-w-[240px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="regiao"
              id="regiao"
            >
              <option value="">Todas</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              UF
            </label>
            <select
              class="w-full min-w-[240px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="uf"
              id="uf"
            >
              <option value="">Todas</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Temática
            </label>
            <select
              class="w-full min-w-[240px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="tematica"
              id="tematica"
            >
              <option value="">Todas</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Público-Alvo
            </label>
            <select
              class="w-full min-w-[240px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="publicoAlvo"
              id="publicoAlvo"
            >
              <option value="">Todas</option>
            </select>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {currentItems?.map((item, i) => (
            <CardAffiliate
              key={`${i}_${item.title}`}
              description={item.excerpt}
              image={item.image}
              name={item.title}
            />
          ))}
        </div>
        <div className="mt-10 flex justify-center items-center space-x-4">
          <button
            className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full disabled:opacity-50"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <Icon id="ArrowRight" size={24} strokeWidth={1} />
          </button>

          <div className="flex space-x-2 items-center">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`w-10 h-10 flex items-center justify-center rounded-full ${
                  currentPage === index + 1
                    ? "bg-pink-500 text-white"
                    : "bg-transparent text-gray-700"
                }`}
                onClick={() => goToPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full disabled:opacity-50"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <Icon id="ArrowLeft" size={24} strokeWidth={1} />
          </button>
        </div>
      </div>
    </div>
  );
}
