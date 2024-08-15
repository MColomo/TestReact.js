import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import ProductDetail from '../components/ProductDetail'
import Header from '../components/Header'
import BackBtn from '../components/BackBtn'

export default function Details() {
    const [item, setPosts] = useState([]);
    const params = useParams();

    useEffect(() => {
        const url = "https://dulces-petalos.herokuapp.com/api/product/"+params.productId;
        fetch(url)
          .then((response) => response.json())
          .then((data) => setPosts(data));
        }, []);
    let navigate = useNavigate();
    return (
        <main>
            <div style={{ display: 'flex', marginBottom: '10px' }}>
                <BackBtn/>
            </div>
            {item ? (
                <div style={{ display: 'flex', marginBottom: '10px' }}>
                <div key='img' style={{ padding: '10px' }}>
                    <img src={item.imgUrl}/>
                </div>
                <div key='det' style={{ padding: '10px' }}>
                    <ProductDetail 
                    productInfo={item}/>
                </div>
                </div>
            ) : (
                <h1>Error 404: Product Not Found</h1>
            )}
        </main>
    );
}