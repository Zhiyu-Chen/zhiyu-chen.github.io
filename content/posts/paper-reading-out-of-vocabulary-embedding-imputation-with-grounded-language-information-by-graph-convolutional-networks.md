---
title: Zhiyu's Blog
date: '2020-06-14T22:58:37.000Z'
tags:
  - GCN
  - GNN
  - OOV
  - Word Embeddings
---

		
<p>venue: ACL 2019</p>



<p>The paper proposes a GCN-based method to produce word embeddings for out-of-vocabulary(OOV) words.</p>



<h2 class="wp-block-heading">1. Graph Construction</h2>



<p>To construct a knowledge graph, vocabulary is constructed from Wikipedia English dataset (3B tokens). To note that, this vocabulary includes OOV words which are not in the vocabulary of pre-trained embeddings such as GLOVE.</p>



<p>For each node/word, they define the concatenation of <strong>Wikipedia page summary</strong> and <strong>Wiktionary definition</strong> of the word <img src="https://s0.wp.com/latex.php?latex=w_v+&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=w_v+&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=w_v+&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="w_v " class="latex"> as <img src="https://s0.wp.com/latex.php?latex=D_v&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=D_v&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=D_v&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="D_v" class="latex">. The edge between two words <img src="https://s0.wp.com/latex.php?latex=w_v&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=w_v&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=w_v&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="w_v" class="latex"> and <img src="https://s0.wp.com/latex.php?latex=w_u&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=w_u&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=w_u&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="w_u" class="latex"> is constructed if the Jaccard coefficient between <img src="https://s0.wp.com/latex.php?latex=D_v&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=D_v&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=D_v&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="D_v" class="latex"> and <img src="https://s0.wp.com/latex.php?latex=D_u&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=D_u&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=D_u&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="D_u" class="latex"> is larger than 0.5 (empirically chosen). The Jaccard coefficient is also used as the edge weight <img src="https://s0.wp.com/latex.php?latex=s_%7Bvu%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=s_%7Bvu%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=s_%7Bvu%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="s_{vu}" class="latex">..  Besides, the mean of pre-trained embeddings of words in <img src="https://s0.wp.com/latex.php?latex=D_v&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=D_v&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=D_v&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="D_v" class="latex"> is calcuated as the feature vector of <img src="https://s0.wp.com/latex.php?latex=w_v&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=w_v&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=w_v&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="w_v" class="latex">.</p>



<h2 class="wp-block-heading">2. Embedding Learning</h2>



<p>Given the constructed graph and extracted feature vectors of nodes, they use GCN (Kipf and Welling, 2016) for node embedding learning:</p>



<figure class="wp-block-image size-large is-resized"><img data-attachment-id="561" data-permalink="https://zhiyuchen.com/image-10/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2020/06/image.png" data-orig-size="559,124" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="image" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2020/06/image.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2020/06/image.png?w=559" src="https://zhiyuchen.com/wp-content/uploads/2020/06/image.png?w=559" alt="" class="wp-image-561" width="331" height="73" srcset="https://zhiyuchen.com/wp-content/uploads/2020/06/image.png?w=331 331w, https://zhiyuchen.com/wp-content/uploads/2020/06/image.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2020/06/image.png?w=300 300w, https://zhiyuchen.com/wp-content/uploads/2020/06/image.png 559w" sizes="(max-width: 331px) 100vw, 331px"></figure>



<p>where <img src="https://s0.wp.com/latex.php?latex=S%28v%29%3D+N%28v%29+%5Ccup+%5C%7Bv%5C%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=S%28v%29%3D+N%28v%29+%5Ccup+%5C%7Bv%5C%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=S%28v%29%3D+N%28v%29+%5Ccup+%5C%7Bv%5C%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="S(v)= N(v) \cup \{v\}" class="latex"> and the normalization constant <img src="https://s0.wp.com/latex.php?latex=C+%3D+1+%2B+%5Csum_%7Bu+%5Cin+N%28v%29%7D+s_%7Bvu%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=C+%3D+1+%2B+%5Csum_%7Bu+%5Cin+N%28v%29%7D+s_%7Bvu%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=C+%3D+1+%2B+%5Csum_%7Bu+%5Cin+N%28v%29%7D+s_%7Bvu%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="C = 1 + \sum_{u \in N(v)} s_{vu}" class="latex">. Node embeddings are initialized as feature vectors. The final node embeddings are computed without ReLU. Mean square loss between the node embeddings and pretrained embddings (e.g. GLOVE) is minimized to optimize the parameters. During the inference, OOV words are also assigned embeddings. </p>



<h2 class="wp-block-heading">3. Experiments</h2>



<p></p>
<div id="jp-post-flair" class="sharedaddy sd-like-enabled sd-sharing-enabled"><div class="sharedaddy sd-sharing-enabled"><div class="robots-nocontent sd-block sd-social sd-social-icon-text sd-sharing"><h3 class="sd-title">共享此文章：</h3><div class="sd-content"><ul><li class="share-twitter"><a rel="nofollow noopener noreferrer" data-shared="sharing-twitter-557" class="share-twitter sd-button share-icon" href="https://zhiyuchen.com/2020/06/14/paper-reading-out-of-vocabulary-embedding-imputation-with-grounded-language-information-by-graph-convolutional-networks/?share=twitter" target="_blank" aria-labelledby="sharing-twitter-557">
				<span id="sharing-twitter-557" hidden="">Click to share on X (Opens in new window)</span>
				<span>X</span>
			</a></li><li class="share-facebook"><a rel="nofollow noopener noreferrer" data-shared="sharing-facebook-557" class="share-facebook sd-button share-icon" href="https://zhiyuchen.com/2020/06/14/paper-reading-out-of-vocabulary-embedding-imputation-with-grounded-language-information-by-graph-convolutional-networks/?share=facebook" target="_blank" aria-labelledby="sharing-facebook-557">
				<span id="sharing-facebook-557" hidden="">Click to share on Facebook (Opens in new window)</span>
				<span>Facebook</span>
			</a></li><li class="share-end"></li></ul></div></div></div><div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" id="like-post-wrapper-122293174-557-6937707bb6734" data-src="//widgets.wp.com/likes/index.html?ver=20251209#blog_id=122293174&amp;post_id=557&amp;origin=zhiyusite.wordpress.com&amp;obj_id=122293174-557-6937707bb6734&amp;domain=zhiyuchen.com" data-name="like-post-frame-122293174-557-6937707bb6734" data-title="Like or Reblog"><div class="likes-widget-placeholder post-likes-widget-placeholder" style="height: 55px;"><span class="button"><span>Like</span></span> <span class="loading">Loading...</span></div><span class="sd-text-color"></span><a class="sd-link-color"></a></div>
<div id="jp-relatedposts" class="jp-relatedposts">
	<h3 class="jp-relatedposts-headline"><em>Related</em></h3>
</div></div>			
