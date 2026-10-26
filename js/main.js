/* ==========================================================
   Restaurante e Lanchonete da Sombra – main.js
   JavaScript puro, sem dependências.
   ========================================================== */
"use strict";

/* ---------- CONFIGURAÇÃO ---------- */
const WHATSAPP = "5521995320667";
const MAPS_URL = "https://maps.app.goo.gl/x92qv9onvm4SXE5z7";
const REVIEWS_API_URL = "";
const CART_KEY = "sombra_carrinho";

/* ---------- CARDÁPIO ---------- */
const CARDAPIO = [
  { id: "fritos", titulo: "Salgados fritos", itens: [
    ["Pastel", 9,
      "Carne seca, carne moída, queijo, camarão, frango c/ catupiry ou queijo minas c/ presunto e orégano",
      ["Carne seca", "Carne moída", "Queijo", "Camarão", "Frango com catupiry", "Queijo minas com presunto e orégano"]],
    ["Bolinho de aipim", 9,
      "Carne seca, camarão c/ catupiry, carne moída ou frango c/ catupiry",
      ["Carne seca", "Camarão com catupiry", "Carne moída", "Frango com catupiry"]],
    ["Kibe", 9], ["Risole", 9], ["Coxinha", 9], ["Enroladinho de salsicha", 9],
    ["Espetinho de frango", 10], ["Bolinho de bacalhau", 10]]},

  { id: "assados", titulo: "Salgados assados", itens: [
    ["Pão de queijo", 7], ["Empada", 9], ["Folhado", 10], ["Italiano", 10],
    ["Croissant", 10], ["X-Duplo", 13], ["Salgado de forno", 10]]},

  { id: "sanduiches", titulo: "Sanduíches", itens: [
    ["Pão na chapa", 6], ["Pão com ovo", 10], ["Queijo quente", 13], ["Misto quente", 13],
    ["Linguiça simples", 17, "Pão, linguiça, alface, tomate e cebola"],
    ["Linguiça completo", 20, "+ presunto e queijo"],
    ["Filé simples", 19, "Pão, carne, alface, tomate e cebola"],
    ["Filé completo", 21, "+ queijo"],
    ["Carne assada simples", 17, "Pão, carne, alface, tomate e cebola"],
    ["Carne assada completo", 20, "+ queijo"],
    ["Hambúrguer simples", 14, "Pão, carne, alface, tomate, ovo, presunto e queijo"],
    ["Hambúrguer completo", 16, "+ batata palha e bacon"],
    ["Peito de peru simples", 17, "Pão, peito de peru, alface, tomate e cebola"],
    ["Peito de peru completo", 20, "+ queijo"],
    ["Pernil simples", 17, "Pão, pernil, alface, tomate e cebola"],
    ["Filé de frango simples", 17, "Pão, filé de frango, alface, tomate e cebola"]]},

  { id: "petiscos", titulo: "Petiscos", itens: [
    ["Batata frita", 25], ["Aipim frito", 20], ["Carne seca com aipim", 48],
    ["Linguiça calabresa acebolada", 48], ["Filé aperitivo com fritas", 48],
    ["Linguiça com aipim", 48], ["Salaminho", 20], ["Queijo minas", 20], ["Queijo prato", 20]]},

  { id: "guarnicoes", titulo: "Guarnições", itens: [
    ["Arroz ou feijão ou farofa", 20], ["Salada simples", 15], ["Salada mista", 25], ["Salada de palmito", 39]]},

  { id: "sobremesas", titulo: "Sobremesas", itens: [
    ["Pudim de leite", 6.9], ["Doce de abóbora", 6.9], ["Doce de mamão", 6.9]]},

  { id: "bebidas", titulo: "Bebidas", itens: [
    ["Refrigerante lata", 9], ["Coca-Cola KS", 8], ["Coca-Cola com café", 8], ["Coca-Cola 2L", 20],
    ["Guaraná 1L", 13], ["H2O / Limoneto", 9], ["Mineirinho 350ml", 9], ["Água tônica lata", 9],
    ["Chá lata", 9], ["Caldo de cana", 6], ["Matte Leão 300ml", 8], ["Suco lata (Del Valle)", 9],
    ["Guaravita", 4], ["Guaraviton", 8], ["Gatorade", 11], ["Monster", 15], ["Coco gelado", 7],
    ["Água sem gás 510ml", 4], ["Água sem gás 1,5L", 8], ["Água com gás 510ml", 5],
    ["Água com gás 1,26L", 10], ["Água com gás São Lourenço 300ml", 5]]},

  { id: "sucos", titulo: "Sucos naturais",
    nota: "Escolha o sabor ao adicionar: limão, melão, laranja, morango, abacaxi ou acerola.",
    saboresBase: ["Limão", "Melão", "Laranja", "Morango", "Abacaxi", "Acerola"],
    prefixoNome: "Suco",
    itens: [
      ["Caneca 350ml", 10], ["Jarra pequena", 18], ["Jarra média", 26], ["Jarra grande", 31]]},

  { id: "cervejas", titulo: "Cervejas", sub: [
    ["Lata", [["Heineken 473ml", 12], ["Brahma 473ml", 9], ["Antarctica 473ml", 9], ["Caracu 350ml", 9]]],
    ["Long neck", [["Corona 330ml", 13], ["Corona zero álcool 330ml", 13], ["Heineken 330ml", 12],
      ["Heineken zero álcool 330ml", 12], ["Stella Artois 330ml", 12], ["Budweiser 330ml", 12],
      ["Budweiser retornável 300ml", 6], ["Brahma retornável 300ml", 6], ["Smirnoff Ice", 12]]],
    ["600ml", [["Spaten", 14], ["Brahma", 14], ["Antarctica", 14]]]]},

  { id: "drinks", titulo: "Drinks e vinhos", itens: [
    ["Caipirinha", 15], ["Caipivodka", 18], ["Vinho taça", 10], ["Vinho caneca", 13]]}
];

