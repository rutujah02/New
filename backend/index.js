const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const { sequelize } = require('./models');
const mysql = require('mysql2')
const app = express();

app.use(cors());
app.use(bodyParser.json());

// database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'taskmanager',
    port: 3306,
})

// check database
db.connect(err => {
    if (err) { console.log('err') }
    console.log('Database connection successful!')
})

// Route for login
// app.post('/api/login', (req, res) => {
//     const { username, password } = req.body;
//     const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
//     db.query(query, [username, password], (err, results) => {
//       if (err) {
//         res.status(500).send({ error: 'Internal Server Error' });
//       } else if (results.length > 0) {
//         req.session.user_id = results[0].id;
//         res.send({ message: 'Login successful' });
//       } else {
//         res.status(401).send({ error: 'Invalid username or password' });
//       }
//     });
//   });

//get all data
app.get('/tasks', (req, res) => {
    // console.log('Get all users')
    let qrr = 'SELECT * from tasks';
    db.query(qrr, (err, result) => {
        if (err) {
            console.log('err');
        }
        if (result.length > 0) {
            res.send({
                message: 'All users Data',
                data: result
            });
        };

    });
});

//get particular data 
app.get('/tasks/:id', (req, res) => {
    // console.log('Get user')
    let qrId = req.params.id;
    // let qr = 'SELECT * from tasks WHERE id = ${qr}';
    let qr = `SELECT * FROM tasks WHERE id = ${qrId}`;

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: 'Particular user Data',
                data: result
            })
        }
        else {
            res.send({
                message: 'Data not found',
            })
        }
    });
});

//post data
app.post('/tasks', (req, res) => {
    // console.log(req.body,'Post user')
    let name = req.body.Name;
    let description = req.body.Description;
    let date = req.body.Date;
    let priority = req.body.Priority;
    let qr = `INSERT INTO tasks (Name, Description, Date, Priority) 
    VALUES ('${name}', '${description}', '${date}', '${priority}')`;
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send({
            message: 'Data Inserted',
            data: result
        });
    })
})

//Update data
app.put('/tasks/:id', (req, res) => {
    console.log(req.body, 'Update user')
    let id = req.params.id;
    let name = req.body.Name;
    let description = req.body.Description;
    let date = req.body.Date;
    let priority = req.body.Priority;
    let qr = `UPDATE tasks SET Name = '${name}', Description = '${description}', Date =
    '${date}', Priority = '${priority}' WHERE id = ${id}`
    db.query(qr, (err, result) => {
        console.log(qr)
        if (err) {
            console.log(err);
        }
        res.send({
            message: 'Data Updated',
            data: result
        });
    })
})

//Update status
app.put('/tasks/status/:id', (req, res) => {
    console.log(req.body, 'Update status')
    let id = req.params.id;
    let status = req.body.status;
    let qr = `UPDATE tasks SET Status = '${status}' WHERE id = ${id}`
    db.query(qr, (err, result) => {
        console.log(qr)
        if (err) {
            console.log(err);
        }
        res.send({
            message: 'Status Updated',
            data: result
        });
    })
})

//Delete data
app.delete('/tasks/:id', (req, res) => {
    console.log(req.body, 'Delete user')
    let id = req.params.id;
    let qr = `DELETE FROM tasks WHERE id = ${id}`
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send({
            message: 'Data Deleted',
            data: result
        });
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
// app.use(bodyParser.urlencoded({ extended: true }));