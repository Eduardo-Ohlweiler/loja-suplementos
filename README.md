Este é o frontend do projeto Loja Suplementos, desenvolvido em Next.js.
Para visualizar todas as funcionalidades do sistema, é necessário rodar também a API Backend que acompanha este projeto.
Para que o projeto funcione corretamente, é preciso clonar e executar a API: https://github.com/Eduardo-Ohlweiler/loja_suplementos_api

Passos:
 - Clone o repositório da API.
 - Siga as instruções do README da API para configurá-la e executá-la.
 - Com a API rodando, execute este projeto frontend para acessar todas as funcionalidades.

Tecnologias
 - Next.js 15 (App Router + Turbopack)
 - React 19
 - TypeScript 5
 - Axios – Requisições HTTP com interceptor JWT
 - Chakra UI – Design system e componentes
 - React Hook Form + Yup – Validação e gerenciamento de formulários
 - React Toastify – Notificações
 - React Responsive Carousel – Carrosséis de produtos

Criar um .env na raiz do projeto e adicione:
 NEXT_PUBLIC_API_URL='http://localhost:8080/api'

Como instalar as dependencias:
  yarn install

Para rodar a aplicação
 yarn run dev
