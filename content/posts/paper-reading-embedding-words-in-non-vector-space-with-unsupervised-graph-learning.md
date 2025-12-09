---
title: Zhiyu's Blog
date: '2020-10-17T16:11:54.000Z'
tags:
  - Paper Reading
  - Word Embeddings
---

		
<p>venue: EMNLP 2020</p>



<p></p>



<p>This paper proposes to use a graph-based method to train word embeddings. </p>



<p>The graph method is <strong>PRODIGE </strong>which learns a representation of data in a form of a weighted graph G(V,E,w,p). Each edge has a weight <img src="https://s0.wp.com/latex.php?latex=w%28e_i%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=w%28e_i%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=w%28e_i%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="w(e_i)" class="latex"> and a Bernoulli random variable <img src="https://s0.wp.com/latex.php?latex=b_i+%5Csim+Bern%28p%28e_i%29%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=b_i+%5Csim+Bern%28p%28e_i%29%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=b_i+%5Csim+Bern%28p%28e_i%29%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="b_i \sim Bern(p(e_i))" class="latex">  indicating whether an edge is present or not. The distance between two nodes is formulated as the expected shortest path distance:</p>



<div class="wp-block-image"><figure class="aligncenter size-large is-resized"><img data-attachment-id="649" data-permalink="https://zhiyuchen.com/image-10-2/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2020/10/image-10.png" data-orig-size="950,287" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="image-10" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2020/10/image-10.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2020/10/image-10.png?w=720" src="https://zhiyuchen.com/wp-content/uploads/2020/10/image-10.png?w=950" alt="" class="wp-image-649" width="445" height="133" srcset="https://zhiyuchen.com/wp-content/uploads/2020/10/image-10.png?w=445 445w, https://zhiyuchen.com/wp-content/uploads/2020/10/image-10.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2020/10/image-10.png?w=300 300w, https://zhiyuchen.com/wp-content/uploads/2020/10/image-10.png?w=768 768w" sizes="(max-width: 445px) 100vw, 445px"></figure></div>



<p>The edge probabilities are used only during training and edges with probabilities less than 0.5 are removed during testing (graph is deterministic during testing time).</p>



<p>Edge probabilities and weights are learned by minimizing:</p>



<div class="wp-block-image"><figure class="aligncenter size-large is-resized"><img data-attachment-id="648" data-permalink="https://zhiyuchen.com/image-9-2/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2020/10/image-9.png" data-orig-size="1200,187" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="image-9" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2020/10/image-9.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2020/10/image-9.png?w=720" src="https://zhiyuchen.com/wp-content/uploads/2020/10/image-9.png?w=1024" alt="" class="wp-image-648" width="490" height="74"></figure></div>



<p>The 1st term is task-specific loss. For example, in this paper it is replaced with a modified loss function of GloVe. The 2nd term is the <img src="https://s0.wp.com/latex.php?latex=L_0&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=L_0&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=L_0&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="L_0" class="latex"> regularizer on the number of edges so that a learned edge has probability close to 0/1.</p>



<p>Let’s revisit the loss function of GloVe:</p>



<div class="wp-block-image"><figure class="aligncenter size-large is-resized"><img data-attachment-id="646" data-permalink="https://zhiyuchen.com/image-8-2/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2020/10/image-8.png" data-orig-size="1204,236" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="image-8" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2020/10/image-8.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2020/10/image-8.png?w=720" src="https://zhiyuchen.com/wp-content/uploads/2020/10/image-8.png?w=1024" alt="" class="wp-image-646" width="434" height="84" srcset="https://zhiyuchen.com/wp-content/uploads/2020/10/image-8.png?w=434 434w, https://zhiyuchen.com/wp-content/uploads/2020/10/image-8.png?w=868 868w, https://zhiyuchen.com/wp-content/uploads/2020/10/image-8.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2020/10/image-8.png?w=300 300w, https://zhiyuchen.com/wp-content/uploads/2020/10/image-8.png?w=768 768w" sizes="(max-width: 434px) 100vw, 434px"></figure></div>



<p>To integrate it into the 1st term of equation (3), the dot product of 2 word embeddings is replaced with distance from the graph (equation 2) and only one bias term is used for each word:</p>



