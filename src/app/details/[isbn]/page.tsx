import BookDetails from "./details.tsx";

export default function Details(props) {
  console.log("Details page");
  return (
    <BookDetails props={...props}/>
  );
}
