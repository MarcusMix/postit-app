export type AuthType = {
    email: string
    id: string
    image: string
    name: string
    Posts: {
        createdAt: string
        id: string
        title: string
        Comment?: {
            createdAt: string
            id: string
            title: string
            userId: string
        }[]
    }[]
}