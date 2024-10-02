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
2. [Funcionalidades](#Funcionalidades)
3. [Tecnologias Usadas](#Tecnologias-Usadas)
4. [Como Personalizar o Site](#como-personalizar-o-site)
    1. [Nome do Site (`siteName`)](#nome-do-site-sitename)
    2. [Logotipo (`logo`)](#logotipo-logo)
    3. [Moeda (`currency`)](#moeda-currency)
    4. [Fonte (`font`)](#fonte-font)
    5. [Tema do Site (`theme`)](#tema-do-site-theme)
    6. [Exibição da Seleção de Cores (`displayColors`)](#exibição-de-cores-displayColors)
    7. [Exibição da Seleção de Tamanhos (`displaySizes`)](#exibicao-de-tamanhos-displaySizes)
    8. [Banner (`banner`)](#banner-banner)
    9. [WhatsApp(`whatsappNumber`)](#numero-do-whatsapp-whatsappnumber)
5. [Instruções de Uso](#instrucoes-de-uso)
6. [Exemplo de Configuração Personalizada](#exemplo-de-configuracao-personalizada)
7. [Observação](#observacao)


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

- **assets/**: Armazena todos os recursos estáticos do site, organizados em subpastas específicas para diferentes tipos de mídias. 

  - **banner/**: Contém a imagem principal da loja, que deve ser nomeada como `banner.jpg` para garantir que seja carregada corretamente no site.
  
  - **logo/**: Armazena o logotipo oficial da loja, que deve sempre ser nomeado como `logo.png` para facilitar a substituição ou atualização.
  
  - **products/**: Destinada às imagens dos produtos da loja. Aqui, você pode adicionar imagens dos itens disponíveis para venda, sem restrições de nomes específicos para os arquivos.
  
  - **icons/**: Contém os ícones utilizados no site, que podem ser personalizados de acordo com as necessidades visuais, e não possuem restrições quanto aos nomes dos arquivos.

- **css/**: Contém o arquivo de estilos CSS que define a aparência do site, incluindo cores, layout, tipografia e outras regras de design.
- **data/**: Inclui arquivos no formato JSON que armazenam os dados dinâmicos da loja, como categorias de produtos, lista de produtos e configurações gerais, simplificando a manutenção e atualização sem necessidade de um banco de dados.
- **docs/**: Contém a documentação do projeto. O arquivo `README.md` é o ponto de partida para qualquer desenvolvedor que queira entender ou contribuir para o projeto, enquanto o arquivo `anotações.txt` pode conter detalhes sobre o processo de desenvolvimento.
- **js/**: Contém os scripts JavaScript que controlam a funcionalidade e o comportamento da loja. Isso inclui desde a leitura dos dados dos arquivos JSON até a renderização dinâmica dos produtos e páginas.
- **index.html**: Esta é a página inicial da loja, onde os usuários podem visualizar uma lista de produtos e outras informações essenciais da loja.
- **product-details.html**: Página que exibe detalhes específicos de um produto quando o usuário clica para saber mais. Esta página é gerada dinamicamente com base nos dados dos produtos.

## Funcionalidades

Este projeto oferece uma solução simplificada para a criação de lojas online com as seguintes funcionalidades:

- **Catálogo de Produtos Dinâmico**: A loja exibe uma lista de produtos que é gerada dinamicamente a partir de um arquivo JSON, facilitando a atualização dos itens sem necessidade de um banco de dados.
- **Página de Detalhes do Produto**: Ao clicar em um produto, o usuário é redirecionado para uma página que exibe detalhes completos, como descrição, preço e imagem do item.
- **Configuração via JSON**: Todas as configurações da loja, como moeda, título, e informações visuais, são gerenciadas por meio de um arquivo JSON, permitindo uma personalização fácil e rápida.
- **Organização de Categorias**: Os produtos são organizados por categorias, também configuradas em arquivos JSON, permitindo aos usuários filtrar e navegar pelos itens de forma intuitiva.
- **Customização de Estilos**: A loja conta com um arquivo de CSS onde os desenvolvedores podem facilmente ajustar o visual, cores e tipografia, conforme suas preferências ou identidade visual da marca.

## Tecnologias Usadas

Este projeto foi construído utilizando as seguintes tecnologias:

- **HTML5**: Linguagem de marcação usada para estruturar o conteúdo da loja, criando páginas web que são leves e rápidas.
- **CSS3**: Utilizado para estilizar o site, garantindo que a loja tenha um design atrativo e responsivo, adaptado a diversos dispositivos e tamanhos de tela.
- **JavaScript (ES6+)**: Linguagem de programação usada para manipular os dados, interagir com os arquivos JSON e dinamizar a exibição dos produtos na loja.
- **JSON (JavaScript Object Notation)**: Formato leve de troca de dados utilizado para armazenar informações sobre produtos, categorias e configurações da loja, facilitando a personalização sem a necessidade de um banco de dados.
- **SVG**: Utilizado para ícones, oferecendo gráficos escaláveis e leves, otimizados para o desempenho em diversas resoluções.


## Como Personalizar o Site

### Como Editar o Arquivo

- **Abra o arquivo de configuração:** Utilize um editor de texto ou uma IDE de sua escolha.

- **Localize a propriedade que deseja editar:** Navegue pelas propriedades conforme descrito acima.

- **Edite a propriedade:** Altere o valor da propriedade conforme necessário, garantindo que a estrutura JSON permaneça válida (preste atenção nas vírgulas e aspas).

- **Salve o arquivo:** Após realizar as alterações, salve o arquivo.

### Nome do Site (`siteName`)

- **Descrição**: Nome que será exibido na parte superior do site. Esse nome é a identidade do seu negócio e aparecerá em diversas seções do site, incluindo o cabeçalho e o título da página..
- **Valor Padrão**: `"Lujinha"`
- **Exemplo de Uso**: Para alterar o nome do site para "Meu Novo Site", edite o valor:
  ```json
  "siteName": "Meu Novo Site"
  ```

### Logotipo (`logo`)

- **Descrição**:Nome do arquivo de imagem do logotipo, que deve estar localizado na pasta assets/img/logo. O logotipo é exibido na parte superior do site..
- **Valor Padrão**: `"logo.png"`
- **Exemplo de Uso**:Para mudar o logotipo, insira a nova imagem na pasta assets/img/logo e altere o nome do arquivo no JSON:
  ```json
  "logo": "novologo.png"
  ```

### Moeda (`currency`)

- **Descrição**: Define a moeda utilizada no site.
- **Valor Padrão**: `"BRL"` (Real Brasileiro)
- **Exemplo de Uso**: Para mudar a moeda para Dólar Americano, altere o valor:
  ```json
  "currency": "USD"
  ```

### Fonte (`font`)

- **Descrição**: A fonte principal usada no site. Atualmente, existem três opções disponíveis:
    - "Sora": "Sora, sans-serif"
    - "Suse": "SUSE, sans-serif"
    - "Montserrat": "Montserrat, sans-serif"
- **Valor Padrão**: `"Sora"`
- **Exemplo de Uso**: Para alterar a fonte para Arial, modifique o valor:
  ```json
  "font": "Sora"
  ```

### Tema do Site (`theme`)

- **Descrição**: Este campo controla as cores do tema. Ele é composto por quatro subcampos: 
    - **backgroundColor:** Cor de fundo do site.
         - Valor Padrão: `"#F5F5F5"`
    - **nameSiteColor:** Cor do nome do site.
         - Valor Padrão: `"#757575"`
    - **txtSiteColor:** Cor do texto.
          - Valor Padrão: `"#424242"`
    - **buttonColor:** Cor dos botões.
        - Valor Padrão: `"#212121"`
    - **buttonColorTxt**: Cor do texto dos botões.
        - Valor Padrão: `"#fff"`

**Exemplo de Uso**: Para mudar as cores, basta editar os valores em hexadecimal:
```json
"theme": {
    "backgroundColor": "#f0f0f0",
    "nameSiteColor": "#333333",
    "iconsColor": "#ff5733",
    "secondaryColor": "#3498db"
}
```

### Exibição de Cores (`displayColors`)

- **Descrição**: Define se a opção de selecionar cores estará disponível nos produtos.
- **Valor Padrão**: `true`
- **Exemplo de Uso**: Para desabilitar a exibição de cores, mude o valor:
  ```json
  ""displayColors": false"
  ```

  ### Exibição de Tamanhos (`displaySizes`)

- **Descrição**: Define se a opção de selecionar tamanhos estará disponível.
- **Valor Padrão**: `true`
- **Exemplo de Uso**: Para desabilitar a exibição de cores, mude o valor:
  ```json
  ""displaySizes": false"
  ```

  ### Banner (`banner`)

- **Descrição**: Este campo configura o banner exibido na página principal. Ele é composto por cinco subcampos: 
    - **bannerImg:** Caminho para a imagem do banner.
         - Valor Padrão: `"banner.png"`
    - **bannerTxt:** Texto principal do banner.
         - Valor Padrão: `"Lorem ipsum dolor amet mustache knausgaard"`
    - **bannerTxt2:** Texto secundário do banner.
          - Valor Padrão: `"Lorem ipsun"`
    - **bannerTxtColor:** Cor do texto do banner.
        - Valor Padrão: `"#fff"`
    - **bannerStyle:**:  Alinhamento do texto no banner (exemplo: "left", "center", "right").
        - Valor Padrão: `"left"`

### Número do WhatsApp (`whatsappNumber`)

- **Descrição**: Configura o número de WhatsApp e a mensagem padrão para compartilhar o carrinho de compras.
- **number:** Número de telefone para contato via WhatsApp, incluindo o código do país.
    - **Valor Padrão**: `"5551999999999"`
- **number:** Mensagem inicial enviada com os detalhes do carrinho.
    - **Valor Padrão**: `"Produtos no carrinho:\n\n"`
- **Exemplo de Uso**: Para alterar o número de contato, insira o novo número:
  ```json
  "whatsappNumber": "5511998888777"
  ```

---

## Exemplo de Configuração Personalizada

Aqui está um exemplo de como o JSON pode ser configurado com valores personalizados:

```json
{
{
  "siteName": "Minha Loja Personalizada",
  "logo": "customLogo.png",
  "currency": "USD",
  "font": "Montserrat",
  "theme": {
    "backgroundColor": "#E0E0E0",
    "nameSiteColor": "#333333",
    "txtSiteColor": "#111111",
    "buttonColor": "#FF5733",
    "buttonColorTxt": "#FFFFFF"
  },
  "displayColors": true,
  "displaySizes": false,
  "banner": {
    "bannerImg": "newPromoBanner.png",
    "bannerTxt": "Mega Promoção de Fim de Ano!",
    "bannerTxt2": "Descontos de até 50%!",
    "bannerTxtColor": "#FF0000",
    "bannerStyle": "center"
  },
  "whatsapp": {
    "number": "5511987654321",
    "message": "Confira os produtos adicionados ao carrinho:\n\n"
  }
}

}
```

---

## Observação

Certifique-se de que o arquivo JSON esteja bem formatado e com as aspas e vírgulas corretas, para evitar erros ao carregar as configurações no site.
```

