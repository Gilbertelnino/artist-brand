import React, {useEffect} from 'react'
import {Route, Switch} from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import News from './components/news/News';
import Album from './components/music/album/Album';
import Videos from './components/music/video/Videos';
import Tour from './components/tour/Tour';
import Store from './components/store/Store';
import Footer from './components/footer/Footer';
import PlayListView from './components/music/playlist/PlayListView';
import NewsDetail from './components/news/new detail/NewsDetail';
import Product from './components/store/product/Product';

function App() {
  useEffect(()=> {
    var Tawk_API = Tawk_API || {},
        Tawk_LoadStart = new Date();
      (function () {
        var s1 = document.createElement("script"),
          s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = "https://embed.tawk.to/611f62add6e7610a49b11b4d/1fdh9ittu";
        s1.charset = "UTF-8";
        s1.setAttribute("crossorigin", "*");
        s0.parentNode.insertBefore(s1, s0);
      })();
  })
  return (
    <div className="app">
      <Navbar />
      <Switch>
        {/* left navbar */}
        <Route exact path="/news" component={News} />
        <Route exact path="/music" component={Album} />
        <Route exact path="/videos" component={Videos} />

        {/* right navbar */}
        <Route exact path="/tour" component={Tour} />
        <Route exact path="/store" component={Store} />
        <Route exact path="/contact" component={Contact} />

        {/* Playlist view */}
        <Route exact path="/playlist" component={PlayListView} />
        <Route exact path="/newsDetail">
          <NewsDetail />
        </Route>
        {/* shops routes */}
        {/* single products */}
        <Route exact path="/store/singlealbum" component={Product} />

        {/* home */}
        <Route path="/" component={Home} exact />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
