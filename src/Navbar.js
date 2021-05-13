import React from 'react';

const Navbar = (props) => {
      return(
            <div style={styles.nav}>
                <div style={styles.cartIconContainer}>
                    <img style={styles.cartIcon} src="https://www.flaticon.com/svg/vstatic/svg/1170/1170627.svg?token=exp=1619779143~hmac=b3165a59653fab701e9a1c63a04a7e8a" 
                        alt="cart tcon"/>
                    <span style={styles.cartCount}>{props.count}</span>
                </div>
            </div>
        )             
}

const styles = {
    cartIcon:{
        height: 32,
        marginRight: 20
    },
    nav:{
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer:{
        postion: 'relative'
    },
    cartCount:{
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9
    }
}


export default Navbar; 