---
title: Zhiyu's Blog
date: '2019-12-23T07:00:30.000Z'
tags:
  - BERT
  - Paper Reading
  - BERT
  - Explain
---

		
<p>This paper studies the layer-wise BERT activations for sentence-level tasks and passage-level tasks. </p>



<h3 class="wp-block-heading">1. BERT Sentence Embedding<br></h3>



<p>SentEval toolkit is used to evaluate the quality of sentence representations from BERT activations. It has a variety of downstreaming sentence-level tasks and probing tasks.  More details about SentEval are at: <a rel="noreferrer noopener" aria-label=" (opens in a new tab)" href="https://github.com/facebookresearch/SentEval" target="_blank">https://github.com/facebookresearch/SentEval</a></p>



<h4 class="wp-block-heading">1.1 [CLS] from different layers</h4>



<p>[CLS] token embeddings from different layers are used for classification. Only a logistic regression layer is used on top of [CLS].  Figure1 shows the the results.<br></p>



<div class="wp-block-image"><figure class="aligncenter size-large"><img data-attachment-id="183" data-permalink="https://zhiyuchen.com/f1-1/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2019/12/f1-1.png" data-orig-size="641,694" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="f1-1" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2019/12/f1-1.png?w=277" data-large-file="https://zhiyuchen.com/wp-content/uploads/2019/12/f1-1.png?w=641" width="641" height="694" src="https://zhiyuchen.com/wp-content/uploads/2019/12/f1-1.png?w=641" alt="" class="wp-image-183" srcset="https://zhiyuchen.com/wp-content/uploads/2019/12/f1-1.png 641w, https://zhiyuchen.com/wp-content/uploads/2019/12/f1-1.png?w=139 139w, https://zhiyuchen.com/wp-content/uploads/2019/12/f1-1.png?w=277 277w" sizes="(max-width: 641px) 100vw, 641px"></figure></div>



<p>We can see that generally top layer get better performance than lower layers. However, for certain probing task such as tense classification, subject, and object number classifications, middle layer embeddings perform the best. Also, there is a higher correlation in performance between bottom layer embeddings and GloVe embeddings than those of other layers.<br></p>



<h3 class="wp-block-heading">1.2 different pooling methods</h3>



<p>The following pooling methods are experimented:</p>



<ul class="wp-block-list"><li><strong>CLS-pooling</strong>: the hidden state corresponding to the [CLS] token</li><li><strong>SEP-pooling</strong>:  the hidden state corresponding to the [SEP] token</li><li><strong>Mean-pooling</strong>: the average of the hidden state of the encoding layer on the time axis</li><li><strong>Max-pooling</strong>:  the maximum of the hidden state of the encoding layer on the time axis</li></ul>



<p>The performance of each pooling method is averaged over different layers. The results are summarized in Table 1, where the score of each task category comes from the average scores of all tasks belong to that category. The results show taht <strong>Mean-pooling performs the best</strong>.</p>



<div class="wp-block-image"><figure class="aligncenter size-large is-resized"><img data-attachment-id="184" data-permalink="https://zhiyuchen.com/t1/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2019/12/t1.png" data-orig-size="597,354" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="t1" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2019/12/t1.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2019/12/t1.png?w=597" src="https://zhiyuchen.com/wp-content/uploads/2019/12/t1.png?w=597" alt="" class="wp-image-184" width="423" height="251" srcset="https://zhiyuchen.com/wp-content/uploads/2019/12/t1.png?w=423 423w, https://zhiyuchen.com/wp-content/uploads/2019/12/t1.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2019/12/t1.png?w=300 300w, https://zhiyuchen.com/wp-content/uploads/2019/12/t1.png 597w" sizes="(max-width: 423px) 100vw, 423px"></figure></div>



<h3 class="wp-block-heading">1.3 Pre-trained vs. Fine-tuned BERT</h3>



<p>The performance of embeddings from pre-trained BERT and fine-tuned BERT is compared. MNLI and SNLI are used in this experiment.  Concatenating embeddings from multiple layers are also tested. Results are presented in Table 2.<br></p>



<figure class="wp-block-image size-large"><img data-attachment-id="185" data-permalink="https://zhiyuchen.com/t2/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2019/12/t2.png" data-orig-size="1075,370" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="t2" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2019/12/t2.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2019/12/t2.png?w=720" width="1024" height="352" src="https://zhiyuchen.com/wp-content/uploads/2019/12/t2.png?w=1024" alt="" class="wp-image-185" srcset="https://zhiyuchen.com/wp-content/uploads/2019/12/t2.png?w=1024 1024w, https://zhiyuchen.com/wp-content/uploads/2019/12/t2.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2019/12/t2.png?w=300 300w, https://zhiyuchen.com/wp-content/uploads/2019/12/t2.png?w=768 768w, https://zhiyuchen.com/wp-content/uploads/2019/12/t2.png 1075w" sizes="(max-width: 1024px) 100vw, 1024px"></figure>



