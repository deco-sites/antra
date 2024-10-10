import Image from "apps/website/components/Image.tsx";
import { useState } from "preact/hooks";
import Icon from "site/components/ui/Icon.tsx";

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
    <section className="w-full px-4 py-10">
      <h2 className="text-2xl md:text-4xl font-bold leading-snug mb-8">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {currentResearch.map((research, index) => (
          <div
            className="relative w-full h-full col-span-1 flex justify-center"
            key={index}
          >
            <div className="rounded-lg overflow-hidden flex flex-col items-center w-full max-w-[400px]">
              <Image
                width={380}
                height={274}
                className="h-54 object-cover z-10"
                sizes="(max-width: 640px) 100vw, 30vw"
                src={research.image}
                alt={research.image}
                decoding="async"
                loading="lazy"
              />
              <div className="p-1 py-4 space-y-4 text-start w-full">
                <div className="flex flex-wrap gap-2">
                  <span className="badge badge-lg text-xs border border-gray-700 bg-transparent">
                    {research.tag}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mt-2">{research.title}</h3>
              </div>
            </div>
          </div>
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
              onClick={() => setCurrentPage(index + 1)}
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
    </section>
  );
}
