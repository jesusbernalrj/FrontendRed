import { Main } from '../components/Main/Main'
import { SideBar } from '../components/SideBar/SideBar'

export const HomePage = () => {
  return (
    <>
    <div >
      <div className='row'>
    <div className='col-2'>
    <SideBar/>
    </div>
    <div className='col-4'>
    <Main/>
    </div>
      </div>

    </div>
   
    
    </>
  )
}
