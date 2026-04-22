const express = require('express');
const router = express.Router(); 

router.get('/', (req,res)=>{
    obj = {
        a : 'thios',
        number : 34
    }
    res.get(obj);
})

module.exports = router;