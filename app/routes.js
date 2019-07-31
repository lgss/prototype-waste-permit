const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.post("/10-select-vehicle-answer", function(req,res){
    let carType = req.session.data['car-type']
    console.log(carType)
    if (carType==="saloon-car"){
        res.redirect("/15-trailer-question")
    } else {
        res.redirect("/20-vehicle-details")
    }
})
router.post("/15-trailer-question-answer", function(req,res){
    let trailer = req.session.data['trailer']
    console.log(trailer)
    if (trailer==="yes"){
        res.redirect("/20-vehicle-details")
    } else {
        res.redirect("/25-no-permit")
    }
})//end of vehicle answer







module.exports = router
