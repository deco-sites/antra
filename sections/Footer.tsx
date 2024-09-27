import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "site/components/ui/Icon.tsx";

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
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  background?: {
    src?: ImageWidget;
  };
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
}

export default function Footer({
  background = {
    src: "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/antra/f6958659-d7fc-463f-9de9-0862b41e4c62/footer.png",
  },
  // links = [
  //       { label: "A ANTRA", href: "/" },
  //       { label: "Recursos", href: "/" },
  //       { label: "Notícias", href: "/" },
  //       { label: "Filiação", href: "/" },
  //       { label: "Projetos", href: "/" },
  //       { label: "Contato", href: "/" },
  // ],
  subscribe = {
    title: "Subcribe",
    description:
      "Join our newsletter to stay up to date on features and releases.",
    instructions:
      "By subscribing you agree to with our <a href='/' target='_blank' class='link'>Privacy Policy</a> and provide consent to receive updates from our company.",
  },
  madeWith = {
    label: "Made with",
    src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/cc202be0-af57-4b32-b9c9-d1d7dc97bf85",
    href: "https://deco.cx",
  },
  copyright = "© 2024, ANTRA. Todos os direitos reservados.",
}: Props) {
  const links = [
    { label: "A ANTRA", href: "/" },
    { label: "Recursos", href: "/" },
    { label: "Notícias", href: "/" },
    { label: "Filiação", href: "/" },
    { label: "Projetos", href: "/" },
    { label: "Contato", href: "/" },
  ];
  const social = [
    { network: "Instagram", href: "/" },
    { network: "Twitter", href: "/" },
    { network: "Linkedin", href: "/" },
    { network: "Facebook", href: "/" },
  ];

  return (
    <div class="w-full bg-[#0459C5] rounded-t-[16px] px-5">
      <div class="lg:container px-5 lg:px-16 text-sm py-16 lg:py-20">
        <div
          class="relative bg-cover bg-center rounded-[16px] p-12 -translate-y-[65%] md:-translate-y-[70%] shadow-lg"
          style={`background-image: url(${background.src})`}
        >
          <div class="relative z-10 text-white">
            <h2 class="text-[22px] lg:text-[48px] font-medium leading-tight text-left max-w-[600px]">
              Cadastre seu e-mail para receber nossas notícias
            </h2>
            <form class="flex flex-col gap-6 mt-6">
              <p class="font-light">{subscribe.description}</p>
              <div class="flex flex-col lg:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Enter your name"
                  class="p-3 rounded-md w-full lg:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Enter your email"
                  class="p-3 rounded-md w-full lg:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  class="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-md transition duration-300 ease-in-out"
                  aria-label="Subscribe"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="-translate-y-[45%]">
          <h1 class="text-[42px] lg:text-[48px] font-semibold text-left text-white leading-tight">
            Resistir para Existir, Existir para Reagir
          </h1>

          <nav class="mt-8 grid grid-cols-2 gap-4 lg:flex lg:space-x-8">
            {links.map((link) => (
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
              {social.map((social) => (
                <a
                  href={social.href}
                  class="bg-white rounded-lg w-[40px] h-[40px] flex items-center justify-center hover:bg-gray-200 transition"
                >
                  <Icon
                    id={`${social.network}`}
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
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
