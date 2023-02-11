module.exports = (sequelize, DataTypes) => {
    const Pedidos = sequelize.define(
      "Pedidos",
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        TYPE_PEDIDO: {
          type: DataTypes.STRING,
        },
        STATUS_PEDIDO: {
          type: DataTypes.STRING,
        },
        VALOR_FRETE: {
          type: DataTypes.FLOAT,
        },
        VALOR_PEDIDO: {
          type: DataTypes.FLOAT,
        },
        VALOR_TOTAL: {
          type: DataTypes.FLOAT,
        },
        DATE_PEDIDO: {
          type: DataTypes.DATE,
        },
        DATE_ENTREGA: {
          type: DataTypes.DATE,
        },
        USERS_ID: {
          type: DataTypes.INTEGER,
        },
  
  
      },
      {
        tableName: "tb_pedidos",
        timestamps: false,
      }
    );
    Pedidos.associate = function (models) {
        Pedidos.belongsTo(models.User, {
          as: "users",
          foreignKey: "USERS_ID",
        });
      };
  
    return Pedidos;
  
  };
  