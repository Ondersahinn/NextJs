import React from 'react';
import SideBar from '../../components/Menu';
import IndexArticles from '../../components/LandingPage/IndexxArticles';
import Footer from '../../components/LandingPage/Footer';

function Dashboard() {

  return (
    <div>
      <SideBar />
      <IndexArticles />
      <Footer />
    </div>
  );
}

export default Dashboard;
