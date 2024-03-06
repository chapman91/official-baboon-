// Style function imported 
import styled from "styled-components";

function BackgroundSurface() {

  return styled.span`
  /* string interpolation dynamically set 'bg' color */
    background-color: ${(props) => props.color || "var(--text-bg-clr)"};
    padding: 0.25em 0.5em;
    border-radius: 4px;
    display: flex;
  `;
}

export default BackgroundSurface();
