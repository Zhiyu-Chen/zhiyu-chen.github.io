import Section from './Section';

export default function Awards() {
  return (
    <Section title="Honors and Awards" id="awards">
      <ul className="award-list">
        <li>2021, ACM SIGIR Student Travel Grant</li>
        <li>2021, Rossin Professional Development Program Award at Lehigh University</li>
        <li>2020, ISWC Student Grant</li>
        <li>2020, ACM SIGIR Student Travel Grant</li>
        <li>2018, Best Paper Award of International Workshop on Profiles&Data:Search’18</li>
        <li>2018, ACM SIGIR Student Travel Grant</li>
        <li>2015, RCEAS Dean’s Fellowship</li>
        <li>2014, Chinese Government Scholarship from China Scholarship Council</li>
        <li>2013, First Prize, National Mathematical Contest in Modeling (Jiangsu Division)</li>
        <li>2012, Honorable Mention for Social Practice</li>
        <li>2012, Second Prize, 11-th Higher Mathematics Competition of Jiangsu Province</li>
        <li>2011-2014, Student Scholarship</li>
        <li>2011-2014, Merit Student</li>
      </ul>
      <style jsx>{`
        .award-list {
          list-style: none;
          padding-left: 0;
        }
        li {
          margin-bottom: 0.8rem;
          color: #bdbdbd;
          display: flex;
          align-items: baseline;
        }
        li::before {
            content: "🏆";
            margin-right: 0.8rem;
            font-size: 0.8rem;
        }
      `}</style>
    </Section>
  );
}
