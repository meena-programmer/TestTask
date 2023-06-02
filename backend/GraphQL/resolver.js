// function derived from mongodb queries..
import { deleteUser, getAllUsers, insertUser, updateUser } from "../mongodb.js";

const getAllUsersData = async () => {
  const users = await getAllUsers();
  return users;
};

// resolver for Query and Mutation
const resolvers = {
  getUsers: () => getAllUsersData(),
  getUserById: (args) => {
    const { id } = args;

    const users = getAllUsersData();

    return users.find((user) => user.id === id);
  },
  createUser: async (args) => {
    const { name, email, password } = args;

    const users = getAllUsersData();

    const newUser = {
      id: String(users?.length ? users.length + 1 : 1),
      name,
      email,
      password,
    };
    await insertUser(newUser);
    return newUser;
  },
  updateUser: async (args) => {
    const { id, name, email, password } = args;

    const users = getAllUsersData();

    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      const updatedUser = { ...users[userIndex], name, email, password };
      await updateUser(id, updatedUser);

      return updatedUser;
    }
    return null;
  },
  deleteUser: async (args) => {
    const { id } = args;
    const users = getAllUsersData();

    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      const deletedUser = users[userIndex];
      await deleteUser(id);

      return deletedUser.id;
    }
    return null;
  },
};

export default resolvers;
