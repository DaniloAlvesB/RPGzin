function render_dices_content(){
    main_content.innerHTML = `
        <div class="d-flex flex-wrap">
            <div id="dice_content" class="d-flex flex-wrap col-12 col-md-6 y-roll"></div>
            <div id="log_dice_content" class="d-flex flex-column col-12 col-md-6 text-light y-roll">
                <div class="m-2 p-2 d-flex flex-row">
                    <h5 class="text-light mt-1">Histórico de dados</h5>
                    <button class="btn btn-danger mx-2" onclick="clear_roll_log()">Limpar</button>
                </div>
            </div>
        </div>
    `;

    var title = `Dado de 2 faces`
    var body = 2
    dice_content.innerHTML += create_dice(title, body)

    title = `Dado de 4 faces`
    body = 4
    dice_content.innerHTML += create_dice(title, body)

    title = `Dado de 6 faces`
    body = 6
    dice_content.innerHTML += create_dice(title, body)

    title = `Dado de 8 faces`
    body = 8
    dice_content.innerHTML += create_dice(title, body)

    title = `Dado de 10 faces`
    body = 10
    dice_content.innerHTML += create_dice(title, body)

    title = `Dado de 12 faces`
    body = 12
    dice_content.innerHTML += create_dice(title, body)

    title = `Dado de 20 faces`
    body = 20
    dice_content.innerHTML += create_dice(title, body)

    title = `Dado de 50 faces`
    body = 50
    dice_content.innerHTML += create_dice(title, body)

    title = `Dado de 100 faces`
    body = 100
    dice_content.innerHTML += create_dice(title, body)

}

function create_dice(title, number){
    var button_size = 24;
    return `
        <div class="card_resume text-light m-2 text-center col-11 col-md-5">   
            <h4 >${title}</b></h4>
            <hr>
            <div class="d-flex flex-column align-items-center justify-content-cemter"> 
                <div class="d-flex flex-row align-items-center justify-content-evenly">
                    <h3>d${number} + </h3>
                    <input id="sum_value+${number}" class="dice_input" value="0" />
                    <div class="d-flex flex-column text-center justify-content-center">
                        <button class="btn_nonte invert" onclick="alter_dice(${number}, +1)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="${button_size}" height="${button_size}" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                            </svg>
                        </button>
                        <div id="dice_number_${number}">x<dib id="times_${number}">1</dib></div>
                        <button class="btn_nonte" onclick="alter_dice(${number}, -1)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="${button_size}" height="${button_size}" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="d-flex container-fluid justify-content-center">
                    <button class="btn btn-success mt-4 container-fluid" onclick="roll_dice(${number})">Lançar <b>d${number}</b></button>
                </div>
            </div>
        </div>
    `
}

export default render_dices_content;