function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../public/images", false, /\.(png|jpe?g|svg)$/)
);

export default function getImage(imageFileName) {
  return images[imageFileName].default;
}
