import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="flex flex-col gap-2">
      <h1 className="font-bold">404 NOT FOUND</h1>
      <Link to={"/"} className="hover:underline">
        Back Home
      </Link>
    </section>
  );
}
