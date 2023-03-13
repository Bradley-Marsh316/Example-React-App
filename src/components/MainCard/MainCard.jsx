import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

import DoughnutChart from './../DoughnutChart/DougnutChart'
import { ProgressBar } from './../ProgressBar/ProgressBar'

import './MainCard.css'
import symbol from '../../assets/AnalyseSymbol.png'
import { Delta } from '../Delta/Delta'

export function MainCard() {
  const [activeTab, setActiveTab] = React.useState(0);
  const [data, setData] = React.useState([]);

  const handleTabChange = (e, newTab) => setActiveTab(newTab);

  const fetchData = async () => {
    //Here an API call will be made to fetch data to populate chart and tabel
    return [
      {
        name: 'Apple Inc.',
        value: 34.5,
        change: 0.7
      },
      {
        name: 'Microsoft Corp.',
        value: 20.93,
        change: 0.7
      },
      {
        name: 'Bank of America',
        value: 20.78,
        change: 0.7
      },
      {
        name: 'Mercedes Benz',
        value: 13.05,
        change: 0.7
      },
      {
        name: 'BASF',
        value: 3.03,
        change: 0.7
      }
    ];
  }

  React.useEffect(() => {
    fetchData().then(setData);
  }, [])

  return (
    <div className="card-body">
      <div className="title-container">
        <img src={symbol} alt="" />
        <h2 className="title">
          Analyse
        </h2>
      </div>
      <Tabs value={activeTab} onChange={handleTabChange} aria-label="Tabs">
        <Tab label="Positionen" />
        <Tab label="Regionen" />
        <Tab label="Anlageklassen" />
        <Tab label="Sektoren" />
      </Tabs>
      <div className="card-content">
        <div className="chart-container">
          {data.length && (
            <DoughnutChart data={data} />
          )}
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>
                  Titel
                </th>
                <th>
                  Allokation
                </th>
                <th>
                  Gewinn
                </th>
              </tr>
            </thead>
            <tbody>
              {
                data.map(({ value, name, change }, i) => (
                  <tr>
                    <td>{name}</td>
                    <td><ProgressBar percentage={value} key={i} /></td>
                    <td><Delta value={change} /></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
