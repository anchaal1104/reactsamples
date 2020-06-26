import React from 'react'
import Person from './Person'
function NameList() {
    const names = ['Bruce','Clark','Diana']
    const person = [
        {
            id:1,
            name:'Bruce',
            age:30,
            skill:'React'
        },
        {
            id:2,
            name:'Clark',
            age:30,
            skill:'Angular'
        },
        {
        id:3,
        name:'Diana',
        age:30,
        skill:'Django'
        },
      ]
    // const personList = person.map(person => <Person key = {person.id} person={person}/>)
    //     return <div>{personList}</div>
    const nameList = names.map((name,index) => <h2 key = {index}>{index}{name}</h2>)
    return <div>{nameList}</div>
    
}          

export default NameList
