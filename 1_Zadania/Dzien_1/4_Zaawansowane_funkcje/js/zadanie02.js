/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//Twoj komentarz ...
function sortArray() {

    //Twoj komentarz ...
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Twoj komentarz ...
    points.sort(function(a, b){
        //Twoj komentarz ...liczby w funkcji są od siebie odejmowane, wynik będący liczbą ujemną oznacza, że liczba b jest większa od liczby a i liczby nie są zamieniane miejscami.

        // Musi być użyta funkcja wyższego rzędu ponieważ sam sort sortuje po alfabecie.
        return a-b;
    });

    //Twoj komentarz ...
    return points;
}

//Twoj komentarz ...
sortArray();
