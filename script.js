function changecolor(){
    var hexnum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    var hex_code = '';
    for (let i = 0; i < 6; i++) {
        var randomidx = Math.floor(Math.random() * hexnum.length);
        hex_code += hexnum[randomidx];
    }
    document.getElementById("hexco").innerHTML = hex_code;
    document.getElementsByTagName("body")[0].style.background = "#" + hex_code;
}
