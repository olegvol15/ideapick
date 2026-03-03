import Reveal from './Reveal'

export default function Identity() {
  return (
    <section className="identity-section">
      <Reveal>
        <p className="identity-primary">Built for solo devs who ship.</p>
        <p className="identity-secondary">Not agencies. Not research teams.</p>
        <p className="identity-hint">
          If you move fast and need one clear direction — this is for you.
        </p>
      </Reveal>
    </section>
  )
}
