import Header from './components/Header'
import Contact from './components/Contact'
import About from './components/About'

function App() {

  return (
    <>
      <div className="container">
        <div id="main-container" className="card border-0 shadow my-5">
            <div className="card-body p-5">
                <div className="container">
                    <Header />
                    <Contact />
                    <About />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default App