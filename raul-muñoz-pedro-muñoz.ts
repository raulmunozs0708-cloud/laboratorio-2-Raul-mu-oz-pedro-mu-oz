// Integrantes:
// Raul Alexander Muñoz Sosa 
// Pedro Amilcar Muñoz Portillo

// 1. Calcular el pago de horas extra
function calcularPagoHorasExtra(
    tarifaPorHora: number = 4,
    ...horasExtra: number[]
): number {
    if (horasExtra.length === 0) {
        return 0;
    }

    let totalHoras: number = 0;

    for (const horas of horasExtra) {
        totalHoras += horas;
    }

    return totalHoras * tarifaPorHora;
}


// 2. Calcular el salario bruto
function calcularSalarioBruto(
    salarioBase: number,
    pagoHorasExtra: number
): number {
    return salarioBase + pagoHorasExtra;
}


// 3. Función que determina el bono según la antigüedad
function determinarBono(antiguedad: number): number {
    if (antiguedad >= 3) {
        return 20;
    }

    return 0;
}


// 4. Función que recibe un callback tipado
function calcularBono(
    antiguedad: number,
    callbackBono: (antiguedad: number) => number
): number {
    return callbackBono(antiguedad);
}


// 5. Calcular salario neto con descuento opcional
function calcularSalarioNeto(
    salarioBruto: number,
    bono: number,
    descuento?: number
): number {
    if (descuento === undefined) {
        return salarioBruto + bono;
    }

    return salarioBruto + bono - descuento;
}


// 6. Función recursiva para calcular el total de la nómina
function calcularTotalNomina(salarios: number[]): number {
    // Caso base
    if (salarios.length === 0) {
        return 0;
    }

    // Avance recursivo
    return salarios[0] + calcularTotalNomina(salarios.slice(1));
}


// Datos de los empleados

const nombreAna: string = "Ana";
const salarioBaseAna: number = 450;
const antiguedadAna: number = 4;
const descuentoAna: number = 46.16;

const nombreLuis: string = "Luis";
const salarioBaseLuis: number = 550;
const antiguedadLuis: number = 1;
const descuentoLuis: number = 56.38;

const nombreMarta: string = "Marta";
const salarioBaseMarta: number = 480;
const antiguedadMarta: number = 5;
const descuentoMarta: number = 49.20;


// Cálculos de Ana

const pagoHorasAna: number = calcularPagoHorasExtra(4, 5, 2);
const salarioBrutoAna: number = calcularSalarioBruto(
    salarioBaseAna,
    pagoHorasAna
);
const bonoAna: number = calcularBono(
    antiguedadAna,
    determinarBono
);
const salarioNetoAna: number = calcularSalarioNeto(
    salarioBrutoAna,
    bonoAna,
    descuentoAna
);


// Cálculos de Luis

const pagoHorasLuis: number = calcularPagoHorasExtra();
const salarioBrutoLuis: number = calcularSalarioBruto(
    salarioBaseLuis,
    pagoHorasLuis
);
const bonoLuis: number = calcularBono(
    antiguedadLuis,
    determinarBono
);
const salarioNetoLuis: number = calcularSalarioNeto(
    salarioBrutoLuis,
    bonoLuis,
    descuentoLuis
);


// Cálculos de Marta

const pagoHorasMarta: number = calcularPagoHorasExtra(4, 2);
const salarioBrutoMarta: number = calcularSalarioBruto(
    salarioBaseMarta,
    pagoHorasMarta
);
const bonoMarta: number = calcularBono(
    antiguedadMarta,
    determinarBono
);
const salarioNetoMarta: number = calcularSalarioNeto(
    salarioBrutoMarta,
    bonoMarta,
    descuentoMarta
);


// Arreglo con los salarios netos
const salariosNetos: number[] = [
    salarioNetoAna,
    salarioNetoLuis,
    salarioNetoMarta
];


// Total de la nómina
const totalNomina: number = calcularTotalNomina(salariosNetos);


// Presentación de resultados

console.log("===== NÓMINA DE EMPLEADOS =====");

console.log(`Empleado: ${nombreAna}`);
console.log(`Salario neto: $${salarioNetoAna.toFixed(2)}`);
console.log("");

console.log(`Empleado: ${nombreLuis}`);
console.log(`Salario neto: $${salarioNetoLuis.toFixed(2)}`);
console.log("");

console.log(`Empleado: ${nombreMarta}`);
console.log(`Salario neto: $${salarioNetoMarta.toFixed(2)}`);
console.log("");

console.log(`Total de la nómina: $${totalNomina.toFixed(2)}`);


// Comprobaciones solicitadas

console.log("");
console.log("===== COMPROBACIONES =====");

// Empleado sin horas extra
console.log(
    `Luis - pago de horas extra: $${pagoHorasLuis.toFixed(2)}`
);

// Llamada sin descuento
const netoSinDescuento: number = calcularSalarioNeto(500, 20);
console.log(
    `Salario neto sin descuento: $${netoSinDescuento.toFixed(2)}`
);

// Arreglo vacío
const nominaVacia: number = calcularTotalNomina([]);
console.log(
    `Total de un arreglo vacío: $${nominaVacia.toFixed(2)}`
);