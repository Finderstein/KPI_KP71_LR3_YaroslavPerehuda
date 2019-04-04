var arr = [
	{value: 100, type: 'USD'},
	{value: 215, type: 'EUR'},
	{value: 7, type: 'EUR'},	
	{value: 99, type: 'USD'},
	{value: 354, type: 'USD'},
	{value: 12, type: 'EUR'},
	{value: 77, type: 'USD'},
];

function sumUSD()
{
    let usd = arr.filter(usd => usd.type == 'USD' && usd.value < 100);
    let sum = 0;
    console.log(usd.length);

    for(let i = 0; i < usd.length; i++)
    {
        console.log(usd[i]);
        sum += usd[i].value;
    }
    console.log(sum);
    return sum;
}

function arrEUR()
{
    let eur = arr.filter(eur => eur.type == 'EUR').map((item) => {item.value *= 2; return item;});
    console.log(eur);
    return eur;
}

document.write("<p>Task 1:<br>Sum of all value with type USD and value less than 100: " + sumUSD());

document.write("<p>Task 2:</p>")
let eur = arrEUR();
for(let i = 0; i < eur.length; i++)
    document.write("<p>" + eur[i].value + "</p>");