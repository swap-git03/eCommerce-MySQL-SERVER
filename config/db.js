const {Sequelize} = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.USER,
    process.env.PASSWORD,
    {
        host:process.env.HOST,
        dialect:"mysql",
        logging: false
    }
)


// to test the connection
sequelize
    .authenticate()
    .then(() => {
        console.log('DATABASE connnected successfully');
    })
    .catch((err) => {
        console.error('unable to connect db', err);
    });

    sequelize.sync({alter:true})
    .then(() =>console.log('tables altered successfully'))
    .catch(err => console.error('sync error', err));

module.exports = sequelize