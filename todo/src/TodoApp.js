
import React,{Component} from 'react';

export default class TodoApp extends Component{
    constructor(props){
        super(props);
        this.state={
            items:["Item #1","Item #2","Item #3","Item #4"]
        };
    }
    render(){
        return(
        <div className="container">
            <br/>
            <div className="row">
                <div className="col-md-6">
                    List Undone
                    <ul>
                        {this.state.items.map(item => <li>{item}</li>)}
                    </ul>
                </div>
                <div className="col-md-6">
                    List Done
                   
                </div>
            </div>
        </div>);
    }
}