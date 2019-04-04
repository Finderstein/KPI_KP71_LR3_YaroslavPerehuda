let children = [1, 2, 3, 4, 15];
let profession = ["вчитель", "офіціант", "лицар", "маг", "перукар"];
let partner = ["Ельза", "Лексус", "Джерар", "Джувія", "Мевіс"];
let city = ["Елізія", "Амстердам", "Містел", "Селізіум", "Москва"];

while(true)
{
    let prediction = prompt("Виберіть те, що ви будете передбачувати(Просто введіть цифру).\n 1)Ім'я партнера та кількість дітей.\n 2)Місто в яке ви преїдете та посаду.");
    switch (parseInt(prediction))
    {
        case 1:
        {
            let affirmative = confirm("Адміністрація сайту не несе відповідальності за згенероване передбачування. Продовжити?");
            if(affirmative)
            {
                let index1 = Math.floor(Math.random() * 5);
                let index2 = Math.floor(Math.random() * 5);
                alert(`Ви укладите шлюб з ${partner[index1]} та у вас буде ${children[index2]} дітей`);
            }

            break;
        }
        case 2:
        {
            let affirmative = confirm("Адміністрація сайту не несе відповідальності за згенероване передбачування. Продовжити?");
            if(affirmative)
            {
                let index1 = Math.floor(Math.random() * 5);
                let index2 = Math.floor(Math.random() * 5);
                alert(`Ви переїдете у місто ${city[index1]} на посаду  ${profession[index2]}`);
            }
            break;
        }
        default:
        {
            alert("Неправильний вибір!!!");
            break;
        }
    }
}