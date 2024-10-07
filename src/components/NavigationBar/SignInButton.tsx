"use client"
import { signIn } from "next-auth/react"

export default function GoogleSignInButton() {
  const handleClick = () => {
    signIn("google")
  }
  return <button name="google-signin" onClick={handleClick}>LOGIN</button>
}
