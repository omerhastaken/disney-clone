import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Recommends from './Recommends';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Trending from './Trending';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import db from '../firebase'
import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';

const Home = (props) => {
  const dispacth = useDispatch()
  const UserName = useSelector(selectUserName)
  let Recommends =[];
  let NewDisney =[];
  let Originals =[];
  let Trending =[];
 

  useEffect(() => {
     db.collection('movies').onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch(doc.data().type) {
          case 'recommend':
            Recommends.push({id: doc.id, ...doc.data()})
            break;
          case 'new':
            NewDisney.push({id: doc.id, ...doc.data()})
            break;
          case 'originals':
            Originals.push({id: doc.id, ...doc.data()})
            break;
          case 'trending':
            Trending.push({id: doc.id, ...doc.data()})
            break;
        }
      })

      dispacth(setMovies({
        recommend: Recommends,
        new: NewDisney,
        originals: Originals,
        trending: Trending,
      }))
     })
  }, [UserName])
    return (
        <Container>
           <ImgSlider/>
           <Viewers />
           <Recommends />
           <NewDisney />
           <Originals />
           <Trending />
        </Container>
    )
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;