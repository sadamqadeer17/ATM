import inquirer from "inquirer"
import Choices from "inquirer/lib/objects/choices.js"
console.log("Welcome to ATM :")
let my_Pin_Code:number=1234
let my_balance:number=5000
let Pin_code=await inquirer.prompt([
    {message:"Please enter your pin code:",type:"number", name:"my_Pin"}
])
if (Pin_code.my_Pin==1234){{
    console.log("")
    console.log("Pin code correct,: Login successfully!")
    console.log("")
    }
    let exit=false
    while(!exit){
    let user_choice=await inquirer.prompt([
    {
        message:"Please select your choice:",
        type:"list",
        name:"Choices",
        choices:["check balance","cash withdraw","exit"]
    }
    ])
    if (user_choice.Choices=="check balance"){
        console.log("Your current balance is", my_balance)
    }
    else if(user_choice.Choices=="cash withdraw"){
        let cash_withdraw=await inquirer.prompt([{
            message:"Please enter amount:",
            type:"number",
            name:"amount"
        }])
        
        
        if(cash_withdraw.amount>my_balance){
            console.log("Insufficient Balance!!!")
        }
        else{
            my_balance-=cash_withdraw.amount;
            console.log( cash_withdraw.amount,"withdraw successfully" )
            console.log("Your remaining account balance is:",my_balance)
        }
      
    }
    else if(user_choice.Choices=="exit") {exit=true, console.log("Thank you for using my ATM")}

    }}
    
else{
    console.log("Please enter correct pin!")
}


console.log("See you again...")




