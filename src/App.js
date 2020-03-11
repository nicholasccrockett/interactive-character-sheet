import React from 'react';
import './App.css';
import './PH.json';
import WeaponsList from './components/WeaponsList.js';
import StatNSkillBox from "./components/StatNSkillBox";
import FeaturesBox from "./components/FeaturesBox";
import EquipmentInventory from "./components/EquipmentInventory";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handbook = require("./PH.json");
    this.data = require("./Characters.json");
    this.selected = this.data.Characters[0];
    //set state value based off of incoming character. Assumes the use of the first character.
    this.state = {
      sel:0,
      character : this.selected,
      profMod : this.calcProf(this.selected.pcLevel, this.selected.scLevel),
      str: this.selected.baseStats.STR + this.selected.baseStatModifiers.STR,
      dex : this.selected.baseStats.DEX + this.selected.baseStatModifiers.DEX,
      con : this.selected.baseStats.CON + this.selected.baseStatModifiers.CON,
      wis : this.selected.baseStats.WIS + this.selected.baseStatModifiers.WIS,
      int : this.selected.baseStats.INT + this.selected.baseStatModifiers.INT,
      cha : this.selected.baseStats.CHA + this.selected.baseStatModifiers.CHA,
      strMod : this.getMod(this.selected.baseStats.STR + this.selected.baseStatModifiers.STR),
      dexMod : this.getMod(this.selected.baseStats.DEX + this.selected.baseStatModifiers.DEX),
      conMod : this.getMod(this.selected.baseStats.CON + this.selected.baseStatModifiers.CON),
      intMod : this.getMod(this.selected.baseStats.INT + this.selected.baseStatModifiers.INT),
      wisMod : this.getMod(this.selected.baseStats.WIS + this.selected.baseStatModifiers.WIS),
      chaMod : this.getMod(this.selected.baseStats.CHA + this.selected.baseStatModifiers.CHA),
      stats : {
        profMod : this.calcProf(this.selected.pcLevel, this.selected.scLevel),
        str: this.selected.baseStats.STR + this.selected.baseStatModifiers.STR,
        dex : this.selected.baseStats.DEX + this.selected.baseStatModifiers.DEX,
        con : this.selected.baseStats.CON + this.selected.baseStatModifiers.CON,
        wis : this.selected.baseStats.WIS + this.selected.baseStatModifiers.WIS,
        int : this.selected.baseStats.INT + this.selected.baseStatModifiers.INT,
        cha : this.selected.baseStats.CHA + this.selected.baseStatModifiers.CHA,
        strMod : this.getMod(this.selected.baseStats.STR + this.selected.baseStatModifiers.STR),
        dexMod : this.getMod(this.selected.baseStats.DEX + this.selected.baseStatModifiers.DEX),
        conMod : this.getMod(this.selected.baseStats.CON + this.selected.baseStatModifiers.CON),
        intMod : this.getMod(this.selected.baseStats.INT + this.selected.baseStatModifiers.INT),
        wisMod : this.getMod(this.selected.baseStats.WIS + this.selected.baseStatModifiers.WIS),
        chaMod : this.getMod(this.selected.baseStats.CHA + this.selected.baseStatModifiers.CHA),
      }
    };
    console.log(this.state.character);
  }

  //calculates overall level and return the correct proficiency modifier.
  calcProf(prim, sec){
    let tot = prim + sec;
    if(tot<5)
      return(+2);
    else if(tot<9)
      return(+3);
    else if(tot<12)
      return(+4);
    else if(tot<17)
      return(+5);
    else return(+6);
  }

  // displays the class info. Only displays one class if there is only only class.(App only supports 2 classes currently.
  classes () {
    if (this.state.character.scLevel !== 0) {
      return (
        <div>
          <h3>{this.state.character.class} {this.state.character.pcLevel}</h3>
          <h3>{this.state.character.sClass} {this.state.character.scLevel}</h3>
        </div>
      )
    } else {
      return (
        <div>
          <h3>{this.state.character.class} {this.state.character.pcLevel}</h3>
        </div>
      )
    }
  }

  // getMod method retrieves the value for which a modifier would be given a certain statistic.
  getMod(score){
    if(score<2)
      return(-5);
    else if(score<4)
      return(-4);
    else if(score<6)
      return(-3)
    else if(score<8)
      return(-2);
    else if(score<10)
      return(-1);
    else if(score<12)
      return(0);
    else if(score<14)
      return(1)
    else if(score<16)
      return(2);
    else if(score<18)
      return(3);
    else if(score<20)
      return(4);
    else if(score<22)
      return(5)
    else if(score<24)
      return(6);
    else if(score<26)
      return(7);
    else if(score<28)
      return(8);
    else if(score<30)
      return(9);
    else return(10);
  }

  //adds + to a non-negative number for the purpose of displaying that it is a modifier.
  modStr(num){
    if(num>-1) return ("+" + num);
    else return(num);
  }

  // stats method is used to organize and render the left-side stats and skills box information.
  stats(){
    return(
      <div className="stats">
        <div className="statBlock1">
          <p1>{this.modStr(this.state.profMod)}</p1>
          <h3>PROFICIENCY BONUS</h3>
        </div>
        <div className="statBlock1">
          <p1>{this.state.character.inspiration}</p1>
          <h3>INSPIRATION</h3>
        </div>
        <div className="statBlock2">
          <div className="statNums">
            <h3>STRENGTH</h3>
            <p2 className="score">{this.state.str}</p2>
            <p1 className="modifier">{this.modStr(this.state.strMod)}</p1>
          </div>
          <div className="skillNums">
            <p3>{this.modStr(this.state.strMod + (this.state.character.proficiencies.STR * this.state.profMod))} SAVING THROWS</p3>
            <p3>{this.modStr(this.state.strMod + (this.state.character.skills.athletics * this.state.profMod))} ATHLETICS</p3>
          </div>
        </div>
        <div className="statBlock2">
          <div className="statNums">
            <h3>DEXTERITY</h3>
            <p2>{this.state.dex}</p2>
            <p1 className="modifier">{this.modStr(this.state.dexMod)}</p1>
          </div>
          <div className="skillNums">
            <p3>{this.modStr(this.state.dexMod + (this.state.character.proficiencies.DEX * this.state.profMod))} SAVING THROWS</p3>
            <p3>{this.modStr(this.state.dexMod + (this.state.character.skills.acrobatics * this.state.profMod))} ACROBATICS</p3>
            <p3>{this.modStr(this.state.dexMod + (this.state.character.skills.sleight * this.state.profMod))} SLEIGHT OF HAND</p3>
            <p3>{this.modStr(this.state.dexMod + (this.state.character.skills.stealth * this.state.profMod))} STEALTH</p3>
          </div>
        </div>
        <div className="statBlock2">
          <div className="statNums">
            <h3>CONSTITUTION</h3>
            <p2>{this.state.con}</p2>
            <p1 className="modifier">{this.modStr(this.state.conMod)}</p1>
          </div>
          <div className="skillNums">
            <p3>{this.modStr(this.state.conMod + (this.state.character.proficiencies.CON * this.state.profMod))} SAVING THROWS</p3>
          </div>
        </div>
        <div className="statBlock2">
          <div className="statNums">
            <h3>INTELLIGENCE</h3>
            <p2>{this.state.int}</p2>
            <p1 className="modifier">{this.modStr(this.state.intMod)}</p1>
          </div>
          <div className="skillNums">
            <p3>{this.modStr(this.state.intMod + (this.state.character.proficiencies.INT * this.state.profMod))} SAVING THROWS</p3>
            <p3>{this.modStr(this.state.intMod + (this.state.character.skills.arcana * this.state.profMod))} ARCANA</p3>
            <p3>{this.modStr(this.state.intMod + (this.state.character.skills.history * this.state.profMod))} HISTORY</p3>
            <p3>{this.modStr(this.state.intMod + (this.state.character.skills.investigation * this.state.profMod))} INVESTIGATION</p3>
            <p3>{this.modStr(this.state.intMod + (this.state.character.skills.nature * this.state.profMod))} NATURE</p3>
            <p3>{this.modStr(this.state.intMod + (this.state.character.skills.religion * this.state.profMod))} RELIGION</p3>
          </div>
        </div>
        <div className="statBlock2">
          <div className="statNums">
            <h3>WISDOM</h3>
            <p2>{this.state.wis}</p2>
            <p1 className="modifier">{this.modStr(this.state.wisMod)}</p1>
          </div>
          <div className="skillNums">
            <p3>{this.modStr(this.state.wisMod + (this.state.character.proficiencies.WIS * this.state.profMod))} SAVING THROWS</p3>
            <p3>{this.modStr(this.state.wisMod + (this.state.character.skills.animalHandling * this.state.profMod))} ANIMAL HANDLING</p3>
            <p3>{this.modStr(this.state.wisMod + (this.state.character.skills.insight * this.state.profMod))} MEDICINE</p3>
            <p3>{this.modStr(this.state.wisMod + (this.state.character.skills.perception * this.state.profMod))} PERCEPTION</p3>
            <p3>{this.modStr(this.state.wisMod + (this.state.character.skills.survival * this.state.profMod))} SURVIVAL</p3>
          </div>
        </div>
        <div className="statBlock2">
          <div className="statNums">
            <h3>CHARISMA</h3>
            <p2>{this.state.cha}</p2>
            <p1 className="modifier">{this.modStr(this.state.chaMod)}</p1>
          </div>
          <div className="skillNums">
            <p3>{this.modStr(this.state.chaMod + (this.state.character.proficiencies.CHA * this.state.profMod))} SAVING THROWS</p3>
            <p3>{this.modStr(this.state.chaMod + (this.state.character.skills.deception * this.state.profMod))} DECEPTION</p3>
            <p3>{this.modStr(this.state.chaMod + (this.state.character.skills.intimidation * this.state.profMod))} INTIMIDATION</p3>
            <p3>{this.modStr(this.state.chaMod + (this.state.character.skills.performance * this.state.profMod))} PERFORMANCE</p3>
            <p3>{this.modStr(this.state.chaMod + (this.state.character.skills.persuasion * this.state.profMod))} PERSUASION</p3>
          </div>
        </div>
        <div className="statBlock1">
          <p1>{10 + this.state.wisMod}</p1>
          <h3> Passive Perception</h3>
        </div>
      </div>
    )
  }

  totalHitDie(){
    let hd = "";
    for(let i = 0; i<this.state.character.hitDice.length; i++){
      hd += this.state.character.hitDice[i].total + this.state.character.hitDice[i].dice;
    }
    return hd;
  }

  hitDieCalc(){
    let hd = "";
    for(let i = 0; i<this.state.character.hitDice.length; i++){
      let k = this.state.character.hitDice[i].total; //- this.state.character.hitDice[i].used;
      k -=this.state.character.hitDice[i].used;
      hd+=k + this.state.character.hitDice[i].dice;
    }
    return hd;
  }
  // status area is for health and defense stats
  status(){
    return(
      <div className="statusBox">
        <div className="statusHead">
          <div className="armorClass">
            <p1>{this.state.dexMod + 10}</p1>
            <h3>ARMOR CLASS</h3>
          </div>
          <div className="statBox">
            <p1>{this.modStr(this.state.dexMod)}</p1>
            <h3>INITIATIVE</h3>
          </div>
          <div className="statBox">
            <p1>{this.state.character.speed}</p1>
            <h3>SPEED</h3>
          </div>
        </div>
        <div className="statBoxWide">
          <h4>HIT POINT MAXIMUM {this.state.character.HPMax}</h4>
          <p1>{this.state.character.currentHP}</p1>
          <h3>CURRENT HIT POINTS</h3>
        </div>
        <div className="statBoxWide">
          <p1>{this.state.character.tempHP}</p1>
          <h3>TEMPORARY HIT POINTS</h3>
        </div>
        <div className="statFooter">
          <div className="statBoxHalfWide">
            <h4>Total {this.totalHitDie()}</h4>
            <p1>{this.hitDieCalc()}</p1>
            <h3>Hit Dice</h3>
          </div>
          <div className="statBoxHalfWide">
            <p3>Successes</p3>
            <p3>Failures</p3>
            <h3>DeathSaves</h3>
          </div>
        </div>
      </div>
    )
  }

  weaponItem(props){
    const val = props.val;
    return <li>{props.val}</li>
  }

  weaponList(eqArr){;
    const listItem = eqArr.map((eqArr) =>
      {this.weaponItem(eqArr.toString(), eqArr)}
    );

    return (
      <ul>
        {listItem}
      </ul>
    );
  }

  calcSaves(){

  }

  render() {
    return (
      <div className="App">
        <header>Welcome to the Interactive Character Sheet</header>
        <div className="Selection">
        </div>
        <div className="Meta">
          <div className="charName">
            <h1>{this.state.character.charName}</h1>
          </div>
          <div className="otherMeta">
            {this.classes()}
            <h3>{this.state.character.background}</h3>
            <h3>{this.state.character.playerName}</h3>
            <h3>{this.state.character.race}</h3>
            <h3>{this.state.character.alignment}</h3>
            <h3>{this.state.character.experiencePoints}</h3>
          </div>
        </div>
        <div className="page1">
          <div className="col.">
            {this.stats()}
            <StatNSkillBox stats={this.state.stats} profs={this.state.character.proficiencies}/>
            <div className="otherProficiencies">
              {this.state.character.otherProficiencies}
              {this.state.character.languages}
              <h3>OTHER PROFICIENCIES & LANGUAGES</h3>
            </div>
          </div>
          <div className="col">
            {this.status()}
            <div className="AttackAndSpellcasting">
              <div className="boxHeader"><h4>NAME</h4><h4>ATK BONUS</h4><h4>DAMAGE/TYPE</h4></div>
              <WeaponsList equipment={this.state.character.equipment} stats={this.state.stats} modStr={this.modStr}/>
            </div>
            <EquipmentInventory eq={this.state.character.equipment}/>
          </div>
          <div className="col">
            <div className="bioBox">
              <p>{this.state.character.personalityTraits}</p>
              <p>{this.state.character.ideals}</p>
              <p>{this.state.character.bonds}</p>
              <p>{this.state.character.flaws}</p>
            </div>
            <FeaturesBox Features={this.state.character.featuresAndTraits}/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
