import "../css/ImageSlider.css";
import { motion } from "framer-motion";

export const ImageSlider = ({ data }) => {
  const { url } = data;

  return (
    <motion.div
      className="slider-item"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="image-wrapper">
        <img
          className="slider-image"
          src={url}
          alt={`Slider ${data.id}`}
          loading="lazy"
        />
      </div>
    </motion.div>
  );
};
