# Explicação do Código `Menu` 25/11/24

## Descrição Geral

As mudanças feitas do componente React chamado `Menu` que exibe uma lista de pratos usando o componente `Media` do `reactstrap`.

## O que foi feito

**Importação de Dependências**

- Importado `React` e o hook `useState` para gerenciar o estado.
- Importado `Media` de `reactstrap` para estruturar a exibição dos pratos.

**Estrutura da Lista**

- Cada prato possui as seguintes propriedades:
  - `id`: Identificador único.
  - `name`: Nome do prato.
  - `image`: Caminho para a imagem do prato.
  - `category`: Categoria do prato.
  - `label`: Etiqueta especial.
  - `price`: Preço do prato.
  - `description`: Descrição detalhada do prato.

**Mapeamento dos Pratos**

- Usou o método `map` para transformar a lista de pratos (`dishes`) em elementos JSX.
- Cada prato é renderizado dentro de uma estrutura `Media`:
  - Imagem do lado esquerdo (`Media object`).
  - Detalhes do prato (nome e descrição) no corpo (`Media body`).

**Retorno do Componente**

- O componente retorna uma estrutura de container Bootstrap:
  - Div principal com a classe `container`.
  - Div para organizar a lista com `row`.
  - Lista de pratos encapsulada por `Media list`.

**Exportação do Componente**

- O componente é exportado como `default` para ser usado em outras partes do projeto.

---

## Estrutura Visual

A lista de pratos será exibida verticalmente, com cada prato ocupando uma linha:

- Imagem do prato no lado esquerdo.
- Nome e descrição alinhados no centro-direita.

---

## Por fim

Foi importado os components para o `App.js` e chamado logo em seguida.

# Explicação das alteraçoes feitas 26/11/24

## Breve Descrição das Alterações

- Organizaçao do código para melhorar a leitura.
- Ajuste na identação dos arquivos `MenuComponent.js` e `dishes.js`.
- Revisao dos componentes e funçoes com explicaçoes sobre funcionalidades do app.

---

## **MenuComponent.js**

### Breve Descrição

E um arquivo responsavel pela renderizaçao do menu principal da aplicaçao, e exibe os pratos disponiveis ee permite a interaçao do usuario com o prato especifico.

### Respostas:

**Quais os imports utilizados?**

- **React e Hooks:** Para criar e gerenciar estados com `useState`.
- **Componentes do Reactstrap:**
  - `Card`: Para estruturar os pratos como cartoes.
  - `CardImg`, `CardImgOverlay`, `CardBody`, `CardTitle`, e `CardText`: Para criar a interface do prato com imagem e detalhes.

**Há componentes? O que fazem?**

- **Menu:**
  - Renderiza uma lista de pratos (`props.dishes`).
  - Tambem mostar detalhes do prato selecionado.

**Para que serve o `onDishSelect` no projeto?**

- Mostrar o prato selecionado ao clicar em um cartao.

**Para que serve o `renderDish`?**

- Mostrar todos os detalhes do prato selecionado pelo usuario.

**Para que serve o `props.dishes.map`?**

- Cria um cartão para cada prato na lista.

## **dishes.js**

### Breve Descrição

Armazena os dados dos pratos, incluindo informações como nome, imagem, descriçao, categoria, preço e comentários sobre os mesmo.

### Respostas:

**Quais as propriedades?**

- **`id`:** Identificador único de cada prato.
- **`name`:** Nome do prato.
- **`image`:** Caminho para a imagem do prato.
- **`category`:** Categoria do prato.
- **`label`:** Rótulo do prato.
- **`price`:** Preço do prato.
- **`description`:** Descriçao do prato.
- **`comments`:** Lista de comentários sobre o prato.

**Que tipo de `date` é utilizado?**

- As datas nos comentários estão em formato ISO 8601 (ex.: `"2012-10-16T17:57:28.556094Z"`).

---

## **App.js**

### Breve Descrição

Serve como o ponto de principal do projeto.

### Respostas:

1. **Para que serve o `const [dishes]`?**

   - Define como os pratos ficam seu estado inicial no componente principal.

2. **Explicar como funciona o `<Menu dishes={dishes} />`:**
   - Passa a lista de pratos (`dishes`) como uma prop para o componente `Menu`.
   - Permite ao componente `Menu` acessar os dados e renderizar os cartões.
