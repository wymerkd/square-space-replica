import React from 'react';
import Header from './Header';
import Header2 from './Header2';
import Team from './Team';
import homePhoto from '../assets/images/homePhoto.jpg'

function Home() {

  const home = {
    width: '100vw',
  }

  const homePhotoEdit = {
    height: '57vh',
    width: '100vw',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    top: '-6%',
  }

  const team = {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.7)',
    fontFamily: 'Helvetica'
  }

  const people = {
    fontSize: '40px',
    color: 'white',
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  }

  const teamMargin = {
    marginTop: '300px',
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
      <div>
      <Header2/>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <div>
      <h1 className="eTeam"><strong>Executive Team</strong></h1>
      </div>
      <div style={teamMargin}>
      <Team/>
      </div>
      </div>
  )
}

export default Home;
