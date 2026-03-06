import Checkbox from "@/shared/ui/Checkbox/Checkbox";
function SuperhostCheckbox({ superhostOnly, setSuperhostOnly }) {
  return <Checkbox checked={superhostOnly} onChange={setSuperhostOnly}></Checkbox>;
}
export default SuperhostCheckbox;
