const SectionHeading = ({ title, heading }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center">
      <p className="text-yellow-500 text-xl mb-2 italic"> --- {title} ---</p>

      <h3 className="text-4xl border-y-4 py-4">{heading}</h3>
    </div>
  );
};

export default SectionHeading;
