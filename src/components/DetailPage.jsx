import { useParams } from "react-router-dom";

const DetailPage = () => {
  const params = useParams();
  return (
    <div className="DetailPage">
      <h1>Detail Page - {params.id}</h1>
    </div>
  );
};

export default DetailPage;
