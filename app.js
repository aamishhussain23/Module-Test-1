let pc_score = document.querySelector('.pc-score');
let local_storage_pc_value = localStorage.getItem('pc-score');
if(local_storage_pc_value == null){
    localStorage.setItem('pc-score', 0);
}
else{
    pc_score.value = local_storage_pc_value;
}

let user_score = document.querySelector('.user-score');
let local_storage_user_value = localStorage.getItem('user-score');
if(local_storage_user_value == null){
    localStorage.setItem('user-score', 0);
}
else{
    user_score.value = local_storage_user_value;
}

function result_play_again(){
    let result = document.querySelector('.result');
    result.style.display = "none";
    let game = document.querySelector('.game');
    game.style.display = "block";
}

function hurray_play_again(){
    let hurray = document.querySelector('.hurray-message');
    hurray.style.display = "none";
    let header = document.querySelector('header');
    header.style.display = "flex";
    let main = document.querySelector('main');
    main.style.display = "flex";
    let white_box = document.querySelector('.white-box');
    white_box.style.display = "flex";
    let result = document.querySelector('.result');
    result.style.display = "none";
    let game = document.querySelector('.game');
    game.style.display = "block";
    let next_btn = document.querySelector('.next');
    next_btn.style.display = "none";
}

function show_hurray(){
    let main = document.querySelector('main');
    main.style.display = "none";
    let header = document.querySelector('header');
    header.style.display = "none";
    let white_box = document.querySelector('.white-box');
    white_box.style.display = "none";
    let game = document.querySelector('.game');
    game.style.display = "none";
    let hurray = document.querySelector('.hurray-message');
    hurray.style.display = "flex";
    
}

function show_tieUp(element_name, element_color, msg){
    console.log(typeof(element_name), element_name);
    let user_circle_1 = document.querySelector('.user-circle-1');
    user_circle_1.style.visibility = "hidden"
    let user_circle_2 = document.querySelector('.user-circle-2');
    user_circle_2.style.visibility = "hidden"
    let user_circle_3 = document.querySelector('.user-circle-3');
    user_circle_3.style.visibility = "hidden"
    let pc_circle_1 = document.querySelector('.pc-circle-1');
    pc_circle_1.style.visibility = "hidden"
    let pc_circle_2 = document.querySelector('.pc-circle-2');
    pc_circle_2.style.visibility = "hidden"
    let pc_circle_3 = document.querySelector('.pc-circle-3');
    pc_circle_3.style.visibility = "hidden"
    let game = document.querySelector('.game');
    game.style.display = "none";
    let result = document.querySelector('.result');
    result.style.display = "flex";
    let user = document.querySelector('.user');
    user.style.border = `15px solid ${element_color}`;
    let computer = document.querySelector('.pc');
    computer.style.border = `15px solid ${element_color}`;
    let user_image = document.querySelector('#user-image');
    user_image.src = `resources/${element_name}.png`
    let computer_image = document.querySelector('#pc-image');
    computer_image.src = `resources/${element_name}.png`;
    let message = document.querySelector(".message");
    message.textContent = `${msg}`;
    let message_2 = document.querySelector(".message-2");
    message_2.style.display = "none";
    let next_btn = document.querySelector('.next')
    next_btn.style.display = "none"
}

function show_result_for_user(user_btn_color, user_element_name, pc_btn_color, pc_element_name, msg){
    let game = document.querySelector('.game');
    game.style.display = "none";
    let result = document.querySelector('.result');
    result.style.display = "flex";
    let user_circle_1 = document.querySelector('.user-circle-1');
    user_circle_1.style.visibility = "visible"
    let user_circle_2 = document.querySelector('.user-circle-2');
    user_circle_2.style.visibility = "visible"
    let user_circle_3 = document.querySelector('.user-circle-3');
    user_circle_3.style.visibility = "visible"
    let pc_circle_1 = document.querySelector('.pc-circle-1');
    pc_circle_1.style.visibility = "hidden"
    let pc_circle_2 = document.querySelector('.pc-circle-2');
    pc_circle_2.style.visibility = "hidden"
    let pc_circle_3 = document.querySelector('.pc-circle-3');
    pc_circle_3.style.visibility = "hidden"
    let user = document.querySelector('.user');
    user.style.border = `15px solid ${user_btn_color}`;
    let user_image = document.querySelector('#user-image');
    user_image.src = `resources/${user_element_name}.png`;
    let computer = document.querySelector('.pc');
    computer.style.border = `15px solid ${pc_btn_color}`;
    let computer_image = document.querySelector('#pc-image');
    computer_image.src = `resources/${pc_element_name}.png`;
    let message = document.querySelector(".message");
    message.textContent = `${msg}`;
    let message_2 = document.querySelector('.message-2')
    message_2.innerHTML = "AGAINST PC"
    let next_btn = document.querySelector('.next')
    next_btn.style.display = "flex"
    return 1;
}

