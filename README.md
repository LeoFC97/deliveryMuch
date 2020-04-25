# Delivery Much Challange

One Paragraph of project description goes here

## Getting Started

These instructions will get you a copy of the project up and running on your local machine, for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You must install node.js, docker and docker-compose.

```
I strongly recommend downloading the LTS versions from: https://nodejs.org/en/ and https://www.docker.com/products/docker-desktop
```

### Installing


First, you'll clone the repository from github. 
Then, open the folder you just cloned - make sure you docker service is running. 
Run docker-compose build to create the container, and, to finish, run docker-compose up to start the container.
With these steps, the environment should be running smoothly at localhost:3333.

```
git clone https://github.com/LeoFC97/deliveryMuch
cd deliveryMuch
docker-compose build
docker-compose up
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

There are Unity Tests on the project in order to ensure that it runs cohesively, and they can be found at their respective folders.

### Break down into end to end tests

Explain what these tests test and why
The tests cover subjects such as string sanitazing and sorting methods. The tests in place are there to make sure the code isn't broken while the API was being developed - it is essential for present and future maintenance.

```
Give an example
```

### And coding style tests

The standard eslint rules were used, and the full list adopted can be found at https://eslint.org/docs/rules/
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

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