<div class="wp-block-image"><figure class="aligncenter size-large is-resized"><img data-attachment-id="650" data-permalink="https://zhiyuchen.com/image-11-2/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2020/10/image-11.png" data-orig-size="1186,261" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="image-11" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2020/10/image-11.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2020/10/image-11.png?w=720" loading="lazy" src="https://zhiyuchen.com/wp-content/uploads/2020/10/image-11.png?w=1024" alt="" class="wp-image-650" width="434" height="95" srcset="https://zhiyuchen.com/wp-content/uploads/2020/10/image-11.png?w=434 434w, https://zhiyuchen.com/wp-content/uploads/2020/10/image-11.png?w=868 868w, https://zhiyuchen.com/wp-content/uploads/2020/10/image-11.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2020/10/image-11.png?w=300 300w, https://zhiyuchen.com/wp-content/uploads/2020/10/image-11.png?w=768 768w" sizes="(max-width: 434px) 100vw, 434px"></figure></div>



<p> The following 2 types of distance are experimented:</p>



<div class="wp-block-image"><figure class="aligncenter size-large is-resized"><img data-attachment-id="652" data-permalink="https://zhiyuchen.com/image-12-2/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2020/10/image-12.png" data-orig-size="832,162" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="image-12" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2020/10/image-12.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2020/10/image-12.png?w=720" loading="lazy" src="https://zhiyuchen.com/wp-content/uploads/2020/10/image-12.png?w=832" alt="" class="wp-image-652" width="483" height="94" srcset="https://zhiyuchen.com/wp-content/uploads/2020/10/image-12.png?w=483 483w, https://zhiyuchen.com/wp-content/uploads/2020/10/image-12.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2020/10/image-12.png?w=300 300w, https://zhiyuchen.com/wp-content/uploads/2020/10/image-12.png?w=768 768w, https://zhiyuchen.com/wp-content/uploads/2020/10/image-12.png 832w" sizes="(max-width: 483px) 100vw, 483px"></figure></div>



<p>To note that, in the 2nd type, an extra “zero” node is added.</p>



<p>To construct an initial set of edges for training,  each word is connected with K nearest neighboards and M randomly sampled words. The edges weights are calculated as cosine similarity between GloVe embeddings with 0.9 edge probabilities.  The biases are initialized from normal distribution <img src="https://s0.wp.com/latex.php?latex=N%280%2C0.01%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=N%280%2C0.01%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=N%280%2C0.01%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="N(0,0.01)" class="latex">. A graph aware batching strategy is used where a batch (of size b x n) contains a small number of rows with potentially thousands of columns per row and each batch requires O(b) runs of Dijkstra algorithm.</p>



<p>The experiment results on word similarity and word analogy tasks show that the proposed GraphGlove outperforms both Euclidean and Poincare GloVe embeddings.</p>
<div id="jp-post-flair" class="sharedaddy sd-like-enabled sd-sharing-enabled"><div class="sharedaddy sd-sharing-enabled"><div class="robots-nocontent sd-block sd-social sd-social-icon-text sd-sharing"><h3 class="sd-title">共享此文章：</h3><div class="sd-content"><ul><li class="share-twitter"><a rel="nofollow noopener noreferrer" data-shared="sharing-twitter-639" class="share-twitter sd-button share-icon" href="https://zhiyuchen.com/2020/10/17/paper-reading-embedding-words-in-non-vector-space-with-unsupervised-graph-learning/?share=twitter" target="_blank" aria-labelledby="sharing-twitter-639">
				<span id="sharing-twitter-639" hidden="">Click to share on X (Opens in new window)</span>
				<span>X</span>
			</a></li><li class="share-facebook"><a rel="nofollow noopener noreferrer" data-shared="sharing-facebook-639" class="share-facebook sd-button share-icon" href="https://zhiyuchen.com/2020/10/17/paper-reading-embedding-words-in-non-vector-space-with-unsupervised-graph-learning/?share=facebook" target="_blank" aria-labelledby="sharing-facebook-639">
				<span id="sharing-facebook-639" hidden="">Click to share on Facebook (Opens in new window)</span>
				<span>Facebook</span>
			</a></li><li class="share-end"></li></ul></div></div></div><div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" id="like-post-wrapper-122293174-639-6937707a5d60b" data-src="//widgets.wp.com/likes/index.html?ver=20251209#blog_id=122293174&amp;post_id=639&amp;origin=zhiyusite.wordpress.com&amp;obj_id=122293174-639-6937707a5d60b&amp;domain=zhiyuchen.com" data-name="like-post-frame-122293174-639-6937707a5d60b" data-title="Like or Reblog"><div class="likes-widget-placeholder post-likes-widget-placeholder" style="height: 55px;"><span class="button"><span>Like</span></span> <span class="loading">Loading...</span></div><span class="sd-text-color"></span><a class="sd-link-color"></a></div>
<div id="jp-relatedposts" class="jp-relatedposts">
	<h3 class="jp-relatedposts-headline"><em>Related</em></h3>
</div></div>			
