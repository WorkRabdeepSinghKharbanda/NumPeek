import style from './style.module.scss';

const FeatureFold = () => {
  return (
    <section className="mb-5 text-center">
      <h2>📞 Every Call Counts</h2>
      <p className="text-muted mt-2">
        From London to Tokyo, São Paulo to Sydney — NumPeek helps you track it
        all. Whether it's work, travel, or a flood of calls from your group
        chat, we extract numbers so you can stay focused on what matters.
      </p>
      <ul className={`row list-unstyled ${style['features-list']} mt-4 d-flex gap-3 text-center`}>
        <li style={{width: 'fit-content'}}>Smart Number Detection</li>
        <li style={{width: 'fit-content'}}>1-Click Copy</li>
        <li style={{width: 'fit-content'}}>International Format Support</li>
        <li style={{width: 'fit-content'}}>Context-Aware Parsing</li>
        <li style={{width: 'fit-content'}}>Lightning Fast</li>
        <li style={{width: 'fit-content'}}>Great for CRM / Logs / Reports</li>
        <li style={{width: 'fit-content'}}>Generate CSV reports</li>
      </ul>
    </section>
  );
};
export default FeatureFold;
