import Sequelize from 'sequelize';
class User extends Sequelize.Model {
    static init(sequelize, DataTypes) {
      return super.init(
        {
          first_name: DataTypes.STRING,
        },
        {
          last_name: DataTypes.STRING,
        },
        {
          genderId: DataTypes.TINYINT,
        },
        {
          date_of_birth: DataTypes.DATE,
        },
        { sequelize }
      );
    }
  };
export default User;