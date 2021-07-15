
import React,{Component} from 'react';

export default class TodoApp extends Component{
    constructor(props){
        super(props);
        this.state={
            items:[
                {text:"Item #1",done:false,key:new Date().getMilliseconds() + " " + "Item #1"},
                {text:"Item #2",done:false,key:new Date().getMilliseconds() + " " + "Item #2"},
                {text:"Item #3",done:false,key:new Date().getMilliseconds() + " " + "Item #3"},
                {text:"Item #4",done:false,key:new Date().getMilliseconds() + " " + "Item #4"}
            ]
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
                        {this.state.items.map(item => <li>{item.text}</li>)}
                    </ul>
                </div>
                <div className="col-md-6">
                    List Done
                   
                </div>
            </div>
        </div>);
    }
}