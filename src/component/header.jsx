import React from 'react';
import '../style/header.css';
import Top from '../component/top';
import Title from '../component/title';
import Banner from '../component/banner';
import Chef from '../component/Chef';
import Menu from '../component/menu';
import Prefooter from '../component/prefooter';
import Footer from '../component/footer.jsx';
import Topdata from '../data/topitems.json';
import chef from '../data/chef.json';
import Celeb from '../data/celeb.json';
import menu from '../data/menu.json';


function Header() {
  return (
    <div>
      <Banner ban={Celeb.celebrities} />
      <Title text='Top Dishes' />
      <Top top={Topdata.top_items} />
      <Title text='Chefs' />
      <Chef chefs={chef.chefs} />
      <Title text='Menu' />
      <Menu menu={menu.menu} />;
      <Prefooter />;
      <Footer />;
    </div>
  );
}

export default Header;
