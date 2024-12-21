# MyFinance Web React

## Descrição do Projeto

O MyFinance Web React é um projeto frontend desenvolvido para gerenciar planos de contas e transações financeiras. Ele permite que os usuários adicionem, editem e excluam planos de contas e transações financeiras, além de visualizar um resumo financeiro mensal.

## Arquitetura Utilizada

O projeto segue uma arquitetura baseada em componentes utilizando React. A estrutura de diretórios é organizada da seguinte forma:

- `src/`: Contém todo o código-fonte do projeto.
  - `components/`: Componentes reutilizáveis da aplicação.
    - `AccountPlanModal/`: Modal para adicionar/editar planos de contas.
    - `FinancialTransactionsModal/`: Modal para adicionar/editar transações financeiras.
    - `Header/`: Cabeçalho da aplicação.
    - `Modal/`: Componente genérico de modal.
    - `Pagination/`: Componente de paginação.
  - `constants/`: Constantes utilizadas na aplicação.
  - `functions/`: Funções para realizar chamadas à API.
  - `pages/`: Páginas da aplicação.
    - `AccountPlan/`: Página de gerenciamento de planos de contas.
    - `FinancialTransactions/`: Página de gerenciamento de transações financeiras.
    - `Home/`: Página inicial com resumo financeiro.
    - `NotFound/`: Página de erro 404.
  - `assets/`: Recursos estáticos como imagens e ícones.
  - `main.jsx`: Ponto de entrada da aplicação.

## Tecnologias

As principais ferramentas e bibliotecas utilizadas no projeto incluem:

- **Vite**: Gerenciador de build moderno e rápido, que oferece uma experiência de desenvolvimento ágil com hot module replacement (HMR).
- **PropTypes**: Utilizado para validação de tipos nas props dos componentes, garantindo maior consistência e clareza no desenvolvimento.
- **Axios**: Biblioteca para realizar requisições HTTP, simplificando a comunicação com APIs externas.
- **Styled-components**: Abordagem CSS-in-JS para estilização de componentes, permitindo criar estilos dinâmicos e coesos diretamente no código React.
- **ESLint**: Ferramenta de linting que ajuda a manter um código limpo, padronizado e livre de erros comuns.
- **Prettier**: Formatação automática de código para garantir consistência em todo o projeto.

## Configuração para Startup do Projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)

### Passos para Configuração

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/myfinance-web-react.git
    cd myfinance-web-react
    ```
2. Instale as dependências:
    ```sh
    npm install
    ```
3. Inicie o servidor de desenvolvimento:
    ```sh
    npm start
    ```
4. Abra o navegador e acesse http://localhost:3000 para visualizar a aplicação.