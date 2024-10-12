import styled from "styled-components";

export const Container = styled.div`
    max-width: 100%;
    margin: 0 auto;
    background-color: aqua;
`
export const NavHeader = styled.div`
    display: flex;
    padding: 24px 2rem;
    //flex-direction: row;  /* Створюємо вертикальний потік елементів */
    align-items: center;
    
    .noActive{
        color: black;
    };
    
    .active{
        color: rgba(216, 67, 67, 1);
    }
`
export const Nav = styled.nav`
    position: absolute;    /* Центруємо відносно батьківського елемента (NavHeader) */
    left: 50%;             /* Встановлюємо по центру відносно ширини батька */
    transform: translateX(-50%);  /* Вирівнюємо по горизонталі за допомогою трансформації */
    display: flex;
    gap: 20px;
`
// export const Logo = styled.img`
//     width: 8.5rem;
//     height: 1rem;
// `
