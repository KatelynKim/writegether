import Image from "next/image"
export default function Header() {
  return (
    <header className="w-full flex px-4 py-2">
      <Image src="/logo.svg" alt="logo" width={120} height={38} className="w-[7.5rem]" />
    </header>
  )
}
