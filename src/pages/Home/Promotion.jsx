const Promotion = () => {
  return (
    <section>
      {/* <div className="lg:h-[600px] ">
        <img
          src="https://i.ibb.co/9GfNy1P/chef-service.jpg"
          alt=""
          className="w-fit"
        />
        <div className="bg-white relative bottom-1/4 m-16 text-center">
          <h3 className="pt-10">Title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            magni assumenda inventore expedita a quam natus dolore aut vitae
            dignissimos!
          </p>
        </div>
      </div> */}
      <div
        className="hero lg:h-[550px] my-20"
        style={{
          backgroundImage: "url(https://i.ibb.co/9GfNy1P/chef-service.jpg)",
        }}
      >
        <div className="bg-contain"></div>
        <div className="hero-content text-center  bg-white">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold uppercase">Bistro Boss</h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, libero accusamus laborum deserunt ratione dolor
              officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
              nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
