# Delivery Much Tech Challenge
  O desafio da Delivery Much consiste em construir uma API que receba ingredientes como parâmetro de entrada e retorne uma lista de receitas que contenha os ingredientes que foram pessados na query advindo de uma requisição GET.
  
  Ultilizando as Apis públicas da [Recipe Puppy](http://www.recipepuppy.com/about/api/) e da [giphy](https://developers.giphy.com/docs/api/) para obter os dados necessários para o retorno da resposta.
  
  Deve ser inserido no máximo três ingredientes e ter como retorno os ingredientes em uma array ordernado alfabeticamente e uma lista contendo receitas que utilizem os ingredientes listados. Dentro de cada receita deve ter uma imagem exemplificando a receita. Sendo assim a retorno:
  
  > Lista dos ingredientes recebido como parâmetro
  
  > Título da receita
  
  > Lista de ingredientes
  
  > Link para acessar a receita
  
  > Link de uma gif para a receita

# Variáveis de ambiente
  Variáveis de ambiente são informações que são passada de forma implícita quando um programa está sendo excutado, mantendo a informação confidencial, ela são comumente ultizada para manter em sigilo o host, user e password do banco de dados por exemplo.
  
  No Projeto em questão foi utilizada duas váriaveis de ambiente que são:
  
  #### PORT
  Usada para informar a porta em que o projeto está sendo excutado. Que no projeto é a `3333`.
    
  #### GIPHY_API_KEY
  Usada para informar a key que foi fornecida pela [giphy developer](https://developers.giphy.com/docs/api/). Que no projeto é a `TY6YhWEJ6b2Bci9M74PTMj2DeQebGgpv`
    
# Como rodar o projeto
  No projeto você pode iniciar ele com:
  
  #### `Yarn dev`
  Para iniciar o projeto em modo de desenvolvedor utilizando o [nodemon](https://github.com/remy/nodemon). O projeto irá abrir no localhost, porta 3333.
  
  #### `Yarn start`
  Para iniciar o projeto em modo de produção. O projeto irá abrir no localhost, porta 3333.
  
  
# Estrutura do projeto
  O projeto foi desenvolvido em NodeJs, usando express e exios, para criar o servidor e ter acesso as Apis, respectivamente. O projeto está estruturado de forma a permiti a implementação de novas features.
  Foi utilizado em modo desenvolvedor a ferramenta [nodemon](https://github.com/remy/nodemon) para facilitar o processo de reload da aplicação.

  A API possui aprenas um endpoint: 
  > http://{HOST}/recipes/?i={ingredient_1},{ingredient_2},{ingredient_3}

  **Example:** 
  > http://localhost:3333/recipes/?i=lime,sprite,gin

  A resposta para essa requisição é a seguinte:
  ```JSON
  {
      "keywords": [
          "gin",
          "lime",
          "sprite"
      ],
      "recipes": [
          {
              "title": "A.m.f (Adios Mother * Censored*)",
              "ingredients": [
                  "blue curacao",
                  "gin",
                  "lemon",
                  "lime",
                  "maraschino cherries",
                  "rum",
                 "sour mix",
                  "sprite",
                  "tequila",
                  "vodka"
              ],
              "link": "http://www.recipezaar.com/Amf-Adios-Mother-Censored-245851",
              "gif": "https://giphy.com/gifs/1n4ctKWzFj548b23h8"
         },
         {
              "title": "Delicious Gin Bucket",
              "ingredients": [
                  "gin",
                  "ice",
                  "lemon",
                  "lemonade",
                  "lime",
                  "limeade concentrate",
                  "sprite"
              ],
              "link": "http://www.recipezaar.com/Delicious-Gin-Bucket-279742",
              "gif": "https://giphy.com/gifs/26DnW95xVU4T5T7pu"
         },
          {
            "title": "Tokyo Tea",
              "ingredients": [
                  "gin",
                  "ice",
                  "lime",
                  "melon liqueur",
                  "rum",
                  "sprite",
                  "triple sec",
                  "vodka"
              ],
              "link": "http://www.foodnetwork.com/recipes/guy-fieri/tokyo-tea-recipe/index.html",
              "gif": "https://giphy.com/gifs/world-vr-worldvr-WpCOjZFo7O9UshBs3U"
          },  
          {
              "title": "The Grape Ape Bowla",
              "ingredients": [
                  "gin",
                  "grape juice",
                  "grapes",
                  "ice",
                  "lime",
                  "rum",
                  "sprite",
                  "triple sec",
                  "vodka"
              ],
              "link": "http://www.foodnetwork.com/recipes/guy-fieri/the-grape-ape-bowla-recipe/index.html",
              "gif": "https://giphy.com/gifs/jp81nNMLU4KROuBByr"
          },
          {
              "title": "Grape Ape Bowl",
              "ingredients": [
                  "gin",
                  "grape juice",
                  "grapes",
                  "ice",
                  "lime",
                  "rum",
                  "sprite",
                  "triple sec",
                  "vodka"
              ],
              "link": "http://www.recipezaar.com/Grape-Ape-Bowl-260670",
              "gif": "https://giphy.com/gifs/steppypants-3oEjHZcC3qRC8nxAoU"
          }
      ]
  }
``` 
