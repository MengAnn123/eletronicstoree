import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Item from '../Item/Item';

const Popular = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const colRef = collection(db, 'Product');
        const snapshot = await getDocs(colRef);
        const fetchedProducts = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching documents:", error.message);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className='popular'>
      <h1>POPULAR MODEL</h1>
      <hr />

      <div className="popular-item">
        {products.map((item, i) => (
          <Item key={i} id={item.id} name={item.Name} image={item.image} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default Popular;