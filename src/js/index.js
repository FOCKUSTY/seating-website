const studentsOriginal =
[
    "Бабушкин Рома",
    "Баимов Айгиз",
    "Басырова Радмилла",
    "Башаров Айдар",
    "Виолетта Громовская",
    "Кадырмаев Данис",
    "Камалетдинов Оскар",
    "Кильдин Вадим",
    "Кудряшева Ксения",
    "Куклин Никита",
    "Латыпов Ринат",
    "Мигранов Эмиль",
    "Мухаматьянова Рената",
    "Мухминов Арсэн",
    "Мухутдинова Диана",
    "Рахимов Эмиль",
    "Сафин Данис",
    "Сафин Рушан",
    "Сахибгареева Аделина",
    "Тайтакова Эльвина",
    "Фарахова Ивилина",
    "Хамитов Даниил",
    "Шаймарданова Милена",
    "Юмадилов Асрен",
    "Юсупова Малика",
    "Юсупова Риана"
];

const students = copy(studentsOriginal);

let elements = [];

let first = true;
let oldElId;
let oldEl;
let oldPr;
let elem;
let oldInnerText;

function listener(el)
{
    console.log(el)
}

const removeMenu = () =>
{
    try
    {
        try
        {
            // Перебераем учеников и убираем
            for(i of students)
            {
                let parent = document.getElementById('par');
                let child = document.getElementById(`${i}`);
                parent.removeChild(child);
            };
        }
        catch (err) {}
    
        let p = document.getElementById('floor');
        let c = document.getElementById('par');
        p.removeChild(c);
    
        oldEl.disabled = false;
    }
    catch (err)
    {
        return;
    }
}

const addStudentToDiv = (student, div, but) =>
{
    but.style.display = 'flex'
    but.style.position = 'relative';
    but.style.width = "200px";
    but.style.background = "black";
    but.style.color = "white";
    but.innerHTML = `${student}`;
    but.setAttribute('id', `${student}`)
    but.style.zIndex = 20;
    but.style.fontFamily = 'Roboto Condensed';
    
    document.getElementById('floor').appendChild(div);
    div.append(but);
}

const parent = document.getElementById('par')