let students = [
    {name: "rahul", marks: [78, 85, 92, 66]},
    {name: "priya", marks: [88, 76, 95, 81]},
    {name: "aman", marks: [45, 62, 71, 58]},
    {name: "neha", marks: [91, 89, 94, 96]},
    {name: "rohit", marks: [55, 48, 67, 72]},
    {name: "pooja", marks: [73, 81, 69, 77]},
    {name: "vikas", marks: [32, 44, 51, 39]},
    {name: "anjali", marks: [84, 93, 79, 88]}
]

function GetAvg(mark){
    let total=mark.reduce((val,a)=>{
        return val=val+a
    },0)
    
    return total/mark.length
}

function division(avg){
    if(avg>90) return "A division"
    else if(avg>80) return "b Division"
    else if(avg>70) return "C Division"
    else if(avg>60) return "D Division"
    else return "Y"
}

students.forEach((e)=>{
    let avg=GetAvg(e.marks)
     

    console.log(`${e.name}  you got ${avg}% ${division(avg)}`)})