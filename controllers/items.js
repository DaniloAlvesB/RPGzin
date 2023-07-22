let items_json = localStorage.getItem("items");
if(items_json == null || items_json == undefined || items_json == []){
    items_json = {
        "items": []
    }
}else{
    items_json = JSON.parse(items_json)
}

let total_weight = 0;
items_json.items.forEach(element => {
    total_weight += parseFloat(element[4]) * parseFloat(element[3])
})


//CRUD
function show_items(filters){
    list_item.innerHTML = `
        <table class="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <td>Nome</td>
                    <td>Quantidade</td>
                    <td>Tipo</td>
                    <td>Ações</td>
                </tr>
            </thead>
            <tbody id="item_table" class="table-group-divider">
                
            </tbody>
        </table>
    `

    var name_f = "";
    var type_f = "";
    if(filters[0] != ""){
        name_f = filters[0]
    }
    if(filters[1] != ""){
        type_f = filters[1]
    }

    var count = 0
    items_json.items.forEach(element => {
        if(element[0].includes(name_f) && element[1].includes(type_f)){
            count ++
            item_table.innerHTML += `
                <tr>
                    <td>${count}</td>
                    <td>${element[0]}</td>
                    <td>${element[3]}</td>
                    <td>${element[1]}</td>
                    <td class="item-desc">
                        <button id="remove_item" class="btn btn-danger" value="${count}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                        </button>
                    </td>
                </tr>
            ` 
        }
    });
 
}

function add_item(item){
    var array = items_json["items"];
    array.push(item);
    items_json["items"] = array;
    save_item(items_json);

    if(localStorage.getItem("local") == "items"){
        location.reload();
    }
}

function remove_item(item){
    var array = [];
    var count = 0;
    items_json["items"].forEach((element) => {
        count++
        if(count != parseInt(item)){
            array.push(element)
        }
    })
    items_json["items"] = array;
    save_item(items_json);

    if(localStorage.getItem("local") == "items"){
        location.reload();
    }
}

//FUNCTIONALS
function render_items_content(){
    modais.innerHTML = `
        <!-- Modal -->
        <div class="modal fade" id="itemModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Criar novo item</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="d-flex flex-column">
                    <label for="item_name">Nome</label>
                    <input id="item_name" type="text" max-lenght="100" />
                </div>
                <div class="d-flex flex-column">
                    <label for="item_type">Tipo</label>
                    <select id="item_type" aria-label="Tipos">
                        <option selected>Tipos</option>
                        <option value="1">Armas</option>
                        <option value="2">Ferramentas</option>
                        <option value="3">Consumíveis</option>
                        <option value="4">Valorosos</option>
                        <option value="5">Úteis</option>
                        <option value="6">Outros</option>
                    </select>
                </div>
                <div class="d-flex flex-column">
                    <label for="item_desc">Descrição</label>
                    <textarea id="item_desc" class="form-control"></textarea>
                </div>
                <div class="d-flex flex-wrap justify-content-evenly">
                    <div class="d-flex flex-column">
                        <label for="item_quantity">Quantidade</label>
                        <input id="item_quantity" type="number" />
                    </div>
                    <div class="d-flex flex-column">
                        <label for="item_weight">Peso (Kg)</label>
                        <input id="item_weight" type="number" step="any" />
                    </div>
                </div>
                <ul id="cad_items_errors" class="text-danger"></ul>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sair</button>
                <button id="add_item_button" type="button" class="btn btn-success">Inserir</button>
            </div>
            </div>
        </div>
        </div>
    `
    main_content.innerHTML = `
        <div class="d-flex flex-column">
            <div id="header_item_content" class="d-flex flex-wrap col-12">
                <div class="d-flex flex-wrap container-fluid justify-content-evenly" style="gap: 5px">
                    <select id="select_search_item_type" class="col-3" aria-label="Tipos">
                        <option selected>Tipos</option>
                        <option value="Armas">Armas</option>
                        <option value="Ferramentas">Ferramentas</option>
                        <option value="Consumíveis">Consumíveis</option>
                        <option value="Valorosos">Valorosos</option>
                        <option value="Úteis">Úteis</option>
                        <option value="Outros">Outros</option>
                    </select>
                    <input id="input_search_item_name" type="text" class="col-8" placeholder="Nome do item" />
                </div>
            </div>
            <div id="litem_list_content" class="d-flex flex-column col-12 text-light">
                <div id="title_item" class="m-2 p-2 d-flex flex-row">
                    <h5 class="text-light mt-1">Itens</h5>
                </div>
                <div>
                    <button class="btn btn-success" type="button" data-bs-toggle="modal" data-bs-target="#itemModal">
                        <b>+</b> Novo Item
                    </button>
                </div>
                <b> (Peso total: ${total_weight} Kg)</b>
                <div id="list_item" class="m-2 p-2 d-flex flex-row">
                    
                </div>
            </div>
        </div>
    `
    show_items(["", ""]);
}

function save_item(list){
    localStorage.setItem("items", JSON.stringify(list));
}

function factory() {
    return{
        show: show_items, 
        add: add_item, 
        save: save_item, 
        remove: remove_item,
        render: render_items_content,
    }
}

const items_factory = factory();

export default items_factory;
