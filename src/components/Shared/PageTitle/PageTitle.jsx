const PageTitle = ({ title, subTitle }) => {
  return (
    <div className="flex mb-5 text-center justify-center items-center  w-full min-h-[20vh]">
      <div className="default-container flex flex-col gap-2">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-widest opacity-80">
          {title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-bold tracking-wider opacity-80">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default PageTitle;
