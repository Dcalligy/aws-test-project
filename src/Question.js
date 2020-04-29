import React, { Component } from 'react';
//import Checkbox from './Checkbox';
//import axios from "axios";
//const config = require('config.json');

const OPTIONS = ["Mornings", "Evenings", "Afternoon", 
"Project 1", "Project 2", "Project 3", "Project 4", "Project 5", "Project 6",
"Programming", "Web Design", "Mechanical Engineering", "Network design and Security", "Databases", "Computer Engineering"
];
export default class CheckBoxContainer extends Component {

    state = {
        newresponse: {
            checkboxes: OPTIONS.reduce(
              (options, option) => ({
                ...options,
                [option]: false
              }),
            {}
            )
        },
        responses: []
    };
    handleAddResponse = async (id, event) => {
        event.preventDefault();
        // add call to AWS API Gateway add product endpoint here
        try{
            const params = {
                "id": id,
                "AvailableAfternoon": this.state.newresponse.AvailableAfterNoon,
                "AvailableEvenings": this.state.newresponse.AvailableEvenings,
                "AvailableMornings": this.state.newresponse.AvailableMornings,
                "Project 1": this.state.newresponse["Project 1"],
                "Project 2": this.state.newresponse["Project 2"],
                "Project 3": this.state.newresponse["Project 3"],
                "Project 4": this.state.newresponse["Project 4"],
                "Project 5": this.state.newresponse["Project 5"],
                "Project 6": this.state.newresponse["Project 6"],
                "SkillCompEngineering": this.state.newresponse.SkillCompEngineering,
                "SkillDatabase": this.state.newresponse.SkillDatabase,
                "SkillMechEngineering": this.state.newresponse.SkillMechEngineering,
                "SkillNetworkDesign": this.state.newresponse.SkillNetworkDesign,
                "SkillProgramming": this.state.newresponse.SkillProgramming,
                "SkillWebDesign": this.state.newresponse.SkillWebdesign
            };
            //await axios.post(`${config.api.invokeUrl}/groups/${id}`, params);
            this.setState({ responses: [...this.state.responses, this.state.newresponse] });
            this.setState({ newresponse: {
                "AvailableAfterNoon": "",
                "AvailableEvenings": "",
                "AvailableMornings": "",
                "Project 1": "",
                "Project 2": "",
                "Project 3": "",
                "Project 4": "",
                "Project 5": "",
                "Project 6": "",
                "SkillCompEngineering": "",
                "SkillDatabase": "",
                "SkillMechEngineering": "",
                "SkillNetworkDesign": "",
                "SkillProgramming": "",
                "SkillWebdesign": "",
                "id": ""
            }})
        }catch(err){
            console.log(`An error has occured: ${err}`);
        }
    }
  //  fetchAnswers = async () => {
        // add call to AWS Gateway to fetch products here
        // then set them in state
     //   try{
            //const res = await axios.get(`${config.api.invokeUrl}/groups`);
       //     const res = res.data;
         //   this.setState({ res: responses});
        //}catch(err){
          //  console.log(`An error has occured: ${err}`);
       // }
   // }

