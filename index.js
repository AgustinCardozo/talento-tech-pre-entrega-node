import { ProductService } from "./src/application/product.service.js";

const args = process.argv;
const [method, resource, ...params] = args.slice(2);

async function runApp() {
    if (!method || !resource) {
        console.error("ERROR: Method and resource are required.");
        return;
    }

    const [entity, id] = resource.split("/");
    if(entity.toLowerCase() !== "products") {
        console.error(`ERROR: The entity "${entity}" is not supported.`);
        return;
    }

    try {
        let result;
        switch (method.toUpperCase()) {
            case "GET":
                if (id) {
                    result = await ProductService.getById(id);
                } else {
                    result = await ProductService.getAll();
                }
                break;
            case "POST":
                result = await ProductService.create(params[0], params[1], params[2]);
                break;
            case "DELETE":
                if (!id) {
                    console.error("ERROR: Product ID is required for DELETE method.");
                    return;
                }
                result = await ProductService.delete(id);
                break;
            case "PUT":
                if (!id) {
                    throw new Error("Product ID is required for PUT method (ej: products/10).");
                }
                // Los parámetros restantes contienen [title, price, category]
                if (params.length < 3) {
                    throw new Error("Title, price, and category are required for updating.");
                }
                
                // Construye el objeto de datos que espera el ProductService.update
                const productData = {
                    title: params[0],
                    price: params[1],
                    category: params[2],
                    // Aquí podrías añadir otros campos si la API los soportara
                };

                // Llama al servicio con el ID y el objeto de datos
                result = await ProductService.update(id, productData);
                break;
            
        }
        if (result) {
            console.log(`Operation Successful (${method} ${resource}):`);
            console.log(JSON.stringify(result, null, 2));
        } else {
             console.log("Operation Successful. No response body received.");
        }
    } catch (error) {
        console.error(`ERROR: ${error.message}`);
    }
}

runApp();
