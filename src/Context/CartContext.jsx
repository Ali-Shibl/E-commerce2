import { createContext, useState, useEffect } from "react";
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';


// Create the context
export const cartContext = createContext('');

function CartContextProvider({ children }) {



    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("productsCart");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    const [isLoading, setisLoading] = useState(false)

    function addCart(product) {
        
        if (!cart.some((item) => item.id === product.id)) {
            setCart((prevCart) => [...prevCart, product]);
            toast.success('The product was added to the basket successfully');
          }

    }
  
    function deleteProduct(product) {
        

        const swalWithBootstrapButtons =  Swal.mixin({
            customClass: {
              confirmButton: "ms-3 btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
          }).then((result) => {

            if (result.isConfirmed) {
                setisLoading(true)


                setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));


              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              setisLoading(false)

            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "The product has not been erased",
                icon: "error"
              });
            }

          });



      }
    function removeCart() {


        
        const swalWithBootstrapButtons =  Swal.mixin({
            customClass: {
              confirmButton: "ms-3 btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
          }).then((result) => {

            if (result.isConfirmed) {
                setisLoading(true)


                setCart([])


              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "All Products Cleared",
                icon: "success"
              });
              setisLoading(false)

            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "The products has not been erased",
                icon: "error"
              });
            }

          });

      }
    useEffect(() => {
        localStorage.setItem("productsCart", JSON.stringify(cart));
    }, [cart]);

    return (
        <cartContext.Provider value={{isLoading, cart, addCart ,deleteProduct ,removeCart }}>
            {children}
        </cartContext.Provider>
    );
}

export default CartContextProvider;
