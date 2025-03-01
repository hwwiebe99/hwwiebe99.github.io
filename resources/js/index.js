var counter2;
var counter;
var pos = 40;
var headerpos = 1883;

function myMove () {
    counter = 0;

    elem_holder = document.getElementById("holder");
    elem_header = document.getElementById("container");
    
    if (counter == 0)
    {
        id = setInterval(frame, 1);
        function frame() {
            if (counter == 0)
            {
                if(pos >= 150)
                {
                    clearInterval(id);
                }
                else{
            
                    pos++;
                    headerpos--;
                    elem_holder.style.width = pos + 'px';
                    elem_header.style.width = headerpos + 'px';
                }

                
            }
            else
            {
                clearInterval(id);
            }

        }

    }
}

function leaveMove() {
    counter = 1;
    elem = document.getElementById("holder");
    elem_header = document.getElementById("container")
    if(counter == 1)
    {
        var id = setInterval(frame2, 1);
        function frame2 ()
        {
            if(counter == 1)
            {
                if(pos <= 40)
                {
                    clearInterval(id);
                }
                else
                {
                    pos--;
                    headerpos++;
                    elem.style.width = pos + 'px';
                    elem_header.style.width = headerpos + 'px';
                }


            }
            else
            {
                clearInterval(id);
            }
        }
    }
}