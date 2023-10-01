(() => {

  interface Product {
    id: number;
    name: string;
  }

  class ProductService {

    getProduct(id: number) {
      console.log('Producto: ', { id, name: 'OLED Tv' });
    }

    setProduct(product: Product) {
      console.log('Guardando en base de datos', product);
    }
  }

  class Mailer {

    private masterEmail: string = 'no-reply@house-d.com';

    sendEmail(emailList: string[], template: 'to-clients' | 'to-admins') {
      console.log('Enviando correo a los clientes', template);
      console.log(emailList);
    }
  }

  class ProductBloc {

    private productService:  ProductService;
    private mailer: Mailer;

    constructor(productService: ProductService, mailer: Mailer) {
      this.productService = productService;
      this.mailer = mailer;
    }

    loadProduct(id: number) {
      this.productService.getProduct(id);
    }

    saveProduct(product: Product) {
      this.productService.setProduct(product);
    }

    notifyClients() {
      this.mailer.sendEmail(['kanix@google.com'], 'to-clients');
    }

  }

  class CartBloc {

    private itemsInCart: Object[] = [];

    addToCart(productId: number) {
      console.log('Agregando al carrito ', productId);
    }
  }

  const productService = new ProductService();
  const mailer = new Mailer();
  const productBloc = new ProductBloc(productService, mailer);
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: 'OLED TV' });
  productBloc.notifyClients();
  cartBloc.addToCart(10);

})();