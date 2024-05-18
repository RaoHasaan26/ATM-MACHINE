import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 5000;
let myPin = 12345;
//welcome message
console.log(chalk.blue("\n \tWelcome To Hasaan ATM Machine\n"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: (chalk.yellow("Enter your pin code"))
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin is correct, login successfully!");
    //console.log(`Current Account Balance Is ${myBalance}`)
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation:",
            choices: ["Withdraw amount", "Check Balance"]
        }
    ]);
    if (operationAnswer.operation === "Withdraw amount") {
        let WithdrawAns = await inquirer.prompt([
            {
                name: "WithdrawMethod",
                type: "list",
                message: "Select a Withdrawal method",
                choices: ["Fast Cash", "Enter Amount"]
            }
        ]);
        if (WithdrawAns.WithdrawMethod === "Fast Cash") {
            let FastCashAns = await inquirer.prompt([
                {
                    name: "FastCash",
                    type: "list",
                    message: "Select Amount:",
                    choices: [1000, 2000, 5000, 10000]
                }
            ]);
            if (FastCashAns.FastCash > myBalance) {
                console.log(chalk.red("Inifficient Balance"));
            }
            else {
                myBalance -= FastCashAns.FastCash;
                console.log(`${FastCashAns.FastCash}Withdraw Successfully`);
                console.log(`Your Remaining Balance is: ${myBalance}`);
            }
        }
        else if (WithdrawAns.WithdrawMethod === "Enter Amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to withdraw",
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log("Insufficient Balance");
            }
            else {
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount} Withdraw Successfully `);
                console.log(`Your remaining balance is: ${myBalance}`);
            }
        }
        else if (operationAnswer.operation === "Check Balance") {
            console.log(`Your Current Balance Is: ${myBalance}`);
        }
    }
}
else {
    console.log(chalk.red("pin is incorrect, Try Again"));
}
