import style from "./style.module.scss";

const HeroFold = () => {
  return (
    <section className={`text-center ${style.hero}`}>
      <h1>NumPeek</h1>:
      <h2 className="mb-4">
        🔍 Find Numbers Fast. Copy with a Tap.
        <br />
        Welcome to NumPeek — your digital number detective.
      </h2>
      <p>
        Paste any text. Let NumPeek instantly pull out phone numbers from the
        chaos. No fluff, just numbers, beautifully clean and ready to copy.
      </p>
      <a href="#widget-container">
        <button className="btn btn-primary">Try It Now 🚀 </button>
      </a>
    </section>
  );
};

export default HeroFold;
