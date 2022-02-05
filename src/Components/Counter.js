//import cx from 'classname';
import { Component } from 'react';

export default class Counter extends Component{
constructor(props) {
    super(props);
    this.state = {
        count: 42 
    } 
}
increment=()=>{
    this.setState({
        count:this.state.count+1
    })
}
    render(){
        return(
            <>
                <div>
                    <h2 className='counter'>
                        {this.state.count}
                    </h2>
                </div>
                <div>
                    <button className='counter-button' 
                            onClick={this.increment}
                    >
                        Click
                    </button>
                </div>
            </>
        )
    }
}
