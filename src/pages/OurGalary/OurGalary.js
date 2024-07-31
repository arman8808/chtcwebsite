import React, { useEffect, useState } from "react";
import img from "../../assests/images/gallery/DSC03446.webp";
import img1 from "../../assests/images/gallery/DSC03447.webp";
import img2 from "../../assests/images/gallery/DSC03450.webp";
import img3 from "../../assests/images/gallery/DSC03456.webp";
import img4 from "../../assests/images/gallery/DSC03458.webp";
import img5 from "../../assests/images/gallery/DSC03462.webp";
import img6 from "../../assests/images/gallery/DSC03476.webp";
import img7 from "../../assests/images/gallery/DSC03480.webp";
import img8 from "../../assests/images/gallery/DSC03488.webp";
import img9 from "../../assests/images/gallery/DSC03491.webp";
import img10 from "../../assests/images/gallery/DSC03498.webp";
import img11 from "../../assests/images/gallery/DSC03503.webp";
import img12 from "../../assests/images/gallery/DSC03505.webp";
import img13 from "../../assests/images/gallery/DSC03506.webp";
import img14 from "../../assests/images/gallery/DSC03508.webp";
import img15 from "../../assests/images/gallery/DSC03509.webp";
import img16 from "../../assests/images/gallery/DSC03512.webp";
import img17 from "../../assests/images/gallery/DSC03514.webp";
import img18 from "../../assests/images/gallery/DSC03518.webp";
import img19 from "../../assests/images/gallery/DSC03523.webp";
import img20 from "../../assests/images/gallery/DSC03766.webp";
import img21 from "../../assests/images/gallery/DSC03548.webp";
import img22 from "../../assests/images/gallery/DSC03553.webp";
import img23 from "../../assests/images/gallery/DSC03544.webp";
import img24 from "../../assests/images/gallery/DSC03572.webp";
import img25 from "../../assests/images/gallery/DSC03550.webp";
import img26 from "../../assests/images/gallery/DSC03575.webp";
import img27 from "../../assests/images/gallery/DSC03587.webp";
import img28 from "../../assests/images/gallery/DSC03610.webp";
import img29 from "../../assests/images/gallery/DSC03773.webp";
import OurGoalsBanner from "../../utils/OurGoalsBanner";
import { Pagination, Stack } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function OurGalary() {
  const galleryImages = [
    [img, img1, img2],
    [img6, img7, img8],
    [img9, img10, img12],
    [img13, img14, img15],
    [img16, img17, img18],
    [img19, img20, img21],
    [img22, img23, img24],
    [img25, img26, img27],
    [img25, img26, img27],
    [img28, img29, img11],
    [img3, img4, img5],
  ];
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(Math.ceil(galleryImages?.length / 4).toFixed(0));
  }, [galleryImages]);
  return (
    <div className="pagecss w-full pt-[3rem] gap-[1rem]">
      <div class="w-11/12">
        <h2 className="text-mainHeading font-bold text-navy-blue">
          Our Gallery
        </h2>
      </div>
      <div class="w-11/12 grid gap-4">
        {galleryImages
          ?.slice((page - 1) * 4, (page - 1) * 4 + 4)
          ?.map((item) => (
            <div class="grid gap-4 grid-cols-3 md:grid-cols-4 gap-4 mobile:grid-cols-1">
              {item?.map((image, index) => (
                <div key={image}>
                  {/* <img src={image} alt="gallery" loading="lazy" /> */}
                  <LazyLoadImage
                    src={image}
                    alt="gallery"
                    className="h-auto max-w-full rounded-lg"
                    effect="blur"
                    wrapperProps={{
                      style: { transitionDelay: "1s" },
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
        <div className="w-full flex items-center justify-center py-4">
          <Stack spacing={2}>
            <Pagination
              count={count}
              variant="outlined"
              shape="rounded"
              color="primary"
              onChange={(_, value) => {
                setPage(value);
                window.scroll(0, 0);
              }}
            />
          </Stack>
        </div>
      </div>
      <div className=" w-11/12 py-4">
        <OurGoalsBanner />
      </div>
    </div>
  );
}

export default OurGalary;
