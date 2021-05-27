const db = require('./models');

// findAll
const findAll = async () => {
    try {
        const users = await db.User.findAll({});
        console.log(users);
        process.exit();
    } catch (error) {
        console.log(error);
    }
};

// Create
const create = async () => {
    try {
        const users = await db.User.create({
            firstName: 'Example',
            lastName: 'Example2'
        });
        console.log(users);
        process.exit();
    } catch (error) {
        console.log(error);
    }
};

// FindOne
const findOne = async (id) => {
    try {
        const users = await db.User.findOne({ where: {id : id}});
        console.log(users);
        process.exit();
    } catch (error) {
        console.log(error);
    }
};

// Update
const update = async (id, firstName) => {
    try {
        const users = await db.User.findOne({ where: {id : id}});
        console.log(users);
        users.firstName = firstName
        users.save();
        console.log(users);
        process.exit();
    } catch (error) {
        console.log(error);
    }
};

// Delete
const deleteOne = async (id) => {
    try {
        const users = await db.User.findOne({ where: {id : id}});
        await users.destroy();
        console.log(users);
        process.exit();
    } catch (error) {
        console.log(error);
    }
};


findAll();
// create()
// findOne(1);
// update(1, "EzequielUpdated");
// deleteOne(7);