import React from 'react'

function Columns() {
    const items=[]

    return (
        <React.Fragment>
            {/* <> */}
            {/* {
                items.map(iems => (
                    <React.Fragment key ={items.id}>>
                    <h1>Title</h1>
                    <p>{items.title}</p>
                    </React.Fragment>
                ))
            } */}
            <td>Name</td>
            <td>Anchaal</td>
            {/* </> */}
        </React.Fragment>
    )
}

export default Columns
