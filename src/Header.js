import { Link, animateScroll as scroll } from "react-scroll";

const Header = ({ setScreen }) => {
  return (
    <div className="section header">
      <div
        className="inner"
        data-aos="fade"
        data-aos-duration="1500"
        data-aos-delay="500"
      >
        <div
          className="logo"
          onClick={() => {
            setScreen("home");
            scroll.scrollToTop();
          }}
        >
          <svg
            preserveAspectRatio="xMidYMid meet"
            data-bbox="20.303 25.565 159.393 148.871"
            viewBox="20.303 25.565 159.393 148.871"
            height="200"
            width="200"
            xmlns="http://www.w3.org/2000/svg"
            data-type="color"
            role="img"
            aria-labelledby="svgcid--jebrxrywnvug"
          >
            <g>
              <path
                d="M179.398 97.035c-2.089-12.835-17.014-19.402-28.953-14.029l-12.537 5.671c-11.94 5.373-25.371 5.373-37.311 0L88.06 83.006C76.12 77.633 61.196 84.2 59.107 97.035c-.299.895-.299 2.089-.299 3.283 0 .895 0 2.089.299 3.283 2.089 12.835 17.014 19.402 28.953 14.029l12.537-5.671c11.94-5.373 25.371-5.373 37.311 0l12.537 5.671c11.94 5.373 26.864-1.194 28.953-14.029.298-.895.298-2.089.298-3.283 0-.895 0-2.089-.298-3.283z"
                fill="#FD6262"
                data-color="1"
              ></path>
              <path
                d="M49.556 62.112l12.537-5.671c11.94-5.373 25.371-5.373 37.311 0l12.537 5.671c11.94 5.373 26.864-1.194 28.953-14.029.298-.895.298-2.089.298-3.283 0-.895 0-2.089-.298-3.283-2.089-12.835-17.014-19.402-28.953-14.029l-12.537 5.671c-11.94 5.373-25.371 5.373-37.311 0l-12.537-5.671c-11.94-5.373-26.864.895-28.953 14.029-.299.895-.299 2.089-.299 3.283 0 .896 0 2.089.299 3.283 2.089 12.835 17.013 19.402 28.953 14.029z"
                fill="#FD6262"
                data-color="1"
              ></path>
              <path
                d="M111.94 137.928l-12.537 5.671c-11.94 5.373-25.371 5.373-37.311 0l-12.537-5.671c-11.94-5.373-26.864 1.194-28.953 14.029-.299.895-.299 2.089-.299 3.283 0 .896 0 2.089.299 3.283 2.089 12.835 17.014 19.402 28.953 14.029l12.537-5.671c11.94-5.373 25.371-5.373 37.311 0l12.537 5.671c11.94 5.373 26.864-1.194 28.953-14.029.298-.896.298-2.089.298-3.283 0-.895 0-2.089-.298-3.283-2.089-12.836-17.014-19.402-28.953-14.029z"
                fill="#FD6262"
                data-color="1"
              ></path>
            </g>
          </svg>
          <h1>Blockchain</h1>
          <h1 className="blue">Unmasked</h1>
        </div>
        <div>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => setScreen("home")}
          >
            <button>About Us</button>
          </Link>
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => setScreen("home")}
          >
            <button>Services</button>
          </Link>
          <Link
            activeClass="active"
            to="verify"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <button
              className="verify"
              onClick={() => {
                setScreen("forms");
                scroll.scrollToTop();
              }}
            >
              Verify Today
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
