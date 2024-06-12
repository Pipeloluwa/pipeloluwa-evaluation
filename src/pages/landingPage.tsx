import FirstSegment from '../components/landingPageComponents/firstSegment'
import SecondSegment from '../components/landingPageComponents/secondSegment'
import ThirdSegment from '../components/landingPageComponents/thirdSegment'
import { FourthSegment } from '../components/landingPageComponents/fourthSegment'
import { FifthSegment } from '../components/landingPageComponents/fifthSegment'
import SeventhSegment from '../components/landingPageComponents/seventhSegment'
import FooterComponent from '../components/generalComponents/footerComponent'
import SixthSegment from '../components/landingPageComponents/sixthSegment'

const LandingPage = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full overflow-hidden'>
      
      <FirstSegment />

      <SecondSegment />   

      <ThirdSegment /> 

      <FourthSegment />

      <FifthSegment />

      <SixthSegment />

      <SeventhSegment />

      <FooterComponent />
      

    </div>
  )
}

export default LandingPage