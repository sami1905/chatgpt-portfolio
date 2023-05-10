import React from "react";

const sampleTexts = [
  {
    title: "Text 1",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    date: "01.01.2023"
  },
  {
    title: "Text 2",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    date: "02.01.2023"
  },
  {
    title: "Text 3",
    text: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
    date: "03.01.2023"
  }
];

function TextSlider() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index + 1) % sampleTexts.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [index]);

  return (
    <div className="text-slider">
      <div className="text-slide">
        <h2>{sampleTexts[index].title}</h2>
        <p>{sampleTexts[index].text}</p>
        <p className="text-date">{sampleTexts[index].date}</p>
      </div>
    </div>
  );
}

export default TextSlider;
