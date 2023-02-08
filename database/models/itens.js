module.exports = (sequelize, DataTypes) => {
    const Itens = sequelize.define(
      "Itens",
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        QTDE: {
          type: DataTypes.INTEGER,
        },
        ID_PEDIDOS: {
          type: DataTypes.INTEGER,
        },
        BOOKS_ID: {
          type: DataTypes.INTEGER,
        },
    
  
  
      },
      {
        tableName: "tb_pedidos",
        timestamps: false,
      }
    );
    Itens.associate = function (models) {
        Itens.belongsTo(models.Pedidos, {
          as: "tb_pedidos",
          foreignKey: "ID_PEDIDO",
        })
 
        Itens.belongsTo(models.books, {
          as: "tb_books",
          foreignKey: "BOOKS_ID",
        })
      };
  
    return Itens;
  
  };
  