    onAddNewResponse = event => this.setState({ newresponse: { ...this.state.newresponse, 
        "AvailableAfterNoon": event.target.value,
        "AvailableEvenings": event.target.value,
        "AvailablerMornings": event.target.value,
        "Project 1": event.target.value,
        "Project 2": event.target.value,
        "Project 3": event.target.value,
        "Project 4": event.target.value,
        "Project 5": event.target.value,
        "Project 6": event.target.value,
        "SkillCompEngineering": event.target.value,
        "SkillDatabase": event.target.value,
        "SkillMechEngineering": event.target.value,
        "SkillDatase": event.target.value,
        "SkillProgramming": event.target.value,
        "SkillWebDesign": event.target.value,
        "id": ""
        
    } });
    handleCheckboxChange = changeEvent =>{
      const { name } = changeEvent.taget;
      this.setState(prevState => ({
        checkboxes:{
          ...prevState.checkboxes,
          [name]: !prevState.checkboxes[name]
        }
      }));
    }
    handleFormSubmit = formSubmitEvent => {
      formSubmitEvent.preventDefault();
      Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox =>{
        console.log(checkbox, "is selected.");
      });
    }
    createCheckbox = option =>(
      <Checkbox
        label={option}
        isSelected={this.state.checkboxes[option]}
        onCheckboxChange={this.handleCheckboxChange}
        key={option}
      />
    );
    createCheckboxes = () =>{
      OPTIONS.map(this.createCheckbox);
    }
    /*componentDidMount = () =>{
        this.fetchAnswers();
    }*/
    componentWillMount = ()=>{
      this.selectedCheckboxes = new Set();
    }
    render(){
        return(
                <article>
                <div className="container">
                  <h1>Questionaire</h1>
                </div>
                <div className="container">
                  <section className="section auth">
                    <form onSubmit={event => this.handleAddResponse(this.state.newresponse.id, event)  } >
                    <fieldset className="form-group">
                    <div className="row">
                    <legend className="col-form-label col-sm-2">Times available</legend>
                    <div className="col-sm-10">
                      <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox"
                            value="morning" 
                            /*onChange={this.onAddNewResponse}*/
                            id="morningCheckBox"   
                        />
                        <label className="form-check-label" htmlFor="morningCheckBox">
                          Mornings
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="afternoon" id="afternoonCheckBox"/>
                        <label className="form-check-label" htmlFor="afternoonCheckBox">
                          Afternoons
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="evening" id="eveningCheckBox"/>
                        <label className="form-check-label" htmlFor="eveningCheckBox">
                          Evenings
                        </label>
                      </div>
                    </div>
                  </div>
                      </fieldset>

                      <fieldset className="form-group">
                      <div className="row">
                    <legend className="col-form-label col-sm-2 pt-0">Preferred Projects</legend>
                    <div className="col-sm-10">
                      <div className="form-check">
                        <input 
                            className="form-check-input"
                            type="checkbox"
                            value="project1"
                            name="project1CheckBox"
                            id="project1CheckBox"
                        />
                        <label className="form-check-label" htmlFor="project1CheckBox">
                          Project 1
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="project2" name="project2CheckBox" id="project2CheckBox"/>
                        <label className="form-check-label" htmlFor="project2CheckBox">
                          Project 2
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="project3" name="project3CheckBox" id="project3CheckBox"/>
                        <label className="form-check-label" htmlFor="project3CheckBox">
                          Project 3
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="project4CheckBox" id="project4CheckBox"/>
                        <label className="form-check-label" htmlFor="project4CheckBox">
                          Project 4
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="project5" id="project5CheckBox"/>
                        <label className="form-check-label" htmlFor="project5CheckBox">
                          Project 5
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="project6CheckBox" id="project6CheckBox"/>
                        <label className="form-check-label" htmlFor="project6CheckBox">
                          Project 6
                        </label>
                      </div>
                    </div>
                  </div>
                      </fieldset>

                      <fieldset className="form-group">
                      <div className="row">
                    <legend className="col-form-label col-sm-2 pt-0">Skillset</legend>
                    <div className="col-sm-10">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="programming" name="programmingCheckBox" id="programmingCheckBox"/>
                        <label className="form-check-label" htmlFor="programmingCheckBox">
                          Programming
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="webdesign" name="webdesigncheckBox" id="webdesigncheckBox"/>
                        <label className="form-check-label" htmlFor="webdesigncheckBox">
                          Web Design
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="mechanicalengineering" name="mechanicalengineeringCheckBox" id="mechanicalengineeringCheckBox"/>
                        <label className="form-check-label" htmlFor="mechanicalengineeringCheckBox">
                          Mechanical Engineering
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="networking" name="networkingCheckBox" id="networkingCheckBox"/>
                        <label className="form-check-label" htmlFor="networkingCheckBox">
                          Network design and security
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="databases" name="databaseCheckBox" id="databaseCheckBox"/>
                        <label className="form-check-label" htmlFor="databaseCheckBox">
                          Databases
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="computerengineering" name="computerengineeringCheckbox" id="computerengineeringCheckBox"/>
                        <label className="form-check-label" htmlFor="computerengineeringCheckBox">
                          Computer Engineering
                        </label>
                      </div>
                    </div>
                  </div>
                      </fieldset>
                      <button type="submit" className="btn btn-custom">Submit</button>
                    </form>
                  </section>   
                </div>
              </article>
        )
    }
    
}
