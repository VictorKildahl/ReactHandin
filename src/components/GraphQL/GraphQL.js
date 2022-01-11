import React, { useEffect } from "react";

const SPACEX_QUERY = `
{
    launchesPast(limit: 10) {
        id
        mission_name
    }
}
`;

function GraphQL() {
  useEffect(() => {
    fetch("https://api.spacex.land/graphql/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: SPACEX_QUERY }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return <div>Graphql</div>;
}

export default GraphQL;
