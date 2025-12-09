---
title: Zhiyu's Blog
date: '2020-03-15T05:24:27.000Z'
tags:
  - GNN
  - Paper Reading
---

		
<p>venue: ICLR 2020</p>



<p>paper link: <a rel="noreferrer noopener" aria-label="here (opens in a new tab)" href="https://arxiv.org/abs/1905.12265" target="_blank">here</a></p>



<p>This paper proposes strategies to pre-train a GNN at node-level and graph-level.</p>



<h3 class="wp-block-heading">1. Node-Level Pre-training</h3>



<p>Node-level pre-training is to use unlabeld data to capture domain knowledge in the graph. Two methods are proposed for node-level pre-training.</p>



<h4 class="wp-block-heading">1.1 Context Prediction</h4>



<p>In this task, subgraphs are used to predict their surrouding graph structures. The goal is to let a pre-trained GNN map nodes appearing in similar structure context have closer embeddings.</p>



<p><strong>K-hop neighborhood</strong> of a node v contains all nodes and edges that are at most K-hops away from v in the graph.</p>



<p><strong>Context graph </strong>of a node v is  a subgraph that is between r1-hops and r2-hops away from v. It is required that r1 &lt; K  so that there are <strong>context anchor nodes</strong> that shared between the neighborhood and the context graph.</p>



<figure class="wp-block-image size-large"><img data-attachment-id="507" data-permalink="https://zhiyuchen.com/image-8/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2020/03/image.png" data-orig-size="1109,459" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="image" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2020/03/image.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2020/03/image.png?w=720" width="1024" height="423" src="https://zhiyuchen.com/wp-content/uploads/2020/03/image.png?w=1024" alt="" class="wp-image-507" srcset="https://zhiyuchen.com/wp-content/uploads/2020/03/image.png?w=1024 1024w, https://zhiyuchen.com/wp-content/uploads/2020/03/image.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2020/03/image.png?w=300 300w, https://zhiyuchen.com/wp-content/uploads/2020/03/image.png?w=768 768w, https://zhiyuchen.com/wp-content/uploads/2020/03/image.png 1109w" sizes="(max-width: 1024px) 100vw, 1024px"></figure>



<p>An auxiliary GNN called <strong>context GNN</strong> is used to encode context graphs as fixed-length vectors. <strong>The average embedding of context anchor nodes</strong> is considered as a fixed-length context embedding. For node v in graph G, its context embedding is <img src="https://s0.wp.com/latex.php?latex=c_v%5EG&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=c_v%5EG&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=c_v%5EG&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="c_v^G" class="latex">.</p>



<p><strong>Negative sampling</strong> is used to jointly learn the main GNN and the context GNN. The main GNN encodes neighborhoods to obtain node embeddings. The context GNN encodes context graphs to obtain context embeddings. The objective is to predict whether a particular neighborhood and a particular context graph belong to the same node:</p>



<p class="has-text-align-center"><img src="https://s0.wp.com/latex.php?latex=%5Csigma%28h_v%5E%7B%28K%29%5Ctop%7Dc_%7Bv%5E%5Cprime%7D%5E%7BG%5E%5Cprime%7D%29+%5Capprox+1%5C%7Bv+%5C%2C+%5Ctextrm%7Band%7D++v%5E%5Cprime+%5C%2C+%5Ctextrm%7Bare%7D+%5C%2C+%5Ctextrm%7Bthe%7D+%5C%2C%5Ctextrm%7Bsame%7D%5C%2C++%5Ctextrm%7Bnodes%7D%5C%7D+&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=%5Csigma%28h_v%5E%7B%28K%29%5Ctop%7Dc_%7Bv%5E%5Cprime%7D%5E%7BG%5E%5Cprime%7D%29+%5Capprox+1%5C%7Bv+%5C%2C+%5Ctextrm%7Band%7D++v%5E%5Cprime+%5C%2C+%5Ctextrm%7Bare%7D+%5C%2C+%5Ctextrm%7Bthe%7D+%5C%2C%5Ctextrm%7Bsame%7D%5C%2C++%5Ctextrm%7Bnodes%7D%5C%7D+&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=%5Csigma%28h_v%5E%7B%28K%29%5Ctop%7Dc_%7Bv%5E%5Cprime%7D%5E%7BG%5E%5Cprime%7D%29+%5Capprox+1%5C%7Bv+%5C%2C+%5Ctextrm%7Band%7D++v%5E%5Cprime+%5C%2C+%5Ctextrm%7Bare%7D+%5C%2C+%5Ctextrm%7Bthe%7D+%5C%2C%5Ctextrm%7Bsame%7D%5C%2C++%5Ctextrm%7Bnodes%7D%5C%7D+&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="\sigma(h_v^{(K)\top}c_{v^\prime}^{G^\prime}) \approx 1\{v \, \textrm{and}  v^\prime \, \textrm{are} \, \textrm{the} \,\textrm{same}\,  \textrm{nodes}\} " class="latex"></p>



