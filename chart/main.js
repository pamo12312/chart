import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import Chart from 'chart.js/auto';


document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Vite + Chart.js</h1>
 </div>
`

setupCounter(document.querySelector('#counter'))
