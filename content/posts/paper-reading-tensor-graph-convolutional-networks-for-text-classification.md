---
title: Zhiyu's Blog
date: '2020-02-17T02:56:09.000Z'
tags:
  - GCN
  - Paper Reading
  - Text Classification
  - GCN
  - Text Classification
---

		
<p>The basic notations for GCN are the same with this <a rel="noreferrer noopener" aria-label="post (opens in a new tab)" href="https://tkipf.github.io/graph-convolutional-networks/" target="_blank">post</a>.</p>



<h2 class="wp-block-heading">1.  Graph Tensor Definition</h2>



<p>Here we first describe the formal definition of graph tensor which consists of a series of graphs.</p>



<p><img src="https://s0.wp.com/latex.php?latex=%5Cmathcal%7BG%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=%5Cmathcal%7BG%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=%5Cmathcal%7BG%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="\mathcal{G}" class="latex"> is a <strong>graph tensor</strong>, where <img src="https://s0.wp.com/latex.php?latex=%5Cmathcal%7BG%7D+%3D+%28G_1%2C...%2CG_r%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=%5Cmathcal%7BG%7D+%3D+%28G_1%2C...%2CG_r%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=%5Cmathcal%7BG%7D+%3D+%28G_1%2C...%2CG_r%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="\mathcal{G} = (G_1,...,G_r)" class="latex"> and <img src="https://s0.wp.com/latex.php?latex=G_i+%3D+%28V_i%2C+E_i%2C+A_i%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=G_i+%3D+%28V_i%2C+E_i%2C+A_i%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=G_i+%3D+%28V_i%2C+E_i%2C+A_i%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="G_i = (V_i, E_i, A_i)" class="latex">,  if <img src="https://s0.wp.com/latex.php?latex=V_i+%3D+V_j+%28i%2Cj%3D1%2C...%2Cr%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=V_i+%3D+V_j+%28i%2Cj%3D1%2C...%2Cr%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=V_i+%3D+V_j+%28i%2Cj%3D1%2C...%2Cr%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="V_i = V_j (i,j=1,...,r)" class="latex"> and <img src="https://s0.wp.com/latex.php?latex=A_i+%5Cneq+A_j&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=A_i+%5Cneq+A_j&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=A_i+%5Cneq+A_j&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="A_i \neq A_j" class="latex"> (when <img src="https://s0.wp.com/latex.php?latex=i+%5Cneq+j&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=i+%5Cneq+j&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=i+%5Cneq+j&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="i \neq j" class="latex">).</p>



<p>Where <img src="https://s0.wp.com/latex.php?latex=G_i&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=G_i&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=G_i&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="G_i" class="latex"> is the i-th graph in the graph tensor, <img src="https://s0.wp.com/latex.php?latex=V_i%28%7CV_i%7C+%3D+n%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=V_i%28%7CV_i%7C+%3D+n%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=V_i%28%7CV_i%7C+%3D+n%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="V_i(|V_i| = n)" class="latex"> is the set of i-th graph nodes, <img src="https://s0.wp.com/latex.php?latex=E_i&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=E_i&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=E_i&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="E_i" class="latex"> is the set of the i-th graph edges. <img src="https://s0.wp.com/latex.php?latex=A_i&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=A_i&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=A_i&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="A_i" class="latex"> is the i-th adjacency matrix. For convinience, all adjacency matrices are packed into a <strong>graph adjacency tensor</strong> <img src="https://s0.wp.com/latex.php?latex=%5Cmathcal%7BA%7D+%3D+%28A_1%2C...%2CA_i%2C...%2CA_r%29+%5Cin+R%5E%7Br+%5Ctimes+n+%5Ctimes+n%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=%5Cmathcal%7BA%7D+%3D+%28A_1%2C...%2CA_i%2C...%2CA_r%29+%5Cin+R%5E%7Br+%5Ctimes+n+%5Ctimes+n%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=%5Cmathcal%7BA%7D+%3D+%28A_1%2C...%2CA_i%2C...%2CA_r%29+%5Cin+R%5E%7Br+%5Ctimes+n+%5Ctimes+n%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="\mathcal{A} = (A_1,...,A_i,...,A_r) \in R^{r \times n \times n}" class="latex">. Similarly, the graph feature matrices are also packed into a <strong>graph feature tensor</strong> <img src="https://s0.wp.com/latex.php?latex=%5Cmathcal%7BH%7D%5E%7B%28l%29%7D%3D%28H_1%5E%7B%28l%29%7D%2C..%2CH_r%5E%7B%28l%29%7D%29+%5Cin+R%5E%7Br+%5Ctimes+n+%5Ctimes+d_l%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=%5Cmathcal%7BH%7D%5E%7B%28l%29%7D%3D%28H_1%5E%7B%28l%29%7D%2C..%2CH_r%5E%7B%28l%29%7D%29+%5Cin+R%5E%7Br+%5Ctimes+n+%5Ctimes+d_l%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=%5Cmathcal%7BH%7D%5E%7B%28l%29%7D%3D%28H_1%5E%7B%28l%29%7D%2C..%2CH_r%5E%7B%28l%29%7D%29+%5Cin+R%5E%7Br+%5Ctimes+n+%5Ctimes+d_l%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="\mathcal{H}^{(l)}=(H_1^{(l)},..,H_r^{(l)}) \in R^{r \times n \times d_l}" class="latex">, where <img src="https://s0.wp.com/latex.php?latex=H_i%5E%7B%28l%29%7D+%5Cin+R%5E%7Bn+%5Ctimes+d_l%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=H_i%5E%7B%28l%29%7D+%5Cin+R%5E%7Bn+%5Ctimes+d_l%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=H_i%5E%7B%28l%29%7D+%5Cin+R%5E%7Bn+%5Ctimes+d_l%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="H_i^{(l)} \in R^{n \times d_l}" class="latex"> is the feature matrix of i-th graph.</p>



