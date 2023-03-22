import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Snapdeal_Data = ({ searchValue }) => {
  const [SnapdealData, setSnapdealData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [loader, setloader] = useState(false);

  const productsPerPage = 4;
  const pagesVisited = pageNumber * productsPerPage;

  useEffect(() => {
    Scrap_Snapdeal_Data();
  }, [searchValue.length >= 4 || searchValue.length == 0]);
  async function Scrap_Snapdeal_Data() {
    try {
      if (`${searchValue}`) {
        setloader(false);
        const Get_Snapdeal_Data = await axios.get(
          `https://web-scrapper-e-commerce.onrender.com/Snapdeal_Products_List?name=${searchValue}`
        );
        // console.log(Get_Flipkart_Data.data);
        setSnapdealData(Get_Snapdeal_Data.data);
        setloader(true);
      } else {
        setloader(false);
        const Get_Snapdeal_Data = await axios.get(
          `https://web-scrapper-e-commerce.onrender.com/Snapdeal_Products_List`
        );
        // console.log(Get_Amazon_Data.data);
        setSnapdealData(Get_Snapdeal_Data.data.slice(0, 10));
        setloader(true);
      }
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  }

  const displayProducts = SnapdealData.slice(
    pagesVisited,
    pagesVisited + productsPerPage
  ).map((item, index) => {
    return (
      <div className="card mb-5" key={index}>
        <div className="row g-2">
          <div className="col-md-5 p-2 img-card shadow-inset-center">
            <img
              src={item.image}
              style={{ width: "220px", height: "220px" }}
              className="img-fluid rounded-start"
              alt="NOT FOUND"
            />
          </div>

          <div className="col-md-7 card-content">
            <div className="card-body">
              <h5 className="card-title snapdeal-title">{item.title}</h5>

              <div className="card-text">
                <div className="card-text">
                  <span className="key-name">RATING</span> :⭐⭐⭐⭐
                </div>
                <div className="card-text">
                  <span className="key-name">REVIEW</span> :
                  <span className="key-value">{item.rating_count}</span>{" "}
                </div>
                <div className="card-text">
                  <span className="key-name"> OFFER-PRICE</span> :
                  <span className="key-value">{item.finalPriceWithOffer}</span>{" "}
                </div>
                <div className="text-muted">
                  <span className="key-name">ORIGINAL-PRICE</span> :
                  <span className="key-value">
                    <s>{item.price}</s>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const pageCount = Math.ceil(SnapdealData.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="Flipkart-div">
      <h2 className="store-title">SNAPDEAL STORE</h2>
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

export default Snapdeal_Data;
