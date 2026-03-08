const chalk = require('chalk');
const { Client } = require("discord.js-selfbot-v13");
const fs = require('fs');

//Channel & tokens read karne ka area
const channelId = fs.readFileSync('channel.txt', 'utf-8').trim();
const tokens = fs.readFileSync('token.txt', 'utf-8').trim().split('\n').map(t => t.trim()).filter(t => t.length > 0);


function timeDelay(min, max) {
    const ms = Math.floor(Math.random() * (max - min + 1) + min);
    return new Promise(resolve => setTimeout(resolve, ms));
}
//Main Area from starting............... lessgoooooooooooooooooooo
tokens.forEach(async(token, index) => {
    const client = new Client({ checkUpdate: false });


    client.on('ready', async(msg) => {
        console.log(chalk.black.bgGreen(`I am Online ${client.user.username}`));
        const channel = await client.channels.fetch(channelId);
        if (!channel) return;
        if (!channel.length === 0) return;



        const sdMessage = async() => {
            try {
                await channel.send('ns'); // Command which you want to send 'kd'
                console.log(chalk.gray(`Ns sent at ${new Date().toLocaleTimeString()}`));

                const nextDelay = Math.floor(Math.random() * (780000 - 660000 + 1) + 660000);
                console.log(chalk.green(`Next Ns in ${Math.round(nextDelay/60000)} minutes:|`));
                setTimeout(sdMessage, nextDelay);

            } catch (error) {
                console.log(chalk.red(`Failed to send message ${error}`));
                setTimeout(sdMessage, 60000);
            }
        };

        async function dailyTask() {
            return await channel.send("ndaily");
        }


        // Area Message drop Duration adjustment 
        setTimeout(async() => {
            await timeDelay(2000, 3000);
            await sdMessage();
        }, 0);

        //for Daily Task things drop   using Error-Handling conecpt to reduce crashing
        setTimeout(async() => {
            try {
                await dailyTask();
                console.log(chalk.magentaBright(`Daily Task sended ${new Date().toLocaleTimeString()}`));
                await timeDelay(20000, 50000);

                setInterval(async() => {
                    await dailyTask();
                }, 86400000)
                console.log(chalk.magentaBright(`Daily task Sended`));

            } catch (error) {
                console.log(chalk.redBright(`Daily Task Error ===>  ${error.message}`));
            }
        }, 10000 * index)

    });


    client.on('messageCreate', async(message) => {
        try {
            //There is Bot, you can change as per need (Nai bot id) work for Sofi, gachpon, Tofu.... and also maybe for karuta
            const botId = "1312830013573169252";
            if (message.channel.id !== channelId) return;
            if (message.author.id === botId) {
                console.log(chalk.green(`This is ${message.author.username} Bot`));

                if (message.attachments.size > 0 || message.components.length > 0) {
                    console.log(chalk.cyan.bold(`${message.author.username} Card Droping`));
                    try {
                        const firstRow = message.components[0];
                        const buttons = firstRow.components;

                        if (buttons) {
                            let randomIndex = Math.floor(Math.random() * buttons.length);
                            let targetButton = message.components[0].components[randomIndex];
                            //Duration gap to click button you can change per as need
                            await timeDelay(2000, 3000);
                            const myId = targetButton.customId; // this is where i got stucked once:)
                            await message.clickButton(myId);
                            console.log(chalk.hex('#FFA500').bold(`Button is click`));
                        }
                    } catch (error) {
                        console.log(chalk.redBright(`Gaurav, There is error in Button = ${error.message}`));

                    }
                }
            }
        } catch (error) {
            console.log(chalk.redBright(`There is a error in messageCreate function ===> ${error.message}`));
        }

    });

    setTimeout(async() => {
        client.login(token);
    }, 55000 * index);

});
//if button not clicked this will trigger for not crashing the process  if catch is not define
process.on("unhandledRejection", () => {});
process.on("uncaughtException", () => {});