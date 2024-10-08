const SummaryContainer = (props: {
  category: string;
  children: React.ReactNode;
}) => {
  switch (props.category) {
    case "Reaction":
      return (
        <div className="bg-red-100 flex w-full justify-between text-lightRed p-1 px-4 rounded-md">
          {props.children}
        </div>
      );
    case "Memory":
      return (
        <div className="bg-yellow-100 flex w-full justify-between text-orangeyYellow p-1 px-4 rounded-md">
          {props.children}
        </div>
      );
    case "Verbal":
      return (
        <div className="bg-green-100 flex w-full justify-between text-greenTeal p-1 px-4 rounded-md">
          {props.children}
        </div>
      );
    case "Visual":
      return (
        <div className="bg-blue-100 flex w-full justify-between text-cobaltBlue p-1 px-4 rounded-md">
          {props.children}
        </div>
      );
  }
};

export default SummaryContainer;
