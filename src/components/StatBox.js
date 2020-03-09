import React from 'react';

class StatBox extends React.Component {
  constructor(props){
    super(props);
    this.skills={
      str: ["ATHLETICS"],
      dex: ["ACROBATICS", "SLEIGHT OF HAND","STEALTH"],
      int: ["ARCANA", "HISTORY", "INVESTIGATION","NATURE","RELIGION"],
      wis: ["ANIMAL HANDLING", "INSIGHT", "MEDICINE", "PERCEPTION", "SURVIVAL"],
      cha: ["DECEPTION", "INTIMIDATION", "PERFORMANCE", "PERSUASION"]
    };
  }

  render(){
    return(
      <div className="stat">
        <div className="statBlock">
          <p2>{this.props.stat}</p2>
          <p1>{this.props.statMod}</p1>
          <h3>{this.props.statName}</h3>
        </div>
      </div>
    )
  }
}
function SkillList(props) {
  const skills = props.skills;
  if(props.stat)

  return(
    <ul>
      <li> SAVING THROWS</li>
      {skills.map((skill)=> <SkillItem key={SkillItem.name} value={SkillItem}/>)}
    </ul>
  )
}
function SkillItem(props) {
  return(
    <li>{this.props.value.num} {this.props.value.name}</li>
  )
}


export default StatBox;
