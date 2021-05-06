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
  }

  const userOps = {
    timestamps: true,
    tableName: 'clients',
  }

  const Client = sequelize.define('Client', userSchema, userOps)

/*   Client.associate = (db) => {
    db.User.hasMany(db.Product)
    // db.User.belongsToMany(db.Product, { through: 'UserProduct' })
    // db.User.hasOne(db.Recipe)
    // db.User.hasOne(db.Profile)
  } */

  return Client
}
