import {Sequelize} from 'sequelize'

export const sequelize = new Sequelize('students', 'hous', '230021', {
  host: 'localhost',
  dialect: 'mysql'
});

export const checkConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}