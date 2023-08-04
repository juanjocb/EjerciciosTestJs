const suma = require('./Apps/Suma.js');
const num_positivo = require('./Apps/Num_Positivo.js');
const division = require('./Apps/Division.js');
const esMayor = require('./Apps/EsMayorEdad.js');
const numNoCoherente = require('./Apps/NumNoCoherente.js');
const areaTriangulo = require('./Apps/AreaTriangulo.js');

test('1. La funcion suma entre 5 y 1es igual a 6', () => {
    expect(suma(1,5)).toBe(6)
})

test('2. La funcion Num_Positivo al ingresar un numero 20 responde true', () => {
    expect(num_positivo(20)).toBe(true)
})

test('3. La funcion Num_Positivo al ingresar un numero -20 responde false', () => {
    expect(num_positivo(-20)).toBe(false)
})

test('4. La funcion Division al dividir 20 entre 4 responde 5', () => {
    expect(division(20,4)).toBe(5)
})

test('5. La funcion numCoherente al ingresar un valor nulo responde true', () => {
    expect(numNoCoherente()).toBe(true)
})

test('6. La funcion numCoherente al ingresar un valor indefinido responde false', () => {
    let indefinido;
    expect(numNoCoherente(indefinido)).toBe(true)
})

test('7. La funcion numCoherente al ingresar un numero valido responde false', () => {
    expect(numNoCoherente(20)).toBe(false)
})

test('8. La funcion esMayor al ingresar una edad mayor o igual a 18 responde true', () => {
    expect(esMayor(20)).toBe(true)
})

test('9. La funcion esMayor al ingresar una edad menos a 18 responde false', () => {
    expect(esMayor(5)).toBe(false)
})

test('10. La funcion areaTriangulo al ingresar una base de 10 y una altura de 5 responde 25', () => {
    expect(areaTriangulo(10,5)).toBe(25)
})