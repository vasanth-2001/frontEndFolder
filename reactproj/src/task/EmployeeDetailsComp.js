import React, {Component} from "react";

class EmpDetailsComp extends Component{

    constructor(props){
        super(props);

        this.state = {
            emp:[
                {empId:101,empName:"vasanth",empPost:"Full Stack Developer",empSal:300000,empContact:9360335010,empAddress:"Namakkal;"},
                {empId:102,empName:"Ajay",empPost:"Frontend Developer",empSal:300000,empContact:8860335010,empAddress:"Namakkal"},
                {empId:103,empName:"Nirmal",empPost:"Backend Developer",empSal:300000,empContact:7760335010,empAddress:"Ottawa"},
                {empId:104,empName:"Nithish",empPost:"Tester",empSal:300000,empContact:6660335010,empAddress:"London"},
                {empId:105,empName:"Vimal",empPost:"Full Stack Developer",empSal:300000,empContact:5560335010,empAddress:"Chennai"},
                {empId:106,empName:"Vekat",empPost:"Frontend Developer",empSal:300000,empContact:9087654321,empAddress:"Namakkal"},
                {empId:107,empName:"Kannan",empPost:"Frontend Developer",empSal:300000,empContact:8097654321,empAddress:"Salem"},
                {empId:108,empName:"Yogesh",empPost:"Backend Developer",empSal:300000,empContact:7890654321,empAddress:"Salem"},
                {empId:109,empName:"Sathish",empPost:"Tester",empSal:300000,empContact:6789054321,empAddress:"Dharmapuri"},
                {empId:110,empName:"Sanjay",empPost:"Full Stack Developer",empSal:300000,empContact:5678904321,empAddress:"Karur"},
            
            ]


        }
    }

    render(){
         const {emp}=this.state;
        return (
            <div>
                <h2> This is Employee Class Component</h2>
                <table className="table table-bordered table-striped table-hover table-info" >
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Post</th>
                        <th>Salary</th>
                        <th>Contact</th>
                        <th>Address</th>
                    </tr>

                    {
                        emp.length > 0 && emp.map((val,index)=>{
                            return <tr>
                                <td key={val.empId}>{val.empId}</td>
                                <td key={val.empId}>{val.empName}</td>
                                <td key={val.empId}>{val.empPost}</td>
                                <td key={val.empId}>{val.empSal}</td>
                                <td key={val.empId}>{val.empContact}</td>
                                <td key={val.empId}>{val.empAddress}</td>
                            </tr>
                        })
                    }
                </table>
                
            </div>
        )
    }
}

export default EmpDetailsComp;