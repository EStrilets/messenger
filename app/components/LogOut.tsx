"use client"

import { signOut } from "next-auth/react"
import Button from "./Button"

export default function LogOut() {
  return (
    <div>
        <Button onClick={() => signOut()}>
            Log out
        </Button> 
    </div>
  )
}
