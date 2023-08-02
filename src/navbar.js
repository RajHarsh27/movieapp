import React,{Component} from "react";


//     STYLED COMPONENTS STYLING

import styled from "styled-components";

const Nav=styled.div`
  width: 100%;
  height: 70px;
  background: linear-gradient(145deg, blue,red,yellow);
  display: flex;
  justify-content: space-between;
`;

const Title=styled.div`
        font-size:35px; 
        color:white;
        font-weight:600;
        font-family:Montserrat, sans-serif;
        text-transfrom:uppercase;
        margin-left:20;
        &:hover{color:lightgreen};
`;

const CartImg=styled.img`
        height:48px;
        margin-right:20px;
`;

const CartContainer=styled.div`
        position:relative;
        cursor:pointer;
`;

const CartCount=styled.div`
        background: ${(props)=>props.color};
        color:white;
        border-radius: 50%;
        padding: 4px 8px;
        position: absolute;
        right: 10px;
        top: -5px;
        font-size: 12px;
        visibility:${(props)=>props.show?"visibility":"hidden"}
`;

class navbar extends React.Component{
    render(){
        const {cartCount}=this.props;
        return(
            <>
                <Nav>
                    <Title>MOVIE APP</Title>
                    <CartContainer>
                        <CartImg alt="Cart Icon" src="https://cdn-icons-png.flaticon.com/128/891/891462.png" />
                        <CartCount color="orange" show={true}>{cartCount}</CartCount>
                    </CartContainer>
                </Nav>
            </>
        )
    }
}

export default navbar;






//     CSS MODULES STYLING

// import styles from './navbar.module.css';

// class navbar extends Component{
//     render(){
//         return(
//             <>
//                 <div className={styles.nav}>
//                     <div className={styles.title}>MOVIE APP</div>
//                     <div className={styles.cartIconContainer}>
//                         <img
//                             className={styles.cartIcon}
//                             src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
//                             alt="cart-icon"
//                         />
//                         <span className={styles.cartCount}>4</span>
//                     </div>
//                 </div>
//             </>
//         )
//     }
// }













// INLINE INTERNAL STYLING

// const styles={
//     nav:{
//         height: 70,
//         background: "#4267b2",
//         display: "flex",
//         justifyContent: "space-between" ,
//         alignItems: "center",
//         position: "relative",
//     },

//     title:{
//         fontSize:"30",
//         color:"white",
//         fontWeight:600,
//         fontFamily:'"Montserrat", sans-serif',
//         textTransfrom:"uppercase",
//         marginLeft:20
//     },

//     cartImg: {
//         height: 48,
//         marginRight: 20,
//     },

//     cartContainer: {
//         position: "relative",
//         cursor: "pointer",
//     },

//   cartCount: {
//         background: "orange",
//         borderRadius: "50%",
//         padding: "4px 8px",
//         position: "absolute",
//         right: 10,
//         top: -5,
//         fontSize: 12,
//     },
// }