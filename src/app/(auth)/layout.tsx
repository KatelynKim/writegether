import { ReactNode } from "react"
import Header from "@/app/(auth)/components/Header"

export default function AuthPageLayout({ children }: { children: ReactNode }) {
  return (
    <main className="w-full h-full flex flex-col gap-8 items-center">
      <Header />
      <section className="w-full h-full flex p-4 sm:max-w-[23.5rem]">
        {children}
      </section>
    </main>
  )
}
