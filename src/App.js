import "./App.css";
import Navbar from "./component/navbar";
import SubNavbar from "./component/subnavbar";
import ImageCarousel from "./component/carousel";
import { Container } from "postcss";
import Productcard from "./component/productcard";
import ProductcardOne from "./component/productcard1";
import ProductcardTwo from "./component/productcard2";
import Footer from "./component/footer";

function App() {
  return (
    <div className="App">
      <section className="sticky-top bg-white shadow-sm">
        <div className="flex py-3">
          <Navbar />
        </div>
        <div className="flex">
          <SubNavbar />
        </div>
      </section>
      <div className="rb-hero-header position-relative">
        <ImageCarousel />
      </div>
      <div className="flex flex-col col-sm-2 col-4 px-3 px-sm-2 py-1 w-full px-1 mx-auto lg:max-w-6xl md:max-w-4xl">
        <div className="py-3">
          <h5 class="text-2xl font-bold text-start">慶祝 / 送禮</h5>
        </div>
        <div className="flex flex-row flex-wrap">
          <div className="flex col-sm-2 col-4 px-1 px-sm-2 py-1 w-full px-1 mx-auto lg:max-w-6xl md:max-w-4xl">
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
          </div>
        </div>
      </div>
      <div className="flex flex-col col-sm-2 col-4 px-3 px-sm-2 py-1 w-full px-1 mx-auto lg:max-w-6xl md:max-w-4xl">
        <div className="py-3">
          <h5 class="text-2xl font-bold text-start">活動及聚會美食</h5>
        </div>
        <div className="flex flex-row flex-wrap">
          <div className="flex col-sm-2 col-4 px-1 px-sm-2 py-1 w-full px-1 mx-auto lg:max-w-6xl md:max-w-4xl">
            <ProductcardOne />
            <ProductcardOne />
            <ProductcardOne />
            <ProductcardOne />
          </div>
        </div>
      </div>
      <div className="flex flex-col col-sm-2 col-4 px-3 px-sm-2 py-1 w-full px-1 mx-auto lg:max-w-6xl md:max-w-4xl">
        <div className="py-3">
          <h5 class="text-2xl font-bold text-start">場地租用及相關服務</h5>
        </div>
        <div className="flex flex-row flex-wrap">
          <div className="flex col-sm-2 col-4 px-1 px-sm-2 py-1 w-full px-1 mx-auto lg:max-w-6xl md:max-w-4xl">
            <ProductcardTwo />
            <ProductcardTwo />
            <ProductcardTwo />
            <ProductcardTwo />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
