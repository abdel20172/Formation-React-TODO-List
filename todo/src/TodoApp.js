
import React,{Component} from 'react';
import './Todo.css';

export default class TodoApp extends Component{
    constructor(props){
        super(props);
        this.state={
            items:[
                {text:"Item #1",done:false,key:new Date().getMilliseconds() + " " + "Item #1"},
                {text:"Item #2",done:false,key:new Date().getMilliseconds() + " " + "Item #2"},
                {text:"Item #3",done:false,key:new Date().getMilliseconds() + " " + "Item #3"},
                {text:"Item #4",done:false,key:new Date().getMilliseconds() + " " + "Item #4"}
            ],
            input:""
        };
    }
    // les evenements
    move = (key) => {
        let filtred = this.state.items.map(item => {
            if(item.key == key){
                item.done = !item.done;
            }
            return item;
            
        });
        this.setState({items : filtred});
    };

    add = () => {
        console.log(this.state.input);
        let newItem = {text:this.state.input,done:false,key:new Date().getMilliseconds() + " " + this.state.input};
         this.setState((state) => ({
            //  items : state.items.concat(newItem)
             //et si on veut inverser la syntaxe est la suivante
             items: [newItem].concat(this.state.items)
         }));

        // console.log("ligne 36 "+ this.state.items)
        // this.state.items.unshift(newItem);
        // console.log("ligne 38 "+ this.state.items)
    };

    handleChange = (e) => {
        // console.log(e.target.value);
        this.setState({input: e.target.value});
    };

    getUndone = () => {
        let undone = this.state.items.filter(item => {
            return !item.done;
        });
        if(!undone.length)
            return;
        
        return undone.length;
    };

    delet= (key) => {

        let filtred = this.state.items.filter(item => {
            return item.key != key;
        });
        this.setState({items : filtred});

    };
    render(){
        return(
            <div>
            <nav class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">Todo App</span>
            </nav>
        <div className="container">
            <br/>
            <div className="row">
                <div className="col-md-6">
                    <div className="todolist ">
                   
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        this.add()}} >
                        <input placeholder="add todo" 
                        className="form-control form-control-lg"
                        value={this.state.input} onChange={(e) => this.handleChange(e)}/>
                    </form>
                    <br/>
                    <ul className="no-padding" id="not-done">
                        {this.state.items.map(item => {
                            if (!item.done) {
                                return( <li className="list-unstyled" key={item.key} >
                                    <label onClick={() => this.move(item.key)}>{item.text}</label>
                                    </li>);
                            }
                        })}
                    </ul>
                    <div className="todo-footer">
                        <span>{this.getUndone()}</span> Items Left
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                <div className="todolist">
                    
                    <ul id="done-items">
                        {this.state.items.map(item => {
                            if (item.done) {
                                return <li className="list-unstyled" key={item.key} >
                                    <label onClick={() => this.move(item.key)}>{item.text}</label>
                                    <button className="btn float-right paddingzero" onClick={e => this.delet(item.key)}> <i class="fas fa-trash"></i></button>
                                   
                                </li>
                            }
                        })}
                    </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>);
    }
}