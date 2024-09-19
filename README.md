# Loujinha 

Este projeto tem como objetivo oferecer uma solução simples e acessível para aqueles que desejam abrir suas pequenas lojas online. Focado em usuários com algum conhecimento de desenvolvimento, ele permite a criação de lojas sem a necessidade de banco de dados, utilizando apenas arquivos JSON para todas as configurações. A proposta é facilitar o processo de criação de um e-commerce de baixo custo, permitindo que o usuário personalize facilmente sua loja sem a complexidade de integrações avançadas, garantindo flexibilidade e rapidez na implementação.

## Explicação Geral

Este projeto foi desenvolvido para facilitar a criação de pequenas lojas online, utilizando uma abordagem simples e eficaz. A estrutura separa claramente os recursos visuais, lógicos e de dados, tornando o sistema modular e de fácil manutenção.

Em vez de utilizar um banco de dados tradicional, a loja armazena suas informações essenciais, como categorias de produtos e configurações gerais, em arquivos JSON. Isso permite que os desenvolvedores com conhecimento básico possam facilmente modificar e adicionar novos produtos, categorias ou configurações apenas alterando esses arquivos.

Os scripts JavaScript carregam os dados diretamente dos arquivos JSON e geram dinamicamente o conteúdo nas páginas HTML, garantindo que o site seja sempre atualizado com base nas mudanças nos arquivos de dados. Isso torna o projeto ideal para pequenas lojas que buscam uma solução de baixo custo e de fácil personalização, sem a necessidade de ferramentas mais complexas como bancos de dados ou back-ends robustos.

Além disso, a estrutura bem definida dos arquivos e pastas garante que o projeto possa ser facilmente ampliado ou modificado, caso o desenvolvedor deseje adicionar novas funcionalidades ou estilos personalizados.

---

## Índice