<p>where <img src="https://s0.wp.com/latex.php?latex=h_v%5E%7B%28K%29%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=h_v%5E%7B%28K%29%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=h_v%5E%7B%28K%29%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="h_v^{(K)}" class="latex"> is the node representation from the  main GNN, <img src="https://s0.wp.com/latex.php?latex=1%28%5Cdot%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=1%28%5Cdot%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=1%28%5Cdot%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="1(\dot)" class="latex"> is the indicator function. </p>



<h4 class="wp-block-heading">1.2 Attribute Masking</h4>



<p>The goal of this task is to capture domain knowledge by learning the regularities of the node-edge attributes distributed over graph structure.</p>



<p>First node/edge attributes are masked , then GNNs are used to predict those attributes based on neighboring structure. For example in Figure 2(b), input node/edge attributes such as  the atom types in molecular graphs, are randomly masked and replaced by special indicators. Then GNNs are used to obtain the corresponding node/edge embeddings. Finally a linear model is used to predict the masked label.</p>



<h3 class="wp-block-heading">2. Graph-Level Pre-training</h3>



<h4 class="wp-block-heading">2.1 Supervised Graph-Level Property Prediction</h4>



<p>First graph-level prediction tasks should be defined, then jointly predict a diverse set of supervised labels of individual graphs. However, this actually requires domain knowledge to select appropriate graph-level pretraining tasks, otherwise one may hurt the dowmstream performance(negative tranfer). To alleviate this issue, one strategy is to first do node-level pretraining, since the local node embeedings may be not useful learnd from graph-level pretraining tasks.</p>



<h4 class="wp-block-heading">2.2 Structure Similarity Prediction</h4>



<p>This approach is to pretrain GNNs with tasks like graph edit distance or predicting graph structure similarity. However, finding the ground truth graph distances could be difficult.</p>



<p> </p>
<div id="jp-post-flair" class="sharedaddy sd-like-enabled sd-sharing-enabled"><div class="sharedaddy sd-sharing-enabled"><div class="robots-nocontent sd-block sd-social sd-social-icon-text sd-sharing"><h3 class="sd-title">共享此文章：</h3><div class="sd-content"><ul><li class="share-twitter"><a rel="nofollow noopener noreferrer" data-shared="sharing-twitter-501" class="share-twitter sd-button share-icon" href="https://zhiyuchen.com/2020/03/15/paper-reading-strategies-for-pre-training-graph-neural-networks/?share=twitter" target="_blank" aria-labelledby="sharing-twitter-501">
				<span id="sharing-twitter-501" hidden="">Click to share on X (Opens in new window)</span>
				<span>X</span>
			</a></li><li class="share-facebook"><a rel="nofollow noopener noreferrer" data-shared="sharing-facebook-501" class="share-facebook sd-button share-icon" href="https://zhiyuchen.com/2020/03/15/paper-reading-strategies-for-pre-training-graph-neural-networks/?share=facebook" target="_blank" aria-labelledby="sharing-facebook-501">
				<span id="sharing-facebook-501" hidden="">Click to share on Facebook (Opens in new window)</span>
				<span>Facebook</span>
			</a></li><li class="share-end"></li></ul></div></div></div><div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" id="like-post-wrapper-122293174-501-6937707c93993" data-src="//widgets.wp.com/likes/index.html?ver=20251209#blog_id=122293174&amp;post_id=501&amp;origin=zhiyusite.wordpress.com&amp;obj_id=122293174-501-6937707c93993&amp;domain=zhiyuchen.com" data-name="like-post-frame-122293174-501-6937707c93993" data-title="Like or Reblog"><div class="likes-widget-placeholder post-likes-widget-placeholder" style="height: 55px;"><span class="button"><span>Like</span></span> <span class="loading">Loading...</span></div><span class="sd-text-color"></span><a class="sd-link-color"></a></div>
<div id="jp-relatedposts" class="jp-relatedposts">
	<h3 class="jp-relatedposts-headline"><em>Related</em></h3>
</div></div>			
