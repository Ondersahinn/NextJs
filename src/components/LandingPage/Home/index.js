import React from 'react';
import SideBar from '../../components/Menu';
import FilterArea from '../../components/IndexFilterArea'
import IndexArticles from '../../components/LandingPage/IndexxArticles';
import Footer from '../../components/LandingPage/Footer';
import Companys from '../../components/LandingPage/Companys';
import MostPopularArticle from '../../components/LandingPage/MostPopularArticle';

function Dashboard() {

  return (
    <div>
      <SideBar />
      <FilterArea />
      <IndexArticles />
      <MostPopularArticle />
      <Companys />
      <Footer />
    </div>
  );
}

export default Dashboard;
