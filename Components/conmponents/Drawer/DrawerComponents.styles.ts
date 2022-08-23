import styled from "styled-components";
export const Wrapper = styled.div`
  height: 100vh;
  background: var(--clr-bg);
  color: var(--font);
  padding: 1rem;
  text-transform: uppercase;

  a{
      text-decoration: none;
      color: inherit
  }
`;

export const MenuWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 100%;
`

export const  List = styled.li`
    margin-top: 4rem;
    margin-left: 3rem;
`

export const BookingContainer = styled.div`
  background: hsl(209, 82%, 53%);
  width: 80%;
  aspect-ratio: 4/1;
  margin-top: 2.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  background: linear-gradient(180deg, #35a7ff 0%, #007fe0 100%);

`;