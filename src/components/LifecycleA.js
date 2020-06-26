import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Anchaal'
        }
        console.log('Lifecycle A constructor')
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log('Lifecycle A getDerivedStateFromProps')
        return null
    }
    componentDidMount()
    {
        console.log('componentDidMound Lifecycle A')
    }
     shouldComponentUpdate()
     {
         console.log('LifecycleA shouldComponentUpdate')
         return true
     }

     getSnapshotBeforeUpdate(prevProps,prevState)
      {
         console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
        }
   componentDidUpdate()
   {
       console.log('LifecycleA componentDidUpdate')
   }
   changeState = () =>
   {
this.setState({
    name:'Codevolution'
})
   }
     render() {
      
            console.log('Lifecycle A rendered')
   return ( 
   <div>
       <div>
                LifecycleA
            </div>
            <button onClick={this.changeState}>Change state</button>
            <LifecycleB/></div>
          )  
    }
}

export default LifecycleA
