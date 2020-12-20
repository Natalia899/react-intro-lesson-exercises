import React, { Component } from 'react';
import './App.css';

class App extends Component {
  getStuff() {
    return <div>natal</div>
  }

  getMorningGreeting() {
    return <div>good Morning</div>
  }

  getEveningGreeting() {
   return <div>Good Evening</div>
  }

  showCompany(name, revenue) {
    return <div>
      {name} makes {revenue} every year.
    </div>
  }

  getClassName(temperature) {
   if (temperature < 15) {
     return <div id="weatherBox" class="freezing">Freezing</div>
   }
   else if (temperature >15 && temperature< 30){
     return <div id="weatherBox" class="fair">Fair</div>
   }
   else {
    <div id="weatherBox" class="hell-scape">Hell-scape</div>
   }
  }

  render() {

    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 }
    ]
    let time = new Date().getHours()


    return (
      <div>
        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 1</h4 >
          <div className="exercise" id="spotcheck-1">
            {this.getStuff()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 2</h4>
          <div className="exercise" id="spotcheck-2">
            { time < 14 ? this.getMorningGreeting() : this.getEveningGreeting()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 3</h4>
          <div className="exercise" id="spotcheck-3">
          {[
              this.getMorningGreeting(),
              this.getEveningGreeting(),
              <p>"Natalia- Ice Queen"</p>
            ]}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 1</h4>
          <div className="exercise" id="ex-1">
            {companies.map(company => this.showCompany(company.name, company.revenue))}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 2</h4>
          <div className="exercise" id="ex-2">
            {this.getClassName(13)}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