function show_result_for_pc(pc_btn_color, pc_element_name, user_btn_color, user_element_name, msg){
    let game = document.querySelector('.game');
    game.style.display = "none";
    let result = document.querySelector('.result');
    result.style.display = "flex";
    let user_circle_1 = document.querySelector('.user-circle-1');
    user_circle_1.style.visibility = "hidden"
    let user_circle_2 = document.querySelector('.user-circle-2');
    user_circle_2.style.visibility = "hidden"
    let user_circle_3 = document.querySelector('.user-circle-3');
    user_circle_3.style.visibility = "hidden"
    let pc_circle_1 = document.querySelector('.pc-circle-1');
    pc_circle_1.style.visibility = "visible"
    let pc_circle_2 = document.querySelector('.pc-circle-2');
    pc_circle_2.style.visibility = "visible"
    let pc_circle_3 = document.querySelector('.pc-circle-3');
    pc_circle_3.style.visibility = "visible"
    let computer = document.querySelector('.pc');
    computer.style.border = `15px solid ${pc_btn_color}`;
    let computer_image = document.querySelector('#pc-image');
    computer_image.src = `resources/${pc_element_name}.png`;
    let user = document.querySelector('.user');
    user.style.border = `15px solid ${user_btn_color}`;
    let user_image = document.querySelector('#user-image');
    user_image.src = `resources/${user_element_name}.png`;
    let message = document.querySelector(".message");
    message.textContent = `${msg}`;
    let message_2 = document.querySelector('.message-2')
    message_2.innerHTML = "AGAINST PC"
    let next_btn = document.querySelector('.next')
    next_btn.style.display = "none"
    return 1;
}

function show_rules(){
    let rules = document.querySelector('.instruction');
    let close = document.querySelector('.close');
    rules.style.display = "flex";
    rules.style.animationName = "popup";
    rules.style.animationDuration = "0.5s"; 
    close.style.display = "flex";
    close.style.animationName = "popup";
    close.style.animationDuration = "0.5s";
}

function close_popup(){
    let rules = document.querySelector('.instruction');
    let close = document.querySelector('.close');
    rules.style.display = "none";
    close.style.display = "none";
}

function rock(){
    let element = ["rock", "paper", "scissor"];
    let randomIndex = Math.floor(Math.random() * element.length);
    let computerChoice = element[randomIndex];
    // computerChoice = "scissor" // for testing
    if(computerChoice === "rock"){
        show_tieUp("rock", "#0074B6", "TIE UP");
        return;
    }
    else if(computerChoice === "paper"){
        let point = show_result_for_pc("#ffa943", "paper", "#0074b6", "rock", "YOU LOST")
        let pc_score = document.querySelector('.pc-score');
        let final_value = parseInt(pc_score.value) + point
        localStorage.setItem("pc-score", final_value);
        let local_storage_value = localStorage.getItem('pc-score');
        pc_score.value = local_storage_value;
    }
    else{
        let point = show_result_for_user("#0074B6", "rock", "#bd00ff", "scissor", "YOU WIN")
        let user_score = document.querySelector('.user-score');
        let final_value = parseInt(user_score.value) + point
        localStorage.setItem("user-score", final_value);
        let local_storage_value = localStorage.getItem('user-score');
        user_score.value = local_storage_value;
    }
}

function paper(){
    let element = ["rock", "paper", "scissor"];
    let randomIndex = Math.floor(Math.random() * element.length);
    let computerChoice = element[randomIndex];
    // computerChoice = "scissor"
    if(computerChoice === "paper"){
        show_tieUp("paper", "#ffa943", "TIE UP");
        return;
    }
    else if(computerChoice === "rock"){
        let point = show_result_for_user("#ffa943", "paper", "#0074b6", "rock", "YOU WIN")
        let user_score = document.querySelector('.user-score');
        let final_value = parseInt(user_score.value) + point
        localStorage.setItem("user-score", final_value);
        let local_storage_value = localStorage.getItem('user-score');
        user_score.value = local_storage_value;
    }
    else{
        let point = show_result_for_pc("#bd00ff", "scissor", "#ffa943", "paper", "YOU LOST")
        let pc_score = document.querySelector('.pc-score');
        let final_value = parseInt(pc_score.value) + point
        localStorage.setItem("pc-score", final_value);
        let local_storage_value = localStorage.getItem('pc-score');
        pc_score.value = local_storage_value;
    }
}

function scissor(){
    let element = ["rock", "paper", "scissor"];
    let randomIndex = Math.floor(Math.random() * element.length);
    let computerChoice = element[randomIndex];
    computerChoice = "paper"
    if(computerChoice === "scissor"){
        show_tieUp("scissor", "#bd00ff", "TIE UP");
        return;
    }
    else if(computerChoice === "rock"){
        let point = show_result_for_pc("#0074b6", "rock", "#bd00ff", "scissor", "YOU LOST")
        let pc_score = document.querySelector('.pc-score');
        let final_value = parseInt(pc_score.value) + point
        localStorage.setItem("pc-score", final_value);
        let local_storage_value = localStorage.getItem('pc-score');
        pc_score.value = local_storage_value;

    }
    else{
        let point = show_result_for_user("#bd00ff", "scissor", "#ffa943", "paper", "YOU WIN")
        let user_score = document.querySelector('.user-score');
        let final_value = parseInt(user_score.value) + point;
        localStorage.setItem("user-score", final_value);
        let local_storage_value = localStorage.getItem('user-score');
        user_score.value = local_storage_value;
    }
}