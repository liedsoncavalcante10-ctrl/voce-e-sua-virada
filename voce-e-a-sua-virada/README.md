# Você é a sua virada — Página de vendas

Site estático (HTML + CSS + JavaScript simples). Não precisa instalar nada.

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | O conteúdo da página (textos, seções, perguntas frequentes) |
| `style.css` | Cores, fontes e layout (computador e celular) |
| `script.js` | Botões de compra, barra fixa no celular e **o link do checkout** |
| `favicon.svg` | Ícone da aba do navegador |
| `vercel.json` | Configuração simples da Vercel (pode deixar como está) |

## Ver no seu computador

Dê dois cliques no `index.html`. Ele abre no navegador.

## ONDE TROCAR O LINK DE COMPRA

Abra `script.js`. No começo há:

```js
checkoutUrl: "https://SUBSTITUIR-PELO-LINK-DO-CHECKOUT.exemplo",
```

Troque pelo link real do checkout (Hotmart, Kiwify, Eduzz, Mercado Pago, Stripe etc.), mantendo as aspas.
Enquanto o link provisório estiver ali, os botões mostram um aviso de “checkout ainda não conectado” e **nenhuma compra é simulada**.

## Publicar no GitHub (sem terminal, pelo navegador)

1. Crie uma conta em https://github.com (grátis).
2. Clique em **+** (canto superior direito) → **New repository**.
3. Em *Repository name*, escreva `voce-e-a-sua-virada`. Deixe **Public** ou **Private** (os dois funcionam com a Vercel). Clique em **Create repository**.
4. Na página que abrir, clique em **uploading an existing file**.
5. Descompacte o ZIP no seu computador e **arraste os arquivos de dentro da pasta** (`index.html`, `style.css`, `script.js`, `favicon.svg`, `vercel.json`, `README.md`) para a janela do GitHub. Importante: os arquivos devem ficar na raiz do repositório, não dentro de uma subpasta.
6. Role até o fim e clique em **Commit changes**.

## Publicar na Vercel

1. Acesse https://vercel.com e clique em **Sign Up** → **Continue with GitHub**.
2. No painel, clique em **Add New… → Project**.
3. Em *Import Git Repository*, encontre `voce-e-a-sua-virada` e clique em **Import**. (Se não aparecer, clique em *Adjust GitHub App Permissions* e autorize o repositório.)
4. Não mude nada: *Framework Preset* = **Other**; deixe *Build Command* e *Output Directory* vazios.
5. Clique em **Deploy**. Em cerca de 1 minuto você recebe um endereço como `voce-e-a-sua-virada.vercel.app`.

## Atualizar depois (ex.: colocar o link do checkout)

1. No GitHub, abra o repositório e clique em `script.js`.
2. Clique no ícone de lápis (**Edit**), troque o link e clique em **Commit changes**.
3. A Vercel publica a nova versão sozinha em cerca de 1 minuto.

## Domínio próprio (opcional)

Na Vercel: seu projeto → **Settings → Domains** → digite o domínio e siga as instruções.

## Antes de divulgar, confira

- [ ] Link real do checkout colocado em `script.js`.
- [ ] A resposta de “Como recebo o guia depois da compra?” (em `index.html`, seção FAQ) condiz com a forma real de entrega.
- [ ] Rodapé: adicionar contato/Instagram, termos de uso e política de privacidade (há um comentário `TODO` no `index.html`).
- [ ] Se a plataforma de pagamento exigir política de reembolso/garantia, incluir na página apenas o que realmente existir.
