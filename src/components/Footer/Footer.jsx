const Footer = () => {
  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto my-3">
      <div>
        <h1 className="font-bold text-3xl text-orange-400">The Food Batch</h1>
        <address>
          Created by Ankit Jindal
          <br />
          Visit us at :{" "}
          <a
            className="font-bold"
            href="https://www.linkedin.com/in/ankit-jindal-65b957232/"
          >
            Profile
          </a>
          <br />
          Raipur, C.G.
          <br />
          INDIA
        </address>
      </div>
    </div>
  );
};

export default Footer;
