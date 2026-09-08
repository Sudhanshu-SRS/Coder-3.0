let user =[
    {
        id: 1,
        name: "Rahul",
        age: 22,
        active: true
    },
    {
        id: 2,
        name: "Amit",
        age: 17,
        active: false
    }
]


function activeuser(){
  let Auser=    user.filter((u)=>{
        return u.active===true
    })
   let NewUser=Auser.map((user)=>{
    const{name:displayName,...rest}=user
    return {displayName,...rest}
   })

   return NewUser
}

console.log(activeuser());