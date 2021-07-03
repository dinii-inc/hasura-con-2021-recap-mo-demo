import { SingleLayout } from "components/Layout/SingleLayout";
import { Spacer } from "components/Spacer";
import React, { useState } from "react";

import { Button, TextField, Typography } from "@material-ui/core";
import Link from "next/link";
import { useSignUp } from "hooks/useSignUp";

const SignUp = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const isValid = id && password;

  const { signUp } = useSignUp();

  return (
    <SingleLayout title="サインアップ">
      <Typography variant="h5">サインアップ</Typography>
      <Spacer size={4} />
      <TextField label="ユーザー ID" variant="outlined" margin="dense" fullWidth onChange={(e) => setId(e.target.value)} />
      <Spacer size={2} />
      <TextField type="password" label="パスワード" variant="outlined" margin="dense" fullWidth onChange={(e) => setPassword(e.target.value)} />
      <Spacer size={4} />
      <Button variant="contained" color="primary" disabled={!isValid} fullWidth onClick={() => signUp({ variables: { input: { id, password } } })}>
        サインアップ
      </Button>
      <Spacer size={2} />
      <Link href="/signIn" passHref>
        <Button variant="contained" color="secondary" fullWidth>
          サインイン
        </Button>
      </Link>
    </SingleLayout>
  );
};

export default SignUp;
