
import React,{Component} from 'react';

export default class TodoApp extends Component{
    render(){
        return(
        <div className="container">
            <br/>
            <div className="row">
                <div className="col-md-6">
                    List Undone
                    <ul>
                        <li>Item #1</li>
                        <li>Item #2</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    List Done
                    <li>Item #1</li>
                    <li>Item #2</li>
                    <li>Item #3</li>
                </div>
            </div>
        </div>);
    }
}