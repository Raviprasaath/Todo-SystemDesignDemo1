export const resolvers = {
    Query: {
        authors: () => {
            return [{
                id: 1,
                name: "Ravi"
            }]
        },
        books: () => {
            return [{
                id: 1,
                title: "System Design",
                publishedYear: 2024
            }]
        }
    }
}