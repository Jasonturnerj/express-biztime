/** Database setup for BizTime. */


const { Client } = require("pg");

const client = new Client({
  connectionString: "postgresql://postgres:1122@localhost:5432/biztime"
});

client.connect();


module.exports = client;
