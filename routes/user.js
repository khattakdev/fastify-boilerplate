const userDB = require("../userDB");
const { postUserOpts, getSingeUserOpts } = require("../controller/user");

module.exports = function (fastify, opts, done) {
  fastify.get("/", (request, reply) => {
    reply.send(userDB);
  });

  fastify.get("/:id", getSingeUserOpts);

  fastify.post("/", postUserOpts);

  done();
};
