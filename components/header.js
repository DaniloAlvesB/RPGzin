import render_main_content from "../controllers/home.js"
import render_dice_content from "../controllers/dices.js"
import items_factory from "../controllers/items.js"

function render_header(home, itens, notes, dices, conf){
    header.innerHTML = `
        <div class="container">
            <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" class="text-light d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-dice-6-fill" viewBox="0 0 16 16">
                        <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm1 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM12 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM4 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                    </svg>
                    <span class="fs-4 mx-2">RPGzin</span>
                </a>

                <ul class="nav nav-pills">
                    <li class="nav-item"><button id="nav_bt" class="nav-link ${home}" value="home">Início</button></li>
                    <li class="nav-item"><button id="nav_bt" class="nav-link ${itens}" value="items">Itens</button></li>
                    <li class="nav-item"><button id="nav_bt" class="nav-link ${notes}" value="notes">Anotações</button></li>
                    <li class="nav-item"><button id="nav_bt" class="nav-link ${dices}" value="dices">Dados</button></li>
                    <li class="nav-item"><button id="nav_bt" class="nav-link ${conf}" value="config">Config.</button></li>
                </ul>
            </header>
        </div>
    `
}
console.log(items_factory)
function set_local(local){

    if(local == "ac"){
        local = localStorage.getItem('local');
        console.log(local)
    }

    if(local == "home"){
        render_header("active", "", "", "", "");
        localStorage.setItem("local", local);
        render_main_content();

    }else if(local == "items"){
        localStorage.setItem("local", local);
        render_header("", "active", "", "", "");
        items_factory.render;

    }else if(local == "notes"){
        localStorage.setItem("local", local);
        render_header("", "", "active", "", "");

    }else if(local == "dices"){
        localStorage.setItem("local", local);
        render_header("", "", "", "active", "");
        render_dice_content();

    }else if(local == "config"){
        localStorage.setItem("local", local);
        render_header("", "", "", "", "active");

    }else{
        render_header("active", "", "", "", "");
        localStorage.setItem("local", local);
        render_main_content();
    }
}

export default set_local;