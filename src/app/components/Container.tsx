import main from "../styles/main.module.css";
import Form from "./Form";
import { getQuestionData } from "../lib/data";

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className={main.container}>{children}</div>;
}
