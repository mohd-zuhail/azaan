import {
  createTestDb,
  runAppForTesting,
  TestContextType,
} from "@skyslit/ark-backend/build/test-utils";
import App from "../../../server/main.app";
import mongodb from "mongodb";
import { getModelName } from "@skyslit/ark-backend";

const dbServer = createTestDb();

afterEach(() => dbServer.stop());

describe("delete-user-service", () => {
  let testContext: TestContextType = null;

  beforeEach(async () => {
    const dbConnectionString = await dbServer.getDbConnectionString();

    testContext = await runAppForTesting(App, {
      MONGO_CONNECTION_STRING: dbConnectionString,
    });
  });

  afterEach(async () => {
    await testContext.instance.deactivate();
  });

  test(
    "general usage",
    async () => {
      const dbConnection = await mongodb.connect(
        await dbServer.getDbConnectionString()
      );
      const db = dbConnection.db(await dbServer.mongod.getDbName());

      const modelName = getModelName("main", "accounts");
      const insertOperation = await db.collection(modelName).insert({
        email: "falooda393",
        password: "1234",
      });
      const dummyItemId = insertOperation.insertedIds["0"];
      const serviceId = "main/delete-user-service";
      const requestBody = {
        userId: dummyItemId,
      };
      const serviceResponse = await testContext.invokeService(
        serviceId,
        requestBody
      );
      
      expect(serviceResponse.statusCode).toStrictEqual(200);
      console.log("Test running good");
      console.log(serviceResponse.body);
    },
    120 * 1000
  );
});
