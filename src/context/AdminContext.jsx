import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
//import { faL } from "@fortawesome/free-solid-svg-icons";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ id: null, name: "", price: "" });
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(true);
  const [seleccionado, setSeleccionado] = useState(null);
  const [openEditor, setOpenEditor] = useState(false);
  const [error, setError] = useState(null);

  const urlapi = "https://68595f28138a18086dfe2d34.mockapi.io/products";

  useEffect(() => {
    const loadingToast = toast.loading("Loading products...");
    fetch(urlapi)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setProducts(data);
          setLoading(false);
          toast.dismiss(loadingToast);
          toast.success(`Successfully loaded ${data.length} products!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }, 2000);
      })
      .catch((error) => {
        const messageError = error || "Error fetching data the API.";
        console.log("Error fetching data of the server", messageError);
        setError(messageError);
        setLoading(false);
        // Show error toast
        toast.error(`Failed to load products: ${error.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  }, []);

  const loadProduct = async () => {
    try {
      const response = await fetch(urlapi);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log("Error fetching the product from de API", error);
    }
  };

  const addProduct = async (product) => {
    try {
      const response = await fetch(urlapi, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(product),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("This are the data", data);
      loadProduct();
      setOpen(false);
      Swal.fire({
        title: "The product was added.",
        text: "The product was added successfully!",
        icon: "success",
      });
      return true;
    } catch (error) {
      console.log("Error adding new products", error);
    }
  };

  const editProduct = async (product) => {
    const { id } = product;
    const productId = String(id);
    console.log("That are the products", product);
    if (!product || !productId) {
      toast.error("Invalida product data");
      return false;
    }
    try {
      setLoading(true);
      const loadingToast = toast.loading("Updating product...");
      const response = await fetch(`${urlapi}/${productId}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(product),
      });
      toast.dismiss(loadingToast);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setOpenEditor(false);
      setSeleccionado(null);
      loadProduct();
      const updatedProduct = await response.json();
      console.log("This are the data in the edit function", updatedProduct);
      Swal.fire({
          title: "UPDATING PRODUCT",
          text: "The product was updated succesfully!",
          icon: "success",
        });

      /*setProducts((prevProducts) =>
        prevProducts.map((p) => (p.id === product.id ? updatedProduct : p))
      );*/
      return true;
    } catch (error) {
      console.log("Error editing the  new product", error);
      // Show specific error messages
      if (error.name === "TypeError" && error.message.includes("fetch")) {
        toast.error("Network error. Please check your connection.");
      } else if (error.message.includes("404")) {
        toast.error("Product not found. It may have been deleted.");
      } else if (error.message.includes("403")) {
        toast.error("You don't have permission to edit this product.");
      } else {
        toast.error(`Failed to update product: ${error.message}`);
      }
      return false;
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (product) => {
    const confirm = window.confirm("Are you sure to delete the product?");
    const { id } = product;
    const productId = String(id);
    if (confirm) {
      try {
        const response = await fetch(
          `https://68595f28138a18086dfe2d34.mockapi.io/products/${productId}`,
          {
            method: "DELETE",
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        loadProduct();
        Swal.fire({
          title: "DELETING PRODUCT",
          text: "The product was deleted!",
          icon: "error",
        });
      } catch (error) {
        console.error("Delete failed:", error);
        Swal.fire({
          title: "Error",
          text: "Failed to delete product",
          icon: "error",
        });
      }
    }
  };

  const value = {
    products,
    loading,
    open,
    setOpen,
    seleccionado,
    setSeleccionado,
    openEditor,
    setOpenEditor,
    form,
    setForm,
    error,
    addProduct,
    editProduct,
    deleteProduct,
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};
