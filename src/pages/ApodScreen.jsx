import { Card, Collapse } from "react-daisyui";
import { useApodTodayQuery } from "../hooks/useApodTodayQuery";

export const APODScreen = () => {
  const { data, error, isLoading } = useApodTodayQuery();

  if (error) {
    return <p>{error.message}</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // VERIFY RESPONSE KEYS
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
};
