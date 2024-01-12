export function Contact(props) {
  const align = props.align;
  const marginTop = props.marginTop;
  const textSize = props.textSize;

  const alignmentClass = align === "right" ? "justify-end" : "justify-center";

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <p
        onClick={scrollToBottom}
        className={`pb-2 ${marginTop} m-0 font-bold ${textSize} text-white flex ${alignmentClass} cursor-pointer`}
      >
        <span className=" border-b-4 border-b-green-800 pb-2 2xl:text-xl">
          {" "}
          CONTACT ME
        </span>
      </p>
    </div>
  );
}
