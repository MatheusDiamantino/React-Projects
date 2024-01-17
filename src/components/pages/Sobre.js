import React from 'react';
import BannerAbout from '../about/BannerAbout';
import Organizadores from '../about/Organizadores';
import './Sobre.module.css'; // Import a separate CSS file for styling

function Sobre() {
  return (
    <div>
      <BannerAbout />
      <Organizadores />
    </div>
  );
}

export default Sobre;
