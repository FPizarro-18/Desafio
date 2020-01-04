import React from 'react';
import '../home/home-container.css'
import PostList from '../post-list/PostList';
import PublicMenu from '../../components/public-menu/PublicMenu'
const Home = () => {
    return (
        <div>
                
        <header>
            <PublicMenu></PublicMenu>
            <div className="hero-image">
                 <div className="hero-text">
                     <h1>Luis Pizarro</h1>
                     <p>Curso React DesafioLatam</p>
                 </div>
             </div>
         </header>
             <body>
 
             <PostList></PostList>
            </body>
        </div>
    );
}
export default Home;