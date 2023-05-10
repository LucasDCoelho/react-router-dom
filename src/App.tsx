import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'

import { Error } from './pages/Error'
import { PageLayout } from './layouts/PageLayout'

function App() {


  return (
    <>
      <BrowserRouter >
        <Routes >
          <Route path='/' element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
          <Route path='*' element={<Error />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
