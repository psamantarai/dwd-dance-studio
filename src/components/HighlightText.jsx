const HighlightText = ({ children, text }) => {
  return (
    <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold">
      {children ? children : text}
    </span>
  );
};

export default HighlightText;
