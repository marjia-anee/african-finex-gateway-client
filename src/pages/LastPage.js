import React from "react";
import { Button } from "react-bootstrap";

function LastPage() {
      return (
            <div className="text-center container border my-5">
            <div className="container p-5">
              <h4 className="my-5">
                Congratulations you have made it successfully. Remember your internal
                transaction ID. If you need any help customer support will ask for it
              </h4>
              <h1>674227</h1>
              <h4 className="my-5">ID X, qtt token, Token, timestamp</h4>
              <Button variant="success"> I've stored the ID and i'm done</Button>
            </div>
          </div>
      );
};

export default LastPage;