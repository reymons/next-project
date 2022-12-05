const GlobalStyles = () => {
  return (
    <style global jsx>{`
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-size: 100%;
      }

      a {
        text-decoration: none;
      }

      ul,
      ol {
        list-style: none;
      }

      body {
        font-family: "OpenSans";
        font-weight: 400;
      }
    `}</style>
  );
};

export default GlobalStyles;
