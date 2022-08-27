function PizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}
var pizza1 = PizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(pizza1);
var pizza2 = PizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(pizza2);
var pizza3 = PizzaOven("masa piedra", "barbecue", ["gauda"], ["aji"]);
console.log(pizza3);
var pizza4 = PizzaOven("masa delgada", "tomate", ["cabra"], ["salsa ajo"]);
console.log(pizza4);
