const db = require('../db');


const registerForm = (req, res) => {
  const formData = req.body;
  console.log(formData);

  // Perform validation on formData if needed

  const sql = 'INSERT INTO forms SET ?';

  db.query(sql, formData, (err, result) => {
    if (err) {
      console.error('Error registering form:', err);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    } else {
      res.json({ success: true, message: 'Form registered successfully' });
    }
  });
};

// Controller to handle form editing
const editForm = (req, res) => {
  const { id } = req.body;
  const updatedFormData = req.body;

  // Perform validation on updatedFormData if needed

  const sql = 'UPDATE forms SET ? WHERE id = ?';

  db.query(sql, [updatedFormData, id], (err, result) => {
    if (err) {
      console.error('Error editing form:', err);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ success: false, message: 'Form not found' });
      } else {
        res.json({ success: true, message: 'Form edited successfully' });
      }
    }
  });
};

// Controller to handle form deletion
// const deleteForm = (req, res) => {
//   const { id } = req.body;
//   // console.log(id);

//   const sql = 'DELETE FROM forms WHERE id = ?';

//   db.query(sql, id, (err, result) => {
//     if (err) {
//       console.error('Error deleting form:', err);
//       res.status(500).json({ success: false, message: 'Internal Server Error' });
//     } else {
//       if (result.affectedRows === 0) {
//         res.status(404).json({ success: false, message: 'Form not found' });
//       } else {
//         res.json({ success: true, message: 'Form deleted successfully' });
//       }
//     }
//   });
// };
const deleteForm = (req, res) => {
  const { id } = req.params; // Assuming the ID is part of the URL params
  // console.log(id);

  const sql = 'DELETE FROM forms WHERE id = ?';

  db.query(sql, id, (err, result) => {
    if (err) {
      console.error('Error deleting form:', err);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ success: false, message: 'Form not found' });
      } else {
        res.json({ success: true, message: 'Form deleted successfully' });
      }
    }
  });
};


// Controller to handle viewing all forms
const viewForms = (req, res) => {
  const sql = 'SELECT * FROM forms';

  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error viewing forms:', err);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    } else {
      res.json({ success: true, forms: result });
    }
  });
};

const viewFormById = (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM forms WHERE id = ?';

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error viewing form by ID:', err);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    } else {
      if (result.length === 0) {
        res.status(404).json({ success: false, message: 'Form not found' });
      } else {
        res.json({ success: true, form: result[0] });
      }
    }
  });
};


module.exports = {
  registerForm,
  editForm,
  deleteForm,
  viewForms,
  viewFormById
};