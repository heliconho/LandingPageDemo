import React from "react";

const Footer = () => {
  return (
    <footer className="mt-3">
      <div className="bg-yellow-50 p-3">
        <div className="flex flex-col col-sm-2 col-4 px-3 px-sm-2 py-1 w-full px-1 mx-auto lg:max-w-6xl md:max-w-4xl">
          <div className="flex flex-row justify-around">
            <div className="col-sm-6 py-3">
              <div className="py-3">Logo</div>
              <h5 className="font-semibold font-size-base color-dark">
                {" "}
                預訂活動及慶祝所需{" "}
              </h5>
              <h6 className="font-semibold font-size-sm color-dark">
                {" "}
                輕鬆搞好每個活動{" "}
              </h6>
              <h6 className="font-semibold font-size-sm color-dark mt-3">
                © 2022 All Rights Reserved.
              </h6>
            </div>
            <div className="col-sm-3 py-3">
              <h5 className="font-size-base font-bold">合作商戶</h5>
              <div className="mb-3">
                <a
                  className="d-block font-size-sm light-gray-color link-default mb-2"
                  target="_blank"
                  href="https://merchant.reubird.hk/user/signup"
                >
                  立即申請
                </a>
                <a
                  className="d-block font-size-sm light-gray-color link-default mb-2"
                  target="_blank"
                  href="https://merchant.reubird.hk/user/login"
                >
                  商戶登入
                </a>
              </div>
              <h5 className="font-size-base font-bold">平台政策</h5>
              <div className="mb-3">
                <a
                  className="d-block font-size-sm light-gray-color link-default mb-2"
                  target="_blank"
                  href="https://reubird.hk/terms_and_conditions"
                >
                  條款與細則
                </a>
                <a
                  className="d-block font-size-sm light-gray-color link-default mb-2"
                  target="_blank"
                  href="https://reubird.hk/privacy_policy"
                >
                  {" "}
                  私隱政策
                </a>
              </div>
            </div>
            <div className="col-sm-3 py-3">
              <h5 className="font-size-base font-bold">關於我們</h5>
              <div className="mb-3">
                <a
                  className="d-block font-size-sm light-gray-color link-default mb-2"
                  target="_blank"
                  href="https://reubird.hk/about-us"
                >
                  關於我們
                </a>
                <a
                  className="d-block font-size-sm light-gray-color link-default mb-2"
                  target="_blank"
                  href="https://reubird.hk/contact-us"
                >
                  {" "}
                  聯絡我們
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
