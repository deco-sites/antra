import { useEffect } from "preact/hooks";

interface Props {
  message: string;
  type: string;
  onClose: () => void;
}
const Toast = ({ message, type, onClose }: Props) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // Fecha o toast após 3 segundos
    return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
  }, [onClose]);

  return (
    <div
      class={`fixed bottom-4 right-4 p-4 rounded-md text-white shadow-lg ${
        type === "sucesso" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      {message}
    </div>
  );
};

export default Toast;
