import { TextAreaContainer,PhoneNumberDisplay, HeroFold, FeatureFold } from './Component/molecules';

function App() {

  return (
    <div className='container p-4'>
      <HeroFold />
      <TextAreaContainer />
      <FeatureFold />
      <PhoneNumberDisplay />
    </div>
  )
}

export default App
