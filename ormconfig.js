module.exports = {
  type: "postgres",
  port: process.env.POSTGRES_PORT,
  host: process.env.POSTGRES_HOST,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [
    "./src/modules/**/entities/*.ts"
  ],
  migrations: [
    "./src/database/migrations/*.ts"
  ],
  cli: {
    migrationsDir: "./src/database/migrations"
  },
  ssl: {
    rejectUnauthorized: false,
  }
}
