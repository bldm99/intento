const express = require("express")
const router = express.Router()


router.get("/" , (req , res) =>{
    //const x = req.body.curso;
    //res.render("index", { x: x })

    res.render("index")
})

//Impotando funciones para registrar valores de los ejs
const imcrud = require("./controllers/crud.js")

//obtener el valor del curso elgido
router.post("/save" , imcrud.save)



router.get('/nivel', (req, res) =>{
    
    res.render('nivel');
    console.log(imcrud.matricula )
   
});
router.post("/savenivel" , imcrud.savenivel)


router.get('/pago', (req, res) =>{
    
    res.render('pago');
    console.log(imcrud.matricula ) 
});
router.post("/savepago" , imcrud.savepago)



router.get('/resultado', (req, res) =>{

    //const datmatricula = imcrud.matricula 
    //res.render('nivel', { xrecibido: imcrud.matricula });
    //let prec = imcrud.matricula.precio - ( imcrud.matricula.precio * imcrud.matricula.decuento)


    let comp = `
                Descuento no disponible 
                Total a pagar : ${imcrud.matricula.precio}
            `;
    if(imcrud.matricula.pago == "Efectivo"){

        comp = `
                Usted cuenta con un descuento de 10%
                 por pagar en efectivo
                Total a pagar : ${imcrud.matricula.decuento}
            `;

    }
    


    res.render('resultado', { matriculado: imcrud.matricula  , comp:comp});
    console.log(imcrud.matricula ) 
});

module.exports = router