import React from 'react';
import './App.css';
import { Layout , Header, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="content">
    <Layout className="header" fixedHeader>
        <Header className="header-color" title=" " scroll>
            <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/art">Art</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;
