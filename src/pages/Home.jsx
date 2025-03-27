import Header from '../components/Header'
import Footer from '../components/Footer'
import Productlist from '../components/Productlist'

function Home() {

  return (
    <div className="container mx-auto main-layout">
      <Header 
        title="Timeless Masterpieces"
        slogan="Discover the Stories that transcend Time and Inspire Generation"
      />
      <Productlist/>
      <Footer/> 
    </div>
  )
}

export default Home