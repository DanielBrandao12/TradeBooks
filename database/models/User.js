module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
      "User",
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        FULL_NAME: {
          type: DataTypes.STRING,
        },
        USER_NAME: {
          type: DataTypes.STRING,
        },
        BIRTH_DATE:{
          type: DataTypes.DATE,
        },
        CPF:{
          type: DataTypes.STRING,
        },
        SEXO:{
          type: DataTypes.STRING,
        },
        TEL:{
          type: DataTypes.STRING,
        },

        EMAIL: {
          type: DataTypes.STRING,
        },
        UPASSWORD: {
          type: DataTypes.STRING,
        },
        
      },
      {
        tableName: "users",
        timestamps: false,
      }
    );
    return User;
  };
  