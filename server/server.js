const express = require("express");  // Импортируем библиотеку Express
const cors = require("cors");  // Импортируем библиотеку CORS (для поддержки Cross-Origin Resource Sharing)

const app = express();  // Создаем экземпляр приложения Express

var corsOptions = {
  origin: "http://localhost:8081"  // Опции для CORS: разрешаем запросы только с этого адреса
};

app.use(cors(corsOptions));  // Используем CORS middleware с заданными опциями

app.use(express.json());  // Включаем middleware для парсинга JSON в теле запросов

app.use(express.urlencoded({ extended: true }));  // Включаем middleware для парсинга URL-encoded данных

const db = require("./models");  // Импортируем модели базы данных
db.sequelize.sync()  // Синхронизируем модели с базой данных
  .then(() => {
    console.log("Synced db.");  // Если синхронизация прошла успешно, выводим сообщение в консоль
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);  // Если синхронизация не удалась, выводим ошибку в консоль
  });

app.get("/", (req, res) => {  // Обрабатываем GET запрос на корневой маршрут "/"
  res.json({ message: "HELLO" });  // Отправляем JSON ответ с сообщением "HELLO"
});

const PORT = process.env.PORT || 8080;  // Устанавливаем порт для сервера из переменной окружения или по умолчанию 8080
app.listen(PORT, (hello) => {  // Запускаем сервер на указанном порту
  console.log(`Server is running on port ${PORT}.`);  // Выводим сообщение в консоль, что сервер запущен
});