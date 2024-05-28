# Server Actions no Next.js

A mutação de dados (criar, deletar, atualizar) é um "capítulo à parte" nas novas versões do Next.js e do React quando utilizamos server components.

Neste Mini Projeto, vamos implementar uma API que cria e deleta pedidos. E tudo será feito por meio de Server Actions, com revalidação, atualização dos dados na API e tratamento de erros.

Vale lembrar que esse Mini Projeto é uma "continuação" do Mini Projeto [Busca, filtro, ordenação e paginação com Next.js](https://codante.io/mini-projetos/busca-filtro-ordenacao-e-paginacao-com-nextjs). Mas não se assuste - se você não fez o Mini Projeto anterior, poderá tranquilamente fazer esse - uma vez que eles são independentes. 

## 🤓 Antes de começar

O design e UI do front já estão implementados! O objetivo aqui é conseguir conectar a API e fazer as funcionalidades de criar novo pedido e deletar um pedido existente.

Para isso, basta fazer um fork, clonar o código para a sua máquina, instalar as dependências e rodar `pnpm run dev` ou `npm run dev`!

### A API

A API que será utilizada foi desenvolvida por nós, do Codante. O endpoint principal (de listagem de pedidos) está em `https://apis.codante.io/api/orders-api/orders`. A API é capaz de filtrar, ordenar, paginar e fazer uma busca textual. Também é capaz de criar ou apagar um pedido. 

Neste Mini Projeto vamos utilizar majoritariamente os métodos `POST` e `DELETE` para, respectivamente, criarmos e apagarmos pedidos. 

A documentação da API está em <a target="_blank" href="https://apis-docs.codante.io/orders-api">https://apis-docs.codante.io/orders-api</a>. Será necessário consultá-la para fazer este Mini Projeto.

> [!NOTE]    
> Nenhum dos dados da API são reais e a base de dados é redefinida a cada hora.

## 🔨 Requisitos

**Criar Formulário de Novo Pedido**

- Crie uma Server Action para criar novos pedidos
- Você deverá usar os campos
  - Nome do Cliente
  - Email do Cliente
  - Status
  - Data do Pedido
  - Valor do Pedido
- O formulário deverá estar dentro do Modal de cadastrar pedido. 
- Faça validação de erros e de sucesso da forma como achar mais interessante (banner, toast, alerta, etc). O importante aqui é um "feedback" para o usuário saber se a operação funcionou ou não.  
- O novo pedido criado deverá aparecer na tela, sem ser necessário um novo *refresh* no browser.

> [!WARNING]  
> Uma possibilidade para trabalhar com a validação é o uso do hook `useFormState` / `useActionState`. Atenção que este é um hook que está apenas presente nas versões *canary* do React (e nas últimas versões do Next.js) e irá ter seu nome alterado. Mais infos [neste link.](https://react.dev/reference/react/useActionState)


**Deletar um Pedido**

- Crie uma Server Action para deletar um pedido utilizando o ícone de lixeira.
- Faça validação de erros e de sucesso da forma como achar mais interessante (banner, toast, alerta, etc). O importante aqui é um "feedback" para o usuário saber se a operação funcionou ou não.
- O pedido deletado deverá desaparecer da tela, sem ser necessário um novo *refresh* no browser.

## 🔨 Desafio extra para quem quer ir além

- Para um melhor *feedback* para o usuário, ao deletar ou adicionar um pedido, adicione uma animação. 

## 🎨 Design Sugerido

Neste Mini Projeto não será preciso implementar nenhum design - já fizemos isso por você.

## 👉🏽 Sobre este mini-projeto

### O que você irá praticar:

#### Next.js

- Server Actions
- `revalidatePath()`
- Client vs Server Components
- `shadcn/ui` (biblioteca de interface de usuário)
- `useFormState` / `useActionState`
- Server Components no Next.js

### Pré-requisitos

- React
- Next.js básico versões 13+
- Entender as diferenças entre server e client components é recomendável