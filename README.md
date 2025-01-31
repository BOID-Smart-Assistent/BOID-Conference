# BOID
The BOID project is a modular system designed to implement and interact with the BOID algorithm, 
providing advanced reasoning capabilities supported by an LLM (Large Language Model). 
The repository is structured as a collection of submodules that can function independently or 
integrate seamlessly in a unified environment through Docker.

## Features

- API: Provides a RESTful interface and frontend to interact with the BOID system.
- BOID Algorithm: Implements the BOID reasoning system, processing rules and 
generating decisions based on default logic.
- LLM Module: Enhances the system with natural language understanding, where the boid rules are generated from
user input.

## Running the project

Before choosing an option, clone the repository.

### Option1: run sub-modules separately

Navigate to the desired module and follow its specific setup instructions in its `README`

### Option 2: run all modules together

1. Start the docker container

You can run it in dev mode or use the production build
- **Development**:
```shell
docker compose up -f docker-compose.dev.yml
```
- **Production**:
```shell
docker compose up -f docker-compose.prod.yml
```

access the system through the browser with the exposed API endpoint (default: `http://localhost:8000`)
