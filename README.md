# Delivery Much Challange

This API project was done for a challenge issued by Delivery Much. We were tasked with developing an API in nodejs and deployed with docker. This API also had to follow the best practices proposed on Clean Code and take into account Design Patterns


## Getting Started

These instructions will get you a copy of the project up and running on your local machine, for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You must install node.js, docker and docker-compose.

```
I strongly recommend downloading the LTS versions from: https://nodejs.org/en/ and https://www.docker.com/products/docker-desktop
```

### Installing

First, you'll clone the repository from github. 
Then, open the folder you just cloned - make sure your docker service is running. 
Run docker-compose build to create the container, and, to finish it off, run docker-compose up to start the container.
With these steps, the environment should be running smoothly at localhost:3333.

```
git clone https://github.com/LeoFC97/deliveryMuch
cd deliveryMuch
docker-compose build
docker-compose up
```

## Request & Response Examples

### API Resources

  - [GET /recipesi=<ingredient_1>,<ingredient_2>](#get-recipes)

### GET /recipes

Example: http://localhost:333/recipesi=tomato,onions

Response body:

{
  "keyowrds": [
    "tomato",
    "onions"
  ],
  "recipes": [
    {
      "title": "Guacamole Dip Recipe",
      "link": "http://cookeatshare.com/recipes/guacamole-dip-2783",
      "ingredients": [
        "avocado",
        "onions",
        "tomato"
      ],
      "gif": "https://media2.giphy.com/media/I3eVhMpz8hns4/giphy.gif?cid=1613e75f73749c3651142d0bfa0f5e545535c5abd0c43c31&rid=giphy.gif"
    },
    {
      "title": "Guacamole Dip Recipe",
      "link": "http://cookeatshare.com/recipes/guacamole-dip-3108",
      "ingredients": [
        "avocado",
        "onions",
        "tomato"
      ],
      "gif": "https://media2.giphy.com/media/I3eVhMpz8hns4/giphy.gif?cid=1613e75f73749c3651142d0bfa0f5e545535c5abd0c43c31&rid=giphy.gif"
    },
    {
      "title": "Homemade Pizza Sauce For Canning Recipe",
      "link": "http://cookeatshare.com/recipes/homemade-pizza-sauce-for-canning-12225",
      "ingredients": [
        "green pepper",
        "onions",
        "tomato"
      ],
      "gif": "https://media3.giphy.com/media/4ayiIWaq2VULC/giphy.gif?cid=1613e75f216bc5783ac14350574799c76e5fecc5489b7c7e&rid=giphy.gif"
    },
    {
      "title": "Sauce Dijon a la Provencal ",
      "link": "http://www.kraftfoods.com/kf/recipes/sauce-dijon-a-la-54823.aspx",
      "ingredients": [
        "dijon mustard",
        "onions",
        "sugar",
        "tomato"
      ],
      "gif": "https://media2.giphy.com/media/Lqx1OxhtzwJKDO45Gs/giphy.gif?cid=1613e75f203df114eeba0e98a4077a66fe1c208d429b5e55&rid=giphy.gif"
    },
    {
      "title": "Basil Pesto Pomodoro Sauce",
      "link": "http://www.recipezaar.com/Basil-Pesto-Pomodoro-Sauce-221792",
      "ingredients": [
        "nonstick cooking spray",
        "onions",
        "pesto",
        "tomato"
      ],
      "gif": "https://media1.giphy.com/media/RO023EYTyk5yg/giphy.gif?cid=1613e75f04db40d858e578d09c7b2c1a22396b3da09eb6ee&rid=giphy.gif"
    },
    {
      "title": "Ali's Amazing Bruschetta",
      "link": "http://allrecipes.com/Recipe/Alis-Amazing-Bruschetta/Detail.aspx",
      "ingredients": [
        "olive oil",
        "onions",
        "parmesan cheese",
        "tomato"
      ],
      "gif": "https://media0.giphy.com/media/igPHynz0BdOTTApAL7/giphy.gif?cid=1613e75f69bcf615b9f37115e29727c5f19ac4b643850129&rid=giphy.gif"
    },
    {
      "title": "BLT Pasta Salad",
      "link": "http://allrecipes.com/Recipe/BLT-Pasta-Salad/Detail.aspx",
      "ingredients": [
        "bacon",
        "onions",
        "ranch dressing",
        "tomato"
      ],
      "gif": "https://media1.giphy.com/media/UuZByExSorh6w/giphy.gif?cid=1613e75fbdc87f131e9a0a7fceae9a961edaa3beed0b9ade&rid=giphy.gif"
    },
    {
      "title": "Tomato Alfredo Sauce with Artichokes",
      "link": "http://allrecipes.com/Recipe/Tomato-Alfredo-Sauce-with-Artichokes/Detail.aspx",
      "ingredients": [
        "flour",
        "onions",
        "tomato",
        "whole milk"
      ],
      "gif": "https://media1.giphy.com/media/KXBtTtm3kB8BO/giphy.gif?cid=1613e75f9d7db3591e40ce560eecc70526980f39a096a55c&rid=giphy.gif"
    },
    {
      "title": "Tomato Cheese Crunch",
      "link": "http://allrecipes.com/Recipe/Tomato-Cheese-Crunch/Detail.aspx",
      "ingredients": [
        "cheddar cheese",
        "onions",
        "potato chips",
        "tomato"
      ],
      "gif": "https://media2.giphy.com/media/YkdjQNu9YCSGNpELDt/giphy.gif?cid=1613e75f2bf7a67e1a07524c8b54d513571a5b585e3702e0&rid=giphy.gif"
    },
    {
      "title": "Basic Guacamole Dip",
      "link": "http://allrecipes.com/Recipe/Basic-Guacamole-Dip/Detail.aspx",
      "ingredients": [
        "avocado",
        "lemon juice",
        "onions",
        "tomato"
      ],
      "gif": "https://media2.giphy.com/media/e3yEXwFNHZ8kw/giphy.gif?cid=1613e75f35a21feda8f796e4688ccddebd13f40b45d00870&rid=giphy.gif"
    }
  ]
}

### GET /magazines/[id]

Example: http://example.gov/api/v1/magazines/[id].json

Response body:

    {
        "id": "1234",
        "type": "magazine",
        "title": "Public Water Systems",
        "tags": [
            {"id": "125", "name": "Environment"},
            {"id": "834", "name": "Water Quality"}
        ],
        "created": "1231621302"
    }






## Running the Unity tests

There are Unity Tests on the project in order to ensure that it runs cohesively, and they can be found at their respective folders.
The tests cover subjects such as string sanitazing and sorting methods. The tests in place are there to make sure the code isn't broken while the API was being developed - it is essential for present and future maintenance.

```
Give an example
```

### Style guide

The standard eslint rules were applied, and the full list can be found at https://eslint.org/docs/rules/
If you want to configure your own eslint rules, the file can be found at ./.eslintrc.json

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

Each recipe has a gif url as an object attribute, so, for the API to work, you need an apikey. There's an .env file that has my GIPHY apikey. You must change it when deploying the API, and to use another key just replace the GIF_API value with your own. For more information, go to https://developers.giphy.com/docs/sdk.

## CI/CD Github Actions

We use GitHub actions for Continuous Integration for running the tests when there's a PR and pushes on the master branch. The configuration file can be found at [nodejs.yml](./.github/workflows/nodejs.yml)

## Built With

* [Nodejs](https://nodejs.org/en/docs/) - JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Docker](https://www.docker.com/) - Used to build cointeined applications.
* [Express](https://www.npmjs.com/package/express/) - HTTP server


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