const PRATOS = [
  { nome: "Feijoada completa", inclui: "Arroz branco, farofa, molho à campanha, banana frita e torresmo", precos: [["2 pessoas", 89], ["4 pessoas", 180]] },
  { nome: "Galinha caipira com aipim (ou quiabo)", inclui: "Arroz branco, feijão, macarrão, farofa e salada", precos: [["2 pessoas", 79], ["4 pessoas", 150]] },
  { nome: "Carne seca à mineira", inclui: "Arroz branco, tutu, couve com torresmo e ovo frito", precos: [["2 pessoas", 65]] },
  { nome: "Carré à mineira", inclui: "Arroz branco, carré grelhado, ovo frito e couve com torresmo", precos: [["2 pessoas", 65]] },
  { nome: "Churrasco misto", inclui: "Arroz branco, contrafilé, frango, carré, carne seca, linguiça, batata frita, farofa e molho à campanha", precos: [["3 pessoas", 98]] },
  { nome: "Churrasco à gaúcho", inclui: "Arroz branco, contrafilé, linguiça, molho à campanha, farofa e batata frita", precos: [["2 pessoas", 73]] },
  { nome: "Filé com fritas", inclui: "Arroz branco, filé, molho à campanha, farofa e batata frita", precos: [["2 pessoas", 73]] },
  { nome: "Frango à cubana", inclui: "Arroz branco, bacon, batata frita e banana frita", precos: [["2 pessoas", 78]] },
  { nome: "Frango grelhado", inclui: "Arroz branco e salada, ou arroz branco e batata frita", precos: [["2 pessoas", 78]] }
];

/* ---------- UTILITÁRIOS ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reais = n => "R$ " + Number(n).toFixed(2).replace(".", ",");
const semAcento = t => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const wa = msg => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
const esc = t => String(t).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ---------- LINKS DO WHATSAPP (data-wa) ---------- */
$$("[data-wa]").forEach(a => { a.href = wa(a.dataset.wa); a.target = "_blank"; a.rel = "noopener"; });

/* ---------- STATUS ABERTO/FECHADO (06:00–01:00, America/Sao_Paulo) ----------
   Fechado apenas entre 01:00 e 06:00. */
