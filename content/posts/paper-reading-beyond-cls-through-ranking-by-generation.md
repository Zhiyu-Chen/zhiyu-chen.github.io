---
title: Zhiyu's Blog
date: '2020-10-12T17:28:12.000Z'
tags:
  - BERT
  - Information Retrieval
  - Paper Reading
  - BERT
  - Information Retrieval
---

		
<p>venlue: EMNLP 2020 (<a rel="noreferrer noopener" href="https://arxiv.org/pdf/2010.03073.pdf" target="_blank">link</a>)</p>



<p>Previous work that uses pretrained language model (PLM) such as BERT for information retrieval takes the [CLS] embedding of the concatenation of query and document as features for discriminative learning. In other words, the relevance label for a given (query, document) pair  is modeled as:</p>



<p class="has-text-align-center"><img src="https://s0.wp.com/latex.php?latex=P%28relevance%7Cq%2Cd%29+%3D+f%28%5BCLS%5D_%7Bq%2Cd%7D%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=P%28relevance%7Cq%2Cd%29+%3D+f%28%5BCLS%5D_%7Bq%2Cd%7D%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=P%28relevance%7Cq%2Cd%29+%3D+f%28%5BCLS%5D_%7Bq%2Cd%7D%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="P(relevance|q,d) = f([CLS]_{q,d})" class="latex"></p>



<p>where <img src="https://s0.wp.com/latex.php?latex=%5BCLS%5D_%7Bq%2Cd%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=%5BCLS%5D_%7Bq%2Cd%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=%5BCLS%5D_%7Bq%2Cd%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="[CLS]_{q,d}" class="latex"> is the [CLS] embedding from the last layer of BERT and <img src="https://s0.wp.com/latex.php?latex=f&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=f&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=f&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="f" class="latex"> is usually a classification layer. </p>



<p>Language models are also used in traditional IR methods (<a rel="noreferrer noopener" href="http://sifaka.cs.uiuc.edu/czhai/pub/slmir-now.pdf" target="_blank">link</a>) in a generative way, where the conditional likelihood is used as the relevance score. This paper experiments with modern PLM to model <img src="https://s0.wp.com/latex.php?latex=P%28q%7Cd%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=P%28q%7Cd%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=P%28q%7Cd%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="P(q|d)" class="latex">.</p>



<p>To finetune the PLM, the input is formated as:</p>



<p class="has-text-align-center">&lt;bos&gt; document &lt;boq&gt; query &lt;eoq&gt;</p>



<p>At training time, <img src="https://s0.wp.com/latex.php?latex=-log+P%28query%7Cdocument%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=-log+P%28query%7Cdocument%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=-log+P%28query%7Cdocument%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="-log P(query|document)" class="latex"> is minimized while at inference time, the conditional log-likelihood is calculated for every document.</p>



<p>In practice, there could be different loss functions for finetuning.  The following loss functions are tested:</p>



<p> <strong>LUL</strong>: loss function for likelihood and unlikelihood estimation. This is an extention of regular cross entropy loss where the <strong>unlikelihood training objective</strong> is added (2nd term). The 2nd term can be considered as a regularizer that makes the model less overconfident with query likelihoods.</p>



<div class="wp-block-image"><figure class="aligncenter size-large is-resized"><img data-attachment-id="625" data-permalink="https://zhiyuchen.com/image-2-5/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2020/10/image-2.png" data-orig-size="967,259" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="image-2" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2020/10/image-2.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2020/10/image-2.png?w=720" src="https://zhiyuchen.com/wp-content/uploads/2020/10/image-2.png?w=967" alt="" class="wp-image-625" width="412" height="110" srcset="https://zhiyuchen.com/wp-content/uploads/2020/10/image-2.png?w=412 412w, https://zhiyuchen.com/wp-content/uploads/2020/10/image-2.png?w=824 824w, https://zhiyuchen.com/wp-content/uploads/2020/10/image-2.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2020/10/image-2.png?w=300 300w, https://zhiyuchen.com/wp-content/uploads/2020/10/image-2.png?w=768 768w" sizes="(max-width: 412px) 100vw, 412px"></figure></div>



<p><strong>RLL</strong>: pairwise ranking loss on the likelihood of positive and negative examples</p>



<div class="wp-block-image"><figure class="aligncenter size-large is-resized"><img data-attachment-id="626" data-permalink="https://zhiyuchen.com/image-3-4/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2020/10/image-3.png" data-orig-size="1108,264" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="image-3" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2020/10/image-3.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2020/10/image-3.png?w=720" src="https://zhiyuchen.com/wp-content/uploads/2020/10/image-3.png?w=1024" alt="" class="wp-image-626" width="428" height="101" srcset="https://zhiyuchen.com/wp-content/uploads/2020/10/image-3.png?w=428 428w, https://zhiyuchen.com/wp-content/uploads/2020/10/image-3.png?w=856 856w, https://zhiyuchen.com/wp-content/uploads/2020/10/image-3.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2020/10/image-3.png?w=300 300w, https://zhiyuchen.com/wp-content/uploads/2020/10/image-3.png?w=768 768w" sizes="(max-width: 428px) 100vw, 428px"></figure></div>



