import '../styles.css'
import Nav from '../components/nav'
import Footer from '../components/footer'

export default function MyApp({ Component, pageProps }) {
    return (<>
            <Nav />
            <Component {...pageProps} />
            <Footer />
        </>)
  }