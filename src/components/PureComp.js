import React, { PureComponent } from 'react'

 class PureComp extends PureComponent {
    render() {
        console.log('Pure comp render')
        return (
            <div className = "App">
                 Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComp
