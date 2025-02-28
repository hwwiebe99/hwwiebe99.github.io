var counter2;
var counter;
var pos = 40;
function myMove () {
    counter = 0
    counter2 = 1;

    elem = document.getElementById("side-drop");
    
    if (counter == 0 && counter2 == 1)
    {
        id = setInterval(frame, 1);
        function frame() {
            if (counter == 0 && counter2 == 1)
            {
                if(pos == 150)
                {
                    clearInterval(id);
                }
                else{
            
                    pos++;
                    pos++;
                    elem.style.width = pos + 'px';
                }
            }
            else
            {
                clearInterval(id);
            }

        }

    }
    return counter2;
}

function leaveMove() {
    counter2 = 0;
    counter = 1;
    elem = document.getElementById("side-drop");
    if(counter2 == 0 && counter == 1)
    {
        var id = setInterval(frame2, 1);
        function frame2 ()
        {
            if(counter == 1 && counter2 == 0)
            {
                if(pos == 20)
                {
                    clearInterval(id);
                }
                else
                {
                    pos--;
                    elem.style.width = pos + 'px';
                }

            }
        }
    }
}