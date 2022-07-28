export type Level = {
    title:string,
    color:string,
    icon:'down'| 'up';
    imc:number[],
    yourImc?:number;

}

export const levels:Level[] =[

    {title: 'Magreza', color: '#96A3AB', icon:'down', imc: [0, 18.5]},
    {title: 'Normal', color: '#0EAD69', icon: 'up', imc:[18.6, 24.9]},
    {title: 'Sobrepeso', color: '#E2B039', icon:'down', imc: [25,30]},
    {title: 'Obesidade grau 1', color: '#ff0101', icon: 'down',imc: [30.1, 34]},
    {title: 'Obesidade grau 2', color: '#b40001', icon: 'down',imc: [35.0, 39.9]},
    {title: 'Obesidade grau 3', color: '#640000', icon: 'down',imc: [40.0, 99.9]}

];

export const calculateImc = (height:number, weight:number) => {
    const imc = weight / (height * height);

    for( let i in levels) {
        if(imc >= levels[i].imc[0] && imc < levels[i].imc[1] ) {
            let levelCopy:Level = {...levels[i]}

            levelCopy.yourImc = parseFloat(imc.toFixed(2));
            return levelCopy;
        }
    }
    return null;
}