import { Helmet } from 'react-helmet'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Certificates from './components/Certificates'

function App() {

  return (
    <>
      <Helmet>
        <title> Portfolio </title>
      </Helmet>
      <Navbar />
      <Profile />
      <Projects/>
      <Certificates/>
      <Footer />
    </>
  )
}

export default App
