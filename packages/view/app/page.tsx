import "./styles.scss";
import { redirect } from "next/navigation";

export default function Home() {
  return redirect("page/1");
}
