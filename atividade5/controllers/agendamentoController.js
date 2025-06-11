<<<<<<< HEAD
const AgendamentoConsulta = require('../models/agendamentoConsultaModel');

=======
>>>>>>> e6946231c3883c0965ebd431d754c7147162070f
function getIndexView(req, res){
    res.render('index.html');
}

<<<<<<< HEAD
function getAgendamentosView(req, res){
    AgendamentoConsulta.findAll().then((agendamentos)=>{
        res.render('agendamentos.html', {agendamentos});
    });
}

function postAgendarConsulta(req, res){
    let dados_consulta = req.body;
    let campos_invalidos = validarRequisicaoAgendamentoConsulta(dados_consulta);

    if(campos_invalidos.length == 0){
        AgendamentoConsulta.create(dados_consulta).then(()=>{
            res.redirect('/agendamentos');
        });
    }
    else{
        res.render('index.html', {campos_invalidos, dados_consulta});
    }

    
=======
function postAgendarConsulta(req, res){
    let dados_consulta = req.body;
    let campos_invalidos = validarRequisicaoAgendamentoConsulta(dados_consulta);
    res.render('index.html', {campos_invalidos, dados_consulta});
>>>>>>> e6946231c3883c0965ebd431d754c7147162070f
}

module.exports = {
    getIndexView,
<<<<<<< HEAD
    postAgendarConsulta,
    getAgendamentosView
=======
    postAgendarConsulta
>>>>>>> e6946231c3883c0965ebd431d754c7147162070f
}

function validarRequisicaoAgendamentoConsulta(dados_consulta){
    let campos_invalidos = [];

    if(dados_consulta.nome.length == 0){
        form_invalido = true;
        campos_invalidos.push("Nome");
    }
    if(dados_consulta.sobrenome.length == 0){
        form_invalido = true;
        campos_invalidos.push("Sobrenome");
    }
    if(dados_consulta.cpf.length == 0){
        form_invalido = true;
        campos_invalidos.push("CPF");
    }

    return campos_invalidos;
}