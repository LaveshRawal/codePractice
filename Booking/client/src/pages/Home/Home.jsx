import React from 'react'
import Navbar from "../../components/Navbar"
import Header from '../../components/Header'
import Featured from '../../components/Featured'
import PropertyList from '../../components/PropertyList'
import FeaturedProperties from "../../components/FeaturedProperties"
import MailList from "../../components/MailList"
import Footer from '../../components/Footer'
import "./Home.css"

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className='homeTitle'>Browse my property type</h1>
        <PropertyList />
        <h1 className='homeTitle'>Homes guests love</h1>
        <FeaturedProperties />
      </div>
          <MailList />
    
          <Footer />
      </>
  )
}

export default Home