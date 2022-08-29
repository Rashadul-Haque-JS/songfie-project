import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'

const Home = () => {
  const [index, setIndex] = useState(0);
  const imageName = ['mike', 'girlone', 'man', 'boy', 'girltwo']
  useEffect(() => {
    const intervalID = setInterval(() => {
      setIndex((index) => {
        if (index < imageName.length - 1) {
          return index + 1;
        } else {
          return 0;
        }
      });
    }, 3000);

    return () => clearInterval(intervalID);
  }, []);


  const backgroundImg = require(`../../assets/image/static/${imageName[index]}.png`)

  return (
    <div className='home'>
      <div className="homeContent">
        <div className='homeShowcase' style={{ backgroundImage: `url(${backgroundImg})`, backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
          <div className='overlay'></div>
          <div className="showcaseInner">
            <h1>Do you love to sing? <span>
              Let your musical passion be flown
            </span><span>
               Sing for reason or for no reason
              </span>
              <span>
                Sing forthright
              </span>
            </h1>
        </div>
        </div>
        <div className="shocaseHeadline">
          <div className='showcaseHeadlineText'>
            Singing's Life
          </div>

          <div className='homeBtnGroup'>
            <div className='showcaseHeadlineBtn '>
            <Link to='/songs'>
              <span className='sing'>SING</span>
            </Link>
          </div>
            <div className='showcaseHeadlineBtn '>
              <Link to='/songs'>
                <span className='listen'>LISTEN</span>
              </Link>
            </div>
          </div>
        </div>


      </div>
      <div className='functionalities'>
        <div className='describtions orange'>...in progress</div>
        <div className='describtions pink' >...in progress</div>
        <div className='describtions red'>...in progress</div>
        <div className='describtions blue'>...in progress</div>
        <div className='describtions red'>...in progress</div>
        <div className='describtions blue'>...in progress</div>


      </div>
    </div>




  )
}

export default Home