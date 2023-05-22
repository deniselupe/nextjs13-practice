interface Params {
    params: {
        productId: string | string[];
    }
}

/*
    URL: https://ptilol.com/products/1/2/3
    productId: ["1","2","3"]
    GUI: Welcome 123

    URL: https://ptilol.com/products/
    productId: undefined
    GUI: Welcome
*/

export default function ProductPage({ params }: Params) {
    const { productId } = params;

    console.log(productId);

    return (
        <div>
            <h3>Welcome {JSON.stringify(productId)}</h3>
        </div>
    );
}