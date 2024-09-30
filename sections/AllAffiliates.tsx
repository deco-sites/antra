import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";

interface Affiliate {
  name: string;
  description: string;
  image: string;
}

export interface Props {
  affiliate: Affiliate[];
}

const CardAffiliate = ({ description, image, name }: Affiliate) => {
  return (
    <div class="w-full max-w-[350px] px-6 py-8 flex flex-col gap-5 rounded-lg shadow-lg border border-gray-200">
      <div class="flex justify-start">
      <Image
        width={120}
        class="max-h-[70px] object-fit z-10"
        src={image}
        alt={image}
        decoding="async"
        loading="lazy"
      />
      </div>
      <h3 class="text-3xl font-bold">{name}</h3>
      <p class="text-base font-medium">
        {description}
      </p>
      <div class="flex justify-end">
        <a
          href="/news"
          class="p-3 text-pink-500 hover:text-pink-700"
        >
          <Icon
            id="ArrowNorthEast"
            size={16}
            strokeWidth={1}
          />
        </a>
      </div>
    </div>
  );
};

export default function AllAffiliates({ affiliate }: Props) {
  return (
    <div class="lg:container text-sm px-5 p-16 mb-40">
      <div class="space-y-10">
        <div class="flex justify-center items-center">Filtro afiliados</div>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {affiliate.map((item, i) => (
            <CardAffiliate 
              key={`${i}_${item.name}`}
              description={item.description} 
              image={item.image} 
              name={item.name} 
            />
          ))}
        </div>
        <div class="mt-20 flex justify-center space-x-5">
          <button
            class="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 disabled:bg-gray-400"
            // onClick={handlePrevPage}
            // disabled={currentPage === 1}
          >
            Anterior
          </button>
          <span class="px-4 py-2">
            Página de
            {/* Página {currentPage} de {totalPages} */}
          </span>
          <button
            class="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 disabled:bg-gray-400"
            // onClick={handleNextPage}
            // disabled={currentPage === totalPages}
          >
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
}
