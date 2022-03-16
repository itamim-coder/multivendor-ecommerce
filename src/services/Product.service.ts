import httpReq from "./http.service";

class ProductService {
  async getAllProducts(): Promise<IProduct[] | any> {
    const { data } = await httpReq.get("/product");
  }
}

export default new ProductService();
