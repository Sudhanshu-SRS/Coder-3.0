let Studentgradesystem={
     students:[],
     addStudent(name,...marks){
        let existingS=this.students.find((student)=>student.name===name)
        if(existingS) return "student already exist"
        this.students.push({id:this.students.length+1,name:name,marks:marks})
        return "Student Added"
     },
     addMarks(id,...marks){
        let student=this.students.find((student)=>student.id===id)
        if(student){
            student.marks=marks
            this.studentAverage(student.id)
            return "marks Added"
        }
        return "Student Not found"
     },
    studentAverage(id){
          let student=this.students.find((student)=>student.id===id)
        if(student){
            let average=student.marks
            let averagep=average.reduce((acc,val)=>acc+val
            ,0)/average.length
           student.average=averagep
            return "Average calculated"
    }
    return "Student Not found"
},

sTopper(){
 let topper= this.students.reduce((acc,cstude)=>{
   
   if(cstude.average>acc.average){
      return cstude
   }
   return acc


  })
  return topper
},

spassed(){
 return  this.students.filter(s => {
   let passed= s.average>=50
   return passed
 });
 

},

Ssupliedaverga(sa){
   return this.students.filter((s)=>s.average>sa)
}

}

// ===============================
// TEST DATA
// ===============================

console.log("------ ADD STUDENTS ------");

console.log(
    Studentgradesystem.addStudent("Rahul", 80, 70, 90)
);

console.log(
    Studentgradesystem.addStudent("Amit", 95, 92, 96)
);

console.log(
    Studentgradesystem.addStudent("Priya", 75, 82, 78)
);

console.log(
    Studentgradesystem.addStudent("Neha", 35, 45, 40)
);


// ===============================
// CHECK ALL STUDENTS
// ===============================

console.log("------ ALL STUDENTS ------");

console.log(Studentgradesystem.students);


// ===============================
// DUPLICATE STUDENT
// ===============================

console.log("------ DUPLICATE TEST ------");

console.log(
    Studentgradesystem.addStudent("Rahul", 90, 90, 90)
);


// ===============================
// ADD / UPDATE MARKS
// ===============================

console.log("------ ADD MARKS ------");

console.log(
    Studentgradesystem.addMarks(1, 85, 90, 95)
);

console.log(
    Studentgradesystem.addMarks(3, 90, 85, 95)
);


// ===============================
// INVALID STUDENT ID
// ===============================

console.log("------ INVALID ID TEST ------");

console.log(
    Studentgradesystem.addMarks(100, 90, 90, 90)
);


// ===============================
// CALCULATE AVERAGE
// ===============================

console.log("------ AVERAGES ------");

console.log(
    Studentgradesystem.studentAverage(1)
);

console.log(
    Studentgradesystem.studentAverage(2)
);

console.log(
    Studentgradesystem.studentAverage(3)
);

console.log(
    Studentgradesystem.studentAverage(4)
);


// ===============================
// INVALID AVERAGE ID
// ===============================

console.log("------ INVALID AVERAGE ID ------");

console.log(
    Studentgradesystem.studentAverage(100)
);


// ===============================
// CHECK STUDENTS AFTER AVERAGES
// ===============================

console.log("------ STUDENTS WITH AVERAGES ------");

console.log(Studentgradesystem.students);


// ===============================
// TOPPER
// ===============================

console.log("------ TOPPER ------");

console.log(
    Studentgradesystem.sTopper()
);


// ===============================
// PASSED STUDENTS
// ===============================

console.log("------ PASSED STUDENTS ------");

console.log(
    Studentgradesystem.spassed()
);


// ===============================
// STUDENTS ABOVE 80
// ===============================

console.log("------ ABOVE 80 ------");

console.log(
    Studentgradesystem.Ssupliedaverga(80)
);


// ===============================
// STUDENTS ABOVE 90
// ===============================

console.log("------ ABOVE 90 ------");

console.log(
    Studentgradesystem.Ssupliedaverga(90)
);