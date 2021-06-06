## Instructions to build and run this application

After cloning and running the docker container for the contacts-management-api repo, please run these following commands:

### `docker build -t sample:dev .`

Then

### `docker run -d --rm -v ${PWD}:/app -v app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true sample:dev`
