# HASURA CON'21 Recap Mobile Order Demo

## Setup

```
$ cp packages/hasura/.env.example packages/hasura/.env
$ cp packages/user-web/.env.example packages/user-web/.env
```

### Launch Hasura & PostgreSQL

```
$ cd packages/hasura
$ docker-compose up
```

```
$ yarn
$ yarn hasura:migration
$ yarn hasura:console
```

### Launch Next.js Server

```
$ cd packages/user-web
$ yarn
$ yarn prisma:introspect
$ yarn graphql:download-schema
$ yarn graphql:codegen
```
