import React from "react";
import Navbar from "../Navbar";
import "../../css/Dashboard.css";
import Footer from "../footer/Footer";
import Slider from "react-slick";
import img1 from "../../resources/image/infografis1.jpg";
import img2 from "../../resources/image/infografis2.jpg";
import img3 from "../../resources/image/infografis3.jpg";
import img4 from "../../resources/image/infografis4.jpg";
import { block } from "strip-comments";

const Dashboard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="" style={{ marginTop: "10px" }}>
      <div className="ui container">
        <Navbar />

        <Slider style={{ display: block }} {...settings}>
          <div>
            <img
              className="banner"
              alt=""
              src="https://greatmind.id/uploads/article-detail/cd91dae139696280e396129ef3209c5d95a079e5.jpg"
            />
          </div>
          <div>
            <img
              className="banner"
              alt=""
              src="https://greatmind.id/uploads/article-detail/0d7a72789ab751ca3b654eb4b6d6b1033175eeb7.jpg"
            />
          </div>
          <div>
            <img
              className="banner"
              alt=""
              src="https://greatmind.id/uploads/article-detail/b178e9cf4a8164ceac23f20b806a32d3b701bab2.jpg"
            />
          </div>
        </Slider>

        <h2 style={{ textAlign: "center", marginBottom: "2%" }}>
          Ceritakan tanpa khawatir.
        </h2>
        {/* Grid */}
        <div className="ui container" style={{ marginBottom: "10%" }}>
          <div className="ui grid ">
            {/* Start  Column Pertama*/}
            <div className="six wide column custom-grid">
              <div className="ui card ">
                <div className="image gambar-infografis">
                  <img className="infograph" alt="" src={img1} />
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
                  <img className="infograph" alt="" src={img2} />
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
                  <img className="infograph" alt="" src={img3} />
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
                  <img className="infograph" alt="" src={img4} />
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
