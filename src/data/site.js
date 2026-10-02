export const whatsappNumber = "5513996699621";
export const messages = {
  geral:
    "Olá! Vim pelo site da KN Serralheria e Vidraçaria e gostaria de solicitar um orçamento. Meu projeto fica em: ",
  portas:
    "Olá! Vim pelo site da KN e gostaria de solicitar um orçamento para uma porta.",
  janelas:
    "Olá! Vim pelo site da KN e gostaria de solicitar um orçamento para uma janela.",
  "sob-medida":
    "Olá! Vim pelo site da KN e gostaria de conversar sobre um projeto sob medida em ferro ou vidro.",
  duvida:
    "Olá! Vim pelo site da KN Serralheria e Vidraçaria e gostaria de tirar uma dúvida.",
};
export const whatsappUrl = (message) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
export const filters = [
  { id: "todos", label: "Todos" },
  { id: "portas", label: "Portas" },
  { id: "janelas", label: "Janelas" },
  { id: "ferro", label: "Ferro" },
  { id: "vidro", label: "Vidro" },
];
export const products = [
  {
    id: "porta-ferro",
    title: "Porta em ferro e vidro",
    headline: "Linhas que recebem.",
    category: "PORTAS / FERRO & VIDRO",
    categories: ["portas", "ferro", "vidro"],
    image: "image-one",
    description:
      "Linhas marcantes e transparência em uma referência de entrada contemporânea. Compartilhe essa inspiração e consulte as possibilidades para o seu imóvel.",
  },
  {
    id: "janela",
    title: "Janela de linhas retas",
    headline: "Espaço para a luz.",
    category: "JANELAS / FERRO & VIDRO",
    categories: ["janelas", "ferro", "vidro"],
    image: "image-two",
    description:
      "Uma referência de janela que integra luz e arquitetura. Envie fotos do local e medidas aproximadas para conversar sobre as opções do seu projeto.",
  },
  {
    id: "porta-vidro",
    title: "Entrada em vidro",
    headline: "Leveza em cada ângulo.",
    category: "PORTAS / VIDRO",
    categories: ["portas", "vidro"],
    image: "image-three",
    description:
      "Uma inspiração de entrada com vidro e linhas discretas. Consulte os modelos, os materiais e os detalhes adequados à sua necessidade.",
  },
  {
    id: "ferro",
    title: "Projeto em ferro",
    headline: "Personalidade em metal.",
    category: "FERRO / SOB MEDIDA",
    categories: ["ferro"],
    image: "image-four",
    description:
      "O metal como parte da identidade do imóvel. Use essa referência para começar uma conversa sobre uma solução em ferro sob medida.",
  },
];
