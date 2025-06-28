const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3001;

// Підключення CORS
app.use(cors());

// Підключення до бази даних
const dbPath = path.resolve(__dirname, "excursions.db");
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Помилка підключення до бази:", err.message);
  } else {
    console.log("Базу підключено успішно ");
  }
});

// Роут: Отримати всі екскурсії
app.get("/api/excursions", (req, res) => {
  db.all("SELECT * FROM Excursions", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

app.get("/api/excursions/:route", (req, res) => {
  const route = req.params.route;
  db.get("SELECT * FROM Excursions WHERE route = ?", [route], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (!row) {
      res.status(404).json({ error: "Екскурсію не знайдено" });
    } else {
      res.json(row);
    }
  });
});

app.use(express.json()); // Додати, якщо ще не додано

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  db.get(
    "SELECT * FROM Users WHERE email = ? AND password = ?",
    [email, password],
    (err, user) => {
      if (err) {
        res.status(500).json({ error: "Внутрішня помилка сервера" });
      } else if (!user) {
        res.status(401).json({ error: "Невірний email або пароль" });
      } else {
        // Простий токен (у реальних проєктах — JWT)
        const token = `${user.id}-${Date.now()}`;
        res.json({ token, userId: user.id, email: user.email });
      }
    }
  );
});

app.post("/api/passed", express.json(), (req, res) => {
  const { userEmail, excursionId } = req.body;
  db.run(
    "INSERT INTO PassedExcursions (userEmail, excursionId) VALUES (?, ?)",
    [userEmail, excursionId],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Екскурсію збережено", id: this.lastID });
    }
  );
});

// Отримати пройдені екскурсії
app.get("/api/passed/:userEmail", (req, res) => {
  const { userEmail } = req.params;

  const query = `
    SELECT Excursions.*
    FROM PassedExcursions
    JOIN Excursions ON PassedExcursions.excursionId = Excursions.id
    WHERE PassedExcursions.userEmail = ?
  `;

  db.all(query, [userEmail], (err, rows) => {
    if (err) {
      res.status(500).json({ error: "Помилка при отриманні даних" });
    } else {
      res.json(rows);
    }
  });
});

// Реєстрація користувача
app.use(express.json()); // ВАЖЛИВО! має бути на початку

app.post("/api/register", (req, res) => {
  const { email, password } = req.body;
  console.log("📥 Дані для реєстрації:", email, password);

  if (!email || !password) {
    return res.status(400).json({ error: "Введіть пошту та пароль." });
  }

  db.get("SELECT * FROM Users WHERE email = ?", [email], (err, row) => {
    if (err) {
      console.error("❌ Помилка при пошуку користувача:", err.message);
      return res
        .status(500)
        .json({ error: "Серверна помилка при пошуку користувача." });
    }

    if (row) {
      console.log("⚠️ Користувач уже існує:", email);
      return res.status(400).json({ error: "Користувач уже існує." });
    }

    db.run(
      "INSERT INTO Users (email, password) VALUES (?, ?)",
      [email, password],
      function (err) {
        if (err) {
          console.error("❌ Помилка при вставці користувача:", err.message);
          return res
            .status(500)
            .json({ error: "Серверна помилка при збереженні користувача." });
        }

        console.log("✅ Успішна реєстрація:", email);
        res.status(200).json({ message: "Реєстрація успішна." });
      }
    );
  });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущено на http://localhost:${PORT}`);
});
