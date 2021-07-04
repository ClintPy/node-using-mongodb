import { addnewProduct } from "../../controller";

function routes(app){
    app.route("/products").post(addnewProduct)
}