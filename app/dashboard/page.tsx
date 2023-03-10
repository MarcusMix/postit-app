import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"


export default async function Dashboard() {
    const session = await getServerSession(authOptions)
    if(!session) {
        redirect('/api/auth/signin')
    }
    return (
        <main>
            <h1 className="text-2xl font-bold">Bem Vindo de volta! {session?.user?.name} </h1>
        </main>
    )
}