<p>From the table, we can see that pre-trained BERT is good at capturing sentence level syntactic information and semantic information, but poor at semantic similarity tasks and surface information tasks.  </p>



<h3 class="wp-block-heading">2. BERT Passage Embedding</h3>



<p>In this section, BERT embeddings are used to solve QA problems(passage level) under a learning-to-rank setting. </p>



<p>The same pooling methods in sentence embedding experiment are used to extract passage embeddings. The following methods are used to combine query embeddings with answer passage embeddings:</p>



<ul class="wp-block-list"><li>cosine similarity</li><li>bilinear function</li><li>concatenation</li><li>(u,v,u*v,|u-v|) where u and v are query embedding and answer embedding respectively.</li></ul>



<p>A logistic layer or an MLP is added on top of the embeddings to output an ranking score. Pairwise rank hinge loss is used for training. BERT passage embeddings are compared with BM25, other SOTA methods and fine-tuned BERT on in-domain supervised data. The results are shown in Table 3.</p>



<div class="wp-block-image"><figure class="aligncenter size-large is-resized"><img data-attachment-id="189" data-permalink="https://zhiyuchen.com/t3/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2019/12/t3.png" data-orig-size="647,747" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="t3" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2019/12/t3.png?w=260" data-large-file="https://zhiyuchen.com/wp-content/uploads/2019/12/t3.png?w=647" loading="lazy" src="https://zhiyuchen.com/wp-content/uploads/2019/12/t3.png?w=647" alt="" class="wp-image-189" width="488" height="563" srcset="https://zhiyuchen.com/wp-content/uploads/2019/12/t3.png?w=488 488w, https://zhiyuchen.com/wp-content/uploads/2019/12/t3.png?w=130 130w, https://zhiyuchen.com/wp-content/uploads/2019/12/t3.png?w=260 260w, https://zhiyuchen.com/wp-content/uploads/2019/12/t3.png 647w" sizes="(max-width: 488px) 100vw, 488px"></figure></div>



<p>Overall, in-domain fine-tuned BERT delivers the best performance.  Similar to BERT for sentence embeddings, mean-pooling and combining the top and bottom layer embeddings lead to better performance, and (u; v; u ∗ v; |u – v|) shows the strongest results among other interaction schemes.<br></p>



<p><br></p>
<div id="jp-post-flair" class="sharedaddy sd-like-enabled sd-sharing-enabled"><div class="sharedaddy sd-sharing-enabled"><div class="robots-nocontent sd-block sd-social sd-social-icon-text sd-sharing"><h3 class="sd-title">共享此文章：</h3><div class="sd-content"><ul><li class="share-twitter"><a rel="nofollow noopener noreferrer" data-shared="sharing-twitter-181" class="share-twitter sd-button share-icon" href="https://zhiyuchen.com/2019/12/23/paper-reaeding-universal-text-representation-from-bert-an-empirical-study/?share=twitter" target="_blank" aria-labelledby="sharing-twitter-181">
				<span id="sharing-twitter-181" hidden="">Click to share on X (Opens in new window)</span>
				<span>X</span>
			</a></li><li class="share-facebook"><a rel="nofollow noopener noreferrer" data-shared="sharing-facebook-181" class="share-facebook sd-button share-icon" href="https://zhiyuchen.com/2019/12/23/paper-reaeding-universal-text-representation-from-bert-an-empirical-study/?share=facebook" target="_blank" aria-labelledby="sharing-facebook-181">
				<span id="sharing-facebook-181" hidden="">Click to share on Facebook (Opens in new window)</span>
				<span>Facebook</span>
			</a></li><li class="share-end"></li></ul></div></div></div><div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" id="like-post-wrapper-122293174-181-693771dddf203" data-src="//widgets.wp.com/likes/index.html?ver=20251209#blog_id=122293174&amp;post_id=181&amp;origin=zhiyusite.wordpress.com&amp;obj_id=122293174-181-693771dddf203&amp;domain=zhiyuchen.com" data-name="like-post-frame-122293174-181-693771dddf203" data-title="Like or Reblog"><div class="likes-widget-placeholder post-likes-widget-placeholder" style="height: 55px;"><span class="button"><span>Like</span></span> <span class="loading">Loading...</span></div><span class="sd-text-color"></span><a class="sd-link-color"></a></div>
<div id="jp-relatedposts" class="jp-relatedposts">
	<h3 class="jp-relatedposts-headline"><em>Related</em></h3>
</div></div>			
