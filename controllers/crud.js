
exports.matricula = {
    curso:"null",
    nivel:"null",
    pago:"null",
    precio:0,
    decuento:0
}



exports.save = (req , res) => {
    const curso = req.body.curso;
    console.log("el valor selecionado es:")
    console.log(curso)
    let pag = ("./nivel?vcurso=" + curso)

    this.matricula.precio = 1200
    if(curso === "PHP"){
        this.matricula.precio = 800
    }else if(curso === ".NET"){
        this.matricula.precio = 1500
    }


    this.matricula.curso = curso
    res.redirect(pag);
}

exports.savenivel= (req , res) => {
    const nivel = req.body.checknivel;
    console.log("Eligio el nivel de")
    this.matricula.nivel = nivel
    res.redirect("pago");
}

exports.savepago= (req , res) => {
    const pago = req.body.radiopago;

    let prec = this.matricula.precio
    this.matricula.decuento = prec
    if(pago == "Efectivo"){
        this.matricula.decuento = prec -(prec * 0.10)
    }



    console.log("Tipo de pago")
    this.matricula.pago = pago
    res.redirect("resultado");
}




