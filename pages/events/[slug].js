import Layout from "@/components/Layout";
import { useRouter } from "next/Router";

const EventDetails = () => {
  const router = useRouter();

  return (
    <Layout title={"event"}>
      <h1>event details</h1>
      <h1>{router.query.slug}</h1>
    </Layout>
  );
};

export default EventDetails;