function atualizarStatus() {
  const el = $("#status");
  if (!el) return;
  const label = el.querySelector("span");
  try {
    const p = new Intl.DateTimeFormat("pt-BR", {
      timeZone: "America/Sao_Paulo", hour: "2-digit", minute: "2-digit", hour12: false
    }).formatToParts(new Date());
    const min = (+p.find(x => x.type === "hour").value % 24) * 60 + +p.find(x => x.type === "minute").value;

    const ABRE = 6 * 60;               // 06:00
    const FECHA = 25 * 60;             // 01:00 do dia seguinte
    const aberto = min >= ABRE || min < 60;
    el.className = "status " + (aberto ? "aberto" : "fechado");

    if (aberto) {
      const falta = min >= ABRE ? FECHA - min : 60 - min;
      label.textContent = falta <= 60
        ? `Aberto · fecha em ${falta} min`
        : "Aberto agora · fecha às 01:00";
    } else {
      const falta = ABRE - min;
      label.textContent = falta <= 60
        ? `Fechado · abre em ${falta} min`
        : "Fechado agora · abre às 06:00";
    }
  } catch (e) {
    label.textContent = "Todos os dias · 06:00 às 01:00";
  }
}
atualizarStatus();
setInterval(atualizarStatus, 60000);

/* ---------- MENU, TOPO, ÂNCORAS ---------- */
const burger = $("#burger"), menu = $("#menu");
burger.addEventListener("click", () => {
  const abre = !menu.classList.contains("aberto");
  menu.classList.toggle("aberto", abre);
  burger.setAttribute("aria-expanded", abre);
});
menu.addEventListener("click", e => { if (e.target.closest("a")) { menu.classList.remove("aberto"); burger.setAttribute("aria-expanded", false); } });

const voltar = $("#voltar-topo");
addEventListener("scroll", () => {
  $("#topo").classList.toggle("rolou", scrollY > 10);
  voltar.hidden = scrollY < 600;
}, { passive: true });
voltar.addEventListener("click", () => scrollTo({ top: 0 }));
$("#ano").textContent = new Date().getFullYear();

/* Link ativo no menu */
const links = $$(".menu a[href^='#']:not(.btn)");
const obsMenu = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(l => l.classList.toggle("ativo", l.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-40% 0px -55% 0px" });
$$("main section[id]").forEach(s => obsMenu.observe(s));

/* Entrada ao rolar */
const obsRev = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("vis"); obsRev.unobserve(e.target); } }), { threshold: .08 });
$$(".secao .container").forEach(c => { c.classList.add("rev"); obsRev.observe(c); });

/* ============================================================
   CARRINHO
   ============================================================ */
let cart = [];

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) cart = parsed.filter(i => i && i.key && i.preco != null && i.qtd > 0);
  } catch (e) { cart = []; }
}
function saveCart() {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {}
  renderCart();
  atualizarBotaoCarrinho();
}

function addToCart({ key, nome, variacao = null, preco, qtd = 1 }) {
  const existente = cart.find(c => c.key === key);
  if (existente) existente.qtd += qtd;
  else cart.push({ key, nome, variacao, preco, qtd });
  saveCart();
  showToast(`Adicionado: ${nome}${variacao ? ` (${variacao})` : ""}`);
}
function alterarQtd(key, delta) {
  const item = cart.find(c => c.key === key);
  if (!item) return;
  item.qtd += delta;
  if (item.qtd <= 0) cart = cart.filter(c => c.key !== key);
  saveCart();
}
function removerItem(key) { cart = cart.filter(c => c.key !== key); saveCart(); }
function limparCarrinho() {
  if (!cart.length) return;
  if (!confirm("Limpar todo o pedido?")) return;
  cart = []; saveCart();
}
const totalCarrinho = () => cart.reduce((s, c) => s + c.preco * c.qtd, 0);
const totalItens = () => cart.reduce((s, c) => s + c.qtd, 0);

function mensagemPedido() {
  if (!cart.length) return "";
  let msg = "Olá! Gostaria de fazer o seguinte pedido:\n\n*MEU PEDIDO*\n\n";
  cart.forEach(c => {
    const nome = c.nome + (c.variacao ? ` (${c.variacao})` : "");
    msg += `• ${c.qtd}x ${nome} — ${reais(c.preco * c.qtd)}\n`;
  });
  msg += `\n*Total: ${reais(totalCarrinho())}*\n`;
  const obs = ($("#carrinho-obs")?.value || "").trim();
  if (obs) msg += `\n*Observações:* ${obs}\n`;
  msg += "\nObrigado!";
  return msg;
}

