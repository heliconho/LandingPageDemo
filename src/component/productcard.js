import React from "react";

const Productcard = () => {
  return (
    <a className="rb-link-default h-100 d-block pb-3">
      <div className="border-2 rounded-b-lg drop-shadow-2xl mx-4 mb-3 h-100">
        <img
          class="rb-home-cat-img-desktop blur-up lazyloaded"
          data-src="https://cdn.reubird.hk/general/images/cakeCover.jpeg"
          src="https://cdn.reubird.hk/general/images/cakeCover.jpeg"
        />
        <div class="px-2 pt-2 pb-0 pt-sm-3 px-sm-3">
          <h5 class="rb-font-size-base d-none d-sm-block">特色蛋糕</h5>
        </div>
      </div>
    </a>
  );
};

export default Productcard;
