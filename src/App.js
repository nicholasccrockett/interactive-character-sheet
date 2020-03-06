import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.data = require("./Characters.json");
    this.selected = this.data.Characters[0];
    this.state = {
      sel:0,
      profMod : this.calcProf(this.selected.pcLevel, this.selected.scLevel),
      inspiration : this.selected.inspiration,
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
      HPMax : this.selected.HPMax,
      currentHP : this.selected.currentHP,
      tempHP : this.selected.tempHP,
      hitDice : this.selected.hitDice
    };
    console.log(this.selected);
  }

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
  classes () {
    if (this.selected.scLevel != 0) {
      return (
        <div>
          <h3>{this.selected.class} {this.selected.pcLevel}</h3>
          <h3>{this.selected.sClass} {this.selected.scLevel}</h3>
        </div>
      )
    } else {
      return (
        <div>
          <h3>{this.selected.class} {this.selected.pcLevel}</h3>
        </div>
      )
    }
  }

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

  modStr(num){
    if(num>-1) return ("+" + num);
    else return(num);
  }

  stats(){
    console.log("state:", this.state);
    return(
      <div className="stats">
        <div className="statBlock1">
          <p1>{this.modStr(this.state.profMod)}</p1>
          <h3>PROFICIENCY BONUS</h3>
        </div>
        <div className="statBlock1">
          <p1>{this.state.inspiration}</p1>
          <h3>INSPIRATION</h3>
        </div>
        <div className="statBlock2">
          <div className="statNums">
            <h3>STRENGTH</h3>
            <p2 className="score">{this.state.str}</p2>
            <p1 className="modifier">{this.modStr(this.state.strMod)}</p1>
          </div>
          <div className="skillNums">
            <p3>{this.modStr(this.state.strMod + (this.selected.proficiencies.STR * this.state.profMod))} SAVING THROWS</p3>
            <p3>{this.modStr(this.state.strMod + (this.selected.skills.athletics * this.state.profMod))} ATHLETICS</p3>
          </div>
        </div>
        <div className="statBlock2">
          <div className="statNums">
            <h3>DEXTERITY</h3>
            <p2>{this.state.dex}</p2>
            <p1 className="modifier">{this.modStr(this.state.dexMod)}</p1>
          </div>
          <div className="skillNums">
            <p3>{this.modStr(this.state.dexMod + (this.selected.proficiencies.DEX * this.state.profMod))} SAVING THROWS</p3>
            <p3>{this.modStr(this.state.dexMod + (this.selected.skills.acrobatics * this.state.profMod))} ACROBATICS</p3>
            <p3>{this.modStr(this.state.dexMod + (this.selected.skills.sleight * this.state.profMod))} SLEIGHT OF HAND</p3>
            <p3>{this.modStr(this.state.dexMod + (this.selected.skills.stealth * this.state.profMod))} STEALTH</p3>
          </div>
        </div>
        <div className="statBlock2">
          <div className="statNums">
            <h3>CONSTITUTION</h3>
            <p2>{this.state.con}</p2>
            <p1 className="modifier">{this.modStr(this.state.conMod)}</p1>
          </div>
          <div className="skillNums">
            <p3>{this.modStr(this.state.conMod + (this.selected.proficiencies.CON * this.state.profMod))} SAVING THROWS</p3>
          </div>
        </div>
        <div className="statBlock2">
          <div className="statNums">
            <h3>INTELLIGENCE</h3>
            <p2>{this.state.int}</p2>
            <p1 className="modifier">{this.modStr(this.state.intMod)}</p1>
          </div>
          <div className="skillNums">
            <p3>{this.modStr(this.state.intMod + (this.selected.proficiencies.INT * this.state.profMod))} SAVING THROWS</p3>
            <p3>{this.modStr(this.state.intMod + (this.selected.skills.arcana * this.state.profMod))} ARCANA</p3>
            <p3>{this.modStr(this.state.intMod + (this.selected.skills.history * this.state.profMod))} HISTORY</p3>
            <p3>{this.modStr(this.state.intMod + (this.selected.skills.investigation * this.state.profMod))} INVESTIGATION</p3>
            <p3>{this.modStr(this.state.intMod + (this.selected.skills.nature * this.state.profMod))} NATURE</p3>
            <p3>{this.modStr(this.state.intMod + (this.selected.skills.religion * this.state.profMod))} RELIGION</p3>
          </div>
        </div>
        <div className="statBlock2">
          <div className="statNums">
            <h3>WISDOM</h3>
            <p2>{this.state.wis}</p2>
            <p1 className="modifier">{this.modStr(this.state.wisMod)}</p1>
          </div>
          <div className="skillNums">
            <p3>{this.modStr(this.state.wisMod + (this.selected.proficiencies.WIS * this.state.profMod))} SAVING THROWS</p3>
            <p3>{this.modStr(this.state.wisMod + (this.selected.skills.animalHandling * this.state.profMod))} ANIMAL HANDLING</p3>
            <p3>{this.modStr(this.state.wisMod + (this.selected.skills.insight * this.state.profMod))} MEDICINE</p3>
            <p3>{this.modStr(this.state.wisMod + (this.selected.skills.perception * this.state.profMod))} PERCEPTION</p3>
            <p3>{this.modStr(this.state.wisMod + (this.selected.skills.survival * this.state.profMod))} SURVIVAL</p3>
          </div>
        </div>
        <div className="statBlock2">
          <div className="statNums">
            <h3>CHARISMA</h3>
            <p2>{this.state.cha}</p2>
            <p1 className="modifier">{this.modStr(this.state.chaMod)}</p1>
          </div>
          <div className="skillNums">
            <p3>{this.modStr(this.state.chaMod + (this.selected.proficiencies.CHA * this.state.profMod))} SAVING THROWS</p3>
            <p3>{this.modStr(this.state.chaMod + (this.selected.skills.deception * this.state.profMod))} DECEPTION</p3>
            <p3>{this.modStr(this.state.chaMod + (this.selected.skills.intimidation * this.state.profMod))} INTIMIDATION</p3>
            <p3>{this.modStr(this.state.chaMod + (this.selected.skills.performance * this.state.profMod))} PERFORMANCE</p3>
            <p3>{this.modStr(this.state.chaMod + (this.selected.skills.persuasion * this.state.profMod))} PERSUASION</p3>
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
    for(let i = 0; i<this.state.hitDice.length; i++){
      hd += this.state.hitDice[i].total + this.state.hitDice[i].dice;
    }
    return hd;
  }

  hitDieCalc(){
    let hd = "";
    for(let i = 0; i<this.state.hitDice.length; i++){
      let k = this.state.hitDice[i].total; //- this.state.hitDice[i].used;
      k -=this.state.hitDice[i].used;
      hd+=k + this.state.hitDice[i].dice;
    }
    return hd;
  }

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
            <p1>{this.selected.speed}</p1>
            <h3>SPEED</h3>
          </div>
        </div>
        <div className="statBoxWide">
          <h4>HIT POINT MAXIMUM {this.state.HPMax}</h4>
          <p1>{this.state.currentHP}</p1>
          <h3>CURRENT HIT POINTS</h3>
        </div>
        <div className="statBoxWide">
          <p1>{this.state.tempHP}</p1>
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
            <h1>{this.selected.charName}</h1>
          </div>
          <div className="otherMeta">
            {this.classes()}
            <h3>{this.selected.background}</h3>
            <h3>{this.selected.playerName}</h3>
            <h3>{this.selected.race}</h3>
            <h3>{this.selected.alignment}</h3>
            <h3>{this.selected.experiencePoints}</h3>
          </div>
        </div>
        <div className="page1">
          <div className="col1">
            {this.stats()}
          </div>
          <div className="col2">
            {this.status()}
          </div>
          <div className="col3">

          </div>
        </div>
      </div>
    );
  }
}
export default App;