function renderCart() {
  const el = $("#carrinho-lista");
  const btnEnviar = $("#carrinho-enviar");
  const totalEl = $("#carrinho-total");
  if (!el) return;

  if (!cart.length) {
    el.innerHTML = `<p class="carrinho__vazio">Seu pedido está vazio.<br>Toque no <b>+</b> dos itens do cardápio para adicionar.</p>`;
    totalEl.textContent = "R$ 0,00";
    btnEnviar.setAttribute("aria-disabled", "true");
    btnEnviar.removeAttribute("href");
    return;
  }

  el.innerHTML = cart.map(c => `
    <div class="carrinho__item">
      <div class="carrinho__item-info">
        <b>${esc(c.nome)}</b>
        ${c.variacao ? `<small>(${esc(c.variacao)})</small>` : ""}
        <span>${reais(c.preco)} cada</span>
      </div>
      <div class="carrinho__item-qtd">
        <button class="qtd-btn" data-acao="menos" data-key="${esc(c.key)}" aria-label="Diminuir">−</button>
        <span>${c.qtd}</span>
        <button class="qtd-btn" data-acao="mais" data-key="${esc(c.key)}" aria-label="Aumentar">+</button>
      </div>
      <div class="carrinho__item-subtotal">${reais(c.preco * c.qtd)}</div>
      <button class="carrinho__item-remover" data-acao="remover" data-key="${esc(c.key)}" aria-label="Remover ${esc(c.nome)}">×</button>
    </div>
  `).join("");

  totalEl.textContent = reais(totalCarrinho());
  btnEnviar.href = wa(mensagemPedido());
  btnEnviar.removeAttribute("aria-disabled");
}

function atualizarBotaoCarrinho() {
  const btn = $("#carrinho-btn"), badge = $("#carrinho-badge");
  const qtd = totalItens();
  if (!btn || !badge) return;
  if (qtd > 0) { btn.hidden = false; badge.textContent = qtd; }
  else { btn.hidden = true; }
}

/* Atualiza o link do WhatsApp quando as observações mudam */
$("#carrinho-obs")?.addEventListener("input", () => {
  if (cart.length) $("#carrinho-enviar").href = wa(mensagemPedido());
});

/* Delegação no carrinho */
$("#carrinho-lista").addEventListener("click", e => {
  const btn = e.target.closest("[data-acao]");
  if (!btn) return;
  const key = btn.dataset.key;
  if (btn.dataset.acao === "mais") alterarQtd(key, 1);
  else if (btn.dataset.acao === "menos") alterarQtd(key, -1);
  else if (btn.dataset.acao === "remover") removerItem(key);
});

/* Abrir/fechar carrinho */
function abrirCarrinho() {
  $("#carrinho").hidden = false;
  $("#carrinho-overlay").hidden = false;
  requestAnimationFrame(() => {
    $("#carrinho").classList.add("aberto");
    $("#carrinho-overlay").classList.add("aberto");
  });
  document.body.style.overflow = "hidden";
  $("#carrinho-fechar").focus();
}
function fecharCarrinho() {
  $("#carrinho").classList.remove("aberto");
  $("#carrinho-overlay").classList.remove("aberto");
  document.body.style.overflow = "";
  setTimeout(() => {
    $("#carrinho").hidden = true;
    $("#carrinho-overlay").hidden = true;
  }, 300);
}
$("#carrinho-btn").addEventListener("click", abrirCarrinho);
$("#carrinho-fechar").addEventListener("click", fecharCarrinho);
$("#carrinho-overlay").addEventListener("click", fecharCarrinho);
$("#carrinho-limpar").addEventListener("click", limparCarrinho);

/* ============================================================
   MODAL DE OPÇÕES (sabores / tamanhos)
   ============================================================ */
let modalOpcoesAtual = null, modalCallback = null, modalFocoAnterior = null;

