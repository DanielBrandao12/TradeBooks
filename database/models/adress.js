module.exports = (sequelize, DataTypes) => {
    const Adress = sequelize.define(
      "Adress",
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        CEP: {
          type: DataTypes.STRING,
        },
        RUA: {
          type: DataTypes.STRING,
        },
        NUMERO: {
          type: DataTypes.INTEGER,
        },
        BAIRRO: {
          type: DataTypes.STRING,
        },
        CIDADE: {
          type: DataTypes.STRING,
        },
        ESTADO: {
          type: DataTypes.STRING,
        },
        COMPLEMENTO: {
          type: DataTypes.STRING,
        },
        USERS_ID: {
          type: DataTypes.INTEGER,
        },
       
      },
      {
        tableName: "tb_adress",
        timestamps: false,
      }
    );

    Adress.associate = function (models) {
        Adress.belongsTo(models.User, {
          as: "users",
          foreignKey: "USERS_ID",
        });
      };
    
    return Adress;
  };
  