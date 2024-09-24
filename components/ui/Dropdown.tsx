import { h } from 'preact';
import { useSignal } from '@preact/signals'; // Importe o useSignal
import Icon from "site/components/ui/Icon.tsx";


interface Props{
     label: string;
          url?: string;
          img?: string;
          imgLabel?: string;
          submenu?: {
          label: string;
          subLabel?: string;
          url: string;
          }[];
}

function DropdownMenuItem({ label, submenu }: Props) {
     const isSubmenuOpen = useSignal(false);

  return (
    <li class="relative">
      <div
        onClick={() => (isSubmenuOpen.value = !isSubmenuOpen.value)} // Alterna o submenu
        class="flex items-center cursor-pointer"
      >
        {label}
        <Icon id="ChevronDown" size={16} strokeWidth={2} />
      </div>

      {/* Renderização condicional do submenu */}
      {isSubmenuOpen && (
        <ul class="submenu-class">
          {submenu?.map((subItem, subIndex) => (
            <li
              key={subIndex}
              class="flex flex-col block px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              <a href={subItem.url} class="text-base text-gray-700">
                {subItem.label}
              </a>
              {subItem.subLabel && (
                <span class="text-xs text-gray-500">
                  {subItem.subLabel}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default DropdownMenuItem;