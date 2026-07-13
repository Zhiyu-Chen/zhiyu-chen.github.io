---
title: "ACL 2026 — Curated Paper Notes by Topic"
date: "2026-07-12"
excerpt: "Personal notes from ACL 2026, grouped by research area — a short summary and link for each paper that caught my eye, around agents, memory, retrieval/RAG, evaluation, and efficiency."
tags: ["ACL 2026", "Conference Notes"]
---
# ACL 2026 — Curated Paper Notes by Topic

My personal notes from attending ACL 2026, grouped by research area, with a short summary and a link
to each paper (its official ACL Anthology page wherever one exists). These are the papers that caught
my eye — picked around my own research interests and topics relevant to what I've been working on
lately. A few papers sit across two areas and are listed in both, tagged with an *(also §N)* pointer.

## Contents

- [Disclaimer](#disclaimer)
- [1. Agent Evolution](#1-agent-evolution)
- [2. Agent Memory](#2-agent-memory)
- [3. Retrieval, RAG & Deep Research Agents](#3-retrieval-rag--deep-research-agents)
- [4. Information Verification & Reporting Agents](#4-information-verification--reporting-agents)
- [5. Clustering](#5-clustering)
- [6. NER](#6-ner)
- [7. Efficient Text Classification](#7-efficient-text-classification)
- [8. Taxonomy & Knowledge Graph Construction](#8-taxonomy--knowledge-graph-construction)
- [9. Data Generation](#9-data-generation)
- [10. General LLM / Agent Evaluation](#10-general-llm--agent-evaluation)
- [Other topics](#other-topics)
  - [Financial NLP](#financial-nlp)
  - [Safety / red-teaming](#safety--red-teaming)
  - [Long-context & inference efficiency](#long-context--inference-efficiency)
  - [Reasoning](#reasoning)
  - [Tool-use & other agents](#tool-use--other-agents)
  - [LLM analysis & interpretability](#llm-analysis--interpretability)
  - [Information extraction](#information-extraction)
  - [Other systems & applications](#other-systems--applications)

## Disclaimer

- **Selection bias:** these papers were hand-picked based on **my personal research interests and
  topics relevant to our team's work** (agents, memory, retrieval/RAG, evaluation, knowledge
  construction, efficiency). This is *not* a representative sample of ACL 2026 — whole subfields
  (e.g. machine translation, speech, multilinguality, linguistics, ethics) are largely absent simply
  because I didn't collect them.
- **Position bias:** the poster papers carry an extra bias — which ones I came across depended on
  **where they happened to be placed** in the hall and which sessions I could physically reach, so
  proximity (not quality) decided a lot of that subset.

---

## 1. Agent Evolution

These papers are about agents that improve on their own, without a human tuning them each time.
Two broad approaches show up.

The first is to let an agent build up reusable pieces from its past runs: a library of skills
(RL for Self-Improving Agent), executable subagents it can call again (AgentFactory), or if-then
rules distilled from its own failures (RIMRule, which uses Minimum Description Length to stop the
rule set from bloating). The second is to train the agent with RL on its own execution feedback —
PEARL learns scheduling from round-by-round rewards, and AgenticQwen keeps small tool-use models
improving through "data flywheels."

Worth reading alongside these is GDPevo, which pushes back on the whole premise: it tests
self-evolution on real enterprise tasks with anti-memorization safeguards, and serves as a reality
check on a literature that mostly reports its own successes. In practice the artifact-reuse methods
are cheaper and easier to inspect since they skip retraining, while the RL methods are more capable
but heavier to run.

| Paper | Link |
|-------|------|
| Reinforcement Learning for Self-Improving Agent with Skill Library | [2026.acl-long.69](https://aclanthology.org/2026.acl-long.69/) |
| AgentFactory: A Self-Evolving Framework Through Executable Subagent Accumulation and Reuse | [2026.acl-demo.81](https://aclanthology.org/2026.acl-demo.81/) |
| RIMRule: Improving Tool-Using Language Agents via MDL-Guided Rule Learning | [2026.acl-long.1599](https://aclanthology.org/2026.acl-long.1599/) |
| PEARL: Self-Evolving Assistant for Time Management with Reinforcement Learning | [2026.acl-long.1547](https://aclanthology.org/2026.acl-long.1547/) |
| AgenticQwen: Training Small Agentic Language Models with Dual Data Flywheels | [2026.acl-industry.37](https://aclanthology.org/2026.acl-industry.37/) |
| GDPevo: Evaluating Agent Self-Evolution on Real Business Tasks ⚠️ | [github.com/Prism-Shadow/GDPevo](https://github.com/Prism-Shadow/GDPevo) (project page only) |

> ⚠️ **Note on GDPevo:** I saw this paper at a poster session, but I could **not** find it in the
> official ACL 2026 proceedings — no ACL Anthology entry and no arXiv preprint turned up, even after
> checking the full ACL 2026 volume indexes. The only link I could confirm is the project's GitHub
> page shown on the poster (github.com/Prism-Shadow/GDPevo). 

---

## 2. Agent Memory

These papers deal with how an agent stores, retrieves, and prunes what it has seen so that it stays
coherent over a long interaction. Three threads stand out.

The first is learning the memory policy instead of hand-writing it: Memory-R1 and MemSearch-o1 use
RL to decide what is worth keeping and retrieving, and "Beyond the Context Window" goes a step
further by making summarization itself an action the agent learns.

The second thread asks how much the memory *structure* actually matters, and here two papers openly
disagree. "Does Memory Need Graphs?" runs a controlled comparison and comes out largely on the "no"
side — once you put every system on an equal footing, most of the gains people attributed to graph
structure turn out to come from basic configuration choices, not the graph. Mnemis argues the
opposite, showing that a graph *does* help when you use it well: its dual-route design (plain
similarity plus a hierarchical-graph route) tops LoCoMo and LongMemEval. So the honest answer isn't
a clean yes or no — it depends heavily on how fairly the baselines are controlled.

The third thread is the most unusual: AgentOCR and OCR-Memory compress a long history into *images*
rather than tokens ("optical" memory). Rounding things out, "How Memory Management Impacts LLM
Agents" gives the empirical backdrop showing that the memory policy really does shape behavior, and
RealMem contributes a benchmark grounded in realistic assistant use. Taken together, the field is
clearly moving from ad-hoc buffers toward learned policies, while still arguing over whether heavy
graph structure pays for itself.

| Paper | Link |
|-------|------|
| How Memory Management Impacts LLM Agents: An Empirical Study | [2026.acl-long.27](https://aclanthology.org/2026.acl-long.27/) |
| Memory-R1: Enhancing LLM Agents to Manage and Utilize Memories via RL | [2026.acl-long.583](https://aclanthology.org/2026.acl-long.583/) |
| MemSearch-o1: Reasoning-Aligned Memory Growth in Agentic Search | [2026.acl-long.41](https://aclanthology.org/2026.acl-long.41/) *(also §3)* |
| Does Memory Need Graphs? A Unified Framework for Long-Term Dialog Memory | [2026.acl-long.1232](https://aclanthology.org/2026.acl-long.1232/) |
| Mnemis: Dual-Route Retrieval on Hierarchical Graphs for Long-Term LLM Memory | [2026.acl-long.1096](https://aclanthology.org/2026.acl-long.1096/) |
| RealMem: Benchmarking LLMs in Real-World Memory-Driven Interaction | [2026.findings-acl.703](https://aclanthology.org/2026.findings-acl.703/) |
| AgentOCR: Reimagining Agent History via Optical Self-Compression | [2026.acl-long.230](https://aclanthology.org/2026.acl-long.230/) |
| OCR-Memory: Optical Context Retrieval for Long-Horizon Agent Memory | [2026.acl-long.474](https://aclanthology.org/2026.acl-long.474/) |
| Beyond the Context Window: Scaling Agentic RL via End-to-end Optimized Context Compression (SUPO) | [2026.acl-long.966](https://aclanthology.org/2026.acl-long.966/) |

---

## 3. Retrieval, RAG & Deep Research Agents

These papers sit along one spectrum. At one end is the retrieval component and classic RAG — fetch
some documents and feed them to the model. At the other end are deep research agents that search the
web over many steps, gather evidence, and write up a report. The middle — reasoning-aware retrieval,
reranking, agentic search — is where the two blur together, which is why I've grouped them into one
section rather than treating retrieval as a footnote to agents.

### Retrieval & RAG

The RAG work this year is less about scaling up and more about being cheaper, more selective, and
more trustworthy.

On the efficiency-and-simplicity side, MiniRAG gets RAG working with small models through a graph
index, "Making LLMs Efficient Dense Retrievers" turns an LLM into a fast retriever, and HiChunk
rethinks how documents are chunked. A reasoning-aware thread tunes retrieval to the difficulty of
the query — ReasonEmbed learns embeddings for reasoning-intensive queries, and Adaptive Retrieval
for Reasoning only fetches when it helps.

Routing and control shows up in R³AG, which picks the right retriever per query (or skips retrieval
altogether), and in "Knowing When Not to Answer," which adds OOD detection so a RAG system can
safely abstain. Finally a faithfulness-and-modality thread covers HalluGuard (a small
evidence-grounded model that catches RAG hallucinations), LAD-RAG (layout-aware, for visually-rich
documents), Zero-Shot Multimodal Retrieval, and explainable generative retrieval that exposes *why*
a document was returned.

| Paper | Link |
|-------|------|
| MiniRAG: Towards Extremely Simple Retrieval-Augmented Generation | [2026.acl-long.1721](https://aclanthology.org/2026.acl-long.1721/) |
| Making Large Language Models Efficient Dense Retrievers | [2026.acl-long.587](https://aclanthology.org/2026.acl-long.587/) |
| HiChunk: Evaluating and Enhancing RAG with Hierarchical Chunking | [2026.acl-long.1372](https://aclanthology.org/2026.acl-long.1372/) |
| ReasonEmbed: Enhanced Text Embeddings for Reasoning-Intensive Document Retrieval | [2026.acl-long.54](https://aclanthology.org/2026.acl-long.54/) |
| Adaptive Retrieval for Reasoning | [2026.acl-long.1734](https://aclanthology.org/2026.acl-long.1734/) |
| R³AG: Retriever Routing for Retrieval-Augmented Generation | [2026.acl-long.939](https://aclanthology.org/2026.acl-long.939/) |
| Knowing When Not to Answer: Lightweight KB-Aligned OOD Detection for Safe RAG | [2026.acl-long.740](https://aclanthology.org/2026.acl-long.740/) |
| HalluGuard: Evidence-Grounded Small Reasoning Models to Mitigate Hallucinations in RAG | [2026.findings-acl.835](https://aclanthology.org/2026.findings-acl.835/) |
| LAD-RAG: Layout-aware Dynamic RAG for Visually-Rich Document Understanding | [2026.acl-long.724](https://aclanthology.org/2026.acl-long.724/) |
| Zero-Shot Multimodal Retrieval with Multi-Scale Contextual Representations | [2026.acl-long.930](https://aclanthology.org/2026.acl-long.930/) |
| Why These Documents? Explainable Generative Retrieval with Hierarchical Category Paths | [2026.findings-acl.1097](https://aclanthology.org/2026.findings-acl.1097/) |
| Parallel Context-of-Experts Decoding for Retrieval Augmented Generation | [2026.findings-acl.1635](https://aclanthology.org/2026.findings-acl.1635/) |
| Late Code Chunking: A Code Chunking Strategy for Repository-Level Code Completion | [2026.acl-long.1166](https://aclanthology.org/2026.acl-long.1166/) |

### Deep research agents

Deep research agents push retrieval into a multi-step loop — plan, search, gather evidence, write a
report — and the work here splits into two camps. The first is evaluation, and it is strikingly
critical of how good these agents actually are. DR-Arena pits them against each other in an automated
arena; BrowseComp-Plus deliberately separates retrieval quality from reasoning so a score actually
tells you something; DeepFact co-evolves the benchmark and the agent to keep the pressure on
factuality; and "Beyond Single-shot Writing" has the sharpest result of the bunch — the agents look
fine on a first pass but fall apart once you ask them to revise a report over several turns. The
common thread is that today's benchmarks make these agents look better than they are.

The second camp is about the machinery inside. FlowSearch swaps the usual flat scratchpad for a
knowledge structure it builds and updates as it goes; MemSearch-o1 grows and re-traces a memory so
evidence survives a long search; "Rethinking Reasoning-Intensive Retrieval" improves the retriever
that sits inside an agentic search loop; and "Rerank Before You Reason" makes the nice practical
point that a bit of reranking often beats spending more tokens on reasoning. What ties them together
is a focus on handling evidence better, rather than just reasoning harder.

| Paper | Link |
|-------|------|
| DR-Arena: an Automated Evaluation Framework for Deep Research Agents | [2026.acl-long.1249](https://aclanthology.org/2026.acl-long.1249/) |
| BrowseComp-Plus: A Fair and Disentangled Evaluation Benchmark for Deep Search Agents | [2026.acl-long.1023](https://aclanthology.org/2026.acl-long.1023/) |
| DeepFact: Co-Evolving Benchmarks and Agents for Deep Research Factuality | [2026.acl-long.1586](https://aclanthology.org/2026.acl-long.1586/) |
| Beyond Single-shot Writing: Deep Research Agents are Unreliable at Multi-turn Report Revision | [2026.acl-long.609](https://aclanthology.org/2026.acl-long.609/) |
| FlowSearch: Advancing Deep Research with Dynamic Structured Knowledge Flow | [2026.acl-long.971](https://aclanthology.org/2026.acl-long.971/) |
| Rethinking Reasoning-Intensive Retrieval: Evaluating and Advancing Retrievers in Agentic Search | [2026.acl-long.1705](https://aclanthology.org/2026.acl-long.1705/) |
| MemSearch-o1: Reasoning-Aligned Memory Growth in Agentic Search | [2026.acl-long.41](https://aclanthology.org/2026.acl-long.41/) *(also §2)* |
| Rerank Before You Reason: Effective Token Cost in Deep Search Agents | [2026.findings-acl.1289](https://aclanthology.org/2026.findings-acl.1289/) |

---

## 4. Information Verification & Reporting Agents

This group is about agentic systems that gather, verify, and synthesize information from
real-world sources — news, media, financial filings, scientific papers — and turn it into a concrete
deliverable, whether that's a fact-check, a monitoring report, or a grounded set of claims. Several
are demo-track systems, so the emphasis is on working pipelines rather than new modeling ideas.
QRAFT imitates how professional fact-checkers write their articles; FactSearch is an interactive
tool for checking whether an LLM's output is true; Media-to-Insights runs continuous media
monitoring with hybrid matching and extraction; FinReporting normalizes financial disclosures from
different jurisdictions into one consistent report; IntrAgent reads a paper's structure to ground
its citations; NSF-SciFy mines 2.8M scientific claims out of NSF award abstracts; and PaperMentor
gives multi-agent writing feedback on research drafts in Overleaf. Most of these read as applied
information infrastructure rather than general chatbot-style agents.

| Paper | Link |
|-------|------|
| IntrAgent: An LLM Agent for Content-Grounded Information Retrieval through Literature Review | [2026.acl-long.29](https://aclanthology.org/2026.acl-long.29/) |
| Can LLMs Automate Fact-Checking Article Writing? (QRAFT) | [2026.tacl-1.23](https://aclanthology.org/2026.tacl-1.23/) |
| FactSearch: An Interactive Agentic Fact Search System for Verifying LLM Outputs | [2026.acl-demo.36](https://aclanthology.org/2026.acl-demo.36/) |
| Media-to-Insights: A Multi-Agent AI System for Continuous Media Monitoring, Analysis, and Reporting | [2026.acl-demo.44](https://aclanthology.org/2026.acl-demo.44/) |
| FinReporting: An Agentic Workflow for Localized Reporting of Cross-Jurisdiction Financial Disclosures | [2026.acl-demo.71](https://aclanthology.org/2026.acl-demo.71/) |
| NSF-SciFy: Mining the NSF Awards Database for Scientific Claims | [2026.acl-long.2118](https://aclanthology.org/2026.acl-long.2118/) |
| PaperMentor: A Human-Centered Multi-Agent Writing Tutor for AI Research Papers on Overleaf | [2026.acl-demo.39](https://aclanthology.org/2026.acl-demo.39/) |

---

## 5. Clustering

All three papers put an LLM in the clustering loop — embeddings and geometry do the first pass, and
the LLM adds the semantics — but they differ in where the LLM comes in.

TLSA brings it in early, aligning the text and label spaces with contrastive learning so the model
can discover new categories rather than just sort into known ones. "Reasoning-Based Refinement"
keeps a conventional geometric clustering and uses the LLM afterwards, as a judge that verifies,
merges, and labels the clusters. The Media Narratives paper is the most structured of the three:
it first pulls out causal narrative chains and character roles, then runs a constrained k-means to
produce interpretable narrative schemas.

The shared assumption is that distance-based clustering on its own no longer cuts it, and that the
interesting gains come from layering LLM reasoning on top for labeling, merging, or discovering
categories.

| Paper | Link |
|-------|------|
| TLSA: LLM-Guided Text-Label Space Alignment with Contrastive Learning for Generalized Category Discovery | [2026.acl-long.869](https://aclanthology.org/2026.acl-long.869/) |
| Reasoning-Based Refinement of Unsupervised Text Clusters with LLMs | [2026.findings-acl.482](https://aclanthology.org/2026.findings-acl.482/) |
| A Structured Clustering Approach for Inducing Media Narratives | [2026.acl-long.1970](https://aclanthology.org/2026.acl-long.1970/) |

---

## 6. NER

The common thread here is making NER cheaper, either on the annotation side or the inference side.

"Many-Shot ICL for NER" (ICA) goes after annotation cost: it turns roughly 100 seed labels into
thousands through in-context learning, which is enough to then train an efficient BERT. "Just Pass
Twice" goes after inference cost with a nice trick — running a sentence through a frozen causal LLM
twice gives every token full bidirectional context, which buys +7.9 F1 and more than a 20x speedup
over generative NER without any fine-tuning. MERLIN is doing something different: rather than
cutting cost, it widens the scope with a multilingual, multimodal testbed for entity recognition and
linking.

So two of the three are efficiency methods (one for labeling, one for decoding) and the third is an
evaluation resource.

| Paper | Link |
|-------|------|
| Scaling Performance and Low-Resource Annotation with Many-Shot In-Context Learning for NER | [2026.findings-acl.1431](https://aclanthology.org/2026.findings-acl.1431/) |
| Just Pass Twice: Efficient Token Classification with LLMs for Zero-Shot NER | [2026.acl-long.526](https://aclanthology.org/2026.acl-long.526/) |
| MERLIN: A Testbed for Multilingual Multimodal Entity Recognition and Linking | [2026.tacl-1.19](https://aclanthology.org/2026.tacl-1.19/) |

---

## 7. Efficient Text Classification

These papers are about classification when you want to lean on the big model as little as possible
while still being accurate and well-calibrated.

"LLMs for Now, Fine-Tuning for Later" pairs an LLM, which is reliable early on and right after the
data drifts, with a small model trained through active learning, and switches between them to keep
cost down. The Uncertainty-Aware Contrastive paper takes the other route of making the cheap option
better, learning uncertainty-aware, label-wise contrastive embeddings so a small model can do the
job. The confidence-sparsity paper is the cautionary note: verbalized LLM confidences are too sparse
and quietly distort selective-prediction metrics, and it suggests using verbalization logprobs as an
inexpensive fix. LePREC is the odd one out — it takes a reasoning task (judging the relevance of
legal issues) and recasts it as classification over structured factors.

So two of them are about cheap-but-accurate prediction, one is about trustworthy confidence for
abstention, and one is about turning reasoning into classification.

| Paper | Link |
|-------|------|
| LLMs for Now, Fine-Tuning for Later: An Ensemble Approach to Data Drift | [2026.acl-srw.77](https://aclanthology.org/2026.acl-srw.77/) |
| Uncertainty-Aware Contrastive Sentence Embedding for Text Classification | [2026.findings-acl.1927](https://aclanthology.org/2026.findings-acl.1927/) |
| Evaluation Pitfalls and Sparsity Limitations in LLM-based Confidence Estimates for Classification | [2026.findings-acl.1671](https://aclanthology.org/2026.findings-acl.1671/) *(also §10)* |
| LePREC: Reasoning as Classification over Structured Factors | [2026.acl-long.350](https://aclanthology.org/2026.acl-long.350/) |

---

## 8. Taxonomy & Knowledge Graph Construction

These papers build structured knowledge — KGs, ontologies, taxonomies — out of text, and two
themes come through.

The first is autonomy: instead of filling in a schema someone designed by hand, the system works
out the structure itself. AutoSchemaKG induces the schema as it builds the KG at web scale,
SocraticKG drives extraction through 5W1H questions that become canonicalized triples, STEM traces
structural evidence, and the retail-banking paper induces a contact-reason taxonomy straight from
call transcripts. The second theme is how to evaluate the result when there's no gold standard to
compare against — "No Gold Standard, No Problem" proposes reference-free metrics (an NLI
verification check and a concept-similarity correlation) for exactly that.

FinKario and DySECT sit at the applied end, one a financial event-KG and the other a
human-in-the-loop toolkit that keeps a knowledge base evolving. Compared with older fixed-schema
work, the common move is to let the system decide the structure — and then figure out how much to
trust what it produced.

| Paper | Link |
|-------|------|
| AutoSchemaKG: Autonomous Knowledge Graph Construction through Dynamic Schema Induction | [2026.acl-long.942](https://aclanthology.org/2026.acl-long.942/) |
| STEM: Structure-Tracing Evidence Mining for Knowledge Graph Construction | [2026.acl-long.329](https://aclanthology.org/2026.acl-long.329/) |
| FinKario: Event-Enhanced Automated Construction of Financial Knowledge Graph | [2026.acl-long.446](https://aclanthology.org/2026.acl-long.446/) |
| SocraticKG: Knowledge Graph Construction via QA-Driven Fact Extraction | [2026.findings-acl.1951](https://aclanthology.org/2026.findings-acl.1951/) |
| DySECT: A Dynamic Self-Evolving Extraction and Curation Toolkit | [2026.acl-demo.69](https://aclanthology.org/2026.acl-demo.69/) |
| Text-to-SQL Task-oriented Dialogue Ontology Construction | [arxiv 2507.23358](https://arxiv.org/abs/2507.23358) (TACL, pending indexing) |
| Hierarchical Reason-of-Contact Detection via LLM-Driven Taxonomy Induction | [2026.acl-industry.108](https://aclanthology.org/2026.acl-industry.108/) |
| No Gold Standard, No Problem: Reference-Free Evaluation of Taxonomies | [2026.findings-acl.1273](https://aclanthology.org/2026.findings-acl.1273/) |

---

## 9. Data Generation

These three use LLMs to manufacture training data, and they mostly differ in what they optimize for.
VOYAGER is training-free and goes for diversity, generating varied datasets straight from LLMs with
no fine-tuning step. CodeEvo focuses on code data and cares about quality, building it up through
hybrid, iterative feedback loops instead of one-shot prompting. RAGen is the most applied of the
three — a modular pipeline that produces domain-specific question–answer–context triples for the
specific purpose of adapting a RAG system to a new domain. In short, one is chasing coverage, one is
chasing correctness through feedback, and one is chasing domain fit for a downstream RAG use case.

| Paper | Link |
|-------|------|
| VOYAGER: A Training-Free Approach for Generating Diverse Datasets using LLMs | [2026.acl-long.784](https://aclanthology.org/2026.acl-long.784/) |
| CodeEvo: Interaction-Driven Synthesis of Code-centric Data through Hybrid and Iterative Feedback | [2026.acl-long.438](https://aclanthology.org/2026.acl-long.438/) |
| RAGen: Domain-Specific Data Generation for RAG Adaptation | [2026.findings-acl.960](https://aclanthology.org/2026.findings-acl.960/) |

---

## 10. General LLM / Agent Evaluation

This is the catch-all evaluation group for LLMs and agents (deep-research evaluation lives in §3).
Most of it circles around factuality and faithfulness, and it helps to think of three angles.

Some papers try to catch problems as the text is being generated — PrefixNLI flags inconsistencies
mid-decode, CiteGuard checks that citations are actually attributed correctly. Others focus on
measuring hallucination and factual recall with harder benchmarks and metrics: Rethinking
Hallucination Detection, Comprehensiveness Metrics, HalluCitation, and Stress-Testing Factual
Consistency all argue the usual metrics are too lenient. A third set turns the lens on the
evaluation process itself — Stop Guessing on how few samples you really need, the sparse-confidence
critique, and the finding that LLMs make good annotation assistants but poor independent annotators.

Alongside factuality there's a robustness thread too, with TraceElephant on attributing failures in
multi-agent systems and "When LLMs Read Tables Carelessly" on data-referencing errors. The mood
across the group is skeptical: current benchmarks tend to flatter models, and these papers are
pushing for harder and more honest measurement.

| Paper | Link |
|-------|------|
| PrefixNLI: Detecting Factual Inconsistencies as Soon as They Arise | [2026.acl-long.63](https://aclanthology.org/2026.acl-long.63/) |
| CiteGuard: Faithful Citation Attribution for LLMs via Retrieval-Augmented Validation | [2026.acl-long.282](https://aclanthology.org/2026.acl-long.282/) |
| HalluCitation Matters: Revealing the Impact of Hallucinated References | [2026.acl-long.2189](https://aclanthology.org/2026.acl-long.2189/) |
| Rethinking Evaluation for LLM Hallucination Detection | [2026.acl-long.680](https://aclanthology.org/2026.acl-long.680/) |
| Comprehensiveness Metrics for Automatic Evaluation of Factual Recall | [2026.findings-acl.1744](https://aclanthology.org/2026.findings-acl.1744/) |
| Stress Testing Factual Consistency Metrics for Long-Document Summarization | [2026.acl-long.1472](https://aclanthology.org/2026.acl-long.1472/) |
| When LLMs Read Tables Carelessly: Measuring and Reducing Data Referencing Errors | [2026.acl-long.762](https://aclanthology.org/2026.acl-long.762/) |
| Stop Guessing When to Stop Testing: Efficient Model Evaluation with Just Enough Data | [2026.findings-acl.43](https://aclanthology.org/2026.findings-acl.43/) |
| Seeing the Whole Elephant: Failure Attribution in LLM-based Multi-Agent Systems | [2026.acl-long.912](https://aclanthology.org/2026.acl-long.912/) |
| CogToM: A Comprehensive Theory-of-Mind Benchmark inspired by Human Cognition | [2026.acl-long.1448](https://aclanthology.org/2026.acl-long.1448/) |
| ViDoRe V3: Comprehensive Evaluation of RAG in Complex Real-World Scenarios | [2026.acl-long.755](https://aclanthology.org/2026.acl-long.755/) |
| DeepPlanning: Benchmarking Long-Horizon Agentic Planning with Verifiable Constraints | [2026.acl-long.335](https://aclanthology.org/2026.acl-long.335/) |
| LLMs Are Effective Human Annotation Assistants, But Not Good Independent Annotators | [2026.findings-acl.4](https://aclanthology.org/2026.findings-acl.4/) |
| Evaluation Pitfalls and Sparsity Limitations in LLM-based Confidence Estimates for Classification | [2026.findings-acl.1671](https://aclanthology.org/2026.findings-acl.1671/) *(also §7)* |

---

## Other topics

Additional areas represented in the collection, grouped in the same format. Papers that belong to
one of the ten topics above are listed there and not repeated here.

---

### Financial NLP

Benchmarks and pipelines for finance-specific tasks. Most of these are new evaluation resources:
one tests whether a model's chain-of-thought financial reasoning is actually verifiable step by
step, one measures how well vision-language models read financial charts, and one predicts earnings
surprises from multi-modal earnings-call data. The other two are methods rather than benchmarks —
a card-based reranking scheme for answering questions over financial documents, and a prompting
approach for combining the many heterogeneous data types (text, tables, time series) that financial
inputs come in.

| Paper | Link |
|-------|------|
| FinChain: A Symbolic Benchmark for Verifiable Chain-of-Thought Financial Reasoning | [2026.acl-long.662](https://aclanthology.org/2026.acl-long.662/) |
| FinChart-Bench: Benchmarking Financial Chart Comprehension in Vision-Language Models | [2026.acl-long.615](https://aclanthology.org/2026.acl-long.615/) |
| FinCall-Surprise: A Large Scale Multi-modal Benchmark for Earnings Surprise Prediction | [2026.acl-long.610](https://aclanthology.org/2026.acl-long.610/) |
| FinCARDS: Card-Based Analyst Reranking for Financial Document Question Answering | [2026.findings-acl.1244](https://aclanthology.org/2026.findings-acl.1244/) |
| A Unified Framework for Modeling Heterogeneous Financial Data via Dual-Granularity Prompting | [2026.acl-industry.43](https://aclanthology.org/2026.acl-industry.43/) |

---

### Safety / red-teaming

Two sides of safety: finding failures and fixing them. On the attack side, the papers probe
different ways models can be broken — through implicit malicious cues split across image and text,
through prompts that are left deliberately incomplete, through an automated red-teamer that composes
jailbreak instructions on the fly, and through multi-turn conversations that gradually conceal
financial risk. On the defense and analysis side, one paper keeps a model safe during continued
fine-tuning by selecting training samples based on their gradients, and another re-examines how much
personally identifiable information models truly memorize, arguing that apparent leakage is often
cued pattern-completion rather than real memorization.

| Paper | Link |
|-------|------|
| CrossGuard: Safeguarding MLLMs against Joint-Modal Implicit Malicious Attacks | [2026.acl-long.1178](https://aclanthology.org/2026.acl-long.1178/) |
| Incomplete Prompt Jailbreaks in Large Language Models | [2026.findings-acl.1567](https://aclanthology.org/2026.findings-acl.1567/) |
| Adaptive Instruction Composition for Automated LLM Red-Teaming | [2026.acl-long.2174](https://aclanthology.org/2026.acl-long.2174/) |
| Learning to Conceal Risk: Controllable Multi-turn Red Teaming for LLMs in the Financial Domain | [2026.acl-long.1903](https://aclanthology.org/2026.acl-long.1903/) |
| Continual Safety Alignment via Gradient-Based Sample Selection | [2026.findings-acl.942](https://aclanthology.org/2026.findings-acl.942/) |
| Do LLMs Really Memorize PII? Revisiting PII Leakage with a Cue-Controlled Memorization Framework | [2026.acl-long.1560](https://aclanthology.org/2026.acl-long.1560/) |

---

### Long-context & inference efficiency

Making long context and inference cheaper to run. A lot of the work targets the KV cache: one
compresses it while decoupling that from context reduction, one reuses it speculatively to speed up
RAG serving, and one anchors it to the source to stop the model hallucinating once the cache is
compressed. Beyond the cache, one paper stretches the usable context window all the way to 16M
tokens, another handles long inputs by retrieving from a ranked external memory instead of keeping
everything in context, and a last one proposes a lightweight hierarchical architecture for cheaper
generation overall.

| Paper | Link |
|-------|------|
| Every Token Counts: Generalizing 16M Ultra-Long Context in Large Language Models | [2026.acl-long.464](https://aclanthology.org/2026.acl-long.464/) |
| SpecCache: Speculative KV Cache Reuse for Efficient RAG Serving | [2026.acl-long.859](https://aclanthology.org/2026.acl-long.859/) |
| FastKV: Decoupling of Context Reduction and KV Cache Compression for Prefill-Decoding Acceleration | [2026.findings-acl.1610](https://aclanthology.org/2026.findings-acl.1610/) |
| Anchoring the Cache: Mitigating Contextual Hallucination in KV-Compressed Long-Context Summarization | [2026.acl-long.1542](https://aclanthology.org/2026.acl-long.1542/) |
| Long Context Modeling with Ranked Memory-Augmented Retrieval | [2026.acl-long.162](https://aclanthology.org/2026.acl-long.162/) |
| PHOTON: Hierarchical Autoregressive Modeling for Lightweight and Efficient Generation | [2026.acl-long.1778](https://aclanthology.org/2026.acl-long.1778/) |

---

### Reasoning

Reasoning quality and its cost. A recurring finding is that more thinking isn't always better: one
paper shows that decomposing a problem into reasoning skills yields higher accuracy with fewer
tokens, and another studies structurally *why* models over-think simple queries. The other two are
about efficiency of a different kind — one selects training data by the reasoning skills it
exercises so a model can learn to reason from less data, and one lets long-context models reuse
thought templates across problems instead of reasoning from scratch each time.

| Paper | Link |
|-------|------|
| Thinking with Reasoning Skills: Fewer Tokens, More Accuracy | [2026.acl-industry.154](https://aclanthology.org/2026.acl-industry.154/) |
| Do LLMs Really Need 10+ Thoughts...? Towards Structural Understanding of LLM Overthinking | [2026.acl-long.773](https://aclanthology.org/2026.acl-long.773/) |
| Skill-Aware Data Selection and Fine-Tuning for Data-Efficient Reasoning | [2026.acl-short.49](https://aclanthology.org/2026.acl-short.49/) |
| When Thoughts Meet Facts: Reusable Reasoning for Long-Context LMs | [2026.findings-acl.81](https://aclanthology.org/2026.findings-acl.81/) |

---

### Tool-use & other agents

Agent work that doesn't fit the evolution, memory, or research buckets. Some of it is about tools:
one paper generates computer-use environments for training agents, one routes an agent across
MCP tools and the wider "agent web," and one contributes a parameter-level API-graph dataset for
tool agents. The rest is a mix — distilling agentic search ability into small models, analyzing what
actually makes multi-agent debate work (it comes down to answer diversity and confidence), aligning
LLM-based user simulators to a goal, and getting agents to correctly follow long, complex policy
documents.

| Paper | Link |
|-------|------|
| C-World: A Computer Use Agent Environment Creator | [2026.acl-long.2001](https://aclanthology.org/2026.acl-long.2001/) |
| ACE-Router: Generalizing History-Aware Routing from MCP Tools to the Agent Web | [2026.acl-long.281](https://aclanthology.org/2026.acl-long.281/) |
| In-N-Out: A Parameter-Level API Graph Dataset for Tool Agents | [arxiv 2509.01560](https://arxiv.org/abs/2509.01560) (TACL, pending indexing) |
| Can Compact Language Models Search Like Agents? Distillation-Guided Policy Optimization | [2026.acl-long.1751](https://aclanthology.org/2026.acl-long.1751/) |
| Demystifying Multi-Agent Debate: The Role of Confidence and Diversity | [2026.findings-acl.1694](https://aclanthology.org/2026.findings-acl.1694/) |
| Goal Alignment in LLM-Based User Simulators for Conversational AI | [arxiv 2507.20152](https://arxiv.org/abs/2507.20152) (TACL, pending indexing) |
| Analyzing and Internalizing Complex Policy Documents for LLM Agents | [2026.acl-long.767](https://aclanthology.org/2026.acl-long.767/) |

---

### LLM analysis & interpretability

Studies of how models work rather than new systems: what retrieval heads actually do (they're
dynamic, not fixed), whether internal representations reveal reasoning correctness, how fine-tuning
compares to in-context learning, and how to control memorization during training.

| Paper | Link |
|-------|------|
| Retrieval Heads are Dynamic | [2026.acl-long.715](https://aclanthology.org/2026.acl-long.715/) |
| Truth as a Trajectory: What Internal Representations Reveal About LLM Reasoning | [2026.acl-long.2073](https://aclanthology.org/2026.acl-long.2073/) |
| Fine-tuning vs. In-context Learning in LLMs: A Formal Language Learning Perspective | [2026.acl-long.1932](https://aclanthology.org/2026.acl-long.1932/) |
| Memory Dial: A Training Framework for Controllable Memorization in Language Models | [2026.findings-acl.179](https://aclanthology.org/2026.findings-acl.179/) |

---

### Information extraction

Event and claim extraction beyond the taxonomy/KG work in §8: complex scientific event extraction,
and a study of the evaluation pitfalls in multimedia event extraction.

| Paper | Link |
|-------|------|
| EXCEEDS: Extracting Complex Events via Nugget-based Grid Modeling in Scientific Domain | [2026.acl-long.271](https://aclanthology.org/2026.acl-long.271/) |
| Evaluation Pitfalls and Challenges in Multimedia Event Extraction | [2026.acl-long.1426](https://aclanthology.org/2026.acl-long.1426/) |

---

### Other systems & applications

Two that don't group with the rest. One is an industry system that uses LLM-driven contextualization
to spot viral demand spikes in e-commerce early; the other is a general-purpose text-annotation
platform with LLM assistance built into the labeling loop.

| Paper | Link |
|-------|------|
| TrendPulse: A Framework for Capturing Viral E-Commerce Spikes via LLM-Driven Contextualization | [2026.acl-industry.64](https://aclanthology.org/2026.acl-industry.64/) |
| POTATO 2.0: A Comprehensive Annotation Platform with AI-in-the-Loop Support | [2026.acl-demo.37](https://aclanthology.org/2026.acl-demo.37/) |
