const students = [
    { name: "Rahul", marks: 80 },
    { name: "Amit", marks: 45 },
    { name: "Priya", marks: 90 },
    { name: "Neha", marks: 55 }
];


function StudentNameFinder(student){

    let Sname=student.filter(student => {
        return student.marks>60
    }).map((student)=>{
        return student.name
    })

    return Sname

}


console.log(StudentNameFinder(students));