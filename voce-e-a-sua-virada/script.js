/* ============================================================
   Você é a sua virada — script da página de vendas
   JavaScript simples, sem dependências.
   ============================================================ */

/* ------------------------------------------------------------
   CONFIGURAÇÃO — É AQUI QUE VOCÊ TROCA O LINK DE COMPRA
   ------------------------------------------------------------
   1. Crie seu checkout na plataforma escolhida (Hotmart, Kiwify,
      Eduzz, Mercado Pago, Stripe, etc.).
   2. Copie o link de pagamento.
   3. Cole abaixo, no lugar do link provisório.
   4. Salve, envie para o GitHub e a Vercel publica sozinha.
   ------------------------------------------------------------ */
const CONFIG = {
  // LINK PROVISÓRIO — SUBSTITUIR pelo link real do checkout:
   checkoutUrl: "https://kiwify.app/5OPHM2Y",

  // Abrir o checkout em nova aba? (true = nova aba, false = mesma aba)
  openInNewTab: false,

  // Repassar parâmetros da URL (utm_source, utm_campaign...) para o checkout
  forwardQueryParams: true,
};

/* Considera "provisório" enquanto o link tiver o marcador abaixo. */
const isPlaceholder = CONFIG.checkoutUrl.includes("SUBSTITUIR-PELO-LINK");

/* Monta a URL final do checkout (repassando UTMs, se ativado). */
function buildCheckoutUrl() {
  if (isPlaceholder || !CONFIG.forwardQueryParams) return CONFIG.checkoutUrl;
  try {
    const url = new URL(CONFIG.checkoutUrl);
    new URLSearchParams(window.location.search).forEach((value, key) => {
      if (!url.searchParams.has(key)) url.searchParams.set(key, value);
    });
    return url.toString();
  } catch (e) {
    return CONFIG.checkoutUrl;
  }
}

/* ---------- Botões de compra ---------- */
const dialog = document.getElementById("checkout-dialog");

document.querySelectorAll("[data-checkout]").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    // Sem JavaScript, o href="#comprar" leva até a seção de preço.
    // Com JavaScript, todo botão de compra segue direto para o checkout.
    event.preventDefault();

    if (isPlaceholder) {
      // Checkout ainda não configurado: avisa com clareza, sem simular compra.
      if (dialog && typeof dialog.showModal === "function") dialog.showModal();
      else alert("O checkout ainda não foi conectado a esta página.");
      return;
    }

    const target = buildCheckoutUrl();
    if (CONFIG.openInNewTab) window.open(target, "_blank", "noopener");
    else window.location.href = target;
  });
});

/* ---------- Barra fixa no celular: aparece após a primeira dobra ---------- */
const sticky = document.getElementById("stickybar");
const priceSection = document.getElementById("comprar");

function updateSticky() {
  if (!sticky) return;
  const pastHero = window.scrollY > window.innerHeight * 0.8;
  let onPrice = false;
  if (priceSection) {
    const r = priceSection.getBoundingClientRect();
    onPrice = r.top < window.innerHeight * 0.6 && r.bottom > 0;
  }
  const show = pastHero && !onPrice;
  sticky.classList.toggle("is-visible", show);
  sticky.setAttribute("aria-hidden", show ? "false" : "true");
  sticky.querySelectorAll("a").forEach((a) => (a.tabIndex = show ? 0 : -1));
}
window.addEventListener("scroll", updateSticky, { passive: true });
window.addEventListener("resize", updateSticky);
updateSticky();

/* ---------- Animação de entrada ao rolar ---------- */
const revealTargets = document.querySelectorAll(
  ".scene, .reco__col, .move, .benefits__grid article, .day, .inc, .price-card, .faq details"
);
if ("IntersectionObserver" in window) {
  revealTargets.forEach((el) => el.classList.add("reveal"));
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealTargets.forEach((el) => io.observe(el));
}

/* ---------- FAQ: abre uma pergunta por vez ---------- */
const faqItems = document.querySelectorAll(".faq details");
faqItems.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (item.open) faqItems.forEach((other) => { if (other !== item) other.open = false; });
  });
});

/* ---------- Ano no rodapé ---------- */
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
