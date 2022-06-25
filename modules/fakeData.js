export const fakeUsers = [
    {
        id:1,
        name:"Ali Veli",
        age:26
    },
    {
        id:2,
        name:'Yali Veli',
        age:21
    },
    {
        id:3,
        name:'Mali Veli',
        age:10
    }
]
export default fakeUsers;
export const addUser = (name,age) => {

    fakeUsers.push({
        id:fakeUsers.length+1,
        name,
        age
    });

    return fakeUsers;

}