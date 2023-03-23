import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Amazon_Data = ({ searchValue }) => {
  //? React Hooks...
  const [AmazonData, setAmazonData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [loader, setloader] = useState(false);
  // ---------------------------
  const productsPerPage = 3;
  const pagesVisited = pageNumber * productsPerPage;
  // ---------------------------
  //? useEffect Hook...
  useEffect(() => {
    Scrap_Amazon_Data();
  }, [searchValue.length >= 4 || searchValue.length == 0]);
  // ---------------------------
  async function Scrap_Amazon_Data() {
    try {
      if (`${searchValue}`) {
        setloader(false);
        const Get_Amazon_Data = await axios.get(
          `${process.env.REACT_APP_EXPRESS_SERVER}/Amazon_Products_List?name=${searchValue}`
        );
        // console.log(Get_Amazon_Data.data);
        setAmazonData(Get_Amazon_Data.data);
        setloader(true);
      } else {
        setloader(false);
        const Get_Amazon_Data = await axios.get(
          `${process.env.REACT_APP_EXPRESS_SERVER}/Amazon_Products_List`
        );
        // console.log(Get_Amazon_Data.data);
        setAmazonData(Get_Amazon_Data.data.slice(0, 10));
        setloader(true);
      }
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  }
  // ---------------------------
  const displayProducts = AmazonData.slice(
    pagesVisited, //1)=>(0 , 0 + 4 = 4)| 2) => (4 , 4 + 4 = 8)
    pagesVisited + productsPerPage
  ).map((item, index) => {
    return (
      <div className="card mb-5" key={index}>
        <div className="row g-2">
          <div className="col-md-5 p-2 img-card">
            <img
              src={item.image}
              style={{ width: "220px", height: "220px" }}
              className="img-fluid rounded-start"
              alt="AMAZON PRODUCT-NOT FOUND"
            />
          </div>
          <div className="col-md-7 card-content">
            <div className="card-body">
              <h5 className="card-title Amazon-title">{item.title}</h5>

              <div className="card-text">
                <div className="card-text">
                  <span className="key-name">PRICE</span> :
                  <span className="key-value">
                    {item.price === "" ? "Not Available" : `${item.price}`}
                  </span>
                </div>
                <div className="card-text">
                  <span className="key-name">RATING-AND-REVIEW </span>:
                  <span className="key-value">{item.rating_count} ⭐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  // ---------------------------
  const pageCount = Math.ceil(AmazonData.length / productsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
    // console.log(selected);
  };
  // ---------------------------
  return (
    <>
      <div className="Flipkart-div">
        <h2 className="store-title">AMAZON STORE</h2>
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
    </>
  );
};

export default Amazon_Data;
