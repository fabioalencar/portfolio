const size = {
  mobileT: "320px",
  mobileS: "360px",
  mobileM: "375px",
  mobileL: "540px",
  tablet: "768px",
  laptop: "1130px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const device = {
  mobileT: `(max-width: ${size.mobileT})`,
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  minTablet: `(min-width: ${size.tablet})`,
  minLaptop: `(min-width: ${size.laptop})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};
export default device;
