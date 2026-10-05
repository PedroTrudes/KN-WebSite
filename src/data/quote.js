export function createQuoteProduct(id) {
  return { id, category: "Janela", width: "", height: "", unknownMeasurements: false, color: "Preto", customColor: "", details: "" };
}

export function buildQuoteMessage(products) {
  const items = products.map((product, index) => {
    const measurements = product.unknownMeasurements
      ? ["• Medidas: ainda não sei; preciso de orientação."]
      : [`• Largura: ${product.width.trim() || "Não informada"}`, `• Altura: ${product.height.trim() || "Não informada"}`];
    return [
      `*PRODUTO ${index + 1} — ${product.category.toUpperCase()}*`,
      ...measurements,
      `• ${product.category === "Vidro" ? "Cor / acabamento" : "Cor do material"}: ${product.color === "Outra" ? product.customColor.trim() : product.color}`,
      `• Detalhes: ${product.details.trim() || "Gostaria de conhecer as opções disponíveis."}`,
    ].join("\n");
  });
  return ["Olá, equipe KN! Gostaria de solicitar um orçamento.", ...items, "Podem me orientar sobre as opções disponíveis e os valores?"].join("\n\n");
}
