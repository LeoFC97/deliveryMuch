# Delivery Much Challange

This API project was done for a challenge issued by Delivery Much. We were tasked with developing an API in nodejs and deployed with docker. This API also had to follow the best practices proposed on Clean Code and take into account Design Patterns


## Getting Started

These instructions will get you a copy of the project up and running on your local machine, for development and testing purposes. 

### Prerequisites

You must install node.js, docker and docker-compose.

```
I strongly recommend downloading the LTS versions from:
https://nodejs.org/en/ 
https://www.docker.com/products/docker-desktop
```

### Installing

First, you'll clone the repository from github. 
Then, open the folder you just cloned - make sure your docker service is running. 
Run docker-compose build to create the container, and, to finish it off, run docker-compose up to start the container.
With these steps, the environment should be running smoothly at localhost:3333.

```
git clone https://github.com/LeoFC97/deliveryMuchChallange
cd deliveryMuchChallange
docker-compose build
docker-compose up
```

## Request & Response Examples

### API Resources

  - [GET /recipes?i=<ingredient_1>,<ingredient_2>](#get-recipes)

### GET /recipes

Example: http://127.0.0.1:3333/recipes?i=avocado

Response body:

    {
    "keywords": [
      "onion",
      "avocado"
    ],
    "recipes": [
      {
        "title": "Guacamole Dip Recipe",
        "ingredients": [
          "avocado"
        ],
        "link": "http://cookeatshare.com/recipes/guacamole-dip-4099",
        "gif": "https://media2.giphy.com/media/I3eVhMpz8hns4/giphy.gif?cid=1613e75ff1ea33ce10b073e59f9bfb5efe2cc3726ad32692&rid=giphy.gif"
      },
      {
        "title": "Avocado and Prawns in Wasabi",
        "ingredients": [
          "avocado",
          "shrimp"
        ],
        "link": "http://www.recipezaar.com/Avocado-and-Prawns-in-Wasabi-19943",
        "gif": "https://media1.giphy.com/media/Ao1lyXWj0Qz6/giphy.gif?cid=1613e75f0d4a89189d219248036fdfa77ce7a68e13df4305&rid=giphy.gif"
      },
      {
        "title": "Chunky Green  Guacamole",
        "ingredients": [
          "avocado",
          "green chilies"
        ],
        "link": "http://www.recipezaar.com/Chunky-Green-Guacamole-291466",
        "gif": "https://media1.giphy.com/media/QUM8jMz4rTELn8lTc9/giphy.gif?cid=1613e75f1360ea4f5681a294c2ab6ad593944dfb4601c900&rid=giphy.gif"
      },
      {
        "title": "Fusion Avocado!",
        "ingredients": [
          "avocado",
          "soy sauce"
        ],
        "link": "http://www.recipezaar.com/Fusion-Avocado-128746",
        "gif": "https://media1.giphy.com/media/oOfLwhLyRUoRW/giphy.gif?cid=1613e75f8b6cd51ec1aaeb4b25d96e272ed054142ec6544d&rid=giphy.gif"
      },
      {
        "title": "Easy Guacamole",
        "ingredients": [
          "avocado",
          "salsa"
        ],
        "link": "http://www.recipezaar.com/Easy-Guacamole-53059",
        "gif": "https://media1.giphy.com/media/KeuiQtqUzecEzyzGMt/giphy.gif?cid=1613e75fc70d05eedd55560fc69edb632974335f21827874&rid=giphy.gif"
      },
      {
        "title": "Avocado Ranch Dressing",
        "ingredients": [
          "avocado",
          "ranch dressing"
        ],
        "link": "http://www.recipezaar.com/Avocado-Ranch-Dressing-149509",
        "gif": "https://media1.giphy.com/media/fZELCrxkCyRk7RHhbc/giphy.gif?cid=1613e75f871ca1ea4e0157510d354445899b9a96aca58c75&rid=giphy.gif"
      },
      {
        "title": "Nicole's Avocado Dip",
        "ingredients": [
          "avocado",
          "salt"
        ],
        "link": "http://allrecipes.com/Recipe/Nicoles-Avocado-Dip/Detail.aspx",
        "gif": "https://media2.giphy.com/media/gZ8emTQmTrWQE/giphy.gif?cid=1613e75f643f88caaed61ba0f78e8e522909246008f53730&rid=giphy.gif"
      },
      {
        "title": "Avocado Pie",
        "ingredients": [
          "avocado",
          "lemon juice"
        ],
        "link": "http://allrecipes.com/Recipe/Avocado-Pie/Detail.aspx",
        "gif": "https://media1.giphy.com/media/HsAsOUJEYgyFa/giphy.gif?cid=1613e75f2dc9a87e9f1c83e02040b799ceeeb4d9099fcdf6&rid=giphy.gif"
      },
      {
        "title": "Avocado Pie",
        "ingredients": [
          "avocado",
          "lemon juice"
        ],
        "link": "http://allrecipes.com/Recipe/Avocado-Pie-2/Detail.aspx",
        "gif": "https://media1.giphy.com/media/HsAsOUJEYgyFa/giphy.gif?cid=1613e75f2dc9a87e9f1c83e02040b799ceeeb4d9099fcdf6&rid=giphy.gif"
      },
      {
        "title": "Just Yummy N Easy  Avocado Dip Recipe",
        "ingredients": [
          "avocado",
          "avocado",
          "crackers"
        ],
        "link": "http://www.grouprecipes.com/71670/just-yummy-n-easy-avocado-dip.html",
        "gif": "https://media1.giphy.com/media/dWy2WwcB3wvX8QA1Iu/giphy.gif?cid=1613e75fdd3387491d4377c9650b06e4f8d4d48b5f1156c8&rid=giphy.gif"
      }
    ]
  }

## Running the Unity tests

There are Unity Tests on the project in order to ensure that it runs cohesively, and they can be found at their respective folders.
The tests cover subjects such as string sanitazing and sorting methods. The tests in place are there to make sure the code isn't broken while the API was being developed - it is essential for present and future maintenance.

```
npm run test
```

### Style guide

The standard eslint rules were applied, and the full list can be found at https://eslint.org/docs/rules/
If you want to configure your own eslint rules, the file can be found at [.eslintrc.json](./.eslintrc.json)

```
{
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true,
        "jest": true
    },
    "extends": [
        "standard"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
    }

}
```


## Credentials

Each recipe has a gif url as an object attribute, so, for the API to work, you need an apikey. There's an [environment](./.env) file that has my GIPHY apikey. You must change it when deploying the API, and to use another key just replace the GIF_API value with your own. For more information, go to https://developers.giphy.com/docs/sdk.

## CI/CD Github Actions

We use GitHub actions for Continuous Integration for running the tests when there's a PR and pushes on the master branch. The configuration file can be found at [nodejs.yml](./.github/workflows/nodejs.yml)

## Built With

* [Nodejs](https://nodejs.org/en/docs/) - JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Docker](https://www.docker.com/) - Used to build cointeined applications.
* [Express](https://www.npmjs.com/package/express/) - HTTP server


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

