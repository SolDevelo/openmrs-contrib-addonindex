import React, { useEffect } from "react";
import { FallbackProps } from "react-error-boundary";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";

export const ErrorFallback: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
  children,
}) => {
  const history = useHistory();

  useEffect(() => {
    console.log(`Unexpected error: ${error.message}: ${error}`);
  }, [error]);

  return (
    <div role={"alert"}>
      <h3>Whoops! Something went wrong!</h3>
      <Button
        onClick={() => {
          resetErrorBoundary();
          history.goBack();
        }}
      >
        Go back
      </Button>
      {children}
    </div>
  );
};
