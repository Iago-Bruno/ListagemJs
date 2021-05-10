let lista = ['Zika vírus (sorologia)', 'Zinco', 'Zinco urinário'];
let option;
let doencas = document.getElementById("doencas");

lista.forEach((item, index) => {
    option = document.createElement("option");
    option.value = index;
    option.text = item

    doencas.add(option, doencas.options[index]);
});  