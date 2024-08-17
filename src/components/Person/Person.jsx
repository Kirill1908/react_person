export const Person = ({ person }) => {
  let partnerField = 'I am not married';

  if (person.isMarried) {
    if (person.sex === 'f') {
      partnerField = `${person.partnerName} is my husband`;
    } else {
      partnerField = `${person.partnerName} is my wife`;
    }
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age && <p className="Person__age">I am {person.age}</p>}
      <p className="Person__partner">{partnerField}</p>
    </section>
  );
};
