function render_main_content(){
    main_content.innerHTML = "";

    var title = `Resumo da ultima sessão (21/07/2023)`
    var body = `O grupo foi durpreendido e sequestrado junto com os habitantes da vila. Após serem torturados (uns mais que outros) foram salvos por um grupo denomidado "Resistência". Agora estão prestes a aprender mais sobre suas habilidades.`
    main_content.innerHTML += create_card(title, body)

    var title = `Sessão (14/07/2023) - <b class='text-danger'>Cancelada</b>`
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

