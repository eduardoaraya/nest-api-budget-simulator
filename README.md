# Install project

- Up docker container with postgres database: run the command `docker-compose up -d` inside the folder postgres
- Run `yarn` to install dependences
- Set environments in `.env.sample` and rename file to `.env`
- Execute the migration with the command: `yarn typeorm migration:run`
- Up application: `yarn start` or developer mode `yarn start:develop`
