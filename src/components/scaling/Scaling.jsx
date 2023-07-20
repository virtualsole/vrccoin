import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import "./scaling.css"
import Tab1 from './tabs/Tab1'
import Tab2 from './tabs/Tab2'
import Tab3 from './tabs/Tab3'
const Scaling = () => {
    const [tabKey, initTabKey] = useState('one')
  return (
   <section className='scaling_bg'>
    <div className="container pt-5">
        <div className="row mt-4">
        <h1 className="text-light head-scaling">The most adopted scaling technology</h1>
        <Tabs activeKey={tabKey} onSelect={(e) => initTabKey(e)} className='c'>
        <Tab eventKey="one" title="Public Chains">
         <Tab1 />
        </Tab>
        <Tab eventKey="two" title="App Specific Chains">
          <Tab2 />
        </Tab>
        <Tab eventKey="three" title="Decentralized Identity">
          <Tab3 />
        </Tab>
   
      </Tabs>
        </div>
    </div>
   </section>
  )
}

export default Scaling
