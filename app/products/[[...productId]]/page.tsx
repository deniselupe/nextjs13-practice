/*
    URL: https://ptilol.com/products/1/2/3
    productId: ["1","2","3"]
    GUI: Welcome 123

    URL: https://ptilol.com/products/
    productId: undefined
    GUI: Welcome


    
    Type Definitions For Dynamic Parameters

    Route: app/blog/[slug]/page.js	
    Type Definition: { slug: string }

    Route: app/shop/[...slug]/page.js
    Type Definition: { slug: string[] }

    Route: app/[categoryId]/[itemId]/page.js
    Type Definition: { categoryId: string, itemId: string }
*/

interface Params {
    params: {
        productId: string[];
    }
}

export default function ProductPage({ params }: Params) {
    const { productId } = params;

    console.log(productId);

    return (
        <div>
            {
                !!productId
                ?
                productId.map((id) => {
                    return <h2 key={id}>Welcome {id}</h2>
                })
                :
                <h2>Welcome</h2>
            }
        </div>
    );
}