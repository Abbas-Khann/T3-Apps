## Learning the T3-Stack as a frontend developer:

Structure being followed now: 

### Creating the t3-app

First off I created the t3-app using the command `npx create-t3-app@latest` to create the latest version with the t3 stack.

### Setting up database with railway

Now I will head over to railway to login and setup a new database with Provision Postgres.

- In the connect tab I will grab the connection url and paste it into the env file as my db url.

### Auth

I will be using discord Authentication using NextAuth, so i will grab the discord client ID and the discord client secret.

In the discord developers portal i will create a new application and set up the localhost route 
`http://localhost:3000/api/auth/callback/discord` for authentication and add the IDs to the environment variables.

Also added the `Next_Auth_Secret` and added some random string for authentication.

## Setting up the schema.prisma

Next i changed the schema.prisma file and set the provider as postgresql and uncommented the `@db.Text` from the account model for discord auth to work.

Also added the types of the schema as well as the names and pushed all changes using `npx prisma db push`

## Writing a post request with TRPC



