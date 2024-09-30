import Image from "apps/website/components/Image.tsx";
import { useState } from "preact/hooks";

interface Research {
  image: string;
  tag: string;
  title: string;
}

interface Props {
  title: string;
  research: Research[];
}

export default function AllResearchPagination({ title, research }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(research.length / itemsPerPage);

  const currentResearch = research.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <section class="w-full px-4 py-10">
      <h2 class="text-2xl md:text-4xl font-bold leading-snug mb-8">{title}</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {currentResearch.map((research, index) => (
          <div
            class="relative w-full h-full col-span-1 flex justify-center"
            key={index}
          >
            <div class="rounded-lg overflow-hidden flex flex-col items-center w-full max-w-[400px]">
              <Image
                width={380}
                class="h-54 object-cover z-10"
                sizes="(max-width: 640px) 100vw, 30vw"
                src={research.image}
                alt={research.image}
                decoding="async"
                loading="lazy"
              />
              <div class="p-1 py-4 space-y-4 text-start w-full">
                <div class="flex flex-wrap gap-2">
                  <span class="badge badge-lg text-xs border border-gray-700 bg-transparent">
                    {research.tag}
                  </span>
                </div>
                <h3 class="text-lg font-semibold mt-2">{research.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div class="mt-10 flex justify-center space-x-4">
        <button
          class="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 disabled:bg-gray-400"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span class="px-4 py-2">
          Página {currentPage} de {totalPages}
        </span>
        <button
          class="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 disabled:bg-gray-400"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Próximo
        </button>
      </div>
    </section>
  );
}