function abrirModalOpcoes({ titulo, subtitle, opcoes, onEscolher }) {
  modalOpcoesAtual = opcoes;
  modalCallback = onEscolher;
  modalFocoAnterior = document.activeElement;

  $("#modal-opcoes-titulo").textContent = titulo;
  $("#modal-opcoes-sub").textContent = subtitle || "";
  $("#modal-opcoes-lista").innerHTML = opcoes.map((o, i) => `
    <button class="modal-opcoes__item" type="button" data-i="${i}">
      <span>${esc(o.label)}</span>
      ${o.preco != null ? `<b>${reais(o.preco)}</b>` : ""}
    </button>
  `).join("");

  $("#modal-opcoes").hidden = false;
  requestAnimationFrame(() => $("#modal-opcoes").classList.add("aberto"));
  document.body.style.overflow = "hidden";
  const primeiro = $("#modal-opcoes-lista button");
  if (primeiro) primeiro.focus();
}
function fecharModalOpcoes() {
  $("#modal-opcoes").classList.remove("aberto");
  document.body.style.overflow = $("#carrinho").hidden ? "" : "hidden";
  setTimeout(() => {
    $("#modal-opcoes").hidden = true;
    if (modalFocoAnterior) modalFocoAnterior.focus();
    modalOpcoesAtual = null; modalCallback = null; modalFocoAnterior = null;
  }, 200);
}
$("#modal-opcoes-lista").addEventListener("click", e => {
  const btn = e.target.closest(".modal-opcoes__item");
  if (!btn || !modalOpcoesAtual) return;
  const opt = modalOpcoesAtual[+btn.dataset.i];
  if (modalCallback) modalCallback(opt);
  fecharModalOpcoes();
});
$("#modal-opcoes-fechar").addEventListener("click", fecharModalOpcoes);
$("#modal-opcoes").addEventListener("click", e => {
  if (e.target.id === "modal-opcoes") fecharModalOpcoes();
});
addEventListener("keydown", e => {
  if (e.key === "Escape") {
    if (!$("#modal-opcoes").hidden) fecharModalOpcoes();
    else if (!$("#carrinho").hidden) fecharCarrinho();
  }
});

/* ============================================================
   RENDER DO CARDÁPIO
   ============================================================ */
const abas = $("#abas"), lista = $("#cardapio-lista"), busca = $("#busca");
let categoria = "todos";

abas.innerHTML = [{ id: "todos", titulo: "Tudo" }, ...CARDAPIO].map(c =>
  `<button class="aba" role="tab" data-id="${c.id}" aria-selected="${c.id === "todos"}">${c.titulo}</button>`).join("");

