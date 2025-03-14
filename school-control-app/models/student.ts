//este archivo es para definir la estructura que vamos a mandar a traer de la api

export interface Student {
    student_id: number;
    name:string;
    grade: number;
    group:  string;
    average: number;
}