import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Movies from './pages/Movies';
import NotFound from './pages/NotFound';
import TopMovies from './pages/TopMovies';
import Upcomming from './pages/Upcomming';

function App() {
    return (
        <div className="root-wrap">
            <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header />

            <Routes>
                <Route path="/" exact={true} element={<Home />} />
                <Route path="/movie_now" element={<Movies />} />
                <Route path="/movie/:title" element={<MovieDetail />} />
                <Route path="/movie_top" element={<TopMovies />} />
                <Route path="/movie_top/:title" element={<MovieDetail />} />
                <Route path="/upcomming" element={<Upcomming />} />
                <Route path="/upcomming/:title" element={<MovieDetail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;

// path="/movie/:title" 는 리액트의 라우팅에서 URL 파라미터 >:title 부분이 변수역할 동적 라우팅 가능
