import Express from 'express'

const app  = Express()

app.get('/pegar', function(req, res){
    res.send('Enviar esta mensagem')
})

app.get('pegaroutracoisa', function(req, res){
    res.send('Esta e a outra mensagem')
})

app.listen(8000)