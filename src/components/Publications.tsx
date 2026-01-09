import Section from './Section';

export default function Publications() {
  return (
    <Section title="Publications" id="publications">
      <ul className="pub-list">
        <li>
          <a href="https://www.sciencedirect.com/science/article/abs/pii/S0306457325004005" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Efficient Low-Rank Index Routing for High-Dimensional Approximate Nearest Neighbor Search.</span>
          </a>
          <div className="authors">Y. Li, S. Wang, <strong>Z. Chen</strong>, Z. Peng.</div>
          <span className="venue"> Information Processing & Management, 2026</span>
        </li>
        <li>
          <a href="https://link.springer.com/article/10.1007/s11280-025-01374-8" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Dependency Relationships-Enhanced Attentive Group Recommendation in HINs.</span>
          </a>
          <div className="authors">J. Zhang, <strong>Z. Chen</strong>, S. Wang, X. Yang, D. Han, Z. Peng.</div>
          <span className="venue"> World Wide Web Journal, 2025</span>
        </li>
        <li>
          <a href="https://aclanthology.org/2025.emnlp-industry.72.pdf" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> LLM-based Dialogue Labeling for Multiturn Adaptive RAG.</span>
          </a>
          <div className="authors"><strong>Z. Chen</strong>, B. Xie, S. Srinivasan, M. Ramanathan, R. Maragoud, Q. Liu.</div>
          <span className="venue"> EMNLP 2025 (Industry)</span>
        </li>
        <li>
          <a href="https://arxiv.org/pdf/2506.00210" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> REIC: RAG-Enhanced Intent Classification at Scale.</span>
          </a>
          <div className="authors">Z. Zhang, M. Yang, <strong>Z. Chen</strong>, Y. Zhuang, S.-T. Pi, Q. Liu, R. Maragoud, V. Nguyen, A. Beniwal.</div>
          <span className="venue"> EMNLP 2025 (Industry)</span>
        </li>
        <li>
          <a href="https://aclanthology.org/2025.acl-long.641/" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Wizard of Shopping: Target-Oriented E-commerce Dialogue Generation with Decision Tree Branching.</span>
          </a>
          <div className="authors">X. Li, <strong>Z. Chen</strong>, J. Choi, N. Vedula, B. Fetahu, O. Rokhlenko, S. Malmasi.</div>
          <span className="venue"> ACL 2025</span>
        </li>
        <li>
          <a href="https://ieeexplore.ieee.org/document/11113061/" target="_blank" rel="noopener noreferrer" className="title-link">
            {/* Fallback to arXiv or similar if IEEE ICDE 2025 not fully indexed yet */}
            <span className="title"> Approximate Vector Set Search: A Bio-Inspired Approach for High-Dimensional Spaces.</span>
          </a>
          <div className="authors">W. Yang, S. Wang, <strong>Z. Chen</strong>, Y. Sun, Z. Peng.</div>
          <span className="venue"> ICDE 2025</span>
        </li>
        <li>
          <a href="https://www.computer.org/csdl/proceedings-article/icde/2025/360300a585/26FZzmi551S" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Joinable Search Over Multi-Source Spatial Datasets: Overlap, Coverage, and Efficiency.</span>
          </a>
          <div className="authors">Y. Li, S. Wang, <strong>Z. Chen</strong>, S. Chen, Z. Peng.</div>
          <span className="venue"> ICDE 2025</span>
        </li>
        <li>
          <a href="https://aclanthology.org/2024.emnlp-industry.42/" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Identifying High Consideration E-Commerce Search Queries.</span>
          </a>
          <div className="authors"><strong>Z. Chen</strong>, B. Fetahu, J. Choi and S. Malmasi.</div>
          <span className="venue"> EMNLP 2024 (Industry)</span>
        </li>
        <li>
          <a href="https://doi.org/10.1145/3626772.3657772" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Unbiased Learning-to-Rank Needs Unconfounded Propensity Estimation.</span>
          </a>
          <div className="authors">D. Luo, L. Zou, Q. Ai, <strong>Z. Chen</strong>, C. Li, D. Yin and B.D. Davison.</div>
          <span className="venue"> SIGIR 2024</span>
        </li>
        <li>
          <a href="https://aclanthology.org/2024.lrec-main.533/" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Enhancing Low-Resource LLMs Classification with PEFT and Synthetic Data.</span>
          </a>
          <div className="authors">P. Patwa, S. Filice, <strong>Z. Chen</strong>, G. Castellucci, O. Rokhlenko and S. Malmasi.</div>
          <span className="venue"> LREC-COLING 2024</span>
        </li>
        <li>
          <a href="https://aclanthology.org/2024.acl-long.295/" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Training-free Optimization of Generative Recommender Systems using Large Language Model Optimizers.</span>
          </a>
          <div className="authors">LK. Şenel, B. Fetahu, D. Yoshida, <strong>Z. Chen</strong>, G. Castellucci, N. Vedula, J. Choi and S. Malmasi.</div>
          <span className="venue"> ACL 2024</span>
        </li>
        <li>
          <a href="https://aclanthology.org/2023.emnlp-industry.63/" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> InstructPTS: Instruction-Tuning LLMs for Product Title Summarization.</span>
          </a>
          <div className="authors">B. Fetahu, <strong>Z. Chen</strong>, O. Rokhlenko, S. Malmasi.</div>
          <span className="venue"> EMNLP 2023 (Industry)</span>
        </li>
        <li>
          <a href="https://aclanthology.org/2023.findings-emnlp.134/" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Multi-Coner V2: A Large Multilingual Dataset for Fine-grained and Noisy Named Entity Recognition.</span>
          </a>
          <div className="authors">B. Fetahu, <strong>Z. Chen</strong>, S. Kar, O. Rokhlenko, S. Malmasi.</div>
          <span className="venue"> EMNLP 2023 (Findings)</span>
        </li>
        <li>
          <a href="https://aclanthology.org/2023.acl-industry.73/" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Generate-then-Retrieve: Intent-Aware FAQ Retrieval in Product Search.</span>
          </a>
          <div className="authors"><strong>Z. Chen</strong>, J. Choi, B. Fetahu, O. Rokhlenko, S. Malmasi.</div>
          <span className="venue"> ACL 2023</span>
        </li>
        <li>
          <a href="https://aclanthology.org/2023.acl-industry.70/" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Answering Unanswered Questions through Semantic Reformulations in Spoken QA.</span>
          </a>
          <div className="authors">P. Faustini, <strong>Z. Chen</strong>, B. Fetahu, O. Rokhlenko, S. Malmasi.</div>
          <span className="venue"> ACL 2023</span>
        </li>
        <li>
          <a href="https://dl.acm.org/doi/10.1145/3539597.3570395" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Model-based Unbiased Learning to Rank.</span>
          </a>
          <div className="authors">D. Luo, L. Zou, Q. Ai, <strong>Z. Chen</strong>, D. Yin, B.D. Davison.</div>
          <span className="venue"> WSDM 2023</span>
        </li>
        <li>
          <a href="https://aclanthology.org/2022.emnlp-industry.36/" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Reinforced Question Rewriting for Conversational Question Answering.</span>
          </a>
          <div className="authors"><strong>Z. Chen</strong>, J. Zhao, A. Fang, B. Fetahu, O. Rokhlenko, S. Malmasi.</div>
          <span className="venue"> EMNLP 2022</span>
        </li>
        <li>
          <a href="https://doi.org/10.1145/3485447.3511972" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> StruBERT: Structure-aware BERT for Table Search and Matching.</span>
          </a>
          <div className="authors">M. Trabelsi, <strong>Z. Chen</strong>, S. Zhang, J. Heflin, and B. D. Davison.</div>
          <span className="venue"> WWW 2022</span>
        </li>
        <li>
          <a href="https://dl.acm.org/doi/abs/10.1145/3459637.3482140" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> MGNETS: Multi-Graph Neural Networks for Table Search.</span>
          </a>
          <div className="authors"><strong>Z. Chen</strong>, M. Trabelsi, J. Heflin, D. Yin, and B. D. Davison. (2021)</div>
          <span className="venue"> CIKM 2021</span>
        </li>
        <li>
          <a href="https://doi.org/10.1007/s10791-021-09398-0" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Neural Ranking Models for Document Retrieval.</span>
          </a>
          <div className="authors">M. Trabelsi, <strong>Z. Chen</strong>, J. Heflin and B.D. Davison. (2021)</div>
          <span className="venue"> Information Retrieval Journal 2021</span>
        </li>
        <li>
          <a href="https://dl.acm.org/doi/10.1145/3404835.3463260" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> WTR: A Test Collection for Web Table Retrieval.</span>
          </a>
          <div className="authors"><strong>Z. Chen</strong>, S. Zhang, and B. D. Davison. (2021)</div>
          <span className="venue"> SIGIR 2021</span>
        </li>
        <li>
          <a href="https://ieeexplore.ieee.org/document/9378185" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> A Hybrid Deep Model for Learning to Rank Data Tables.</span>
          </a>
          <div className="authors">M. Trabelsi, <strong>Z. Chen</strong>, J. Heflin and B.D. Davison. (2020)</div>
          <span className="venue"> IEEE BigData 2020</span>
        </li>
        <li>
          <a href="https://ieeexplore.ieee.org/document/9378239" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Relational Graph Embeddings for Table Retrieval.</span>
          </a>
          <div className="authors">M. Trabelsi*, <strong>Z. Chen</strong>*, B. D. Davison, and J. Heflin.</div>
          <span className="venue"> BigGraphs 2020 (at IEEE BigData)</span>
        </li>
        <li>
          <a href="https://ceur-ws.org/Vol-2721/paper559.pdf" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Towards Knowledge Acquisition of Metadata on AI Progress.</span>
          </a>
          <div className="authors"><strong>Z. Chen</strong>*, M. Trabelsi*, B. D. Davison, and J. Heflin. (2020)</div>
          <span className="venue"> ISWC 2020 (Demo)</span>
        </li>
        <li>
          <a href="https://dl.acm.org/doi/10.1145/3397271.3401044" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Table Search Using a Deep Contextualized Language Model.</span>
          </a>
          <div className="authors"><strong>Z. Chen</strong>, M. Trabelsi, J. Heflin, Y. Xu, and B. D. Davison. (2020)</div>
          <span className="venue"> SIGIR 2020</span>
        </li>
        <li>
          <a href="https://proceedings.mlr.press/v119/ye20a.html" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Pretrained Generalized Autoregressive Model with Adaptive Probabilistic Label Clusters for Extreme Multi-label Text Classification.</span>
          </a>
          <div className="authors">H. Ye, <strong>Z. Chen</strong>, D.-H. Wang, and B. D. Davison. (2020)</div>
          <span className="venue"> ICML 2020</span>
        </li>
        <li>
          <a href="https://dl.acm.org/doi/10.1007/978-3-030-45439-5_18" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Leveraging Schema Labels to Enhance Dataset Search.</span>
          </a>
          <div className="authors"><strong>Z. Chen</strong>, H. Jia, J. Heflin, and B. D. Davison. (2020)</div>
          <span className="venue"> ECIR 2020</span>
        </li>
        <li>
          <a href="https://dl.acm.org/doi/10.1145/3184558.3191601" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Generating Schema Labels through Dataset Content Analysis.</span>
          </a>
          <div className="authors"><strong>Z. Chen</strong>, H. Jia, J. Heflin and B. D. Davison. (2018)</div>
          <span className="venue"> WWW 2018 (Profiles & Data:Search Workshop) - <strong>Best Paper Award</strong></span>
        </li>
      </ul>
      <style jsx>{`
        .pub-list {
          list-style: none;
          padding: 0;
        }
        li {
          margin-bottom: 2rem;
          line-height: 1.6;
          color: #555;
        }
        .title-link {
          display: block;
          margin-bottom: 0.2rem;
        }
        .title {
          font-weight: 600;
          color: var(--accent);
          text-decoration: none;
          font-size: 1.1em;
        }
        .title:hover {
          text-decoration: underline;
        }
        .authors {
          color: #555;
          margin-bottom: 0.2rem;
        }
        .venue {
          font-style: italic;
          color: #666;
          display: block;
          margin-top: 0.2rem;
          font-size: 0.95em;
        }
      `}</style>
    </Section>
  );
}
