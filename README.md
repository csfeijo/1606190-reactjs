# 1606190-reactjs

Turma de ReactJS da Targettrust.

## Aula 01

- [x] Setup do React com Vite
- [x] Hot Reload
- [x] Limpando o projeto dos arquivos desnecessários
- [x] React Fragment
- [x] JSX/TSX
- [x] Interpolação de valores

## Aula 02

- [x] Condicionais em TSX
- [x] Componentes
- [x] Props
- [x] Childrens
- [x] Interface em TS

## Aula 03

- [x] Exercício: Componente de botão
- [x] React Hooks
- [x] useState
- [x] useEffect

## Aula 04

- [x] Correção exercício slide 60
- [x] Bugs: resolvendo bugs de state com radio button
- [x] Refactor: criando um componente não exportado
- [x] React StrictMode

## Aula 05

- [x] Revisão
- [x] Styled Components
- [x] Estilizando uma tag
- [x] Estilizando um componente
- [x] Exercício de Menu

## Aula 06

- [x] Correção do exercício do Menu
- [x] Overview sobre Figma
- [x] Finalização de styled-components (props overview)
- [x] Rotas em React
- [x] Bate papo sobre carreira

## Aula 07

- [x] Revisão
- [x] Correção exercício
- [x] Rotas com parâmetros

## Aula 08

- [x] Revisão
- [x] Finalização de rotas
- [x] Exercício de map na Listagem

## Aula 09

- [x] Revisão
- [x] Correção do exercício de validação de formulário
- [x] Axios
- [x] Integração com API

## Aula 10

- [x] Revisão - última aula
- [x] Revisão sobre Axios
- [x] Correção do exercício de POST do Formulário
- [x] Context API
- [x] Próximos passos

# Links úteis

- [React useMemo - alterativa ao useEffect](https://react.dev/reference/react/useMemo)
- [React Context API - Professor Feijó](https://www.youtube.com/watch?v=VMy9Sb0eDHo)
- [GitHub Workflow - Vídeo Professor Feijó](https://www.youtube.com/watch?v=_gohCZYK50s)
- [Widget de Stats do GitHuyb](https://github.com/anuraghazra/github-readme-stats)
- [State of JS](https://stateofjs.com/en-US)
- [State of CSS](https://stateofcss.com/en-US)
- [4 Maneiras de Aprimorar Seus IFS](https://www.linkedin.com/posts/isaac-gomes-matos_typescript-javascript-activity-7260263756784435200-wEwr)
- [GitHub Handbook](https://www.linkedin.com/posts/awdhesh-kumar-27427424b_gitgithub-mastery-streamline-your-version-ugcPost-7259194299597086720-P3K1)
- [Front End Enginner - Dicas CSS](https://www.linkedin.com/in/arbaoui-mehdi-793a96154/)
- [BEM Pattern](https://getbem.com/)
- [Roadmap - Front End developer](https://roadmap.sh/frontend)

# Vocabulário

- "wrapper": algum elemento que envolve outros (elemento pai).

# Sobre o destructuring

Pode ser realizado sobre um retorno de objeto ou de array.
Exemplo:

**Objeto**

```js
const pessoa = {
  nome: "Cícero",
  idade: 43,
  cidade: "Porto Alegre",
};

// Destructuring para extrair "nome" e "cidade"
const { nome, cidade } = pessoa;

console.log(nome); // Saída: Cícero
console.log(cidade); // Saída: Porto Alegre
```

**Array**

```js
const numeros = [10, 20, 30, 40];

// Destructuring para extrair os dois primeiros elementos
const [primeiro, segundo] = numeros;

console.log(primeiro); // Saída: 10
console.log(segundo); // Saída: 20
```

# Sobre colaboração Open Source

Itens interessantes de conhecer para conseguir colaborar com projetos Open Source.

- git clone
- git branch
- git merge X git rebase
- resolver conflitos de código
- processo de PR (como abrir, como mergear, como realizar correções e diferenças)
- processo de FORK

# Anotacoes

- **SPA** : Single Page Application (Aplicação de Página Única)

## Exemplo de grid layout com 12 colunas - estilo Bootstrap

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(
    12,
    1fr
  ); /* Define 12 colunas de tamanho igual */
  gap: 16px; /* Espaçamento entre os elementos */
}

[class^="col-"] {
  grid-column: span 1;
}
.col-2 {
  grid-column: span 2;
}
.col-3 {
  grid-column: span 3;
}
.col-4 {
  grid-column: span 4;
}
.col-5 {
  grid-column: span 5;
}
.col-6 {
  grid-column: span 6;
}
.col-7 {
  grid-column: span 7;
}
.col-8 {
  grid-column: span 8;
}
.col-9 {
  grid-column: span 9;
}
.col-10 {
  grid-column: span 10;
}
.col-11 {
  grid-column: span 11;
}
.col-12 {
  grid-column: span 12;
}
```

```html
<div class="grid-container">
  <div class="col-6"></div>
  <div class="col-6"></div>
</div>

<div class="grid-container">
  <div class="col-3"></div>
  <div class="col-6"></div>
  <div class="col-3"></div>
</div>
```
