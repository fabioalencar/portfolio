import Typewriter from "typewriter-effect";
const DynamicTypewriter = (props) => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .pauseFor(1000)
          .typeString(
            "Creative Technologist, Senior Product Designer and Frontend Developer."
          )
          .pauseFor(3000)
          .deleteChars(78)
          .typeString("Eager for knowledge.")
          .pauseFor(500)
          .deleteAll()
          .typeString("Entrepreneur and team leader for 8 years.")
          .pauseFor(1000)
          .deleteChars(41)
          .typeString("Working remotely from São Paulo, Brazil.")
          .pauseFor(1000)
          .deleteChars(40)
          .typeString("Unicorn!")
          .pauseFor(500)
          .deleteChars(8)
          .typeString(
            "Specialist in the convergence between business, design and technology."
          )
          .pauseFor(3000)
          .start();
      }}
      options={{
        autoStart: true,
        loop: true,
        delay: 50,
        deleteSpeed: 5,
      }}
    />
  );
};

export default DynamicTypewriter;
