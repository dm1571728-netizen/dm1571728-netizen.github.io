// Atualiza o ano automaticamente no rodapé.
document.getElementById("ano").textContent = new Date().getFullYear();

// Alterna entre o tema escuro e o tema claro.
const botaoTema = document.getElementById("tema");

botaoTema.addEventListener("click", () => {
  document.body.classList.toggle("claro");

  const temaClaroAtivo = document.body.classList.contains("claro");
  botaoTema.textContent = temaClaroAtivo ? "☾" : "☼";
  botaoTema.setAttribute(
    "aria-label",
    temaClaroAtivo ? "Ativar tema escuro" : "Ativar tema claro"
  );
});
