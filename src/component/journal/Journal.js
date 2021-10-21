import React from "react";
import Navbar from "../Navbar";
import Footer from "../footer/Footer";

const Journal = () => {
  return (
    <div className="" style={{ marginTop: "10px" }}>
      <div className="ui container">
        <Navbar />

        <br></br>
        <i className="massive cogs icon"></i>
        <h1>On Maintenance...</h1>
        <br></br>

        <p style={{ marginBottom: "10%", textAlign: "justify" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id
          euismod dui, sit amet efficitur nisi. Integer luctus ultricies dui, at
          elementum nisl bibendum id. Mauris porttitor sem vitae nisl cursus
          fermentum. Nullam semper tempor bibendum. Sed eget eros a est faucibus
          aliquam non id felis. Nam ut eros orci. Donec sollicitudin malesuada
          rutrum. Sed a risus gravida odio auctor condimentum non a lectus.
          Curabitur gravida tincidunt dui, eget venenatis orci pretium sit amet.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          suscipit et orci sit amet elementum. Etiam tellus ligula, venenatis ac
          posuere quis, accumsan a elit. Sed sem nulla, pellentesque vitae
          blandit quis, congue sit amet arcu. Phasellus lobortis diam eu lacus
          laoreet, a interdum orci ultricies. Praesent vehicula non eros et
          congue. Cras accumsan feugiat facilisis. Pellentesque ultrices sem ac
          eros varius convallis. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Aliquam erat volutpat.
          Curabitur imperdiet sollicitudin hendrerit. Pellentesque aliquet
          congue tempus. Duis blandit quis nibh vitae porta. Sed sit amet tempus
          nunc, viverra posuere erat. Aenean posuere lorem dolor, sit amet
          sodales turpis aliquam interdum.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Journal;