<p><strong>MLE</strong>: maximum likelihood estimation (only positive examples are used)</p>



<div class="wp-block-image"><figure class="aligncenter size-large is-resized"><img data-attachment-id="627" data-permalink="https://zhiyuchen.com/image-4-3/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2020/10/image-4.png" data-orig-size="951,211" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="image-4" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2020/10/image-4.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2020/10/image-4.png?w=720" src="https://zhiyuchen.com/wp-content/uploads/2020/10/image-4.png?w=951" alt="" class="wp-image-627" width="403" height="89" srcset="https://zhiyuchen.com/wp-content/uploads/2020/10/image-4.png?w=403 403w, https://zhiyuchen.com/wp-content/uploads/2020/10/image-4.png?w=806 806w, https://zhiyuchen.com/wp-content/uploads/2020/10/image-4.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2020/10/image-4.png?w=300 300w, https://zhiyuchen.com/wp-content/uploads/2020/10/image-4.png?w=768 768w" sizes="(max-width: 403px) 100vw, 403px"></figure></div>



<p>Results with different PLMs and on different datasets are shown in the following table:</p>



<div class="wp-block-image"><figure class="aligncenter size-large"><img data-attachment-id="630" data-permalink="https://zhiyuchen.com/image-5-3/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2020/10/image-5.png" data-orig-size="1846,666" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="image-5" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2020/10/image-5.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2020/10/image-5.png?w=720" loading="lazy" width="1024" height="369" src="https://zhiyuchen.com/wp-content/uploads/2020/10/image-5.png?w=1024" alt="" class="wp-image-630" srcset="https://zhiyuchen.com/wp-content/uploads/2020/10/image-5.png?w=1024 1024w, https://zhiyuchen.com/wp-content/uploads/2020/10/image-5.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2020/10/image-5.png?w=300 300w, https://zhiyuchen.com/wp-content/uploads/2020/10/image-5.png?w=768 768w, https://zhiyuchen.com/wp-content/uploads/2020/10/image-5.png?w=1440 1440w, https://zhiyuchen.com/wp-content/uploads/2020/10/image-5.png 1846w" sizes="(max-width: 1024px) 100vw, 1024px"></figure></div>



<p>Take-way conclusions/tricks:</p>



<ol class="wp-block-list"><li>the unlikehood term in equation 4 is effective by comparing with MLE with LUL (row 6,7);</li><li>Among all generatice methods, BART-large(RLL) performs the best.</li><li>RLL loss seems to be the most effective for IR task, which is widely used in pre-BERT IR models.  Though the paper emphasizes the effectiveness of the new generative approach,  I am more attracted by the experiments on different loss functions (especially RLL) 🙂</li><li>When finetuning with RLL, for a question, 15 negative passages are sampled while only the one with highest score is used to update the model.</li></ol>
<div id="jp-post-flair" class="sharedaddy sd-like-enabled sd-sharing-enabled"><div class="sharedaddy sd-sharing-enabled"><div class="robots-nocontent sd-block sd-social sd-social-icon-text sd-sharing"><h3 class="sd-title">共享此文章：</h3><div class="sd-content"><ul><li class="share-twitter"><a rel="nofollow noopener noreferrer" data-shared="sharing-twitter-617" class="share-twitter sd-button share-icon" href="https://zhiyuchen.com/2020/10/12/paper-reading-beyond-cls-through-ranking-by-generation/?share=twitter" target="_blank" aria-labelledby="sharing-twitter-617">
				<span id="sharing-twitter-617" hidden="">Click to share on X (Opens in new window)</span>
				<span>X</span>
			</a></li><li class="share-facebook"><a rel="nofollow noopener noreferrer" data-shared="sharing-facebook-617" class="share-facebook sd-button share-icon" href="https://zhiyuchen.com/2020/10/12/paper-reading-beyond-cls-through-ranking-by-generation/?share=facebook" target="_blank" aria-labelledby="sharing-facebook-617">
				<span id="sharing-facebook-617" hidden="">Click to share on Facebook (Opens in new window)</span>
				<span>Facebook</span>
			</a></li><li class="share-end"></li></ul></div></div></div><div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" id="like-post-wrapper-122293174-617-6937707ab7d8a" data-src="//widgets.wp.com/likes/index.html?ver=20251209#blog_id=122293174&amp;post_id=617&amp;origin=zhiyusite.wordpress.com&amp;obj_id=122293174-617-6937707ab7d8a&amp;domain=zhiyuchen.com" data-name="like-post-frame-122293174-617-6937707ab7d8a" data-title="Like or Reblog"><div class="likes-widget-placeholder post-likes-widget-placeholder" style="height: 55px;"><span class="button"><span>Like</span></span> <span class="loading">Loading...</span></div><span class="sd-text-color"></span><a class="sd-link-color"></a></div>
<div id="jp-relatedposts" class="jp-relatedposts">
	<h3 class="jp-relatedposts-headline"><em>Related</em></h3>
</div></div>			
