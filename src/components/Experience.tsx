import Section from './Section';
import Image from 'next/image';

export default function Experience() {
  return (
    <Section title="Experience" id="experience">
      <div className="exp">
        <div className="item">
          <div className="header">
            <div className="logo"><Image src="/images/logos/amazon.png" alt="Amazon" width={40} height={40} /></div>
            <div className="text">
              <h3>Applied Scientist Intern</h3>
              <p className="company">Amazon · Seattle, WA, US (remote)</p>
              <p className="duration">May 2021 – Sep 2021</p>
            </div>
          </div>
          <ul className="bullets">
            <li>Proposed a reinforcement learning method for conversational question answering, accepted by <a href="https://www.amazon.science/publications/reinforced-question-rewriting-for-conversational-question-answering" target="_blank" rel="noopener noreferrer">EMNLP Industry Track 2022</a>.</li>
            <li>Mentors / Managers: Jie Zhao, Anjie Fang, Besnik Fetahu, Oleg Rokhlenko, Shervin Malmasi.</li>
          </ul>
        </div>

        <div className="item">
          <div className="header">
            <div className="logo"><Image src="/images/logos/zhuiyi.png" alt="Zhuiyi Technology" width={40} height={40} /></div>
            <div className="text">
              <h3>Applied Science Intern</h3>
              <p className="company">Zhuiyi Technology · Shenzhen, Guangdong, China</p>
              <p className="duration">May 2019 – Sep 2019</p>
            </div>
          </div>
          <ul className="bullets">
            <li>Led a team solving <a href="https://super.gluebenchmark.com/leaderboard/" target="_blank" rel="noopener noreferrer">SuperGLUE benchmark tasks</a>, achieving a 2nd-place ranking, covered in <a href="https://tech.chinadaily.com.cn/a/202001/17/WS5e211ef9a3107bb6b579a768.html" target="_blank" rel="noopener noreferrer">China Daily</a> and <a href="https://finance.sina.cn/tech/2021-01-20/detail-ikftssan8774723.d.html?fromtech=1" target="_blank" rel="noopener noreferrer">Sina Tech</a>.</li>
            <li>Manager: Yinan Xu.</li>
          </ul>
        </div>

        <div className="item">
          <div className="header">
            <div className="logo"><Image src="/images/logos/bloomberg.png" alt="Bloomberg" width={40} height={40} /></div>
            <div className="text">
              <h3>Applied Science Intern</h3>
              <p className="company">Bloomberg · Princeton, NJ, USA</p>
              <p className="duration">Jun 2016 – Aug 2016</p>
            </div>
          </div>
          <ul className="bullets">
            <li>Analysis of Bloomberg Data License usage patterns.</li>
            <li>Manager: Michael Liebman.</li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .exp {
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
          border-left: 1px solid var(--border);
          padding-left: 1.5rem;
        }
        .item {
          position: relative;
        }
        .item::before {
          content: '';
          position: absolute;
          left: calc(-1.5rem - 1px);
          top: 0.5rem;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--bg);
          border: 2px solid var(--border-strong);
          transform: translateX(-50%);
          transition: border-color 0.2s ease;
        }
        .item:hover::before {
          border-color: var(--accent);
        }
        .header {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          margin-bottom: 0.6rem;
        }
        .logo {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 9px;
          overflow: hidden;
          background: #fff;
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        h3 {
          font-size: 1.06rem;
          font-weight: 600;
          color: var(--text);
        }
        .company {
          margin-top: 0.1rem;
          font-size: 0.98rem;
          font-weight: 500;
          color: var(--text-muted);
        }
        .duration {
          margin-top: 0.1rem;
          font-size: 0.9rem;
          color: var(--text-faint);
        }
        .bullets {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          font-size: 0.98rem;
          line-height: 1.6;
          color: var(--text-muted);
        }
        .bullets li {
          position: relative;
          padding-left: 1rem;
        }
        .bullets li::before {
          content: '–';
          position: absolute;
          left: 0;
          color: var(--text-faint);
        }
      `}</style>
    </Section>
  );
}
