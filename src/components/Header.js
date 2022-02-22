import React from 'react';
import { FaLaptop, FaMobileAlt, FaTabletAlt } from 'react-icons/fa';
import useWindowSize from '../hooks/useWindowSize';
import '../index.css';

const Header = ({ title }) => {
  const { width } = useWindowSize()

  return (
    <header>
      <h1>{title}</h1>
      {width < 768 ? <FaMobileAlt />
        : width < 992 ? <FaTabletAlt />
          : <FaLaptop />}
    </header>
  )
}

Header.defaultProps = {
  title: "Default Title"
}

export default Header