const iconPlus = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>`;

function linha(cat, item, subTitulo) {
  const [n, p, d, sab] = item;
  const temOpcoes = (sab && sab.length) || (cat.saboresBase && cat.saboresBase.length);
  const label = temOpcoes ? `Adicionar ${n} — escolher opções` : `Adicionar ${n} ao pedido`;
  return `<div class="item">
    <span class="item__nome">${esc(n)}</span>
    <span class="item__pontos"></span>
    <span class="item__preco">${reais(p)}</span>
    <button class="item__add${temOpcoes ? " item__add--opcoes" : ""}"
      type="button"
      data-cat="${cat.id}"
      data-item="${esc(n)}"
      ${subTitulo ? `data-sub="${esc(subTitulo)}"` : ""}
      aria-label="${esc(label)}"
      title="${esc(label)}">${iconPlus}</button>
    ${d ? `<span class="item__desc">${esc(d)}</span>` : ""}
  </div>`;
}

function renderCardapio() {
  const termo = semAcento(busca.value.trim());
  let html = "";
  CARDAPIO.forEach(c => {
    if (!termo && categoria !== "todos" && categoria !== c.id) return;
    const grupos = c.sub ? c.sub.map(([t, its]) => [t, its]) : [[null, c.itens]];
    let corpo = "";
    grupos.forEach(([t, its]) => {
      const f = its.filter(i => !termo || semAcento(i[0] + " " + (i[2] || "") + " " + c.titulo).includes(termo));
      if (f.length) {
        corpo += (t ? `<p class="grupo__nota"><b>${t}</b></p>` : "") + f.map(i => linha(c, i, t)).join("");
      }
    });
    if (corpo) html += `<section class="grupo"><h3>${c.titulo}</h3>${c.nota ? `<p class="grupo__nota">${c.nota}</p>` : ""}${corpo}</section>`;
  });
  lista.innerHTML = html || `<p class="vazio">Nada encontrado para “${esc(busca.value)}”. Tente outra palavra.</p>`;
}

abas.addEventListener("click", e => {
  const b = e.target.closest(".aba"); if (!b) return;
  categoria = b.dataset.id; busca.value = "";
  $$(".aba").forEach(a => a.setAttribute("aria-selected", a === b));
  renderCardapio();
});
busca.addEventListener("input", renderCardapio);
renderCardapio();

/* Clique no "+" do item → abre modal (se tem opções) ou adiciona direto */
lista.addEventListener("click", e => {
  const btn = e.target.closest(".item__add");
  if (!btn) return;
  const { cat: catId, item: itemName, sub: subName } = btn.dataset;
  const cat = CARDAPIO.find(c => c.id === catId);
  if (!cat) return;
  let item = null;
  if (subName) {
    const sub = (cat.sub || []).find(([t]) => t === subName);
    if (sub) item = sub[1].find(i => i[0] === itemName);
  } else {
    item = (cat.itens || []).find(i => i[0] === itemName);
  }
  if (item) adicionarItemCardapio(cat, item);
});

function adicionarItemCardapio(cat, item) {
  const [nome, preco, , sabores] = item;
  const hasItemFlavors = sabores && sabores.length;
  const hasCatFlavors = !hasItemFlavors && cat.saboresBase && cat.saboresBase.length;

  if (hasItemFlavors) {
    abrirModalOpcoes({
      titulo: "Escolha o sabor",
      subtitle: `${nome} — ${reais(preco)}`,
      opcoes: sabores.map(s => ({ label: s })),
      onEscolher: opt => addToCart({ key: `card-${cat.id}-${nome}-${opt.label}`, nome, variacao: opt.label, preco })
    });
    return;
  }

  if (hasCatFlavors) {
    const prefixo = cat.prefixoNome || "";
    abrirModalOpcoes({
      titulo: "Escolha o sabor",
      subtitle: `${prefixo ? prefixo + " · " : ""}${nome} — ${reais(preco)}`,
      opcoes: cat.saboresBase.map(s => ({ label: s })),
      onEscolher: opt => addToCart({
        key: `card-${cat.id}-${nome}-${opt.label}`,
        nome: prefixo ? `${prefixo} de ${opt.label}` : `${nome} - ${opt.label}`,
        variacao: nome,
        preco
      })
    });
    return;
  }

  addToCart({ key: `card-${cat.id}-${nome}`, nome, preco });
}

/* ============================================================
   LIGHTBOX DA TABELA
   ============================================================ */
const lb = $("#lightbox"), lbImg = $("#lightbox-img");
let ultimoFoco = null;

function abrirLb(el) {
  ultimoFoco = el || document.activeElement;
  lb.hidden = false;
  document.body.style.overflow = "hidden";
  $("#fechar-tabela").focus();
}
function fecharLb() {
  lb.hidden = true;
  document.body.style.overflow = "";
  if (ultimoFoco) ultimoFoco.focus();
}
$$("[data-abrir-tabela]").forEach(b => b.addEventListener("click", () => abrirLb(b)));
$("#fechar-tabela").addEventListener("click", fecharLb);
lbImg.addEventListener("click", () => lbImg.classList.toggle("zoom"));
lb.addEventListener("click", e => { if (e.target === lb) fecharLb(); });
addEventListener("keydown", e => { if (e.key === "Escape" && !lb.hidden) fecharLb(); });

/* ============================================================
   PRATOS PARA COMPARTILHAR
   ============================================================ */
$("#pratos-lista").innerHTML = PRATOS.map((p, pi) => `
  <article class="prato">
    <h3>${esc(p.nome)}</h3>
    <p class="prato__inclui">${esc(p.inclui)}</p>
    <div class="precos">
      ${p.precos.map(([q, v], si) => `
        <button class="preco-linha preco-linha--add" type="button"
          data-prato="${pi}" data-size="${si}"
          aria-label="Adicionar ${esc(p.nome)} para ${esc(q)} — ${reais(v)}">
          <span>Para ${esc(q)}</span>
          <b>${reais(v)}</b>
          <span class="preco-linha__add" aria-hidden="true">${iconPlus}</span>
        </button>
      `).join("")}
    </div>
  </article>
