import styled from "styled-components";

export const Container = styled.div`
    max-width: 100%;
    margin: 0 auto;
    background-color: aqua;
`
export const NavHeader = styled.div`
    display: flex;
    padding: 24px 2rem;
    align-items: center;
    background-color: rgba(242, 244, 247, 1);
    
    .noActive{
        color: black;
    };
    
    .active{
        color: rgba(216, 67, 67, 1);
    }
`
export const Nav = styled.nav`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 20px;
`
export const BgImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const BgImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scaleX(-1);
`;

export const OverlayContent = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 25%;
    gap: 40px;
    transform: translate(-50%, -50%);
    color: white;
    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    };
    h1 {
        font-size: 48px;
        font-weight: 600;
        line-height: 32px;
    }
    h3 {
        font-size: 24px;
        font-weight: 600;
        line-height: 32px;
    }
    button {
        width: 173px;
        height: 56px;
        background-color: rgba(228, 72, 72, 1);
        text-align: center;
        border-radius: 200px;
        &:hover {
            background-color: rgba(216, 67, 67, 1);
        }
    }
`;
// Catalog Page
export const CatalogContainer = styled.div`
    margin: 3rem 4rem;
`


