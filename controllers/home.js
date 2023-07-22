function render_main_content(){
    main_content.innerHTML = "";

    var title = `Resumo da ultima sessão (14/07/2023) - <b class='text-danger'>Cancelada</b>`
    var body = `Brendam foi confrontado por um homem encapuzado que emanava grandes quantidades de radiação, não resistiu e desmaiou, Lilian e Jacob 'dormiam' na casa.`
    main_content.innerHTML += create_card(title, body)

    title = `Teste - V1.0.0`
    body = `Caso note algum erro, reporte!`
    main_content.innerHTML += create_card(title, body)

}

function create_card(title, body){
    return `
        <div class="card_resume text-light my-3">   
            <h4 >${title}</b></h4>
            <hr>
            <p>
                ${body}
            </p>
        </div>
    `
}

export default render_main_content;

