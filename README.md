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

# Links uteis

- [State of JS](https://stateofjs.com/en-US)
- [State of CSS](https://stateofcss.com/en-US)

- [4 Maneiras de Aprimorar Seus IFS](https://www.linkedin.com/posts/isaac-gomes-matos_typescript-javascript-activity-7260263756784435200-wEwr)

- [GitHub Handbook](https://www.linkedin.com/posts/awdhesh-kumar-27427424b_gitgithub-mastery-streamline-your-version-ugcPost-7259194299597086720-P3K1)

- [Front End Enginner - Dicas CSS](https://www.linkedin.com/in/arbaoui-mehdi-793a96154/)

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
