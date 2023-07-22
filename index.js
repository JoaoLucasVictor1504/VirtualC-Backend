const express = require('express');
const server = express();

server.get('/usuario',(req,res) => {
    return res.json({usuario: 'Erick'})
})

server.get('/receita',(req,res) => {
    return res.json({receita: 'Canjica show'})
})



server.listen(3000, () => {
 console.log('Servidor está funcionando')
});