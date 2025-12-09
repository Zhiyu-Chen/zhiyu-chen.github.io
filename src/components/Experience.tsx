import Section from './Section';

export default function Experience() {
  return (
    <Section title="Past Experience" id="experience">
      <div className="exp-item">
        <h3>Applied Scientist Intern</h3>
        <p className="company">Amazon, Seattle, WA, US (remote)</p>
        <p className="duration">05/2021 - 09/2021</p>
        <ul className="responsibilities">
          <li>Proposed a reinforcement learning method for conversational question answering, accepted by <a href="https://www.amazon.science/publications/reinforced-question-rewriting-for-conversational-question-answering" target="_blank" rel="noopener noreferrer">EMNLP Industry Track 2022</a>.</li>
          <li>Mentors/Managers: Jie Zhao, Anjie Fang, Besnik Fetahu, Oleg Rokhlenko, Shervin Malmasi</li>
        </ul>
      </div>
      <div className="exp-item">
        <h3>Applied Science Intern</h3>
        <p className="company">Zhuiyi Technology, Shenzhen, Guangdong, China</p>
        <p className="duration">05/2019 - 09/2019</p>
        <ul className="responsibilities">
          <li>Led a team solving <a href="https://super.gluebenchmark.com/leaderboard/" target="_blank" rel="noopener noreferrer">SuperGLUE benchmark tasks</a>, achieving a 2nd-place ranking in our submission, covered in <a href="https://tech.chinadaily.com.cn/a/202001/17/WS5e211ef9a3107bb6b579a768.html" target="_blank" rel="noopener noreferrer">China Daily (中国日报)</a>.</li>
          <li>Manager: Yinan Xu</li>
        </ul>
      </div>
      <div className="exp-item">
        <h3>Applied Science Intern</h3>
        <p className="company">Bloomberg, Princeton, NJ, USA</p>
        <p className="duration">06/2016 - 08/2016</p>
        <ul className="responsibilities">
          <li>Analysis of Bloomberg Data Licence usage patterns.</li>
          <li>Manager: Michael Liebman</li>
        </ul>
      </div>
      <style jsx>{`
        .exp-item {
          margin-bottom: 2.5rem;
          padding-left: 1.5rem;
          border-left: 3px solid var(--card-border);
          transition: border-color 0.3s ease;
        }
        .exp-item:hover {
            border-color: var(--accent);
        }
        h3 {
          font-size: 1.2rem;
          color: var(--foreground);
        }
        .company {
          color: #444;
          margin: 0.25rem 0;
          font-weight: 600;
        }
        .duration {
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 0.8rem;
        }
        .responsibilities {
            list-style: disc;
            padding-left: 1.2rem;
            color: #444;
            font-size: 0.95rem;
            line-height: 1.6;
        }
        .responsibilities li {
            margin-bottom: 0.4rem;
        }
        .responsibilities a {
            color: var(--accent);
            text-decoration: none;
        }
        .responsibilities a:hover {
            text-decoration: underline;
        }
      `}</style>
    </Section>
  );
}
