const express = require('express');
const req = require('express/lib/request');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM questions', (err, rows, fields) => {
    if(!err){
      res.json(rows);
    } else{
      console.log(err);
    }
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('SELECT * FROM questions WHERE id_question = ?', [id], (err, rows, fields) => {
    if(!err){
      res.json(rows[0]);
    } else{
      console.error(err);
    }
  });
});

router.post('/', (req, res) => {
  const question= req.body.question;
  mysqlConnection.query('INSERT INTO questions (question) VALUES (?)', [question], (err, rows, fields) => {
    if(!err){
      res.json({Status: 'Question saved'});
    } else {
      console.log(err);
    }
  });
});

router.put('/:id', (req, res) => {
  const { question } = req.body;
  const { id } = req.params;
  mysqlConnection.query('UPDATE questions SET question = ? WHERE id_question = ?', [question, id], (err, rows, fields) => {
    if(!err) {
      res.json({Status: 'Question updated'});
    } else {
      console.log(err);
    }
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM questions WHERE id_question = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({Status: 'Question deleted'});
    } else {
      console.log(err);
    }
  });
});


module.exports = router;