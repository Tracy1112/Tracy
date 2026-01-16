import { Outlet, useNavigation } from 'react-router-dom'
import { Navbar, Loading } from '../components'
import '../layout.css'

const HomeLayout: React.FC = () => {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'

  return (
    <div className="layout">
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-6 lg:py-10">
          <Outlet />
        </section>
      )}
    </div>
  )
}

export default HomeLayout
