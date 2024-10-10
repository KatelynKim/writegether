import { getServerSession } from "next-auth"
import { authConfig } from "@/app/api/auth/[...nextauth]/route"
import Link from "next/link"
import ProfileMenu from "./ProfileMenu"

const NavigationBar = async () => {
  const session = await getServerSession(authConfig)
  return (
    <nav className="flex flex-col w-[14.7rem] gap-10 border-4 border-green-700 p-1">
      <Link href="/" className="w-full">WRITEGETHER</Link>
      <ul className="flex flex-col h-full border-2">
        <li className="flex">
          <Link href="/">
            <button type="button"> Discover </button>
          </Link>
        </li>
        <li className="flex">
          <Link href="/contribute">
            <button type="button"> Contribute </button>
          </Link>
        </li>
        <li className="flex">
          <Link href="/begin-a-story">
            <button type="button"> Create </button>
          </Link>
        </li>
      </ul>
      <ProfileMenu imgSrc={session?.user?.image!} />
    </nav>
  )
}

export default NavigationBar
