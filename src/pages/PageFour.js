import React, { useContext } from "react";
import { useId } from "react-id-generator";
import { UserContext } from "../App";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function PageFour({ children, ...rest }) {
      const [htmlId] = useId();
      const { finalWallet, setFinalWallet } = useContext(UserContext);
      const history = useHistory();
    
      const postBuy = () => {
        const bulkData = { finalWallet, SwapId: htmlId, IBAN: "XYZFJGFG456887" };
    
        fetch("https://safe-cliffs-77291.herokuapp.com/buy", {
          method: "POST",
          body: JSON.stringify(bulkData),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            if (data) {
              alert("Successfully posted");
              history.push("/sell1")
            }
          });
      };
      return (
            <div className="text-center container border my-5">
      <div className="container p-5">
        <h4 className="my-5">Transfers funds to the following account</h4>
        <div className="my-5">
          <h3>IBAN: XYZFJGFG456887</h3>
          <h3>Swap ID: {htmlId}</h3>
        </div>
        <h4>
          As soon as the funds are received the transaction to your BSC wallet
          will be made the following address.
        </h4>
        <h4 className="my-5 text-danger">{finalWallet}</h4>
        <a href="#" className="text-center">
          <h4 className="text-dark">Doubts? Discord or Telegram</h4>
        </a>
        <div className="text-center">
          <Button variant="danger" className="px-5 mt-5 " onClick={postBuy}>
            Next
          </Button>
        </div>
      </div>
    </div>
      );
};

export default PageFour;