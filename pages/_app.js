import '../styles.css'
import Nav from '../components/nav'
import Footer from '../components/footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft, faHospitalSymbol } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faQuoteLeft)

export default function MyApp({ Component, pageProps }) {
    return (<>
            <Nav />
            <Component {...pageProps} />
            <Footer />
        </>)
  }