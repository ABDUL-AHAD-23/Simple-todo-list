

import inquirer from "inquirer";

let todo=[];
while (true) {
    let input = await inquirer.prompt([
  {
            name: "Todoitem",
            type: "input",
            message: "Enter a todo item",
  },{
                name: "addmore",
                type: "list",
                choices: ["yes","no"]
    }
    ]);

   
    const{Todoitem,addmore}= input;

    todo.push(Todoitem)

    if (addmore === "no") {
        console.log("Todolist:");
        
    for (let i = 0; i < todo.length; i++)
         {console.log(todo[i]);}
    break;
        }
}