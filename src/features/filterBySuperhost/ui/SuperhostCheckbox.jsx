import Checkbox from "@/shared/ui/Checkbox/Checkbox";
function SuperhostCheckbox({ showAll, setShowAll }) {
  return <Checkbox checked={showAll} onChange={setShowAll}></Checkbox>;
}
export default SuperhostCheckbox;
