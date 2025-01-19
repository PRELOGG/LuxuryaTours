import React from 'react'
import { Header } from './Header'
import { Route, Routes } from 'react-router-dom'
import { Tamilnadu } from './Tamilnadu'
import { TamilnaduInfo } from './TamilnaduInfo'
import { Footer } from './Footer'
import { GoaInfo } from './GoaInfo'
import { KeralaInfo } from './KeralaInfo'
import { TajInfo } from './TajInfo'
import { Enquiry } from './Enquiry'
import { Notfound } from './Notfound'
import { MysuruInfo } from './MysuruInfo'

export const Landing = () => {
  return (
    <div>
        <Header/>
       
        <Routes>
          <Route path='/' Component={Tamilnadu}></Route>
          <Route path="/TamilnaduInformation" Component={TamilnaduInfo} />
          <Route path='/GoaInformation' Component={GoaInfo}/>
          <Route path='/MysuruInformation' Component={MysuruInfo}/>
          <Route path='/KeralaInformation' Component={KeralaInfo}/>
          <Route path='/TajInformation' Component={TajInfo}/>
          <Route path='/Enquiry' Component={Enquiry}/>
          <Route path='*' Component={Notfound}/>

        </Routes>

        <Footer/>
    </div>
  )
}
