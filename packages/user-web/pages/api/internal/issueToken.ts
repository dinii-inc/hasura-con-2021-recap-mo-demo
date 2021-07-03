import jwt from "jsonwebtoken";

const key = process.env["JWT_SECRET_KEY"];

if (!key) throw new Error("Please set JWT_SECRET_KEY env");

console.log({ key });

export const issueToken = (id: string) =>
  jwt.sign(
    {
      id,
      "https://hasura.io/jwt/claims": {
        "x-hasura-default-role": "user",
        "x-hasura-allowed-roles": ["user"],
        "x-hasura-user-id": id,
      },
    },
    key,
    { algorithm: "RS256", expiresIn: "1h" },
  );
