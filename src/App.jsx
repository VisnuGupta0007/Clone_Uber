
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Ride from './NavSections/Ride'
import Drive from './NavSections/Drive'
import Business from './NavSections/Business'
import Help from './NavSections/Help'
import Signup from './SignUp and Login/Signup'
import Login from './SignUp and Login/Login'
import RequestRide from './RideSection/RequestRide'
import ReserveRide from './RideSection/ReserveRide'
import SeePrice from './RideSection/SeePrice'
import ExploreRideOpt from './RideSection/ExploreRideOpt'
import AirportRide from './RideSection/AirportRide'
import Rentals from './RideSection/Optional Routings/Rentals'
import Courier from './RideSection/Optional Routings/Courier'
import Rides from './RideSection/Optional Routings/Rides'
import Business_2Way from './BusinessSolution_2/Travel/Business_2Way'
import Cities from './RideSection/Cities'



function App() {
  return (
    <>

      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ride' element={<Ride />} />
          <Route path='/drive' element={<Drive />} />
          <Route path='/business' element={<Business />} />
          <Route path='/help' element={<Help />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />

          {/* Ride Section */}
          <Route path='/RequestRide' element={<RequestRide />} />
          <Route path='/ReserveRide' element={<ReserveRide />} />
          <Route path='SeePrices' element={<SeePrice />} />
          <Route path='ExploreRideOpt' element={<ExploreRideOpt />} />
          <Route path='AirportRide' element={<AirportRide />} />
          <Route path='/Cities' element={<Cities/>}/>

          {/* Request , Reserve and See prices Section */}

         <Route path='/RideSection/Ride' element={<Rides/>}/>
          <Route path='/RideSection/Rentals' element={<Rentals/>}/>
          <Route path='/RideSection/Courier' element={<Courier/>}/>
 
          {/* Business 2 Way */}
          <Route path='/Business/2Way' element={<Business_2Way/>}/>
        

        </Routes>

      </BrowserRouter>




    </>
  )
}

export default App