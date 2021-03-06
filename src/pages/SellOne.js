import React, { useContext} from "react";
import {
  DropdownButton,
  ButtonGroup,
  Dropdown,
  SplitButton,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

function SellOne() {
  const { token, setToken } = useContext(UserContext);
  const handleChange = (e) => {
    setToken(e);
  };
      return (
            <div className=" text-center container border my-5">
      <div className="container">
            <br/>
        <h2> Stablecoin gateway - Sell</h2>
        <br/>
        <br/>
        <SplitButton
          key={"down"}
          id={`dropdown-button-drop-${"down"}`}
          drop={"down"}
          variant="primary"
          title={token || "Choose a token"}
        >
          <Dropdown.Item onSelect={handleChange} eventKey={"token1"}>
            token1
          </Dropdown.Item>
          <Dropdown.Item onSelect={handleChange} eventKey={"token2"}>
            token2
          </Dropdown.Item>
          <Dropdown.Item onSelect={handleChange} eventKey={"token3"}>
            token3
          </Dropdown.Item>
        </SplitButton>
        <br/>
        <br/>
        <div>
          <label htmlFor="quantity">
            <input type="number" placeholder="Quantity" />
          </label>
        </div>
        <div className="mt-5">
          <h3>You will get X AOA @Preco AOA/TAOA</h3>
        </div>
        <Link to="/sell2">
          <Button variant="danger" className="px-5 mt-5 text-center">
            Next
          </Button>
        </Link>
        <br/>
        <br/>
      </div>
    </div>
      );
};

export default SellOne;