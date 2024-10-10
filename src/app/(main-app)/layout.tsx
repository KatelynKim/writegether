import Header from "@/components/Header"
import NavigationBar from "@/components/NavigationBar/NavigationBar"
import { ReactNode } from "react"

export default function MainAppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-full flex">
      <NavigationBar />
      <div className="flex flex-col w-full h-full border-4 border-[pink]">
        <Header />
        <main className="w-full h-full flex border-[blue] border-4">{children}</main>
      </div>
    </div>
  )
}
