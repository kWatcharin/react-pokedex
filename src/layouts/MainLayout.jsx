import { Outlet } from 'react-router-dom';
import Header from '../components/core/Header';
import Navbar from '../components/core/Navbar';
import Footer from '../components/core/Footer';


export default function MainLayout() {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}
