const users = [
    {
        name: 'Person 1',
        age: 27,
    },
    {
        name: 'Person 2',
        age: 8,
    },
    {
        name: 'Person 3',
        age: 52,
    },
    {
        name: 'Person 4',
        age: 21,
    },
]

function sortingAge() {
    const data = users.sort((a, b) => a.age - b.age);
    return data;
}

module.exports = sortingAge;