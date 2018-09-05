const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

//retreive data
router.get('/contacts', (req, res, next) => {
    Contact.find((err, contacts)=>{
        res.json(contacts);
    })
});


// add contact
router.post('/contact', (req, res, next)=>{
    console.log(req);
    let newContact = new Contact({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        contactnumber: req.body.contactnumber
    });

    newContact.save((err, contact)=>{
        if(err){
            res.json({'msg': 'failed to save contact'});
        } else {
            res.json({'msg': 'contact added successfully'});
        }
    });
});

//update contact

// delete contact
router.delete('/contact/:id', (req, res, next)=> {
    Contact.remove({
        _id: req.params.id
    }, function (err, result){
        if(err){
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

module.exports = router;