import React from 'react'
import ReactDOM from 'react-dom'
import MultiStep from 'react-multistep'
import './css/custom.css'
import './css/normilize.css'
import './css/skeleton.css'
import StepOne from './components/stepOne'
import StepTwo from './components/stepTwo'
import StepThree from './components/stepThree'
import StepFour from './components/stepFour'

const steps = [
  { component: <StepOne /> },
  { component: <StepTwo /> },
  { component: <StepThree /> },
  { component: <StepFour /> }
]

const prevStyle = {'background': '#33c3f0', 'border-width': '2px'}
const nextStyle = {'background': '#33c3f0',  'border-width': '2px'}

const App = () => (
<div className='container'>
    <MultiStep steps={steps} prevStyle={prevStyle} nextStyle={nextStyle}/>
    <div className='container app-footer'>
      
    </div>
  </div>
);
export default App;