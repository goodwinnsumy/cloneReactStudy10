import React, {useRef} from 'react';
import ToDo from "../components/ToDo/ToDo";
import useHover from "../components/hooks/useHover";

import "./Home.scss"

const Home = () => {

  const ref = useRef();
  const isHovering = useHover(ref);

    return (
        <div>
          <h1 ref={ref}  style={{color: isHovering ? '#42a5f5' : '#7b1fa2'}}>Home</h1>

          {console.log(ref.current)}

          <ToDo/>

        </div>
    );
};

export default Home;