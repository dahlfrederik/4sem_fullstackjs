import app from "../app";
import d from "debug";

const debug = d("www");

import { DbConnector } from "../config/dbConnector";
import { setupFacade } from "../graphql/resolvers";

const PORT = process.env.PORT || 3333;

//ONLY ONE app.listen on a given port -- Might have to delete the line below
//app.listen(PORT, () => debug(`Server started, listening on PORT: ${PORT}`));

(async function connectToDb() {
  const connection = await DbConnector.connect();
  const db = connection.db(process.env.DB_NAME);
  app.set("db", db); //Make the database available to the rest of the application
  app.set("db-type", "REAL"); //So relevant places can log the database used
  //app.listen(PORT, () => debug(`Server started, listening on PORT: ${PORT}`));

  // Replace line above with this one if you wan't to use the Winston logger (see app.ts)
  app.listen(PORT, () =>
    app.get("logger").log("info", `Server started, listening on PORT: ${PORT}`)
  );
  setupFacade(db);
})();
