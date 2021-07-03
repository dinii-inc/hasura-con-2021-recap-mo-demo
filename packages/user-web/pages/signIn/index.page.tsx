import { SingleLayout } from "components/Layout/SingleLayout";
import { Spacer } from "components/Spacer";
import React, { useState } from "react";

import { Button, TextField, Typography } from "@material-ui/core";
import Link from "next/link";
import { useSignIn } from "hooks/useSignIn";

const SignIn = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const isValid = id && password;

  const { signIn } = useSignIn();

  return (
    <SingleLayout title="サインイン">
      <Typography variant="h5">サインイン</Typography>
      <Spacer size={4} />
      <TextField label="ユーザー ID" variant="outlined" margin="dense" fullWidth onChange={(e) => setId(e.target.value)} />
      <Spacer size={2} />
      <TextField type="password" label="パスワード" variant="outlined" margin="dense" fullWidth onChange={(e) => setPassword(e.target.value)} />
      <Spacer size={4} />
      <Button variant="contained" color="primary" disabled={!isValid} fullWidth onClick={() => signIn({ variables: { input: { id, password } } })}>
        サインイン
      </Button>
      <Spacer size={2} />
      <Link href="/signUp" passHref>
        <Button variant="contained" color="secondary" fullWidth>
          サインアップ
        </Button>
      </Link>
    </SingleLayout>
  );
};

export default SignIn;
