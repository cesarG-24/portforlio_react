import {lazy, Suspense} from "react";
import { Routes, Route } from "react-router-dom";

import {Links} from "./components/Links";
import {Link} from "./components/Link";
import {Socials} from "./components/Socials";
import {Social} from "./components/Social";
import {Rights} from "./components/Rights";

const Home = lazy(() => import('./pages/Home'))
const Works = lazy(() => import('./pages/Works'))
const Blog = lazy(() => import('./pages/Blog'))
const Contact = lazy(() => import('./pages/Contact'))
const Example = lazy(() => import('./pages/Example'))
const WorkDetail = lazy(() => import('./pages/WorkDetail'))

const icons = [
    {
        img: 'https://img.icons8.com/ios-filled/344/facebook--v1.png',
    },
    {
        img: 'https://img.icons8.com/material-outlined/344/instagram-new--v2.png',
    },
    {
        img: 'https://img.icons8.com/ios-glyphs/344/twitter--v1.png',
    },
    {
        img: 'https://img.icons8.com/ios-filled/344/linkedin.png',
    }];

export default function App() {
    return (
        <div className = "App">
            <Links>
                <Link to="/">Home</Link>
                <Link to="/works">Works</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/example">Example</Link>
            </Links>

            <Suspense fallback={"Loading..."}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/works" element={<Works />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/example" element={<Example />} />
                    <Route path = '/work/:id' element = {<WorkDetail/>}/>
                </Routes>
            </Suspense>

            <Socials>
                {icons.map(icon => (
                    <Social
                        key = {icon.img}
                        icon = {icon.img}
                    />
                ))}
            </Socials>

            <Rights/>
        </div>
    );
}
