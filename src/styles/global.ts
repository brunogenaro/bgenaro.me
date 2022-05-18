import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background-color:transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #6B7280;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #D1D5DB;
}

.scale-101{
  transition: all 0.3s ease-in-out;
 :hover{
   transform: scale(1.02);
 }
}


`
