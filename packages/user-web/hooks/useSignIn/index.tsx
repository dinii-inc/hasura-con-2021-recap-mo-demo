import { useAuth } from "hooks/useAuth";
import { useSignInMutation } from "hooks/useSignIn/queries";

export const useSignIn = () => {
  const { updateToken } = useAuth();

  const [signIn] = useSignInMutation({ onCompleted: (data) => data.signIn && updateToken(data.signIn.token) });

  return { signIn };
};
