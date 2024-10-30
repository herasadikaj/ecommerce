/* eslint-disable react/prop-types */
import Nav from './Navbar';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <div>
          
            <Nav />
            
            
            {props.children}
            
           
            <Footer />
        </div>
    );
};

export default Layout;
