import React,{Component}from 'react';
import StudServices  from '../Services/StudServices';
import ViewAllComponent from '../component/ViewAllComponent';

export class FormComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            dob:'',
            cls:'',
            division:'',
            gender:'',
           
          
        }
        this.handlesnamechange = this.handlesnamechange.bind(this);
        this.handlesdobchange = this.handlesdobchange.bind(this);
        this.handlesclasschange = this.handlesclasschange.bind(this);
        this.handlesdivchange=this.handlesdivchange.bind(this);
        this.handlesgenschange=this.handlesgenschange.bind(this);


    }
    
    
    
    handlesnamechange=(event) =>{
        this.setState({
            name:event.target.value
            
            
        })
        
    }
    handlesdobchange=(event)=>{
        this.setState({
            dob:event.target.value
        })
    }
    handlesclasschange=(event)=>{
        this.setState({
            cls:event.target.value
        })
    }
    handlesdivchange=(event)=>{
        this.setState({
            division:event.target.value
        })
    }
    handlesgenschange=(event)=>{
        this.setState({
            gender:event.target.value
        })
    }
    handlesubmit=(event)=>{

        let Student ={
            name:this.state.name,
            dob:this.state.dob,
            cls:this.state.cls,
            division:this.state.division,
            gender:this.state.gender
        }   
        console.log(JSON.stringify(Student));
        StudServices.saveall(Student).then(response=>{
            console.log(response);
        
        });
    window.location.reload(false);
        
    }
    render(){
        return(
        <div class="row">
            <div class="col-sm-6 " >
                 <h1>Registration Form</h1>
                <form >
                       <div class="form-group">
                            <label>StudentName</label>
                            <input type="text" class="form-control" placeholder="enter your name" value={this.state.name} onChange={this.handlesnamechange}></input>
                        </div>
                        <div class="form-group">
                            <label>DOB</label>
                            <input type="date" class="form-control" placeholder="enter your dob" value={this.state.dob} onChange={this.handlesdobchange}></input>
                        </div>
                        <div  >
                            <label>Class</label>
                            <select checked={this.state.cls} onChange={this.handlesclasschange} class="form-select" >
                                <option >Select Class</option>
                                <option value="I">I</option>
                                <option value="II">II</option>
                                <option value="III">III</option>
                                <option value="IV">IV</option>
                                <option value="V">V</option>
                                <option value="VI">VI</option>
                                <option value="VII">VII</option>
                                <option value="IX">IX</option>
                                <option value="X">X</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Division</label>
                            <select checked={this.state.division} onChange={this.handlesdivchange} class="form-select">
                                <option>Select division</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Gender</label><br/><br/>
                            <input type="radio" name="gender" class="form-check-input" value="Female" checked={this.state.gender==="Female"} onChange={this.handlesgenschange}></input>Female
                            <input type="radio" name="gender" class="form-check-input"  value="male" checked={this.state.gender==="male"} onChange={this.handlesgenschange}></input>Male
                            <input type="radio" name="gender" class="form-check-input"  value="others" checked={this.state.gender==="others"} onChange={this.handlesgenschange}></input>Others
                        </div><br/>
                            <div class="form-group">
                            <input type="button" class="btn btn-success" value="register" onClick={this.handlesubmit}></input></div>
                </form>
                  
            </div>
            <div  class="col-sm-6" >
                       <ViewAllComponent/> 
            </div> 
                   
                   
        </div>
                   
                
                
            
        )
    }
}

export default FormComponent;