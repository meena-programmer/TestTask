import axios from "axios";
import { graphql } from "graphql";

const uri = "http://localhost:4000/graphql";
export const fetchData = async () => {
  const graphqlQuery = `
  query {
    getUsers {
        id
        name
        email
       }
  }
`;
  try {
    const response = await axios.post(uri, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //   mode: "cors",
      query: graphqlQuery,
    });

    const result = await response.data.data.getUsers;

    console.log(result);
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const addUserData = async (userDetails) => {
  const mutationQuery = `
    mutation($name: String!, $email: String!, $password: String!) {
      createUser(name: $name, email: $email, password: $password) {
        id
      }
    }
  `;

  const { name, email, password } = userDetails;
  try {
    const response = await axios.post(uri, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      query: mutationQuery,
      variables: {
        name: name,
        email: email,
        password: password,
      },
    });

    console.log(response);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
