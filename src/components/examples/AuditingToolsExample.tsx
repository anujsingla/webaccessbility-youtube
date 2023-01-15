import dinosaurImage from "../../images/dinosaur.png";

export function AuditingToolsExample() {
  return (
    <>
      <h2>Auditing tools for developer</h2>
      <img height={100} width={100} alt="dinosaur" src={dinosaurImage} />
      <div>
        <label htmlFor="name">First Name</label>
        <input id="name" type="text" />
      </div>
    </>
  );
}
