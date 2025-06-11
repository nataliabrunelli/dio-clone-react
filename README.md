# DIO Clone - Plataforma de Estudos


Este projeto é um clone da interface da plataforma da Digital Innovation One (DIO), desenvolvido como parte de um desafio de código para praticar e aprofundar conhecimentos em tecnologias modernas de front-end.

<br>

## 🚀 Demonstração ao Vivo

Acesse a aplicação em funcionamento através do link abaixo:

- **[DIO Clone no GitHub Pages](https://nataliabrunelli.github.io/dio-clone-react/)**

<br>

## ✨ Funcionalidades Principais

-   **👤 Cadastro de Usuários:** Permite que novos usuários criem uma conta.
-   **🔐 Login de Usuários:** Autenticação para usuários já cadastrados.
-   **📝 Validação de Formulários:** Validação em tempo real dos campos de email, senha e nome.
-   **🧭 Navegação entre Páginas:** Uso de roteamento para uma experiência de Single-Page Application (SPA).
-   **📡 Consumo de API:** Integração com uma API REST (MockAPI) para persistência de dados.

<br>

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

-   **[React](https://reactjs.org/)**: Biblioteca para construção da interface de usuário.
-   **[Vite](https://vitejs.dev/)**: Ferramenta de build extremamente rápida para desenvolvimento front-end.
-   **[Styled Components](https://styled-components.com/)**: Para estilização dos componentes de forma isolada e dinâmica.
-   **[React Router](https://reactrouter.com/)**: Para gerenciamento das rotas da aplicação.
-   **[React Hook Form](https://react-hook-form.com/)**: Para gerenciamento de formulários de forma performática e simplificada.
-   **[Yup](https://github.com/jquense/yup)**: Para validação de schemas dos formulários.
-   **[Axios](https://axios-http.com/)**: Cliente HTTP para realizar requisições à API.

<br>

## 💡 Desafios e Aprendizados

Durante o desenvolvimento, enfrentei alguns desafios que foram cruciais para o aprendizado:

-   **Deploy de uma SPA no GitHub Pages:** A maior dificuldade foi configurar o roteamento para funcionar corretamente no ambiente de deploy. A solução envolveu:
    1.  Configurar a `base` no `vite.config.js`.
    2.  Usar o `basename` no `BrowserRouter` do React Router.
    3.  Implementar o "truque do `404.html`", criando uma cópia do `index.html` para que o servidor do GitHub Pages sempre sirva a aplicação React, que por sua vez gerencia a rota.

-   **Tratamento de Erros da API:** Descobri que a MockAPI retorna um erro `404` quando uma busca não encontra resultados, em vez de um array vazio. Foi necessário refatorar a lógica usando `try...catch` para tratar esse "erro esperado" como um fluxo normal da aplicação (ex: permitir o cadastro se o GET retornar 404).

-   **Scripts de Build Multi-plataforma:** O comando `cp` para criar o `404.html` não funcionava no Windows. A solução foi adotar o pacote `ncp`, que garante a execução do script em qualquer sistema operacional.

<br>

## ⚙️ Como Rodar o Projeto Localmente

Para executar este projeto no seu ambiente local, siga os passos abaixo:

```bash
# 1. Clone o repositório
git clone https://github.com/nataliabrunelli/dio-clone-react.git

# 2. Navegue até o diretório do projeto
cd dio-clone-react

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev

# 5. Abra http://localhost:5173 (ou a porta indicada no terminal) no seu navegador.
```
**Pré-requisitos:** [Node.js](https://nodejs.org/en/) e [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) instalados.

<br>

---

Feito com ❤️ por **Natalia Brunelli**.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/nataliabrunelli/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/nataliabrunelli)
