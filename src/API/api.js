const API_URL = 'https://fakestoreapi.com';

class CapstoneService {
    constructor(API_URL) {
        this.API_URL = API_URL;
    }

    async allProducts() {
        try {
            const response = await fetch(`${API_URL}/products`);
            if (!response.ok) {
                throw new Error(`Failed to fetch poducts (HTTP status: ${response.status})`);
              }
            const result = await response.json();
            console.log("result: ", result);
            return result;
          } catch (error) {
            console.error('Uh oh, trouble fetching products!', error);
            return [];
          }
        }

      async singleProduct(productId) {
        try {
          const response = await fetch(`${API_URL}/products/${productId}`)
          if (!response.ok) {
            throw new Error(`Failed to fetch player (HTTP status: ${response.status})`);
        }
          const result = await response.json();
          console.log(result);
          return result;
      } catch (error) {
          console.error(error);
      }
      }
}

const api = new CapstoneService(API_URL);

export default api;