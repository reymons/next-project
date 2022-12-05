const FontStyles = () => {
  return (
    <style global jsx>{`
      @font-face {
        font-family: "OpenSans";
        font-display: fallback;
        font-weight: 400;
        src: url("/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"),
          url("/fonts/OpenSans/OpenSans-Regular.woff") format("woff"),
          url("/fonts/OpenSans/OpenSans-Regular.ttf") format("truetype");
      }

      @font-face {
        font-family: "OpenSans";
        font-display: fallback;
        font-weight: 600;
        src: url("/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"),
          url("/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff"),
          url("/fonts/OpenSans/OpenSans-SemiBold.ttf") format("truetype");
      }

      @font-face {
        font-family: "OpenSans";
        font-display: fallback;
        font-weight: 700;
        src: url("/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"),
          url("/fonts/OpenSans/OpenSans-Bold.woff") format("woff"),
          url("/fonts/OpenSans/OpenSans-Bold.ttf") format("truetype");
      }
    `}</style>
  );
};

export default FontStyles;
