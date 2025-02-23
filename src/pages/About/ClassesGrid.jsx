import HighlightText from "../../components/HighlightText";

const ClassesGridArray = [
  {
    order: -1,
    heading: "World-Class Dance Training for ",
    highlightText: "Everyone, Everywhere",
    description:
      "DWD Studio collaborates with top choreographers and institutions to provide flexible, affordable, and inspiring dance training to individuals and groups worldwide.",
  },
  {
    order: 1,
    heading: "Dance Class",
    description:
      "Kids Batch: 4 to 10 years Juniors Batch: 10 to 18 years Adults Batch: 18 & above Special Bollywood ladies batch: 18 & above",
  },
  {
    order: 2,
    heading: "Music Class",
    description:
      "Kids Batch: 5 to 10 years Juniors Batch: 10 to 17 years Adults Batch: 18 years & above",
  },
  {
    order: 3,
    heading: "Karate Class",
    description:
      "Kids Batch: 4 to 10 years Juniors Batch: 10 to 18 years Adults Batch: 18 years & above",
  },
  {
    order: 4,
    heading: "Classical Class",
    description:
      "Kids Batch: 4 to 10 years Juniors Batch: 10 to 18 years Adults Batch: 18 years & above",
  },
  {
    order: 5,
    heading: "Kathak Class",
    description:
      "Kids Batch: 4 to 10 years Juniors Batch: 10 to 18 years Adults Batch: 18 years & above",
  },
  {
    order: 6,
    heading: "Gymnastics",
    description:
      "Kids Batch: 4 to 10 years Juniors Batch: 10 to 18 years Adults Batch: 18 years & above",
  },
  {
    order: 7,
    heading: "Zumba Class",
    description: "Adults Batch: 18 years & above",
  },
];

const ClassesGrid = () => {
  // Function to format the description
  const formatDescription = (text) => {
    return text
      .replace(/Kids Batch:/gi, "<strong>Kids Batch:</strong>")
      .replace(/Juniors Batch:/gi, "<strong>Juniors Batch:</strong>")
      .replace(/Adults Batch:/gi, "<strong>Adults Batch:</strong>")
      .replace(
        /Bollywood ladies batch:/gi,
        "<strong>Bollywood ladies batch:</strong>"
      )
      .replace(/(Kids Batch:.*?years)/gi, "$1<br/>")
      .replace(/(Juniors Batch:.*?years)/gi, "$1<br/>")
      .replace(/(Adults Batch:.*?above)/gi, "$1<br/>")
      .replace(/(Bollywood ladies batch:.*?above)/gi, "$1<br/>");
  };

  return (
    <div className="grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-5 mb-12">
      {ClassesGridArray.map((card, index) => {
        return (
          <div
            key={index}
            className={`${card.order === -1 ? "xl:col-span-2 " : ""}  
        ${
          card.order >= 1 && card.order <= 3
            ? (card.order % 2 === 1 ? "bg-richblack-700" : "bg-richblack-800") +
              " h-[294px]"
            : ""
        }
        ${
          card.order >= 4 && card.order <= 7
            ? (card.order % 2 === 0 ? "bg-richblack-700" : "bg-richblack-800") +
              " h-[294px]"
            : ""
        } 
        ${card.order === 1 ? "xl:col-start-3" : ""} 
        ${card.order === 4 ? "xl:col-start-2" : ""}`}
          >
            {card.order < 0 ? (
              <div className="xl:w-[90%] flex flex-col gap-3 pb-10 xl:pb-0">
                <div className="text-4xl font-semibold">
                  {card.heading}
                  <HighlightText text={card.highlightText} />
                </div>
                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>
              </div>
            ) : (
              <div className="p-7 flex flex-col gap-8">
                <h1 className="text-richblack-5 text-lg">{card.heading}</h1>
                <p
                  className="text-richblack-300 font-medium"
                  dangerouslySetInnerHTML={{
                    __html: formatDescription(card.description),
                  }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ClassesGrid;