1. [Estrutura de Diretórios e Arquivos](#Estrutura-de-Diretórios-e-Arquivos)
2. [Como Personalizar o Site](#como-personalizar-o-site)
    1. [Nome do Site (`siteName`)](#nome-do-site-sitename)
    2. [Logotipo (`logo`)](#logotipo-logo)
    3. [Moeda (`currency`)](#moeda-currency)
    4. [Fonte (`font`)](#fonte-font)
    5. [Tema do Site (`theme`)](#tema-do-site-theme)
    6. [Número do WhatsApp (`whatsappNumber`)](#numero-do-whatsapp-whatsappnumber)
3. [Instruções de Uso](#instrucoes-de-uso)
4. [Exemplo de Configuração Personalizada](#exemplo-de-configuracao-personalizada)
5. [Observação](#observacao)


# Estrutura de Diretórios e Arquivos

Este projeto é organizado da seguinte forma:

```
LOJA/
├── assets/
│   ├── img/
│   │   ├── banner/
│   │   │   └── banner.jpg        # Imagem do banner principal da loja
│   │   ├── icons/
│   │   │   ├── icon1.svg          # Ícone da loja (exemplo)
│   │   │   ├── icon3.svg          # Outro ícone (exemplo)
│   │   ├── logo/
│   │   │   └── logo.png           # Logotipo da loja
│   │   └── products/              # Imagens dos produtos (se houver)
├── css/
│   └── style.css                  # Arquivo de estilo da loja
├── data/
│   ├── categories.json            # Dados das categorias de produtos
│   ├── products.json              # Dados dos produtos (nome, preço, etc.)
│   └── settings.json              # Configurações da loja (nome, moeda, etc.)
├── docs/
│   ├── anotações.txt              # Anotações gerais sobre o projeto
│   └── README.md                  # Documentação do projeto
├── js/
│   ├── config.js                  # Configurações em JavaScript
│   ├── main.js                    # Lógica principal do site
│   └── products.js                # Lógica específica para produtos
├── index.html                     # Página principal da loja
└── product-details.html           # Página de detalhes de um produto

```
---

## Descrição das Pastas e Arquivos:

- **assets/**: Armazena todos os recursos estáticos do site, como imagens de banners, logotipos e ícones personalizados. Esses arquivos são essenciais para a apresentação visual da loja.
- **css/**: Contém o arquivo de estilos CSS que define a aparência do site, incluindo cores, layout, tipografia e outras regras de design.
- **data/**: Inclui arquivos no formato JSON que armazenam os dados dinâmicos da loja, como categorias de produtos, lista de produtos e configurações gerais, simplificando a manutenção e atualização sem necessidade de um banco de dados.
- **docs/**: Contém a documentação do projeto. O arquivo `README.md` é o ponto de partida para qualquer desenvolvedor que queira entender ou contribuir para o projeto, enquanto o arquivo `anotações.txt` pode conter detalhes sobre o processo de desenvolvimento.
- **js/**: Contém os scripts JavaScript que controlam a funcionalidade e o comportamento da loja. Isso inclui desde a leitura dos dados dos arquivos JSON até a renderização dinâmica dos produtos e páginas.
- **index.html**: Esta é a página inicial da loja, onde os usuários podem visualizar uma lista de produtos e outras informações essenciais da loja.
- **product-details.html**: Página que exibe detalhes específicos de um produto quando o usuário clica para saber mais. Esta página é gerada dinamicamente com base nos dados dos produtos.

## Como Personalizar o Site

### Nome do Site (`siteName`)

- **Descrição**: O nome do site que será exibido no cabeçalho ou em outras áreas do site.
- **Valor Padrão**: `"MInha Loja"`
- **Exemplo de Uso**: Para alterar o nome do site para "Meu Novo Site", edite o valor:
  ```json
  "siteName": "Meu Novo Site"
  ```

### Logotipo (`logo`)

- **Descrição**: O caminho para o arquivo de imagem do logotipo.
- **Valor Padrão**: `"./assets/img/logo/logo.png"`
- **Exemplo de Uso**: Para usar outro logotipo, altere o caminho da imagem:
  ```json
  "logo": "./assets/img/logo/novologo.png"
  ```

### Moeda (`currency`)

- **Descrição**: Define a moeda utilizada no site.
- **Valor Padrão**: `"BRL"` (Real Brasileiro)
- **Exemplo de Uso**: Para mudar a moeda para Dólar Americano, altere o valor:
  ```json
  "currency": "USD"
  ```

### Fonte (`font`)

- **Descrição**: A fonte principal usada no site.
- **Valor Padrão**: `"Sora"`
- **Exemplo de Uso**: Para alterar a fonte para Arial, modifique o valor:
  ```json
  "font": "Arial"
  ```

### Tema do Site (`theme`)

Este campo controla as cores do tema. Ele é composto por quatro subcampos:

- **backgroundColor**: Define a cor de fundo do site.
  - Valor padrão: `"#fff"` (branco)
- **nameSiteColor**: Define a cor do nome do site.
  - Valor padrão: `"#808080"` (cinza)
- **iconsColor**: Define a cor dos ícones.
  - Valor padrão: `"#808080"` (cinza)
- **secondaryColor**: Define a cor secundária do site, utilizada em botões e elementos destacados.
  - Valor padrão: `"#2ecc71"` (verde)

**Exemplo de Uso**: Para mudar as cores, basta editar os valores em hexadecimal:
```json
"theme": {
    "backgroundColor": "#f0f0f0",
    "nameSiteColor": "#333333",
    "iconsColor": "#ff5733",
    "secondaryColor": "#3498db"
}
```

### Número do WhatsApp (`whatsappNumber`)

- **Descrição**: Número do WhatsApp para contato, usado em interações no site.
- **Valor Padrão**: `"5551999999999"`
- **Exemplo de Uso**: Para alterar o número de contato, insira o novo número:
  ```json
  "whatsappNumber": "5511998888777"
  ```

---

## Instruções de Uso

1. Abra o arquivo JSON em seu editor de texto.
2. Altere os valores de acordo com as personalizações que deseja fazer.
3. Salve as alterações e recarregue o site para ver as mudanças aplicadas.

Esse arquivo permite que você personalize rapidamente o visual e algumas funcionalidades do site sem precisar modificar diretamente o código-fonte JavaScript.

---

## Exemplo de Configuração Personalizada

Aqui está um exemplo de como o JSON pode ser configurado com valores personalizados:

```json
{
    "siteName": "Loja de Tecnologia",
    "logo": "./assets/img/logo/tecnologia_logo.png",
    "currency": "USD",
    "font": "Roboto",
    "theme": {
        "backgroundColor": "#fafafa",
        "nameSiteColor": "#000000",
        "iconsColor": "#0055ff",
        "secondaryColor": "#ffcc00"
    },
    "whatsappNumber": "5511987654321"
}
```

Nesse exemplo, o nome do site foi alterado para "Loja de Tecnologia", o logotipo foi modificado, a moeda é definida como Dólar Americano e as cores e fontes foram ajustadas para refletir um novo estilo.

---

## Observação

Certifique-se de que o arquivo JSON esteja bem formatado e com as aspas e vírgulas corretas, para evitar erros ao carregar as configurações no site.
```

