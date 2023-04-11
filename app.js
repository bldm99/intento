const express = require("express")
const app = express()

app.set('view engine' , 'ejs')

//Codigo para capturar los datos
app.use(express.urlencoded({extended:false}))
app.use(express(JSON))

app.use("/", require("./router"))


app.listen(3000 , () =>{
    console.log("corriendpo en el puerto http://localhost:3000 ")
})