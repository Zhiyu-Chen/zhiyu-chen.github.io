import Section from './Section';

export default function Publications() {
  return (
    <Section title="Publications" id="publications">
      <ul className="pub-list">
        <li>
          X. Li, Z. Chen, J. Choi, N. Vedula, B. Fetahu, O. Rokhlenko, S. Malmasi.
          <a href="https://aclanthology.org/2025.acl-long.875/" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Wizard of Shopping: Target-Oriented E-commerce Dialogue Generation with Decision Tree Branching.</span>
          </a>
          <span className="venue"> In Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (ACL 2025).</span>
        </li>
        <li>
          W. Yang, S. Wang, Z. Chen, Y. Sun, Z. Peng.
          <a href="https://arxiv.org/abs/2412.03683" target="_blank" rel="noopener noreferrer" className="title-link">
            {/* Fallback to arXiv or similar if IEEE ICDE 2025 not fully indexed yet */}
            <span className="title"> Approximate Vector Set Search: A Bio-Inspired Approach for High-Dimensional Spaces.</span>
          </a>
          <span className="venue"> In Proceedings of the 2025 IEEE 41st International Conference on Data Engineering (ICDE 2025).</span>
        </li>
        <li>
          Y. Li, S. Wang, Z. Chen, S. Chen, Z. Peng.
          <a href="https://arxiv.org/abs/2412.04616" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Joinable Search Over Multi-Source Spatial Datasets: Overlap, Coverage, and Efficiency.</span>
          </a>
          <span className="venue"> In Proceedings of the 2025 IEEE 41st International Conference on Data Engineering (ICDE 2025).</span>
        </li>
        <li>
          Z. Chen, B. Fetahu, J. Choi and S. Malmasi.
          <a href="https://aclanthology.org/2024.emnlp-industry.81/" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Identifying High Consideration E-Commerce Search Queries.</span>
          </a>
          <span className="venue"> In Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing (EMNLP 2024 Industry Track).</span>
        </li>
        <li>
          D. Luo, L. Zou, Q. Ai, Z. Chen, C. Li, D. Yin and B.D. Davison.
          <a href="https://doi.org/10.1145/3626772.3657772" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Unbiased Learning-to-Rank Needs Unconfounded Propensity Estimation.</span>
          </a>
          <span className="venue"> In Proceedings of the 47th International ACM SIGIR Conference on Research and Development in Information Retrieval (SIGIR 2024).</span>
        </li>
        <li>
          P. Patwa, S. Filice, Z. Chen, G. Castellucci, O. Rokhlenko and S. Malmasi.
          <a href="https://aclanthology.org/2024.lrec-main.1287/" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Enhancing Low-Resource LLMs Classification with PEFT and Synthetic Data.</span>
          </a>
          <span className="venue"> In Proceedings of the 2024 Joint International Conference on Computational Linguistics, Language Resources and Evaluation (LREC-COLING 2024).</span>
        </li>
        <li>
          LK. Şenel, B. Fetahu, D. Yoshida, Z. Chen, G. Castellucci, N. Vedula, J. Choi and S. Malmasi.
          <a href="https://aclanthology.org/2024.acl-long.172/" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Training-free Optimization of Generative Recommender Systems using Large Language Model Optimizers.</span>
          </a>
          <span className="venue"> In Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (ACL 2024).</span>
        </li>
        <li>
          B. Fetahu, Z. Chen, O. Rokhlenko, S. Malmasi.
          <a href="https://aclanthology.org/2023.emnlp-industry.53/" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> InstructPTS: Instruction-Tuning LLMs for Product Title Summarization.</span>
          </a>
          <span className="venue"> In Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing (EMNLP 2023 Industry Track).</span>
        </li>
        <li>
          B. Fetahu, Z. Chen, S. Kar, O. Rokhlenko, S. Malmasi.
          <a href="https://aclanthology.org/2023.findings-emnlp.1/" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Multi-Coner V2: A Large Multilingual Dataset for Fine-grained and Noisy Named Entity Recognition.</span>
          </a>
          <span className="venue"> In Findings of the 2023 Conference on Empirical Methods in Natural Language Processing (EMNLP 2023 Findings).</span>
        </li>
        <li>
          Z. Chen, J. Choi, B. Fetahu, O. Rokhlenko, S. Malmasi.
          <a href="https://aclanthology.org/2023.acl-long.875/" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Generate-then-Retrieve: Intent-Aware FAQ Retrieval in Product Search.</span>
          </a>
          <span className="venue"> In Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (ACL 2023).</span>
        </li>
        <li>
          P. Faustini, Z. Chen, B. Fetahu, O. Rokhlenko, S. Malmasi.
          <a href="https://aclanthology.org/2023.acl-long.868/" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Answering Unanswered Questions through Semantic Reformulations in Spoken QA.</span>
          </a>
          <span className="venue"> In Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (ACL 2023).</span>
        </li>
        <li>
          D. Luo, L. Zou, Q. Ai, Z. Chen, D. Yin, B.D. Davison.
          <a href="https://doi.org/10.1145/3539597.3570453" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Model-based Unbiased Learning to Rank.</span>
          </a>
          <span className="venue"> In Proceedings of The 16th Annual ACM International Conference on Web Search and Data Mining, (WSDM 2023).</span>
        </li>
        <li>
          Z. Chen, J. Zhao, A. Fang, B. Fetahu, O. Rokhlenko, S. Malmasi.
          <a href="https://aclanthology.org/2022.emnlp-industry.6/" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Reinforced Question Rewriting for Conversational Question Answering.</span>
          </a>
          <span className="venue"> In Proceedings of the 2022 Conference on Empirical Methods in Natural Language Processing (EMNLP 2022).</span>
        </li>
        <li>
          M. Trabelsi, Z. Chen, S. Zhang, J. Heflin, and B. D. Davison.
          <a href="https://doi.org/10.1145/3485447.3511972" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> StruBERT: Structure-aware BERT for Table Search and Matching.</span>
          </a>
          <span className="venue"> In Proceedings of the 31st Web Conference, Online, April, 2022 (WWW 2022).</span>
        </li>
        <li>
          Z. Chen, M. Trabelsi, J. Heflin, D. Yin, and B. D. Davison. (2021)
          <a href="https://doi.org/10.1145/3459637.3482140" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> MGNETS: Multi-Graph Neural Networks for Table Search.</span>
          </a>
          <span className="venue"> In Proceedings of the 30th ACM International Conference on Information and Knowledge Management, Online, November, 2021 (CIKM 2021).</span>
        </li>
        <li>
          M. Trabelsi, Z. Chen, J. Heflin and B.D. Davison. (2021)
          <a href="https://doi.org/10.1007/s10791-021-09398-0" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Neural Ranking Models for Document Retrieval.</span>
          </a>
          <span className="venue"> Information Retrieval Journal, October, 2021.</span>
        </li>
        <li>
          Z. Chen, S. Zhang, and B. D. Davison. (2021)
          <a href="https://doi.org/10.1145/3404835.3463242" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> WTR: A Test Collection for Web Table Retrieval.</span>
          </a>
          <span className="venue"> In Proceedings of 44th International ACM SIGIR Conference on Research and Development in Information Retrieval, July.</span>
        </li>
        <li>
          M. Trabelsi, Z. Chen, J. Heflin and B.D. Davison. (2020)
          <a href="https://doi.org/10.1109/BigData50022.2020.9378185" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> A Hybrid Deep Model for Learning to Rank Data Tables.</span>
          </a>
          <span className="venue"> In Proceedings of the 2020 IEEE International Conference on Big Data (IEEE BigData 2020), December.</span>
        </li>
        <li>
          M. Trabelsi*, Z. Chen*, B. D. Davison, and J. Heflin.
          <a href="https://ieeexplore.ieee.org/document/9378136" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Relational Graph Embeddings for Table Retrieval.</span>
          </a>
          <span className="venue"> In the Seventh International Workshop on High Performance Big Graph Data Management, Analysis, and Mining (BigGraphs 2020), held with IEEE BigData 2020, December.</span>
        </li>
        <li>
          Z. Chen*, M. Trabelsi*, B. D. Davison, and J. Heflin. (2020)
          <a href="http://ceur-ws.org/Vol-2721/paper35.pdf" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Towards Knowledge Acquisition of Metadata on AI Progress.</span>
          </a>
          <span className="venue"> In Proceedings of the ISWC 2020 Demos and Industry Tracks: From Novel Ideas to Industrial Practice, co-located with the 19th International Semantic Web Conference (ISWC 2020), November.</span>
        </li>
        <li>
          Z. Chen, M. Trabelsi, J. Heflin, Y. Xu, and B. D. Davison. (2020)
          <a href="https://doi.org/10.1145/3397271.3401045" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Table Search Using a Deep Contextualized Language Model.</span>
          </a>
          <span className="venue"> In Proceedings of 43rd International ACM SIGIR Conference on Research and Development in Information Retrieval, pages 589-598, July.</span>
        </li>
        <li>
          H. Ye, Z. Chen, D.-H. Wang, and B. D. Davison. (2020)
          <a href="https://proceedings.mlr.press/v119/ye20a.html" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Pretrained Generalized Autoregressive Model with Adaptive Probabilistic Label Clusters for Extreme Multi-label Text Classification.</span>
          </a>
          <span className="venue"> In Proceedings of 37th International Conference on Machine Learning, PMLR 119, July.</span>
        </li>
        <li>
          Z. Chen, H. Jia, J. Heflin, and B. D. Davison. (2020)
          <a href="https://doi.org/10.1007/978-3-030-45439-5_18" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Leveraging Schema Labels to Enhance Dataset Search.</span>
          </a>
          <span className="venue"> In Proceedings of the 42nd European Conference on Information Retrieval (ECIR 2020), pages 267-280, April.</span>
        </li>
        <li>
          Z. Chen, H. Jia, J. Heflin and B. D. Davison. (2018)
          <a href="https://doi.org/10.1145/3184558.3191601" target="_blank" rel="noopener noreferrer" className="title-link">
            <span className="title"> Generating Schema Labels through Dataset Content Analysis.</span>
          </a>
          <span className="venue"> In Companion Proceedings of the The Web Conference (WWW ’18), pages 1515-1522. Presented at the International Workshop on Profiling and Searching Data on the Web(Profiles & Data:Search’18, co-located with The Web Conference), April. Best paper award.</span>
        </li>
      </ul>
      <style jsx>{`
        .pub-list {
          list-style: none;
          padding: 0;
        }
        li {
          margin-bottom: 1.5rem;
          line-height: 1.7;
          color: #555;
        }
        .title {
          font-weight: 600;
          color: var(--foreground);
        }
        .venue {
          font-style: italic;
          color: var(--accent);
          display: block;
          margin-top: 0.25rem;
          font-size: 0.95em;
        }
      `}</style>
    </Section>
  );
}
