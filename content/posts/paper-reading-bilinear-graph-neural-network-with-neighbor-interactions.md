---
title: Zhiyu's Blog
date: '2020-08-24T16:30:14.000Z'
tags:
  - GNN
  - Paper Reading
  - GNN
---

		
<p>venue: IJCAI 2020</p>



<p></p>



<p>If the aggregation function of previous GNN layers (e.g. GCN and GAT) is  </p>



<div class="wp-block-image"><figure class="aligncenter size-large is-resized"><img data-attachment-id="589" data-permalink="https://zhiyuchen.com/image-2-4/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2020/08/image-2.png" data-orig-size="653,87" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="image-2" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2020/08/image-2.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2020/08/image-2.png?w=653" src="https://zhiyuchen.com/wp-content/uploads/2020/08/image-2.png?w=653" alt="" class="wp-image-589" width="473" height="63" srcset="https://zhiyuchen.com/wp-content/uploads/2020/08/image-2.png?w=473 473w, https://zhiyuchen.com/wp-content/uploads/2020/08/image-2.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2020/08/image-2.png?w=300 300w, https://zhiyuchen.com/wp-content/uploads/2020/08/image-2.png 653w" sizes="(max-width: 473px) 100vw, 473px"></figure></div>



<p>then the paper extends it with a bilinear aggregator:</p>



<div class="wp-block-image"><figure class="aligncenter size-large is-resized"><img data-attachment-id="587" data-permalink="https://zhiyuchen.com/image-1-6/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2020/08/image-1.png" data-orig-size="703,144" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="image-1" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2020/08/image-1.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2020/08/image-1.png?w=703" src="https://zhiyuchen.com/wp-content/uploads/2020/08/image-1.png?w=703" alt="" class="wp-image-587" width="488" height="100" srcset="https://zhiyuchen.com/wp-content/uploads/2020/08/image-1.png?w=488 488w, https://zhiyuchen.com/wp-content/uploads/2020/08/image-1.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2020/08/image-1.png?w=300 300w, https://zhiyuchen.com/wp-content/uploads/2020/08/image-1.png 703w" sizes="(max-width: 488px) 100vw, 488px"></figure></div>



<p>where</p>



<div class="wp-block-image"><figure class="aligncenter size-large is-resized"><img data-attachment-id="590" data-permalink="https://zhiyuchen.com/image-3-3/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2020/08/image-3.png" data-orig-size="660,92" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="image-3" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2020/08/image-3.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2020/08/image-3.png?w=660" src="https://zhiyuchen.com/wp-content/uploads/2020/08/image-3.png?w=660" alt="" class="wp-image-590" width="502" height="70" srcset="https://zhiyuchen.com/wp-content/uploads/2020/08/image-3.png?w=502 502w, https://zhiyuchen.com/wp-content/uploads/2020/08/image-3.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2020/08/image-3.png?w=300 300w, https://zhiyuchen.com/wp-content/uploads/2020/08/image-3.png 660w" sizes="(max-width: 502px) 100vw, 502px"></figure></div>



<p>It sums up the elementwise product of  every pair of neighbor nodes of a target node (self-interactions excluded).</p>



<p>The experimental results show that BGAT (BGCN) outperforms vanilla GAT(GCN) by 1.5% (1.6%).</p>



<p>A linear combination of AGG output and BA output may not be optimal. Other feature aggregation mechanism can also be used (e.g. concatenation with a FFN).</p>
<div id="jp-post-flair" class="sharedaddy sd-like-enabled sd-sharing-enabled"><div class="sharedaddy sd-sharing-enabled"><div class="robots-nocontent sd-block sd-social sd-social-icon-text sd-sharing"><h3 class="sd-title">共享此文章：</h3><div class="sd-content"><ul><li class="share-twitter"><a rel="nofollow noopener noreferrer" data-shared="sharing-twitter-583" class="share-twitter sd-button share-icon" href="https://zhiyuchen.com/2020/08/24/paper-reading-bilinear-graph-neural-network-with-neighbor-interactions/?share=twitter" target="_blank" aria-labelledby="sharing-twitter-583">
				<span id="sharing-twitter-583" hidden="">Click to share on X (Opens in new window)</span>
				<span>X</span>
			</a></li><li class="share-facebook"><a rel="nofollow noopener noreferrer" data-shared="sharing-facebook-583" class="share-facebook sd-button share-icon" href="https://zhiyuchen.com/2020/08/24/paper-reading-bilinear-graph-neural-network-with-neighbor-interactions/?share=facebook" target="_blank" aria-labelledby="sharing-facebook-583">
				<span id="sharing-facebook-583" hidden="">Click to share on Facebook (Opens in new window)</span>
				<span>Facebook</span>
			</a></li><li class="share-end"></li></ul></div></div></div><div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" id="like-post-wrapper-122293174-583-6937707b15b65" data-src="//widgets.wp.com/likes/index.html?ver=20251209#blog_id=122293174&amp;post_id=583&amp;origin=zhiyusite.wordpress.com&amp;obj_id=122293174-583-6937707b15b65&amp;domain=zhiyuchen.com" data-name="like-post-frame-122293174-583-6937707b15b65" data-title="Like or Reblog"><div class="likes-widget-placeholder post-likes-widget-placeholder" style="height: 55px;"><span class="button"><span>Like</span></span> <span class="loading">Loading...</span></div><span class="sd-text-color"></span><a class="sd-link-color"></a></div>
<div id="jp-relatedposts" class="jp-relatedposts">
	<h3 class="jp-relatedposts-headline"><em>Related</em></h3>
</div></div>			
