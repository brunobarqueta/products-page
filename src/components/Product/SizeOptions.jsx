const SizeOptions = () => {
  const options1 = [
    { size: "106 cm (42)", active: true },
    { size: "121 cm (48)", active: false },
    { size: "139 cm (55)", active: false },
  ];

  const options2 = [
    { size: "164 cm (65)", active: false },
    { size: "196 cm (77)", active: false },
    { size: "210 cm (83)", active: false },
  ];

  return (
    <>
      <div className="hidden md:flex flex-row gap-8 w-full items-start">
        <div className="flex">
          {options1.map((option, index) => (
            <div
              key={index}
              className={`text-lg ${
                option.active ? "text-red-600 border border-text-red-600" : "text-gray-500"
              } py-3 px-6 h-14 items-center justify-center uppercase`}
            >
              {option.size}
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:flex flex-row gap-8 w-full items-start">
        <div className="flex">
          {options2.map((option, index) => (
            <div
              key={index}
              className={`text-lg ${
                option.active ? "text-red-600 border border-text-red-600" : "text-gray-500"
              } py-3 px-6 h-14 items-center justify-center uppercase`}
            >
              {option.size}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SizeOptions;
