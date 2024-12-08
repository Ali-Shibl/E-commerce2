import { createContext, useEffect, useState } from "react";
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';


export const WishList = createContext('');

function WishListProvider({ children }) {

    const [favs, setfavs] = useState(() => {
        const storedFav = localStorage.getItem("favs");
        return storedFav ? JSON.parse(storedFav) : [];
    });

    const [isLoading, setisLoading] = useState(false)

    function addFav(product) {
        
         
        if (!favs.some((item) => item.id === product.id)) {
            setfavs((prevCart) => [...prevCart, product]);
            toast.success('The product was added to the whishlist successfully');
          }
     
    }
  

    function deleteProductWishlist(product) {
        

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


                setfavs((prevFavs) => prevFavs.filter((item) => item.id !== product.id));


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
    function removeWishlist() {


        
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


                setfavs([])


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
        localStorage.setItem("favs", JSON.stringify(favs));
    }, [favs]);

    return (
        <WishList.Provider value={{isLoading,favs,addFav,removeWishlist,deleteProductWishlist }}>
            {children}
        </WishList.Provider>
    );
}

export default WishListProvider;
