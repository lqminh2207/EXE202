/* eslint-disable no-undef */
import React, { useEffect } from "react";
import './aboutus.css';
import { logoLight } from "../assets";

const AboutUs = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = "https://cdn.jsdelivr.net/npm/pagedone@1.1.2/src/js/pagedone.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js";
    script2.async = true;
    document.body.appendChild(script2);

    script2.onload = () => {
      var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: -10,
        slidesPerView: 3,
        watchSlidesProgress: true,
      });
      new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 32,
        thumbs: {
          swiper: swiper,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      new Swiper(".teamswiper", {
        slidesPerView: 1,
        spaceBetween: 32,
        centeredSlides: false,
        slidesPerGroupSkip: 1,
        grabCursor: true,
        loop: true,
        keyboard: {
          enabled: true,
        },
        breakpoints: {
          769: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        scrollbar: {
          el: ".swiper-scrollbar",
        },
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
      });
    };
  }, []);

  return (
    <div className="font-inter">
      <section className="py-14 lg:py-24 relative z-0 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h1
            className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl  text-gray-900 mb-5 md:text-5xl md:leading-normal">
            <span className="text-indigo-600">Canweare</span>
          </h1>
          <p className="mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">Sứ mệnh của brand áo phông được thiết kế riêng cho sinh viên FPT là tạo ra không chỉ là những sản phẩm thời trang chất lượng cao, mà còn là những biểu tượng văn hoá. Biểu tượng quen thuộc của sinh viên FPT là cóc vàng nên hình ảnh con cóc sẽ là hình ảnh chủ đạo. Chúng mình hướng đến là mẫu áo dành riêng cho các ngành.</p>


        </div>
      </section>

      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="img-box">
              <img src={logoLight} alt="About Us tailwind page"
                className="max-lg:mx-auto" />
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full">
                <h2
                  className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                  Về chúng tôi </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Canweare xuất phát từ "canwear" với ý nghĩa ai cũng có thể mặc. Với mục tiêu chiếc áo phông không chỉ là trang phục mà còn là biểu tượng của niềm tự hào và tinh thần đồng đội mạnh mẽ trong cộng đồng sinh viên FPT. Đồng thời Canweare cũng lan toả một thông điệp là dù có khó khăn thử thách như thế nào chúng ta có thể làm được.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">

            <div className="lg:pr-24 flex items-center">
              <div className="data w-full">
                <img src="https://pagedone.io/asset/uploads/1702034785.png" alt="About Us tailwind page"
                  className="block lg:hidden mb-9 mx-auto" />
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">Giá trị cốt lõi</h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Brand luôn quan tâm đến trải nghiệm của khách hàng. Đảm bảo mỗi sản phẩm trước khi đến tay khách hàng đều phải trải qua quá trình kiểm định nghiêm ngặt để đạt chuẩn chất lượng cao. Mỗi đơn hàng của bạn đều được brand gói ghém cẩn thận. Không ngừng thu thập và phân tích ý kiến phản hồi từ khách hàng để không ngừng cải thiện sản phẩm và dịch vụ.
                </p>
              </div>
            </div>
            <div className="img-box ">
              <img src="https://pagedone.io/asset/uploads/1702034785.png" alt="About Us tailwind page"
                className="hidden lg:block " />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">Thành tựu</h2>
          <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
            <div
              className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  95%
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">Phản hồi tích cực</h4>
                  <p className="text-xs text-gray-500 leading-5">Các sản phẩm của Canweare nhận được khá nhiều phản hồi tích cực về chất lượng áo cũng như thiết kế</p>
                </div>
              </div>
            </div>
            <div
              className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  30+
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">Thiết kế</h4>
                  <p className="text-xs text-gray-500 leading-5">Hàng loạt các mẫu áo được thiết kế dành riêng đặc biệt cho các chuyên ngành và câu lạc bộ nhằm tạo sự đa dạng.</p>
                </div>
              </div>
            </div>
            <div
              className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  500+
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">Đơn hàng</h4>
                  <p className="text-xs text-gray-500 leading-5">Đợt mở bán đầu tiên nhận được rất nhiều sự ủng hộ từ khách hàng.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" py-14 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-16 rounded-full">
            <h2 className="text-4xl font-manrope font-bold text-gray-900 text-center">Phản hồi từ khách hàng!</h2>
          </div>

          <div style={{ "--swiper-navigation-color": "#fff", "--swiper-pagination-color": "#fff", overflow: "hidden" }} className="swiper mySwiper2">
            <div className="swiper-wrapper flex">
              <div className="swiper-slide">
                <div className="relative mb-20">
                  <div className="max-w-max mx-auto lg:max-w-4xl">
                    <p className="text-lg text-gray-500 leading-8 mb-8 text-center">
                      Mình được biết đến thương hiệu Canweare đầu tiên qua giới thiệu của bạn bè cùng lớp, lúc đó mình cũng không kích thích lắm để mua hàng vì mình nghĩ hàng thời trang do bạn mình tự tay làm thì sẽ không có gì quá nổi bật. Sau đó mình được cho xem mẫu và mình thấy khá ấn tượng. Áo được thiết kế dựa trên linh vật của trường và có những mẫu được thiết kế riêng cho từng ngành học và câu lạc bộ.
                      Mình thấy có mẫu áo về CLB Street Workout của trường nên mình đã mua luôn mẫu này và mình sẽ rủ những bạn khác trong CLB mua chung.
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="relative mb-20">
                  <div className="max-w-max mx-auto lg:max-w-4xl">
                    <p className="text-lg text-gray-500 leading-8 mb-8 text-center">
                      Sản phẩm mình nhận về vải dày hơn cotton thường rất nhiều và cảm giác trên tay cao cấp. Qua các lần giặt không bị bai như sản phẩm cotton thường khác. Khả năng hút mồ hôi tốt và cảm giác mặc khá mát
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="relative mb-20">
                  <div className="max-w-max mx-auto lg:max-w-4xl">
                    <p className="text-lg text-gray-500 leading-8 mb-8 text-center">
                      Nhìn chung thì ý tưởng và thiết kế khá là bắt mắt. Nhưng mình thấy hình in nên cải thiện về chất lượng để phù hợp với số đông.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper mySwiper">
            <div className="swiper-wrapper flex">
              <div className="swiper-slide">
                <img src="https://pagedone.io/asset/uploads/1704349534.png" alt="anh"
                  className="mx-auto scale-90 transition-all duration-300 swiper-slide:w-16 border rounded-full swiper-slide:border-indigo-600" />
              </div>
              <div className="swiper-slide">
                <img src="https://pagedone.io/asset/uploads/1704349572.png" alt="anh"
                  className="mx-auto scale-90 transition-all duration-300 swiper-slide:w-16 border rounded-full swiper-slide:border-indigo-600" />
              </div>
              <div className="swiper-slide">
                <img src="https://pagedone.io/asset/uploads/1704349514.png" alt="anh"
                  className="mx-auto scale-90 transition-all duration-300 swiper-slide:w-16 border rounded-full swiper-slide:border-indigo-600" />
              </div>

            </div>
          </div>

        </div>
      </section>

      <section className="py-20 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-2xl p-8 xl:p-11">
            <h2 className="font-manrope text-4xl text-white text-center font-bold mb-4">Đăng ký nhận thông tin
            </h2>
            <p className="text-indigo-200 text-center mb-11 max-lg:max-w-2xl mx-auto">Tham gia cộng đồng người đăng ký của chúng tôi và nhận thông tin cập nhật thường xuyên được gửi thẳng đến hộp thư đến của bạn. Thật nhanh chóng, dễ dàng và miễn phí</p>
            <div
              className="max-w-md mx-auto lg:bg-transparent lg:border border-gray-300 rounded-3xl max-lg:py-3 lg:rounded-full lg:h-12 lg:p-1.5 lg:flex-row gap-6 lg:gap-0 flex-col flex items-center justify-between">
              <input type="text" name="email"
                className="py-2 px-6 bg-transparent rounded-full max-lg:border border-gray-300  text-gray-100 max-lg:text-center placeholder:text-gray-400 focus:outline-none flex-1 w-full lg:w-auto lg:py-2 lg:px-6 lg:bg-transparent"
                placeholder="Enter your email.." />
              <button type="submit"
                className="py-2 px-5 text-sm bg-indigo-500 shadow-md rounded-full  text-white font-semibold hover:bg-indigo-700">Đăng ký</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
