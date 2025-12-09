import Section from './Section';

export default function Publications() {
  return (
    <Section title="Publications" id="publications">
      <ul className="pub-list">
        <li>
          <a href="https://aclanthology.org/2025.acl-long.641/" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Wizard of Shopping: Target-Oriented E-commerce Dialogue Generation with Decision Tree Branching.</span>
          </a>
          <div className="authors">X. Li, <strong>Z. Chen</strong>, J. Choi, N. Vedula, B. Fetahu, O. Rokhlenko, S. Malmasi.</div>
          <span className="venue"> In Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (ACL 2025).</span>
        </li>
        <li>
          <a href="https://ieeexplore.ieee.org/document/11113061/" target="_blank" rel="noopener noreferrer" className="title-link">
            {/* Fallback to arXiv or similar if IEEE ICDE 2025 not fully indexed yet */}
            <span className="title"> Approximate Vector Set Search: A Bio-Inspired Approach for High-Dimensional Spaces.</span>
          </a>
          <div className="authors">W. Yang, S. Wang, <strong>Z. Chen</strong>, Y. Sun, Z. Peng.</div>
          <span className="venue"> In Proceedings of the 2025 IEEE 41st International Conference on Data Engineering (ICDE 2025).</span>
        </li>
        <li>
          <a href="https://www.computer.org/csdl/proceedings-article/icde/2025/360300a585/26FZzmi551S" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Joinable Search Over Multi-Source Spatial Datasets: Overlap, Coverage, and Efficiency.</span>
          </a>
          <div className="authors">Y. Li, S. Wang, <strong>Z. Chen</strong>, S. Chen, Z. Peng.</div>
          <span className="venue"> In Proceedings of the 2025 IEEE 41st International Conference on Data Engineering (ICDE 2025).</span>
        </li>
        <li>
          <a href="https://aclanthology.org/2024.emnlp-industry.42/" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Identifying High Consideration E-Commerce Search Queries.</span>
          </a>
          <div className="authors"><strong>Z. Chen</strong>, B. Fetahu, J. Choi and S. Malmasi.</div>
          <span className="venue"> In Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing (EMNLP 2024 Industry Track).</span>
        </li>
        <li>
          <a href="https://doi.org/10.1145/3626772.3657772" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Unbiased Learning-to-Rank Needs Unconfounded Propensity Estimation.</span>
          </a>
          <div className="authors">D. Luo, L. Zou, Q. Ai, <strong>Z. Chen</strong>, C. Li, D. Yin and B.D. Davison.</div>
          <span className="venue"> In Proceedings of the 47th International ACM SIGIR Conference on Research and Development in Information Retrieval (SIGIR 2024).</span>
        </li>
        <li>
          <a href="https://aclanthology.org/2024.lrec-main.533/" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Enhancing Low-Resource LLMs Classification with PEFT and Synthetic Data.</span>
          </a>
          <div className="authors">P. Patwa, S. Filice, <strong>Z. Chen</strong>, G. Castellucci, O. Rokhlenko and S. Malmasi.</div>
          <span className="venue"> In Proceedings of the 2024 Joint International Conference on Computational Linguistics, Language Resources and Evaluation (LREC-COLING 2024).</span>
        </li>
        <li>
          <a href="https://aclanthology.org/2024.acl-long.295/" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Training-free Optimization of Generative Recommender Systems using Large Language Model Optimizers.</span>
          </a>
          <div className="authors">LK. Şenel, B. Fetahu, D. Yoshida, <strong>Z. Chen</strong>, G. Castellucci, N. Vedula, J. Choi and S. Malmasi.</div>
          <span className="venue"> In Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (ACL 2024).</span>
        </li>
        <li>
          <a href="https://aclanthology.org/2023.emnlp-industry.63/" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> InstructPTS: Instruction-Tuning LLMs for Product Title Summarization.</span>
          </a>
          <div className="authors">B. Fetahu, <strong>Z. Chen</strong>, O. Rokhlenko, S. Malmasi.</div>
          <span className="venue"> In Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing (EMNLP 2023 Industry Track).</span>
        </li>
        <li>
          <a href="https://aclanthology.org/2023.findings-emnlp.134/" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Multi-Coner V2: A Large Multilingual Dataset for Fine-grained and Noisy Named Entity Recognition.</span>
          </a>
          <div className="authors">B. Fetahu, <strong>Z. Chen</strong>, S. Kar, O. Rokhlenko, S. Malmasi.</div>
          <span className="venue"> In Findings of the 2023 Conference on Empirical Methods in Natural Language Processing (EMNLP 2023 Findings).</span>
        </li>
        <li>
          <a href="https://aclanthology.org/2023.acl-industry.73/" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Generate-then-Retrieve: Intent-Aware FAQ Retrieval in Product Search.</span>
          </a>
          <div className="authors"><strong>Z. Chen</strong>, J. Choi, B. Fetahu, O. Rokhlenko, S. Malmasi.</div>
          <span className="venue"> In Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (ACL 2023).</span>
        </li>
        <li>
          <a href="https://aclanthology.org/2023.acl-industry.70/" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Answering Unanswered Questions through Semantic Reformulations in Spoken QA.</span>
          </a>
          <div className="authors">P. Faustini, <strong>Z. Chen</strong>, B. Fetahu, O. Rokhlenko, S. Malmasi.</div>
          <span className="venue"> In Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (ACL 2023).</span>
        </li>
        <li>
          <a href="https://dl.acm.org/doi/10.1145/3539597.3570395" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Model-based Unbiased Learning to Rank.</span>
          </a>
          <div className="authors">D. Luo, L. Zou, Q. Ai, <strong>Z. Chen</strong>, D. Yin, B.D. Davison.</div>
          <span className="venue"> In Proceedings of The 16th Annual ACM International Conference on Web Search and Data Mining, (WSDM 2023).</span>
        </li>
        <li>
          <a href="https://aclanthology.org/2022.emnlp-industry.36/" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Reinforced Question Rewriting for Conversational Question Answering.</span>
          </a>
          <div className="authors"><strong>Z. Chen</strong>, J. Zhao, A. Fang, B. Fetahu, O. Rokhlenko, S. Malmasi.</div>
          <span className="venue"> In Proceedings of the 2022 Conference on Empirical Methods in Natural Language Processing (EMNLP 2022).</span>
        </li>
        <li>
          <a href="https://doi.org/10.1145/3485447.3511972" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> StruBERT: Structure-aware BERT for Table Search and Matching.</span>
          </a>
          <div className="authors">M. Trabelsi, <strong>Z. Chen</strong>, S. Zhang, J. Heflin, and B. D. Davison.</div>
          <span className="venue"> In Proceedings of the 31st Web Conference, Online, April, 2022 (WWW 2022).</span>
        </li>
        <li>
          <a href="https://dl.acm.org/doi/abs/10.1145/3459637.3482140" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> MGNETS: Multi-Graph Neural Networks for Table Search.</span>
          </a>
          <div className="authors"><strong>Z. Chen</strong>, M. Trabelsi, J. Heflin, D. Yin, and B. D. Davison. (2021)</div>
          <span className="venue"> In Proceedings of the 30th ACM International Conference on Information and Knowledge Management, Online, November, 2021 (CIKM 2021).</span>
        </li>
        <li>
          <a href="https://doi.org/10.1007/s10791-021-09398-0" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Neural Ranking Models for Document Retrieval.</span>
          </a>
          <div className="authors">M. Trabelsi, <strong>Z. Chen</strong>, J. Heflin and B.D. Davison. (2021)</div>
          <span className="venue"> Information Retrieval Journal, October, 2021.</span>
        </li>
        <li>
          <a href="https://dl.acm.org/doi/10.1145/3404835.3463260" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> WTR: A Test Collection for Web Table Retrieval.</span>
          </a>
          <div className="authors"><strong>Z. Chen</strong>, S. Zhang, and B. D. Davison. (2021)</div>
          <span className="venue"> In Proceedings of 44th International ACM SIGIR Conference on Research and Development in Information Retrieval, July.</span>
        </li>
        <li>
          <a href="https://ieeexplore.ieee.org/document/9378185" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> A Hybrid Deep Model for Learning to Rank Data Tables.</span>
          </a>
          <div className="authors">M. Trabelsi, <strong>Z. Chen</strong>, J. Heflin and B.D. Davison. (2020)</div>
          <span className="venue"> In Proceedings of the 2020 IEEE International Conference on Big Data (IEEE BigData 2020), December.</span>
        </li>
        <li>
          <a href="https://ieeexplore.ieee.org/document/9378239" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Relational Graph Embeddings for Table Retrieval.</span>
          </a>
          <div className="authors">M. Trabelsi*, <strong>Z. Chen</strong>*, B. D. Davison, and J. Heflin.</div>
          <span className="venue"> In the Seventh International Workshop on High Performance Big Graph Data Management, Analysis, and Mining (BigGraphs 2020), held with IEEE BigData 2020, December.</span>
        </li>
        <li>
          <a href="https://ceur-ws.org/Vol-2721/paper559.pdf" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Towards Knowledge Acquisition of Metadata on AI Progress.</span>
          </a>
          <div className="authors"><strong>Z. Chen</strong>*, M. Trabelsi*, B. D. Davison, and J. Heflin. (2020)</div>
          <span className="venue"> In Proceedings of the ISWC 2020 Demos and Industry Tracks: From Novel Ideas to Industrial Practice, co-located with the 19th International Semantic Web Conference (ISWC 2020), November.</span>
        </li>
        <li>
          <a href="https://dl.acm.org/doi/10.1145/3397271.3401044" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Table Search Using a Deep Contextualized Language Model.</span>
          </a>
          <div className="authors"><strong>Z. Chen</strong>, M. Trabelsi, J. Heflin, Y. Xu, and B. D. Davison. (2020)</div>
          <span className="venue"> In Proceedings of 43rd International ACM SIGIR Conference on Research and Development in Information Retrieval, pages 589-598, July.</span>
        </li>
        <li>
          <a href="https://proceedings.mlr.press/v119/ye20a.html" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Pretrained Generalized Autoregressive Model with Adaptive Probabilistic Label Clusters for Extreme Multi-label Text Classification.</span>
          </a>
          <div className="authors">H. Ye, <strong>Z. Chen</strong>, D.-H. Wang, and B. D. Davison. (2020)</div>
          <span className="venue"> In Proceedings of 37th International Conference on Machine Learning, PMLR 119, July.</span>
        </li>
        <li>
          <a href="https://dl.acm.org/doi/10.1007/978-3-030-45439-5_18" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Leveraging Schema Labels to Enhance Dataset Search.</span>
          </a>
          <div className="authors"><strong>Z. Chen</strong>, H. Jia, J. Heflin, and B. D. Davison. (2020)</div>
          <span className="venue"> In Proceedings of the 42nd European Conference on Information Retrieval (ECIR 2020), pages 267-280, April.</span>
        </li>
        <li>
          <a href="https://dl.acm.org/doi/10.1145/3184558.3191601" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Generating Schema Labels through Dataset Content Analysis.</span>
          </a>
          <div className="authors"><strong>Z. Chen</strong>, H. Jia, J. Heflin and B. D. Davison. (2018)</div>
          <span className="venue"> In Companion Proceedings of the The Web Conference (WWW ’18), pages 1515-1522. Presented at the International Workshop on Profiling and Searching Data on the Web(Profiles & Data:Search’18, co-located with The Web Conference), April. Best paper award.</span>
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
