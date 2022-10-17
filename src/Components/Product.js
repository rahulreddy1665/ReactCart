export default function Product(props) {
    const { products, AddProducts } = props
    return (
        <div className='block  col-2'>
            <h2>Products</h2>
            <div className='row'>
                {products.map((item) => (
                    <div key={item.id}>
                        <div className="card">
                            <img className="small" src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <div> &#x20b9;{item.price}</div>
                            <div>
                                <button onClick={() => AddProducts(item)}>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
