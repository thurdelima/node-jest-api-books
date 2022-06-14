import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Book extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        pcompany: Sequelize.STRING,
        language: Sequelize.STRING,
        qpage: Sequelize.STRING,
        isbn: Sequelize.STRING,
        rented: Sequelize.BOOLEAN
      },
      {
        sequelize,
      }
    );

   

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    
  }

 
}

export default Book;