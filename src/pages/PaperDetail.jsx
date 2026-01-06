import { useParams } from "react-router-dom";

export default function PaperDetail() {
  const { id } = useParams();
  return <div className="paper-detail">Paper Detail - {id}</div>;
}
