// Import
import query from '../services/db.js';

const model = {};

model.retrieveAll = async () => {
    const users = [
        { name: "Jack", age: 30 },
        { name: "Jane", age: 25 },
        { name: "Phoebe", age: 22 },
    ]
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(users);
        }, 1000)
    })
}

export default model;