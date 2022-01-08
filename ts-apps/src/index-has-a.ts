//has-a

class OrderService {
    constructor() { }
    findAll() {
        return 'Orders'
    }
}

class UserService {

}

class OrderController {
    //has -a 
    constructor(private orderService: OrderService) { }

    public init() {
        console.log(this.orderService.findAll())
    }
}
let orderCtrl = new OrderController(new OrderService());
orderCtrl.init()

/**
 *  Argument of type 'UserService' is not assignable to parameter of type 'OrderService'.
  Property 'findAll' is missing in type 'UserService' but required in type 'OrderService'.

25 orderCtrl = new OrderController(new UserService());
 */
//orderCtrl = new OrderController(new UserService());
