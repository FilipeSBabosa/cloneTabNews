import database from "infra/database.js";
import { Client } from "pg";

async function status(request, response) {
  const updatadAt = new Date().toISOString();

  const databaseVersionResult = await database.query("SHOW server_version;");
  const databaseVersionValue = databaseVersionResult.rows[0].server_version;

  response.status(200).json({
    updated_at: updatadAt,
    dependencies: {
      database: {
        version: databaseVersionValue,
      },
    },
  });
}

export default status;
