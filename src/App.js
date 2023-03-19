import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { postsRequests } from './app/features/postSlice';

// PAGES
import PostsList from './pages/postsList/PostsList';
import PostDetails from './pages/postDetails/PostDetails';
import NotFound from './pages/notFound/NotFound';

// COMPONENTS
import Navbar from './components/shared/navbar/Navbar';
import Footer from './components/shared/footer/Footer';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postsRequests.getAllPosts());

    }, [dispatch]);

    return (
        <>
            <Router>
                <Navbar />
                <main className='container mx-auto px-5'>
                    <Routes>
                        <Route
                            path='/'
                            element={<PostsList />}
                        />
                        <Route
                            path='/post-details/:id'
                            element={<PostDetails />}
                        />
                        <Route
                            path='*'
                            element={<NotFound />}
                        />
                        {/* FOR GITHUB PAGES */}
                        <Route
                            path='/postify'
                            element={<PostsList />}
                        />
                        <Route
                            path='/postify/post-details/:id'
                            element={<PostDetails />}
                        />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </>
    );
}

export default App;
