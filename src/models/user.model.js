const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const userSchema = {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: { 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }

  const userOps = {
    timestamps: true,
    tableName: 'users',
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          const salt = await bcrypt.genSaltSync(8);
          user.password = bcrypt.hashSync(user.password, salt);
        }
      },
      beforeUpdate:async (user) => {
        if (user.password) {
          const salt = await bcrypt.genSaltSync(8);
          user.password = bcrypt.hashSync(user.password, salt);
        }
      }
    },
    instanceMethods: {
      validPassword: (password) => {
        return bcrypt.compareSync(password, this.password);
      }
    }
  }

/*   userSchema.prototype.validPassword = async (password, hash) => {
    return await bcrypt.compareSync(password, hash);
  } */
  const User = sequelize.define('User', userSchema, userOps)

  User.associate = (db) => {
    db.User.hasMany(db.Product)
    db.User.hasMany(db.Order)
  }

  return User
}
