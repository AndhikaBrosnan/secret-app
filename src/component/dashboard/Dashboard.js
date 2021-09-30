import React from "react";
import Navbar from "../Navbar";
import "../../css/Dashboard.css";
import Footer from "../footer/Footer";
import Slider from "react-slick";

const Dashboard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="" style={{ marginTop: "10px" }}>
      <div className="ui container">
        <Navbar />

        <Slider {...settings}>
          <div>
            <img
              className="banner"
              alt=""
              src="data:image/jpeg;base64,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"
            />
          </div>
          <div>
            <img
              className="banner"
              alt=""
              src="https://wallpaperaccess.com/full/2059786.jpg"
            />
          </div>
          <div>
            <img
              className="banner"
              alt=""
              src="data:image/jpeg;base64,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"
            />
          </div>
        </Slider>

        <h2 style={{ textAlign: "center", marginBottom: "2%" }}>
          Ceritakan tanpa khawatir.
        </h2>
        {/* Grid */}
        <div className="ui container" style={{ marginBottom: "10%" }}>
          <div class="ui grid ">
            {/* Start  Column Pertama*/}
            <div class="six wide column custom-grid">
              <div className="ui card ">
                <div className="image">
                  <img
                    alt=""
                    src="https://semantic-ui.com/images/wireframe/image.png"
                  />
                </div>
                <div className="content">
                  {/* <span className="header">Kristy</span> */}
                  <div className="description">
                    Kamu bisa atur akunmu agar tetap anonim, atau tidak.
                  </div>
                </div>
              </div>
            </div>
            {/* End Column Pertama */}
            {/* Start Column Kedua */}
            <div className="six wide column custom-grid">
              <div className="ui card ">
                <div className="image">
                  <img
                    alt=""
                    src="https://semantic-ui.com/images/wireframe/image.png"
                  />
                </div>
                <div className="content">
                  {/* <span className="header">Kristy</span> */}
                  <div className="description">
                    Ceritakan keresahanmu, dan dapatkan pandangan dan pendapat
                    dari user awam maupun profesional.
                  </div>
                </div>
              </div>
            </div>
            {/* End Column Kedua */}

            {/* Start Column Ketiga */}
            <div className="six wide column custom-grid">
              <div className="ui card ">
                <div className="image">
                  <img
                    alt=""
                    src="https://semantic-ui.com/images/wireframe/image.png"
                  />
                </div>
                <div className="content">
                  {/* <span className="header">Kristy</span> */}
                  <div className="description">
                    Kamu bisa pilih komentar yang mau kamu baca maupun tidak.
                    Buat dirimu nyaman!.
                  </div>
                </div>
              </div>
            </div>
            {/* End Column Ketiga */}

            {/* Start Column Keempat */}
            <div className="six wide column custom-grid">
              <div className="ui card ">
                <div className="image">
                  <img
                    alt=""
                    src="https://semantic-ui.com/images/wireframe/image.png"
                  />
                </div>
                <div className="content">
                  {/* <span className="header">Kristy</span> */}
                  <div className="description">
                    Kamu bisa chat secara personal dengan user lain.
                  </div>
                </div>
              </div>
            </div>
            {/* End Column Keempat */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
