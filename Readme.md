# Adlayer javascript integration test
Use este projeto para verificar se sua integração de recursos embedáveis do Adlayer estão devidamente integrados e como corrigir eventuais problemas.

## Instalação
### Script
Adicione o seguinte script no html de sua página integrada:

```html
<script src="javascripts/main/main.js"></script>
```

### Bookmarket
1. Arraste o link <a href="javascript:(function({var elem=document.createElement('script');elem.setAttribute('src','http://adlayerjavascriptsdk.com/integration-test/main.js');document.body.appendChild(elem);})()">Adlayer Integration Test</a> para a barra de favoritos do seu navegador.
2. Vá para a página integrada e click no bookmarklet

### Rodando testes
Escolha o seu tipo de integração (Page, Spaces, ads) click na aba correspondente e depois em 'Run'.

Os testes que não passarem ficarão em vermelho, veja se algum teste falhou corrija o problema e rode novamente até que todos estejam verdes.

