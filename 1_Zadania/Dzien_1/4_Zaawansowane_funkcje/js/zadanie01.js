/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//Twoj komentarz ...
function jeden() {

    //Twoj komentarz ...
    var zmienna1 = 1;

    //Twoj komentarz ...
    function dwa() {

        //Twoj komentarz ...// funkcja jeden nie ma dostępu do zmiennej 2 ponieważ znajduje się ona w funkcji, która jest zagnieżdzona w funkcji jeden.
        console.log(zmienna1);

        //Twoj komentarz ...
        var zmienna2 = 3;
    }

    //Twoj komentarz ...
    dwa();

    //Twoj komentarz ...
    console.log(zmienna2)
}

//Tw�j komentarz ...
jeden()
