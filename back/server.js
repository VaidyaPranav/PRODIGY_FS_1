import express from 'express';
import mysql from 'mysql2';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3002;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'pranavvaishnav1817', 
  database: 'testdb',
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database.');
});

app.get('/users', (_, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).send('Error fetching users');
      return;
    }
    res.json(results);
  });
});

app.post('/users', (req, res) => {
  const name = req.body.name || req.body.user_name;
  const email = req.body.email;
  const password = req.body.password;

  console.log('Received body:', req.body); // Check incoming data

  if (!name) {
    return res.status(400).send('User name is required');
  }
  if (!email) {
    return res.status(400).send('Email is required');
  }
  if (!password) {
    return res.status(400).send('Password is required');
  }

  db.query(
    'INSERT INTO users (user_name, email, passwords) VALUES (?, ?, ?)',
    [name, email, password],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error adding user');
        return;
      }
      // Return the inserted values
      res.json({
        message: 'Authentication successful',
        user: {
          id: result.insertId,
          name,
          email,
          password
        }
      });
    }
  );
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});