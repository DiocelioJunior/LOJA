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
---
