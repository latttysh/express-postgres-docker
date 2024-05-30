const dbConfig = require("../config/db.config.js");  // Импортируем конфигурацию базы данных

const Sequelize = require("sequelize");  // Импортируем Sequelize
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {  // Создаем новый экземпляр Sequelize с параметрами из конфигурации
  host: dbConfig.HOST,  // Хост базы данных
  dialect: dbConfig.dialect,  // Диалект базы данных

  pool: {  // Пул соединений
    max: dbConfig.pool.max,  // Максимальное количество соединений в пуле
    min: dbConfig.pool.min,  // Минимальное количество соединений в пуле
    acquire: dbConfig.pool.acquire,  // Максимальное время (в миллисекундах), за которое пул попытается установить соединение перед генерацией ошибки
    idle: dbConfig.pool.idle  // Максимальное время (в миллисекундах), в течение которого соединение может быть неактивным, прежде чем будет освобождено
  }
});

const db = {};  // Создаем объект для хранения всех моделей и экземпляра Sequelize

db.Sequelize = Sequelize;  // Добавляем сам Sequelize в объект db
db.sequelize = sequelize;  // Добавляем экземпляр sequelize в объект db

module.exports = db;  // Экспортируем объект db, чтобы его можно было использовать в других частях приложения