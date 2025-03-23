import { useEffect } from "react";
import { utilityMethod } from "@pankajpatil/utility";

export default function Root(props) {
  useEffect(() => {
    console.log(utilityMethod("Settings"));
  }, []);
  return <section>{props.name} is mounted!</section>;
}
