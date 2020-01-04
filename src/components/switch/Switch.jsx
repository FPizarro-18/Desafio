import React, { useContext } from 'react';
import { IoMdMoon as Moon, IoMdSunny as Sun } from 'react-icons/io';
import { ThemeContext } from '../../context/ThemeContext';
import {Button} from 'reactstrap'


export default function SwitchColor () {
  // const { dark, toggle } = useContext(ThemeContext);
  const { theme, toggle, dark } = React.useContext(ThemeContext)
  return (
    <Button
          type="button"
          onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            outline: 'none'
          }}
        >
          Cambiar tema: {!dark ? 'Dark' : 'Light'} 
        </Button>
    // <button 
    //   className='SwitchColor'
    //   onClick={() => toggle()}
    // >
    //   <Sun className={`icon ${!dark ? 'active' : ''}`}/>
    //   <Moon className={`icon ${dark ? 'active' : ''}`}/>
    // </button>
  );
} 