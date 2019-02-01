const generateCRUDSchemaString = require("prisma-generate-schema");
 
const openCRUDSchema = generateCRUDSchemaString.default(`
  type User {
    name: String
  }
`)

console.log(openCRUDSchema);
