import { Outlet, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import styles from "./About.module.css";

const AboutUs = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <br />
      <h1>About Us</h1>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sed
        nulla ducimus? Dolorum doloremque debitis iste velit quo voluptatibus
        laborum, repellendus nostrum. Aliquam officia dicta quod assumenda
        possimus, eius a?
      </p>

      <br />
      <ul>
        <li>
          <Link to="programmers">Programmers</Link>
        </li>
        <li>
          <Link to="drivers">Drivers</Link>
        </li>
      </ul>

      <br />
      <br />
      <Outlet />

      {/* <div>
        <Routes>
          <Route path="programmers" element={<Programmers />} />
          <Route path="drivers" element={<Drivers />} />
        </Routes>
      </div> */}
      <br />
      <br />
      <br />
      <button onClick={clickHandler}>Go Home</button>
    </div>
  );
};

export default AboutUs;
