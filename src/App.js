import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import moment from 'jalali-moment'
function App() {
  const [testApi, setTestApi] = useState()
  const baseUrl = "https://api.football-data.org/v2/"
  const size = 10
  useEffect(() => {
    axios.get(`${baseUrl}competitions/2021/matches`, {
      headers: {
        'X-Auth-Token': `ea7cb0230e764362aef72269a19ed9d5`
      }
    })
      .then(res => (setTestApi(res.data), console.log('test', res.data)))
      .catch(error => console.log(error, 'resTest'))

  }, [])


  return (
    <div className="App">
      <div className="main-league">
        <h3>برنامه بازی ها</h3>
        <select>
          <option value="wik-one">هفته اول</option>
        </select>
        {testApi && testApi?.matches.splice(0, size)?.map(item => {
          const tesme = item.lastUpdated
          console.log(tesme, 'tesmetesmetesmetesme')
          return (
            <>
              <div className="box-team">
                <h6><span>{moment(item.lastUpdated, 'YYYY/MM/DD').locale('fa').format('dddd')}</span> <span>{moment(item.lastUpdated, 'YYYY/MM/DD').locale('fa').format('MM')}</span> <span>{moment(item.lastUpdated, 'YYYY/MM/DD').locale('fa').format('MMMM')}</span> <span>{moment(item.lastUpdated, 'YYYY/MM/DD').locale('fa').format('YYYY')}</span> 00:30 هفته 22 </h6>


                <div className="col-12 p-0">

                  <div className="col-5  float-left d-flex justify-content-between">
                    <p className="p-0">{item.awayTeam.name}</p>
                    <span>logo</span>
                  </div>
                  <div className="col-2 float-left center-span-result">
                    <p className="p-0 m-0"><span>0</span> - <span>1</span></p><p>پایان</p></div>
                  <div className="col-5 float-left d-flex justify-content-between flex-row-reverse"><p>{item.homeTeam.name}</p><span>logo</span></div>


                </div>


              </div>
            </>
          )
        }

        )}
      </div>
    </div>
  );
}

export default App;
