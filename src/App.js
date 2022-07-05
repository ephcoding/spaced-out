import React from "react"; // Suspense, // useTransition, // useState, // useMemo, // useEffect, // useDeferredValue, // useCallback,
import { Button, Card, Collapse } from "react-daisyui";

import { useQuery } from "react-query";

export default function App() {
  const { data, error, isLoading } = useQuery(["APOD", "today"], async () => {
    const raw = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}`
    );
    return await raw.json();
  });

  if (error) {
    return <p>{error.message}</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }

  const keys = Object.keys(data).map((key) => <p key={key}>{key}</p>);

  return (
    <div className="min-h-screen bg-stone-800 text-stone-100">
      <div>{keys}</div>
      <Card bordered={true} compact={true} className="w-[50vw]">
        <Card.Image src={data.url} alt="NASA Photo of the Day" />
        <Card.Title className="text-3xl text-red-500">{data.title}</Card.Title>
        <Card.Body>
          <Collapse checkbox={true}>
            <Collapse.Title>{`${data.explanation.slice(
              0,
              40
            )}...`}</Collapse.Title>
            <Collapse.Content>{data.explanation}</Collapse.Content>
          </Collapse>
        </Card.Body>
      </Card>
    </div>
  );
}
