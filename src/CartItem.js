import React from 'react';

const CartItem = (props) => {

 
       // console.log(this.props);
        const{price,title,qty} = props.product;
        const {product,
             onIncreaseQuantity, 
             onDecreaseQuantity,
             onDeleteProduct} = props;
        return (
            <div className="cart-item">
                <div className="left-block">
                <img style={styles.image} src={product.img}/>
                </div>
                <div className="right-block">
                   <div style={
                       {
                           fontSize: 25
                       }
                   }>{title}</div>
                   <div style={{color:'#777'}}>$ {price}</div>
                   <div style={{color:'#777'}}> Qty:  {qty} </div>
                   <div className="cart-item-actions">
                       {/*Buttons */}
                       <img onClick={() => onIncreaseQuantity(product)} src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1619731511~hmac=278b2949be1971a6fc5af427ef0f8928" className="action-icons" alt="increase"/>                       
                       <img onClick={() => onDecreaseQuantity(product)} src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1619731484~hmac=19e0905d68c7e33eb3d88daed705cfe8" className="action-icons" alt="decrease"/>

                       <img onClick={() => onDeleteProduct(product.id)} src="https://www.flaticon.com/svg/vstatic/svg/3096/3096687.svg?token=exp=1619731590~hmac=0d7e3a5be24af3f6aea291ac25052a90" className="action-icons" alt="delete"/>
                   </div>
                </div>
            </div>
        );                 
}

const styles = {
    image:{
        height: 110,
        width: 110,
        borderRadius: 4,
        backgroundColor: '#ccc'
    }
}


export default CartItem;