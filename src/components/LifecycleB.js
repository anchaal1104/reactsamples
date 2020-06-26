import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Anchaal'
        }
        console.log('LifecycleB constructor')
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }
    componentDidMount()
    {
        console.log('componentDidMound LifecycleB')
    }
    shouldComponentUpdate()
    {
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState)
     {
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
        
    }
  componentDidUpdate()
  {
      console.log('LifecycleB componentDidUpdate')
  }
    render() {
      
            console.log('LifecycleB rendered')
   return  <div>
                Lifecycle B
            </div>
             
    }
}

export default LifecycleB
