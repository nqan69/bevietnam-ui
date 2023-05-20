import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './components/Layout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;

            let Layout = DefaultLayout;

            if (route.Layout) {
              Layout = route.Layout;
            } else if (route.Layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>

    // <div className="overflow-y-auto overflow-x-hidden h-screen px-5 py-8 bg-white">
    //   <NavBar />
    //   <div className="max-w-lg">
    //     <ImageSlider>
    //       {slides.map((s) => {
    //         <img src={s} />;
    //       })}
    //     </ImageSlider>
    //   </div>
    // </div>
  );
}

export default App;
