"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
    username: z.string().min(2, { message: "Username must be atleast 2 characters long" }).max(50, { message: "Username must not exceed 50 characters" }),
    email: z.string().email({ message: "Email must be valid" }),
    password: z.string().min(8, { message: "Password must be atleast 8 characters long" })
        .regex(/[A-Z]/, { message: "Password must contain atleast one uppercase letter" })
        .regex(/[a-z]/, { message: "Password must contain atleast one lowercase letter" })
        .regex(/[0-9]/, { message: "Password must contain atleast one number" })
})

export default function Signup() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            password: ""
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("values: ", values)
    }

    return (
        <div className="w-full h-full flex flex-col gap-4">
            <h1 className="text-center text-lg leading-[150%] font-bold">Create Account</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="bg-neon-yellow-600 text-white shadow rounded font-bold">Continue</Button>
                </form>
            </Form>
            <div className="w-full flex justify-center">
                <p className="flex">Or</p>
            </div>
            <Button type="button" className="border border-gray-600 flex gap-2 rounded bg-[transparent] text-gray-600 font-bold hover:bg-gray-100">
                <span className="w-full text-center">Continue with Google</span>
                <Image src='/icons/google.svg' alt="google's logo" width={48} height={48} className="w-6" />
            </Button>
            <Link href="/login" className="text-xs w-full text-center hover:underline text-neon-yellow-700">Already have an account? Login</Link>
        </div>
    )
}
