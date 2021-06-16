var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
let customer = [];

app.post('/payments', (req,res)=>{

    let user = {
        client : {
            id: req.body.id
        },

        buyer : {
            name: req.body.name,
            email: req.body.email,
            cpf: req.body.cpf
        },

        payment : {
            amount: req.body.amount,
            type: req.body.type,
            card: req.body.card,
            boletoNumber: req.body.boletoNumber
        },

        card : {
            cardholderName: req.body.cardholderName,
            cardNumber: req.body.cardNumber,
            cardexpirationDate: req.body.cardexpirationDate,
            cardCVV: req.body.cardCVV
        }
    }

    customer.push(user);
    console.log("customer", customer);

    if(user.payment.type == "Credit Card"){
        res.status(200).json({"payment":user.payment, "status": "payment was success"});
    }
    else if(user.payment.type == "Boleto"){
        res.status(200).json({"boletoNumber": user.payment.boletoNumber});
    }else{
        res.status(400).json({"status": "payment was not successful"});
    }

})

app.get('/paymentstatus', (req,res)=>{
    let id = req.query.id;
    for(let i=0;i<customer.length;i++){
        if(customer[i].client.id == id){
            res.status(200).json({"payment": customer[i].payment, "status": "success"});
            return;
         } 
    }

    res.status(400).json({"status": "payment was not successful for the given id"})
})

   

app.listen(8080, ()=>{
    console.log("server listening on port 8080");
})