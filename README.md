# Ministério Reedificando o Altar — site (1ª versão)

> **Repositório arquivado.** Esta é a **primeira versão** do site da igreja Ministério Reedificando o Altar, feita em React em 2023/2024.
> Ela foi substituída por uma nova versão: **[MatheusDiamantino/reedificando-o-altar](https://github.com/MatheusDiamantino/reedificando-o-altar)**, no ar em **[reedificandooaltar.com.br](https://reedificandooaltar.com.br)**.

## Contexto

Site institucional desenvolvido de forma voluntária para a igreja, como um dos meus primeiros projetos em React. O código fica aqui como registro da evolução do projeto.

## O que tem nesta versão

- **Início**: banner, boas-vindas, horário dos cultos e bloco de contato com links para localização no Google Maps, e-mail e Facebook.
- **Sobre**: apresentação do ministério e seção de organizadores/integrantes.
- **Cultos**: lista de lives anteriores com links para os vídeos no Facebook e tela de carregamento.
- **Login**: tela apenas visual (sem autenticação).
- Navegação com React Router (`HashRouter`), layout responsivo com Bootstrap e CSS Modules.

## Stack

- React 18 (Create React App)
- React Router 6
- Bootstrap 5, React Icons, React Parallax
- CSS Modules
- json-server (`db.json`) como backend de teste

## Como rodar localmente

```bash
git clone https://github.com/MatheusDiamantino/React-Projects.git
cd React-Projects
npm install
npm start
```

Acesse `http://localhost:3000`. O comando `npm run backend` sobe o json-server na porta 5000.
