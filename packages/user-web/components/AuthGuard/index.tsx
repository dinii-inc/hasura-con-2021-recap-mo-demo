import { useAuth } from "hooks/useAuth";
import { useRouter } from "next/dist/client/router";
import { useCallback, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export const AuthGuard = ({ children }: Props) => {
  const router = useRouter();
  const { token } = useAuth();
  const [initialized, setInitialized] = useState(false);

  const redirect = useCallback(async () => {
    const isAuthenticated = token !== null;
    const isInGuestPage = ["/signIn", "/signUp"].includes(router.pathname);

    if (isAuthenticated && isInGuestPage) await router.replace("/");
    if (!isAuthenticated && !isInGuestPage) await router.replace("/signIn");

    setInitialized(true);
  }, [token, router]);

  useEffect(() => void redirect(), [redirect]);

  return initialized ? <>{children}</> : null;
};
