import React from 'react';
import Header from './Header';
import homePhoto from '../assets/images/homePhoto.jpg'

function Home() {

  const home = {
    width: '100vw',
  }

  const homePhotoEdit = {
    height: '57vh',
    width: '100vw',
    position: 'absolute',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    top: '-6%',
  }

  const team = {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.7)'
  }

  const people = {
    fontSize: '52px',
    color: 'white',
    fontWeight: 'bolder'
  }


  return(
    <div>
    <div style={home}>
    <Header/>
    </div>
    <div className="slogan">
        <p style={team}>OUR TEAM</p>
        <h1 style={people}>Powered by People</h1>
      </div>
    <img style={homePhotoEdit} src={homePhoto}/>
    </div>
  )
}

export default Home;
