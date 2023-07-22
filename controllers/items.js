let items_json = JSON.parse(localStorage.getItem("items"));
if(items_json == null || items_json == undefined || items_json == ""){
    items_json = {};
}

//CRUD
function show_items(){
    var items = "";
    for(item in items_json){
        items += item.name;           
    }
    items_content.innerHTML = items
}

function add_item(item){

    items_json += item;
    save_item(items_json);

}

//FUNCTIONALS
function render_items_content(){
    main_content.innerHTML = `
        <div class="d-flex flex-column">
            <div id="dice_content" class="d-flex flex-wrap col-12"></div>
            <div id="log_dice_content" class="d-flex flex-column col-12 text-light">
                <div class="m-2 p-2 d-flex flex-row">
                    <h5 class="text-light mt-1">Itens</h5>
                </div>
            </div>
        </div>
    `
    console.log("Inner items")
}

function save_item(json){
    localStorage.setItem("items", JSON.stringify(json));
}

function items_factory() {
    return{
        show: show_items, 
        add: add_item, 
        save: save_item, 
        render: () => {
            main_content.innerHTML = `
                <div class="d-flex flex-column">
                    <div id="dice_content" class="d-flex flex-wrap col-12"></div>
                    <div id="log_dice_content" class="d-flex flex-column col-12 text-light">
                        <div class="m-2 p-2 d-flex flex-row">
                            <h5 class="text-light mt-1">Itens</h5>
                        </div>
                    </div>
                </div>
            `
            console.log("Inner items")
        }
    }
}

export default items_factory;
