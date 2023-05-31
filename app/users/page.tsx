"use client"

import { signOut } from "next-auth/react";
const User = () => {
  return (
    <div>
      <button onClick={() => signOut()}>
        Log out
      </button>
    </div>
  );
};

export default User;
