import React, { Fragment, useEffect } from "react";
// import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="SabziBzaar" />

          <div className="banner">
            

            <a href="#container">
              <button>
              ▼
              </button>
            </a>
            {/* <div className="banner1">
              <h1>SabziBazaar</h1>
              <h2>Experience the ultimate convenience of fresh produce shopping with our online vegetable emporium. Browse and select from a curated range of locally sourced, organic vegetables to elevate your culinary journey. Quality and freshness guaranteed, all at your fingertips.</h2>
            </div> */}
          </div>
          

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
