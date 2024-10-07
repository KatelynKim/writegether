import { getServerSession } from "next-auth"
import { authConfig } from "@/app/api/auth/[...nextauth]/route"
import Link from "next/link"
import ProfileMenu from "./ProfileMenu"

const NavigationBar = async () => {
  const session = await getServerSession(authConfig)
  return (
    <nav className="flex space-x-2 justify-between py-4 px-4 xl:px-20 text-lg">
      <Link href="/">WRITEGETHER</Link>
      <ul className="flex space-x-48">
        <li>
          <Link href="/discover">
            <button> Discover </button>
          </Link>
        </li>
        <li>
          <Link href="/contribute">
            <button> Contribute </button>
          </Link>
        </li>
        <li>
          <Link href="/create">
            <button> Create </button>
          </Link>
        </li>
      </ul>
      <ProfileMenu imgSrc={session?.user?.image!} />
    </nav>
  )
}

export default NavigationBar
