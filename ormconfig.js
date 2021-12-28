module.exports = {
  type: "postgres",
  port: process.env.POSTGRES_PORT,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASS,
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
