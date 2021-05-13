
import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        products: [],
        loading: true
    }
    this.db = firebase.firestore();
}
componentDidMount (){
  // firebase
  // .firestore()
  // .collection('products')
  // .get()
  // .then((snapshot) => {
  //   console.log(snapshot);
  //   snapshot.docs.map((doc) => {
  //     console.log(doc.data());
  //   });
  //   const products = snapshot.docs.map((doc) => {
  //     const data = doc.data();
  //     data['id'] = doc.id;
  //     return data;
  //   })
  //   this.setState({
  //     products,
  //     loading: false
  //   })
  // })
  this.db
  .collection('products')
  // .where('price','<=',2000)
  .orderBy('price','desc')
  .onSnapshot((snapshot) => {
      //console.log(snapshot);
      snapshot.docs.map((doc) => {
       // console.log(doc.data());
      });
      const products = snapshot.docs.map((doc) => {
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      })
      this.setState({
        products,
        loading: false
      })
    })
}


handleIncreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);

    // products[index].qty += 1;
    // this.setState({
    //     products
    // })
    const docRef = this.db.collection('products').doc(products[index].id);

    docRef.update({
      qty: products[index].qty + 1
    })
    .then(() => {
     // console.log('doc updated')
    })
    .catch((error) => {
      console.log(error);
    })

}
handleDecreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty <= 1){
        return;
    }
    // products[index].qty -= 1;
    // this.setState({
    //     products,
        
    // })
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef.update({
      qty: products[index].qty -1
    })
    .then(() => {
      //console.log('qty decreased');
    })
    .catch((error) => {
      console.log(error);
    })

}
handleDeleteProduct = (id) => {
    const {products} = this.state;

    // const items = products.filter((item) => item.id !== id); // return array whoose id is not equal to id passed
    // this.setState({
    //     products: items
    // }) 
    const docRef = this.db.collection('products').doc(id);
    docRef.delete().then(() => {
      //console.log('deleted);
    })
    .catch((error) => {
      console.log(error);
    })
}

getCartCount = () => {
  const {products} = this.state;
  let count = 0;
  products.forEach((product) => {
    count += product.qty;
  })
  return count;
}

getCartTotal = () => {
  const {products} = this.state;
  let cartTotal = 0;
  products.map((product) => {
    cartTotal = cartTotal + product.qty* product.price
    return '';
  })
  return cartTotal;
}

addProduct = () => {
  this.db
  .collection('products')
  .add({
    img: '',
    price: 1200,
    qty: 3,
    title: 'Shoes'
  })
  .then((docRef) => {
    //console.log(docRef);
  })
  .catch((error) => {
    console.log('Error : ', error)
  })
}
  render (){

  const {products, loading} = this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      {/* <button style={{padding:20, fontSize:20}} onClick={this.addProduct}>Add a product</button> */}
     <Cart
     products = {products}
      onIncreaseQuantity = {this.handleIncreaseQuantity}
      onDecreaseQuantity = {this.handleDecreaseQuantity}
      onDeleteProduct  = {this.handleDeleteProduct}
     />
     {loading && <h1>Loading Products.....</h1>}
     <div style={{fontSize:20, padding: 10}}>TOTAL : {this.getCartTotal()}</div>
    </div>
  );
}
}

export default App;
