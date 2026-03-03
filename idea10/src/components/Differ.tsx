import Reveal from './Reveal'

export default function Differ() {
  return (
    <section className="differ-section">
      <div className="differ-inner">
        <Reveal>
          <p className="differ-pain">
            ChatGPT gives you 20 ideas.<br />
            You still don't know which one makes money.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <p className="differ-solution">
            IdeaPick gives you one ranked direction —<br />
            based on live App Store signals.
          </p>
          <p className="differ-tagline">AI suggests. IdeaPick validates.</p>
        </Reveal>
      </div>
    </section>
  )
}
