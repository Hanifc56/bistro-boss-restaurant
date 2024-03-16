const sectionTitle = ({ heading, subHeading }) => {
  return (
    <div>
      <p>{subHeading}</p>
      <hr />
      <h3>{heading}</h3>
    </div>
  );
};

export default sectionTitle;
