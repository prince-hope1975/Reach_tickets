import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 5rem;
  @media (min-width: 768px) {
    /* flex-direction: row; */
    display: grid;
    grid-template-columns: 1fr;
    > section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "a b";
      gap: 1rem;
      > div {
        :first-of-type {
          grid-area: b;
          /* background-color: red; */
        }
        :last-of-type {
          grid-area: auto;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      }
    }
    /* background-color: red; */
  }
`;