<h2 class="wp-block-heading">2. Text Graph Tensor Construction</h2>



<p>To construct a graph for a set of documents, words and documents are treated as nodes. Besides, two types of edges are considered: <strong>word-document edges</strong> and <strong>word-word edges</strong>. For word-document edges, TF-IDF method is used to calcualte the edge weights. Three types of word-word edges(semantic/syntactic/sequential) are considered  to construct three text graphs which are described in the following:</p>



<ul class="wp-block-list"><li><strong>Semantic-based graph</strong></li></ul>



<p>A LSTM is trained on the training data. For every sentence/document, word embeddings from the LSTM is used to calculate the cosine similarity between words. If the similarity exceeds a predefined threshold, then we say the two words have a semantic relationship in the current sentence/document. The edge weight between two words is defined as:</p>



<p class="has-text-align-center"><img src="https://s0.wp.com/latex.php?latex=d_%7Bsemantic%7D%28w_i%2Cw_j%29+%3D+%5Cfrac%7B%5C%23N_%7Bsemantic%7D%28w_i%2Cw_j%29%7D%7B%5C%23N_%7Btotal%7D%28w_i%2Cw_j%29%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=d_%7Bsemantic%7D%28w_i%2Cw_j%29+%3D+%5Cfrac%7B%5C%23N_%7Bsemantic%7D%28w_i%2Cw_j%29%7D%7B%5C%23N_%7Btotal%7D%28w_i%2Cw_j%29%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=d_%7Bsemantic%7D%28w_i%2Cw_j%29+%3D+%5Cfrac%7B%5C%23N_%7Bsemantic%7D%28w_i%2Cw_j%29%7D%7B%5C%23N_%7Btotal%7D%28w_i%2Cw_j%29%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="d_{semantic}(w_i,w_j) = \frac{\#N_{semantic}(w_i,w_j)}{\#N_{total}(w_i,w_j)}" class="latex"></p>



<p>where <img src="https://s0.wp.com/latex.php?latex=%5C%23N_%7Bsemantic%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=%5C%23N_%7Bsemantic%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=%5C%23N_%7Bsemantic%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="\#N_{semantic}" class="latex"> denotes the number of times two words have semantic relationship over all sentences/documents, and <img src="https://s0.wp.com/latex.php?latex=%5C%23N_%7Btotal%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=%5C%23N_%7Btotal%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=%5C%23N_%7Btotal%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="\#N_{total}" class="latex"> denotes the number of times two words exist in the same sentence/document.</p>



<ul class="wp-block-list"><li><strong>Syntactic-based graph</strong></li></ul>



<p>For every sentence/document,  Stanford CoreNLP is used to extract the dependency between two words. And the edge weight between two words in sytactic-based graph is defined as:</p>



<p class="has-text-align-center"><img src="https://s0.wp.com/latex.php?latex=d_%7Bsyntactic%7D%28w_i%2Cw_j%29+%3D+%5Cfrac%7B%5C%23N_%7Bsyntactic%7D%28w_i%2Cw_j%29%7D%7B%5C%23N_%7Btotal%7D%28w_i%2Cw_j%29%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=d_%7Bsyntactic%7D%28w_i%2Cw_j%29+%3D+%5Cfrac%7B%5C%23N_%7Bsyntactic%7D%28w_i%2Cw_j%29%7D%7B%5C%23N_%7Btotal%7D%28w_i%2Cw_j%29%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=d_%7Bsyntactic%7D%28w_i%2Cw_j%29+%3D+%5Cfrac%7B%5C%23N_%7Bsyntactic%7D%28w_i%2Cw_j%29%7D%7B%5C%23N_%7Btotal%7D%28w_i%2Cw_j%29%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="d_{syntactic}(w_i,w_j) = \frac{\#N_{syntactic}(w_i,w_j)}{\#N_{total}(w_i,w_j)}" class="latex"></p>



<p>where <img src="https://s0.wp.com/latex.php?latex=%5C%23N_%7Bsyntactic%7D+&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=%5C%23N_%7Bsyntactic%7D+&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=%5C%23N_%7Bsyntactic%7D+&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="\#N_{syntactic} " class="latex"> denotes the the number of times two words have a syntactic dependency over all sentences/documents.</p>



<ul class="wp-block-list"><li><strong>Sequential-based graph</strong></li></ul>



<p>This one is also used in <a rel="noreferrer noopener" aria-label="Graph Convolutional Networks for Text Classification (opens in a new tab)" href="https://arxiv.org/abs/1809.05679" target="_blank">Graph Convolutional Networks for Text Classification</a> which depicts the local co-occurence(PMI) between words. The edge weight between two words in the sequential-based graph is defined as:</p>



<p class="has-text-align-center"><img src="https://s0.wp.com/latex.php?latex=d_%7Bsequential%7D%28w_i%2Cw_j%29+%3D+%5Cfrac%7Bp%28w_i%2Cw_j%29%7D%7Bp%28w_i%29p%28w_j%29%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=d_%7Bsequential%7D%28w_i%2Cw_j%29+%3D+%5Cfrac%7Bp%28w_i%2Cw_j%29%7D%7Bp%28w_i%29p%28w_j%29%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=d_%7Bsequential%7D%28w_i%2Cw_j%29+%3D+%5Cfrac%7Bp%28w_i%2Cw_j%29%7D%7Bp%28w_i%29p%28w_j%29%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="d_{sequential}(w_i,w_j) = \frac{p(w_i,w_j)}{p(w_i)p(w_j)}" class="latex"></p>



<p>where <img src="https://s0.wp.com/latex.php?latex=p%28w_i%2Cw_j%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=p%28w_i%2Cw_j%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=p%28w_i%2Cw_j%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="p(w_i,w_j)" class="latex"> is the probability of the two words co-occuring in the same sliding window which is estimated by <img src="https://s0.wp.com/latex.php?latex=%5Cfrac%7B%5C%23N_%7Bco-occurence%7D%28w_i%2Cw_j%29%7D%7B%5C%23N_%7Bwindows%7D%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=%5Cfrac%7B%5C%23N_%7Bco-occurence%7D%28w_i%2Cw_j%29%7D%7B%5C%23N_%7Bwindows%7D%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=%5Cfrac%7B%5C%23N_%7Bco-occurence%7D%28w_i%2Cw_j%29%7D%7B%5C%23N_%7Bwindows%7D%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="\frac{\#N_{co-occurence}(w_i,w_j)}{\#N_{windows}}" class="latex">. <img src="https://s0.wp.com/latex.php?latex=%5C%23N_%7Bco-occurence%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=%5C%23N_%7Bco-occurence%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=%5C%23N_%7Bco-occurence%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="\#N_{co-occurence}" class="latex"> is the number of times two words to-occurs in the same sliding windows over the corpus. <img src="https://s0.wp.com/latex.php?latex=%5C%23N_%7Bwindows%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=%5C%23N_%7Bwindows%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=%5C%23N_%7Bwindows%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="\#N_{windows}" class="latex"> is the total number of sliding windows. <img src="https://s0.wp.com/latex.php?latex=p%28w_i%29+%3D+%5Cfrac%7B%5C%23N_%7Boccurrence%7D%28w_i%29%7D%7B%5C%23N_%7Bwindows%7D%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=p%28w_i%29+%3D+%5Cfrac%7B%5C%23N_%7Boccurrence%7D%28w_i%29%7D%7B%5C%23N_%7Bwindows%7D%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=p%28w_i%29+%3D+%5Cfrac%7B%5C%23N_%7Boccurrence%7D%28w_i%29%7D%7B%5C%23N_%7Bwindows%7D%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="p(w_i) = \frac{\#N_{occurrence}(w_i)}{\#N_{windows}}" class="latex"> is the probability of the word is occuring in a given window over the corpus.</p>



<h2 class="wp-block-heading">3. Graph Tensor Learning</h2>



<p>After obtaining the constructed graph tensor, then we can esploit learning frameworks to perform GCN on the graph tensor. </p>



<ul class="wp-block-list"><li><strong>merge edges + GCN</strong></li></ul>



<p>Since a graph tensor consists of multiple graph, a simple strategy is to merge the edges into one graph by pooling the adjacency tensor <img src="https://s0.wp.com/latex.php?latex=pooling%28%5Cmathcal%7BA%7D%29+%3D+pooling%28A_1%2C...%2CA_r%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=pooling%28%5Cmathcal%7BA%7D%29+%3D+pooling%28A_1%2C...%2CA_r%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=pooling%28%5Cmathcal%7BA%7D%29+%3D+pooling%28A_1%2C...%2CA_r%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="pooling(\mathcal{A}) = pooling(A_1,...,A_r)" class="latex"> such as max pooling or mean pooling. However, some experiments show it does not work. Another way is to merge graph adjacency matrix by edge-wise attention: <img src="https://s0.wp.com/latex.php?latex=A_%7Bmerge%7D+%3D+pooling%28%5Cmathcal%7BA%7D%29++%3D+%5Csum_%7Bi%3D1%7D%5Er+W_%7Bedge%7D%5Ei+%5Codot+A_i&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=A_%7Bmerge%7D+%3D+pooling%28%5Cmathcal%7BA%7D%29++%3D+%5Csum_%7Bi%3D1%7D%5Er+W_%7Bedge%7D%5Ei+%5Codot+A_i&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=A_%7Bmerge%7D+%3D+pooling%28%5Cmathcal%7BA%7D%29++%3D+%5Csum_%7Bi%3D1%7D%5Er+W_%7Bedge%7D%5Ei+%5Codot+A_i&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="A_{merge} = pooling(\mathcal{A})  = \sum_{i=1}^r W_{edge}^i \odot A_i" class="latex">, where $W_{edge}^i$ is the attention matrix with the same size of adjacency matrix.</p>



<ul class="wp-block-list"><li><strong>TensorGCN</strong></li></ul>



<p>Instead of merging all graphs, TensorGCN performs two types of propagation learning:<strong> intra-graph propagation</strong> and <strong>inter-graph propagation</strong>. The overall procedure is shown in Figure 1. For example, the l-th layer of TensorGCN can be described as :</p>



<p class="has-text-align-center"><img src="https://s0.wp.com/latex.php?latex=%5Cmathcal%7BH%7D%5E%7B%28l%29%7D++-%3E+%5Cmathcal%7BH%7D_%7Bintra%7D%5E%7B%28l%29%7D+-%3E+%5Cmathcal%7BH%7D%5E%7B%28l%2B1%29%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=%5Cmathcal%7BH%7D%5E%7B%28l%29%7D++-%3E+%5Cmathcal%7BH%7D_%7Bintra%7D%5E%7B%28l%29%7D+-%3E+%5Cmathcal%7BH%7D%5E%7B%28l%2B1%29%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=%5Cmathcal%7BH%7D%5E%7B%28l%29%7D++-%3E+%5Cmathcal%7BH%7D_%7Bintra%7D%5E%7B%28l%29%7D+-%3E+%5Cmathcal%7BH%7D%5E%7B%28l%2B1%29%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="\mathcal{H}^{(l)}  -> \mathcal{H}_{intra}^{(l)} -> \mathcal{H}^{(l+1)}" class="latex"></p>



<figure class="wp-block-image size-large"><img data-attachment-id="403" data-permalink="https://zhiyuchen.com/image-7/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2020/02/image.png" data-orig-size="1159,398" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="image" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2020/02/image.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2020/02/image.png?w=720" width="1024" height="351" src="https://zhiyuchen.com/wp-content/uploads/2020/02/image.png?w=1024" alt="" class="wp-image-403" srcset="https://zhiyuchen.com/wp-content/uploads/2020/02/image.png?w=1024 1024w, https://zhiyuchen.com/wp-content/uploads/2020/02/image.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2020/02/image.png?w=300 300w, https://zhiyuchen.com/wp-content/uploads/2020/02/image.png?w=768 768w, https://zhiyuchen.com/wp-content/uploads/2020/02/image.png 1159w" sizes="(max-width: 1024px) 100vw, 1024px"></figure>



<p><strong>Intra-graph propagation </strong> aggregates information from neighbors of each node within a graph which is almost equal of to the <strong><a href="https://tkipf.github.io/graph-convolutional-networks/">vanilla GCN</a></strong>, but performs a tensor version. The feature of i-th graph in the l-th layer is updated as:</p>



<p class="has-text-align-center"><img src="https://s0.wp.com/latex.php?latex=%5Cmathcal%7BH%7D_%7Bintra%7D%5E%7B%28l%29%7D+%3D+%5Csigma+%28%5Chat%7B%5Cmathcal%7BA%7D%7D%28i%2C%3A%2C%3A%29%2C%5Cmathcal%7BH%7D%5E%7B%28l%29%7D%28i%2C%3A%2C%3A%29W_%7Bintra%7D%5E%7B%28l%2Ci%29%7D%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=%5Cmathcal%7BH%7D_%7Bintra%7D%5E%7B%28l%29%7D+%3D+%5Csigma+%28%5Chat%7B%5Cmathcal%7BA%7D%7D%28i%2C%3A%2C%3A%29%2C%5Cmathcal%7BH%7D%5E%7B%28l%29%7D%28i%2C%3A%2C%3A%29W_%7Bintra%7D%5E%7B%28l%2Ci%29%7D%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=%5Cmathcal%7BH%7D_%7Bintra%7D%5E%7B%28l%29%7D+%3D+%5Csigma+%28%5Chat%7B%5Cmathcal%7BA%7D%7D%28i%2C%3A%2C%3A%29%2C%5Cmathcal%7BH%7D%5E%7B%28l%29%7D%28i%2C%3A%2C%3A%29W_%7Bintra%7D%5E%7B%28l%2Ci%29%7D%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="\mathcal{H}_{intra}^{(l)} = \sigma (\hat{\mathcal{A}}(i,:,:),\mathcal{H}^{(l)}(i,:,:)W_{intra}^{(l,i)})" class="latex"></p>



<p>where <img src="https://s0.wp.com/latex.php?latex=%5Chat%7B%5Cmathcal%7BA%7D%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=%5Chat%7B%5Cmathcal%7BA%7D%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=%5Chat%7B%5Cmathcal%7BA%7D%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="\hat{\mathcal{A}}" class="latex"> is the normalized symmetric graph adjacency tensor and <img src="https://s0.wp.com/latex.php?latex=%5Chat%7B%5Cmathcal%7BA%7D%7D%28i%2C%3A%2C%3A%29+%3D+%5Ctilde%7B%5Cmathcal%7BD%7D%7D%28i%2C%3A%2C%3A%29%5E%7B-%5Cfrac%7B1%7D%7B2%7D%7D%5Ctilde%7B%5Cmathcal%7BA%7D%7D%28i%2C%3A%2C%3A%29%5Ctilde%7B%5Cmathcal%7BD%7D%7D%28i%2C%3A%2C%3A%29%5E%7B-%5Cfrac%7B1%7D%7B2%7D%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=%5Chat%7B%5Cmathcal%7BA%7D%7D%28i%2C%3A%2C%3A%29+%3D+%5Ctilde%7B%5Cmathcal%7BD%7D%7D%28i%2C%3A%2C%3A%29%5E%7B-%5Cfrac%7B1%7D%7B2%7D%7D%5Ctilde%7B%5Cmathcal%7BA%7D%7D%28i%2C%3A%2C%3A%29%5Ctilde%7B%5Cmathcal%7BD%7D%7D%28i%2C%3A%2C%3A%29%5E%7B-%5Cfrac%7B1%7D%7B2%7D%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=%5Chat%7B%5Cmathcal%7BA%7D%7D%28i%2C%3A%2C%3A%29+%3D+%5Ctilde%7B%5Cmathcal%7BD%7D%7D%28i%2C%3A%2C%3A%29%5E%7B-%5Cfrac%7B1%7D%7B2%7D%7D%5Ctilde%7B%5Cmathcal%7BA%7D%7D%28i%2C%3A%2C%3A%29%5Ctilde%7B%5Cmathcal%7BD%7D%7D%28i%2C%3A%2C%3A%29%5E%7B-%5Cfrac%7B1%7D%7B2%7D%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="\hat{\mathcal{A}}(i,:,:) = \tilde{\mathcal{D}}(i,:,:)^{-\frac{1}{2}}\tilde{\mathcal{A}}(i,:,:)\tilde{\mathcal{D}}(i,:,:)^{-\frac{1}{2}}" class="latex">， <img src="https://s0.wp.com/latex.php?latex=%5Ctilde%7B%5Cmathcal%7BA%7D%7D+%3D+%5Cmathcal%7BA%7D+%2B+%5Cmathcal%7BI%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=%5Ctilde%7B%5Cmathcal%7BA%7D%7D+%3D+%5Cmathcal%7BA%7D+%2B+%5Cmathcal%7BI%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=%5Ctilde%7B%5Cmathcal%7BA%7D%7D+%3D+%5Cmathcal%7BA%7D+%2B+%5Cmathcal%7BI%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="\tilde{\mathcal{A}} = \mathcal{A} + \mathcal{I}" class="latex"> and <img src="https://s0.wp.com/latex.php?latex=%5Cmathcal%7BD%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=%5Cmathcal%7BD%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=%5Cmathcal%7BD%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="\mathcal{D}" class="latex"> is the node degree tensor.</p>



<p><strong>Inter-graph propagation</strong> propagates/exchanges information between different graphs in the tensor. To achieve this, virtual graphs are constructed by connecting with nodes cross the graphs as showin in Figure 1. Since every graph has the same set of nodes, n nodes result in n virtual graphs and a <strong>new graph adjacency tensor</strong> <img src="https://s0.wp.com/latex.php?latex=%5Cmathcal%7BA%7D%5E%2B+%5Cin+R%5E%7Br+%5Ctimes+r+%5Ctimes+n%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=%5Cmathcal%7BA%7D%5E%2B+%5Cin+R%5E%7Br+%5Ctimes+r+%5Ctimes+n%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=%5Cmathcal%7BA%7D%5E%2B+%5Cin+R%5E%7Br+%5Ctimes+r+%5Ctimes+n%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="\mathcal{A}^+ \in R^{r \times r \times n}" class="latex">. The inter-graph information propagation is defined as:</p>



<p class="has-text-align-center"><img src="https://s0.wp.com/latex.php?latex=%5Cmathcal%7BH%7D%5E%7B%28l%2B1%29%7D%28%3A%2Cj%2C%3A%29+%3D+%5Csigma+%28%5Chat%7B%5Cmathcal%7BA%7D%7D%5E%2B%28%3A%2C%3A%2Cj%29%2C%5Cmathcal%7BH%7D_%7Bintra%7D%5E%7B%28l%29%7D%28%3A%2Cj%2C%3A%29W_%7Binter%7D%5E%7B%28l%2Cj%29%7D%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=%5Cmathcal%7BH%7D%5E%7B%28l%2B1%29%7D%28%3A%2Cj%2C%3A%29+%3D+%5Csigma+%28%5Chat%7B%5Cmathcal%7BA%7D%7D%5E%2B%28%3A%2C%3A%2Cj%29%2C%5Cmathcal%7BH%7D_%7Bintra%7D%5E%7B%28l%29%7D%28%3A%2Cj%2C%3A%29W_%7Binter%7D%5E%7B%28l%2Cj%29%7D%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=%5Cmathcal%7BH%7D%5E%7B%28l%2B1%29%7D%28%3A%2Cj%2C%3A%29+%3D+%5Csigma+%28%5Chat%7B%5Cmathcal%7BA%7D%7D%5E%2B%28%3A%2C%3A%2Cj%29%2C%5Cmathcal%7BH%7D_%7Bintra%7D%5E%7B%28l%29%7D%28%3A%2Cj%2C%3A%29W_%7Binter%7D%5E%7B%28l%2Cj%29%7D%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="\mathcal{H}^{(l+1)}(:,j,:) = \sigma (\hat{\mathcal{A}}^+(:,:,j),\mathcal{H}_{intra}^{(l)}(:,j,:)W_{inter}^{(l,j)})" class="latex"></p>



<p>where <img src="https://s0.wp.com/latex.php?latex=%5Cmathcal%7BH%7D%5E%7B%28l%2B1%29%7D+%5Cin+R%5E%7Br+%5Ctimes+n+%5Ctimes+d_%7Bl%2B1%7D%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=%5Cmathcal%7BH%7D%5E%7B%28l%2B1%29%7D+%5Cin+R%5E%7Br+%5Ctimes+n+%5Ctimes+d_%7Bl%2B1%7D%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=%5Cmathcal%7BH%7D%5E%7B%28l%2B1%29%7D+%5Cin+R%5E%7Br+%5Ctimes+n+%5Ctimes+d_%7Bl%2B1%7D%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="\mathcal{H}^{(l+1)} \in R^{r \times n \times d_{l+1}}" class="latex"> is the output of inter-graph propagatioon and the input feature tensor of the l+1-th layer in TensorGCN.  There is neither symmetric normalization nor self-connections added.</p>



<p>In the last layer of TensorGCN, after completing inter-graph propataion,  the representation of documents nodes are obtained by a mean pooling over graphs for classification.</p>
<div id="jp-post-flair" class="sharedaddy sd-like-enabled sd-sharing-enabled"><div class="sharedaddy sd-sharing-enabled"><div class="robots-nocontent sd-block sd-social sd-social-icon-text sd-sharing"><h3 class="sd-title">共享此文章：</h3><div class="sd-content"><ul><li class="share-twitter"><a rel="nofollow noopener noreferrer" data-shared="sharing-twitter-393" class="share-twitter sd-button share-icon" href="https://zhiyuchen.com/2020/02/16/paper-reading-tensor-graph-convolutional-networks-for-text-classification/?share=twitter" target="_blank" aria-labelledby="sharing-twitter-393">
				<span id="sharing-twitter-393" hidden="">Click to share on X (Opens in new window)</span>
				<span>X</span>
			</a></li><li class="share-facebook"><a rel="nofollow noopener noreferrer" data-shared="sharing-facebook-393" class="share-facebook sd-button share-icon" href="https://zhiyuchen.com/2020/02/16/paper-reading-tensor-graph-convolutional-networks-for-text-classification/?share=facebook" target="_blank" aria-labelledby="sharing-facebook-393">
				<span id="sharing-facebook-393" hidden="">Click to share on Facebook (Opens in new window)</span>
				<span>Facebook</span>
			</a></li><li class="share-end"></li></ul></div></div></div><div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" id="like-post-wrapper-122293174-393-6937707d553f9" data-src="//widgets.wp.com/likes/index.html?ver=20251209#blog_id=122293174&amp;post_id=393&amp;origin=zhiyusite.wordpress.com&amp;obj_id=122293174-393-6937707d553f9&amp;domain=zhiyuchen.com" data-name="like-post-frame-122293174-393-6937707d553f9" data-title="Like or Reblog"><div class="likes-widget-placeholder post-likes-widget-placeholder" style="height: 55px;"><span class="button"><span>Like</span></span> <span class="loading">Loading...</span></div><span class="sd-text-color"></span><a class="sd-link-color"></a></div>
<div id="jp-relatedposts" class="jp-relatedposts">
	<h3 class="jp-relatedposts-headline"><em>Related</em></h3>
</div></div>			
