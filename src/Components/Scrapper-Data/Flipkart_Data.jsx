import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Flipkart_Data = ({ searchValue }) => {
  //? React Hooks..
  const [FlipkartData, setFlipkartData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [loader, setloader] = useState(false);
  // ---------------------------
  const productsPerPage = 3;
  const pagesVisited = pageNumber * productsPerPage;
  // ---------------------------
  //? useEffect Hook...
  useEffect(() => {
    Scrap_Flipkart_Data();
  }, [searchValue.length >= 4 || searchValue.length == 0]);
  // ---------------------------
  async function Scrap_Flipkart_Data() {
    try {
      if (`${searchValue}`) {
        setloader(false);
        const Get_Flipkart_Data = await axios.get(
          `${process.env.REACT_APP_EXPRESS_SERVER}/Flipkart_Products_List?name=${searchValue}`
        );
        // console.log(Get_Flipkart_Data.data);
        setFlipkartData(Get_Flipkart_Data.data);
        setloader(true);
      } else {
        setloader(false);
        const Get_Flipkart_Data = await axios.get(
          `${process.env.REACT_APP_EXPRESS_SERVER}/Flipkart_Products_List`
        );
        // console.log(Get_Amazon_Data.data);
        setFlipkartData(Get_Flipkart_Data.data.slice(0, 10));
        setloader(true);
      }
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  }
  // ---------------------------
  const displayProducts = FlipkartData.slice(
    pagesVisited,
    pagesVisited + productsPerPage
  ).map((item, index) => {
    return (
      <div className="card mb-5" key={index}>
        <div className="row g-2">
          <div className="col-md-5 p-2 img-card shadow-inset-center">
            <img
              src={item.image}
              style={{ width: "270px", height: "180px" }}
              className="img-fluid rounded-start "
              alt="NOT FOUND"
            />
          </div>
          <div className="col-md-7 card-content">
            <div className="card-body">
              <h5 className="card-title col-md-10 Flipkart-title">
                {item.title}
              </h5>
              <p className="card-text Product-Description">
                {item.specifications}
              </p>
              <div className="card-text">
                <div className="card-text">
                  <span className="key-name"> OFFER-PRICE </span> :{" "}
                  <span className="key-value">{item.finalPriceWithOffer}</span>
                </div>
                <div className="text-muted">
                  <span className="key-name"> ORIGINAL-PRICE </span> :{" "}
                  <span className="key-value">
                    {" "}
                    <s>{item.price}</s>
                  </span>
                </div>
                <div className="card-text">
                  {" "}
                  <span className="key-name"> RATING </span> :{" "}
                  <span className="key-value"> {item.rating_star} ⭐</span>
                </div>
                <div className="card-text">
                  <span className="key-name"> REVIEWS </span> :
                  <span className="key-value"> {item.rating_and_review}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  // ---------------------------
  const pageCount = Math.ceil(FlipkartData.length / productsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  // ---------------------------
  return (
    <div className="Flipkart-div">
      <h2 className="store-title">FLIPKART STORE</h2>
      <hr></hr>
      {loader ? (
        displayProducts
      ) : (
        <div className="container">
          <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination justify-content-center"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Flipkart_Data;
