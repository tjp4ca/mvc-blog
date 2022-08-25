const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    // compare login password & hashed password
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }

    // add const???
    // checkPassword = (loginPw) => {
    //     bcrypt.compareSync(loginPw, this.password);
    // }

}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        hooks: {
            async beforeCreate(newUserData) {
                // console.log(newUserData);
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },

        // beforeCreate = async (newUserData) => {
        //     newUserData.password = await bcrypt.hash(newUserData.password, 10);
        // },
        // beforeCreate()

            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
          
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;


// *** notes

// salt
// const hashPassword = async () => {
//     const salt = await bcrypt.genSalt(10);
//     console.log(salt);
// }
// hashPassword();

// salt + hash
// const hashPassword = async (pw) => {
//     const salt = await bcrypt.genSalt(10);
//     const hash = await bcrypt.hash(pw, salt)
//     console.log(salt);
//     console.log(hash);
// }

// const login = async (pw, hashedPw) => {
//     const result = await bcrypt.compare(pw, hashedPw);
//     if (result) {
//         console.log('Logged In Successfully!')
//     } else {
//         console.log('Incorrect!')
//     }
// }

// hashPassword('monkey');


// const hashPassword = async (pw) => {
//     const hash = await bcrypt.hash(pw, 10)
//     console.log(hash);
// }
// hashPassword('monkey')

