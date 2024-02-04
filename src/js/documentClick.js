// Прослушиваем клики
document.onclick = function(e)
{
    // Обработчик ошибок
    try
    {
        // Перебираем все элементы в классом desk-hor
        for(let element of document.getElementsByClassName('desk-hor'))
        {
            // Если элемент равен нажатой кнопке, то выполняем код
            // Если зажат ctrl, то ничего не делаем
            if(element === e.target.parentElement && !e.ctrlKey)
            {
                elements = [];
            
                for (i of students)
                {
                    const el = document.getElementById(`${i}`)
                    elements.push(el)
                };
            
                elem = e.target;
                const id = e.target.id;
                const pr = e.target.parentElement;
                const el = document.getElementById(e.target.id);
            
                // e.target.disabled = true;
                try
                {
                    (() =>
                    {
                        removeMenu()
                    })();
            
                } catch (error) {};
            
                let pos = e.target.parentElement?.getBoundingClientRect();
            
                let he = students.length * 22;
            
                let div = document.createElement('div');
                // div.style.display = 'flex'
                div.style.position = 'absolute'
                div.style.width = `200px`
                div.style.height = `${he}px`
                div.style.bottom = `${pos.bottom}px`
                div.style.left = `${pos.left+30}px`
                div.style.right = `${pos.right}px`
                div.style.top = `${pos.top}px`
                div.setAttribute('id', `par`);
                
                for(let student of students)
                {
                    let but = document.createElement('button');
                    addStudentToDiv(student, div, but)
                };
                
                oldElId = id;
                oldEl = e.target;
                oldPr = e.target.parentElement;
                first = false;
                console.log(`Clicked!`);
            }
        }
        
        // Если зажат ctrl, то выполняем следующий код
        if(e.ctrlKey)
        {
            // Проверяем, чтобы в элементе была строка, а не символ или пробел
            if(e.target.innerHTML.toLowerCase() != e.target.innerHTML.toUpperCase())
            {
                // Если элемент не кнопка, то вовзращаем
                if(e.target.type != 'submit') return;
                students.push(e.target.innerHTML)
                students.sort();
                e.target.innerHTML = ''
            };
            
            // Вовзращаем, чтобы код дальше не шел
            return;
        }
    
        // Если не кнопка, то...
        if(e.target.type != 'submit') removeMenu() 
    
        for (i of students)
        {

            try
            {
                document.getElementById(`${i}`).onclick = async function(onClickElement)
                {
                    console.log(onClickElement.target);
                    console.log(e.target);

                    if(e.target.innerHTML != e.target.innerHTML.toLowerCase())
                    {
                        students.push(e.target.innerHTML);
                        students.sort();
                    }

                    setTimeout(() =>
                    {
                        e.target.innerHTML = onClickElement.target.innerHTML;
                    }, 100);


                    students.splice(students.indexOf(onClickElement.target.innerHTML), 1);

                    removeMenu();
                }
            }
            catch (err) {};
        };
    } catch (err) {};
};

const enableButtons = () =>
{
    try
    {        
        for(let element of document.getElementById('par').children)
        {
            element.disabled = false;
        };
    }
    catch (err)
    {
        
    };
};

let ctrlKeyTimer = new Timer('ctrlKeyTimer', 1000, enableButtons);

document.addEventListener('keydown', event =>
{
    if(!event.ctrlKey) return;

    ctrlKeyTimer.clearTimer();
    ctrlKeyTimer.setTimer();
    
    try
    {        
        for(let element of document.getElementById('par').children)
        {
            element.disabled = true;
        };
    }
    catch (err)
    {
        
    };
})