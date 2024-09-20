import BookDetails from "./details";

export default function Details(props) {
  console.log("Details page");
  return (
    <BookDetails props={...props}/>
  );
}
