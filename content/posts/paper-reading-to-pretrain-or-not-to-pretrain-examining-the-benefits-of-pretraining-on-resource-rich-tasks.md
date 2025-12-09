---
title: Zhiyu's Blog
date: '2020-06-22T00:23:49.000Z'
tags:
  - Paper Reading
  - BERT
  - Text Classification
---

		
<p>Venue: ACL 2020</p>



<p>This paper presents the empirical results of how the performance gap between pretraining models (RoBERTa) and vanilla LSTM changes in terms of the size of training samples for text classification tasks.</p>



<p>They experimented on 3 text classification datasets with 3 models: RoBERTa, LSTM, LSTM initialized with pretrained RoBERTa embeddings.  They used different portion of training samples(1%, 10%, 30%, 50%, 70%, 90%)  to mimic the “low-resource”, “medium-resource” and “high-resource” regime. The results are shown in Figure 1.</p>



<figure class="wp-block-image size-large"><img data-attachment-id="570" data-permalink="https://zhiyuchen.com/image-2-3/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2020/06/image-2.png" data-orig-size="1158,502" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="image-2" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2020/06/image-2.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2020/06/image-2.png?w=720" width="1024" height="443" src="https://zhiyuchen.com/wp-content/uploads/2020/06/image-2.png?w=1024" alt="" class="wp-image-570" srcset="https://zhiyuchen.com/wp-content/uploads/2020/06/image-2.png?w=1024 1024w, https://zhiyuchen.com/wp-content/uploads/2020/06/image-2.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2020/06/image-2.png?w=300 300w, https://zhiyuchen.com/wp-content/uploads/2020/06/image-2.png?w=768 768w, https://zhiyuchen.com/wp-content/uploads/2020/06/image-2.png 1158w" sizes="(max-width: 1024px) 100vw, 1024px"></figure>



<p>There are 2 important conclusions:</p>



<ol class="wp-block-list"><li>When increasing the size of training data, the accuracy gap between LSTM and RoBERTa decreases.</li><li>Initializing LSTM with RoBERTa embeddings can improve the performance of LSTM.</li></ol>



<p></p>
<div id="jp-post-flair" class="sharedaddy sd-like-enabled sd-sharing-enabled"><div class="sharedaddy sd-sharing-enabled"><div class="robots-nocontent sd-block sd-social sd-social-icon-text sd-sharing"><h3 class="sd-title">共享此文章：</h3><div class="sd-content"><ul><li class="share-twitter"><a rel="nofollow noopener noreferrer" data-shared="sharing-twitter-568" class="share-twitter sd-button share-icon" href="https://zhiyuchen.com/2020/06/21/paper-reading-to-pretrain-or-not-to-pretrain-examining-the-benefits-of-pretraining-on-resource-rich-tasks/?share=twitter" target="_blank" aria-labelledby="sharing-twitter-568">
				<span id="sharing-twitter-568" hidden="">Click to share on X (Opens in new window)</span>
				<span>X</span>
			</a></li><li class="share-facebook"><a rel="nofollow noopener noreferrer" data-shared="sharing-facebook-568" class="share-facebook sd-button share-icon" href="https://zhiyuchen.com/2020/06/21/paper-reading-to-pretrain-or-not-to-pretrain-examining-the-benefits-of-pretraining-on-resource-rich-tasks/?share=facebook" target="_blank" aria-labelledby="sharing-facebook-568">
				<span id="sharing-facebook-568" hidden="">Click to share on Facebook (Opens in new window)</span>
				<span>Facebook</span>
			</a></li><li class="share-end"></li></ul></div></div></div><div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" id="like-post-wrapper-122293174-568-6937707b69038" data-src="//widgets.wp.com/likes/index.html?ver=20251209#blog_id=122293174&amp;post_id=568&amp;origin=zhiyusite.wordpress.com&amp;obj_id=122293174-568-6937707b69038&amp;domain=zhiyuchen.com" data-name="like-post-frame-122293174-568-6937707b69038" data-title="Like or Reblog"><div class="likes-widget-placeholder post-likes-widget-placeholder" style="height: 55px;"><span class="button"><span>Like</span></span> <span class="loading">Loading...</span></div><span class="sd-text-color"></span><a class="sd-link-color"></a></div>
<div id="jp-relatedposts" class="jp-relatedposts">
	<h3 class="jp-relatedposts-headline"><em>Related</em></h3>
</div></div>			
