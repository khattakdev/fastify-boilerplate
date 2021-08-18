const postUserOpts = {
  schema: {
    body: {
      type: "object",
      required: ["name"],
      properties: {
        id: { type: "number" },
        name: { type: "string" },
      },
    },
  },
  handler: (request, reply) => {
    const { id, name } = request.body;
    const newUser = {
      id,
      name,
    };
    userDB.push(newUser);

    reply.send(`Users Updated!!!`);
  },
};

const getSingeUserOpts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          id: { type: "number" },
        },
      },
    },
  },
  handler: (request, reply) => {
    const { id } = request.params;

    const targetUser = userDB.find((user) => user.id == id);

    reply.send(targetUser);
  },
};

module.exports = {
  postUserOpts,
  getSingeUserOpts,
};
