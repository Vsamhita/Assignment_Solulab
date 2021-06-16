Process to run the application

1) run npm init
2) run node index.js

------------------------------------


API's

To create payments

Method: POST
Endpoint: http://localhost:8080/payments

body-------> {
    "id": "3",
    "name": "sam",
    "email": "vsamhita10@gmail.com",
    "cpf": "5000",
    "amount": "1000",
    "type": "Boleto",
    "boletoNumber": "564677",
    "card": "hdfc",
    "cardholderName": "samhita",
    "cardNumber": "1234 9874 6785 7890",
    "cardexpirationDate": "07/2021",
    "cardCVV": "789"
}


---------------------------------------------------


To check the payment status

Method: GET
Endpoint: http://localhost:8080/paymentstatus?id=3

query params-----> id


------------------------------------------------------