import React from "react";
import Hello from './Hello';

const names = ["Carlo", "Maria", "Antonio", "Elisa"]
const surnames = ["Rossi", "Bianchi", "Verdi", "Marrone"]

const peoples = [
    {name: "Carlo", surname: "Rossi", id: 1},
    {name: "Maria", surname: "Bianchi", id: 2},
 

]

class HelloContainer extends React.Component {
    

    render(){
        return(
            <>
                {peoples.map((people) => (
                    <Hello key={people.id} name={people.name} surname={people.surname}></Hello>
                ) )}
            </>
        )
    }
}

export default HelloContainer;