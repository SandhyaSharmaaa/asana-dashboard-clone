import { useParams } from "react-router-dom";

const Page = () => {
  const params = useParams();
  console.log(params);
  return (
    <div className="flex items-center justify-center text-xl mt-10 uppercase">
      {params.id}
    </div>
  );
};

export default Page;
