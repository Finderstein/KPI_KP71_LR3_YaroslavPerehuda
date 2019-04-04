let bottles = prompt("Enter the number of bottles", 50);
for(let i = bottles; i > 0; i--)
{
    console.log("Bottles left:" + i);
    document.write("<p>" + i + " пляшок стоїть на стіні, одна упала і залишилось " + (i - 1) + "</p>");
}
document.write("Жодної пляшки не залишилось!")