`).join("");

$("#pratos-lista").addEventListener("click", e => {
  const btn = e.target.closest("[data-prato]");
  if (!btn) return;
  const prato = PRATOS[+btn.dataset.prato];
  const [tamanho, preco] = prato.precos[+btn.dataset.size];
  addToCart({ key: `prato-${btn.dataset.prato}-${btn.dataset.size}`, nome: prato.nome, variacao: tamanho, preco });
});

/* ============================================================
   TOAST
   ============================================================ */
let toastTimer = null;
function showToast(msg) {
  const t = $("#toast");
  if (!t) return;
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.hidden = true; }, 2200);
}

/* ============================================================
   AVALIAÇÕES
   ============================================================ */
const CORES = ["#2F6B2F", "#D62828", "#D9861A", "#1E4A1E", "#7a4a1a", "#3b6a8a"];
const estrelas = n => "★".repeat(Math.round(n)) + "☆".repeat(5 - Math.round(n));

async function carregarAvaliacoes() {
  let dados = null;
  if (REVIEWS_API_URL) {
    try {
      const r = await fetch(REVIEWS_API_URL);
      if (r.ok) dados = await r.json();
    } catch (e) { console.warn("API de avaliações indisponível, usando reviews.json", e); }
  }
  if (!dados) {
    try {
      const r = await fetch("assets/reviews.json");
      const j = await r.json();
      dados = Array.isArray(j) ? { avaliacoes: j } : j;
    } catch (e) { console.warn("Não foi possível ler reviews.json", e); dados = { avaliacoes: [] }; }
  }
  const av = dados.avaliacoes || [];
  const faixa = $("#aval-faixa");
  if (!av.length) {
    $("#carrossel").hidden = true;
    $("#aval-media").textContent = "★";
    $("#aval-total").textContent = "Veja as avaliações no Google Maps";
    return;
  }

  const media = dados.nota || av.reduce((s, a) => s + a.nota, 0) / av.length;
  $("#aval-media").textContent = media.toFixed(1).replace(".", ",");
  $("#aval-estrelas").innerHTML = `<span class="estrelas">${estrelas(media)}</span>`;
  $("#aval-total").textContent = dados.total ? `${dados.total} avaliações no Google` : `${av.length} avaliações em destaque`;
  $("#aval-aviso").hidden = true;

  faixa.innerHTML = av.map((a, i) => `<article class="aval">
    <div class="aval__topo"><span class="avatar" style="background:${CORES[i % CORES.length]}">${esc(a.autor.trim()[0].toUpperCase())}</span>
      <div><b>${esc(a.autor)}</b><small>${esc(a.data || "")}</small></div></div>
    <span class="estrelas" aria-label="${a.nota} de 5 estrelas">${estrelas(a.nota)}</span>
    <p>${esc(a.texto)}</p></article>`).join("");

  const passo = () => (faixa.firstElementChild?.offsetWidth || 300) + 16;
  $("#aval-ant").onclick = () => faixa.scrollBy({ left: -passo(), behavior: "smooth" });
  $("#aval-prox").onclick = () => faixa.scrollBy({ left: passo(), behavior: "smooth" });

  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
    let pausado = false;
    ["mouseenter", "focusin", "touchstart"].forEach(ev => faixa.parentNode.addEventListener(ev, () => pausado = true, { passive: true }));
    ["mouseleave", "focusout", "touchend"].forEach(ev => faixa.parentNode.addEventListener(ev, () => pausado = false, { passive: true }));
    setInterval(() => {
      if (pausado || document.hidden) return;
      const fim = faixa.scrollLeft + faixa.clientWidth >= faixa.scrollWidth - 8;
      faixa.scrollTo({ left: fim ? 0 : faixa.scrollLeft + passo(), behavior: "smooth" });
    }, 5000);
  }
}

/* ============================================================
   INIT
   ============================================================ */
loadCart();
renderCart();
atualizarBotaoCarrinho();
carregarAvaliacoes();