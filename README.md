## Índice

1. [Estrutura do JSON](#estrutura-do-json)
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

---
## Estrutura do JSON

```json
{
    "siteName": "Minha Loja",
    "logo": "./assets/img/logo/logo.png",
    "currency": "BRL",
    "font": "Sora",
    "theme": {
        "backgroundColor": "#fff",
        "nameSiteColor": "#808080",
        "iconsColor": "#808080",
        "secondaryColor": "#2ecc71"
    },
    "whatsappNumber": "5551999999999"
}

```
---

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

