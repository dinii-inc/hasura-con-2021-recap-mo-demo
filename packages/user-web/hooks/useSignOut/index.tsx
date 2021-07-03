import { useAuth } from "hooks/useAuth";
import { useCallback } from "react";

export const useSignOut = () => {
  const { updateToken } = useAuth();

  const signOut = useCallback(() => updateToken(null), [updateToken]);

  return { signOut };
};
