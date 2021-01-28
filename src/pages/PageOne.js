import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import {
      DropdownButton,
      ButtonGroup,
      Dropdown,
      SplitButton,
      Button,
    } from "react-bootstrap";

const PageOne = () => {
      const { country, setCountry } = useContext(UserContext);
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCurrency(data));
  }, [country]);

  const handleChange = (e) => {
    setCountry(e);
  };

      return (
            <div className="text-center container border my-5">
      <div className="container p-5">
        <h3>Stable coin gateway - BUY</h3>

        <div className="my-5">
          <SplitButton
            key={"down"}
            id={`dropdown-button-drop-${"down"}`}
            drop={"down"}
            variant="primary"
            title={country || "Select Your Coin"}
          >
            {currency.map((cr) => (
              <Dropdown.Item onSelect={handleChange} eventKey={cr.name}>
                {cr.name} - ( {cr.currencies[0].code})
              </Dropdown.Item>
            ))}
          </SplitButton>
        </div>
        <div>
          <label htmlFor="quantity">
            <input type="number" placeholder="Quantity" />
          </label>
        </div>
        <div className="mt-5">
          <h3>Total Cost @Price AOA/TAOA</h3>
        </div>
        <Link to="/page2">
          <Button variant="danger" className="px-5 mt-5 text-center">
            Next
          </Button>
        </Link>
      </div>
    </div>
      );
};

export default PageOne;