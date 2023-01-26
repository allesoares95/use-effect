## Hooks

Hooks permitem o uso de vários recursos de forma simples através de funções.
Eles também ajudam a organizar a lógica utilizada dentro dos componentes.

**useState**

  É um hooks que você consegue armazenar váriaveis, que quando tem seu valor
  alterado provoca uma nova reenderização no componente assim agente consegue 
  exibir em tempo real uma informação conforme ela for atualizada por alguma
  funcionalidade ou algum click em tela, 


**Utilização de useEffect**

  useEffect -> Side-effect -> Efeito corateral.

  useEffect ele sempre será executado duas vezes , a primeira é quando o 
  componente for exibido em tela, e o segundo momento é toda vez que as 
  váriaveis que for passada nos array de dependencias mudarem, caso você
  não passar nada no array de dependências ele so ira executar a primeira vez 
  quando o componente aparecer em tela.

  podemos usá-los também como ciclo de vida do componente.
  