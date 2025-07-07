import Header from "./statics/Header";
import Footer from "./statics/Footer";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DetailsProduct = ({ products }) => {
  console.log("I'm in the detail page", products);
  const { id } = useParams();
  const productId = isNaN(id) ? id : parseInt(id, 10);
  const navigate = useNavigate();

  const product = products.find(
    (producto) => parseInt(producto.id) === productId
  );
  console.log("This is the product", product);

  // Show a toast if product not found
  if (!product) {
    toast.error("Product not found!", { autoClose: 2000 });
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <>
      <Header />
      <div className="container-fluid py-3 py-md-4 py-lg-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <h1 className="mb-3 mb-md-4 fs-2 fs-md-1 text-center text-md-start">
              Product Details: {productId}
            </h1>
            {product ? (
              <div className="row justify-content-center">
                <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
                  <div className="card h-100">
                    <div className="position-relative">
                      {product.imagen && (
                        <img
                          src={product.imagen}
                          className="card-img-top mt-2"
                          alt={product.nombre}
                          style={{
                            height: "250px",
                            objectFit: "cover",
                          }}
                        />
                      )}
                    </div>
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title fs-4 fs-md-3 mb-3">
                        {product.nombre}
                      </h5>
                      <p className="card-text fs-3 fs-md-2 fw-bold text-primary mt-auto">
                        ${product.precio}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                  <div className="alert alert-danger text-center" role="alert">
                    <i className="bi bi-exclamation-triangle-fill me-2"></i>
                    The product was not found.
                  </div>
                </div>
                <ToastContainer
                  position="top-right"
                  autoClose={2000}
                  hideProgressBar={false}
                  newestOnTop
                  closeOnClick
                  pauseOnHover
                  draggable
                  theme="colored"
                />
              </div>
            )}
            <div className="mt-4 mt-md-5">
              <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start gap-2">
                <button
                  className="btn btn-secondary btn-lg order-2 order-sm-1"
                  onClick={handleGoBack}
                >
                  <i className="bi bi-arrow-left me-2"></i>
                  Go Back
                </button>
                <button
                  className="btn btn-primary btn-lg order-1 order-sm-2"
                  onClick={handleGoHome}
                >
                  <i className="bi bi-house-fill me-2"></i>
                  Go Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailsProduct;
