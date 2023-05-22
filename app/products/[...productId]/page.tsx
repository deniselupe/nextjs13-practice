/*
    Difference between Catch-All Segments and Optional Catch-All Segments

    The difference between catch-all and optional catch-all segments is that 
    with optional, the route without the parameter is also matched (/products for 
    this example).
*/

interface NonOptParams {
    params: {
        productId: string[]
    }
}

export default function ProductDetailsPage({ params }: NonOptParams) {
    const { productId } = params;

    return (
        <div>
            {
                productId.map((id) => {
                    return <h2 key={id}>Welcome {id}</h2>
                })
            }
        </div>
    );
}