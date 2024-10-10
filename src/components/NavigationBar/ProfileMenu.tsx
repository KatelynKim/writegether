"use client"
import Image from "next/image"
import GoogleSignInButton from "./SignInButton"
import { signOut } from "next-auth/react"

const ProfileMenu = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <div className="flex">
      {imgSrc ? (
        <div className="flex space-x-4">
          <Image
            width={40}
            height={40}
            src={imgSrc}
            alt="Google user image"
            className="w-10 h-10 rounded-full overflow-hidden"
          />
          <div onClick={() => signOut()}>Log out</div>
        </div>
      ) : (
        <GoogleSignInButton />
      )}
    </div>
  )
}

export default ProfileMenu
