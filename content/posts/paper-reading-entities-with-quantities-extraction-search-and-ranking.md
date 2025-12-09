---
title: Zhiyu's Blog
date: '2020-05-30T02:34:12.000Z'
tags:
  - Information Retrieval
  - Paper Reading
  - Quantity IR/IE
  - Question Answering
---

		
<p>venue: WSDM 2020 (Demonstration)</p>



<p>demo link: <a href="https://qsearch.mpi-inf.mpg.de/" target="_blank" rel="noreferrer noopener">https://qsearch.mpi-inf.mpg.de/</a></p>



<p>Traditional search engines do no understand quantities and often fail to return results expected to satisfy certain quantity conditions in the query.</p>



<p>This paper introduces <strong>Qsearch</strong>, which is originally proposed in “<a href="https://link.springer.com/chapter/10.1007/978-3-030-30793-6_14"> Qsearch: Answering<br>quantity queries from text (ISWC 2019)</a>” .  The overview framework is shown in Figure 1 which consists of two phases: <strong>Extract </strong>and <strong>Answer</strong>.</p>



<figure class="wp-block-image size-large"><img data-attachment-id="545" data-permalink="https://zhiyuchen.com/image-9/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2020/05/image.png" data-orig-size="1393,418" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="image" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2020/05/image.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2020/05/image.png?w=720" width="1024" height="307" src="https://zhiyuchen.com/wp-content/uploads/2020/05/image.png?w=1024" alt="" class="wp-image-545" srcset="https://zhiyuchen.com/wp-content/uploads/2020/05/image.png?w=1024 1024w, https://zhiyuchen.com/wp-content/uploads/2020/05/image.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2020/05/image.png?w=300 300w, https://zhiyuchen.com/wp-content/uploads/2020/05/image.png?w=768 768w, https://zhiyuchen.com/wp-content/uploads/2020/05/image.png 1393w" sizes="(max-width: 1024px) 100vw, 1024px"><figcaption>Figure 1</figcaption></figure>



<h2 class="wp-block-heading">1. Extract</h2>



<p>The 1st step is to <strong>recognize entities</strong> with AIDA and <strong>quantity mentions</strong> with Illinois Quantifier. Then, LSTM is used to extract triples like <strong>(entity, quantity, context)</strong>, called <strong>Qfacts</strong>. For each quantity, the LSTM identifies the referred entity and relevant context tokens.  For the example in Figure 2, q1 and q2 are both linked to e1. As a result, we can find all the relevant quantities and contexts for a single entity (block 3 in Figure 1).</p>



<figure class="wp-block-image size-large"><img data-attachment-id="546" data-permalink="https://zhiyuchen.com/image-1-4/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2020/05/image-1.png" data-orig-size="1030,396" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="image-1" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2020/05/image-1.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2020/05/image-1.png?w=720" width="1024" height="393" src="https://zhiyuchen.com/wp-content/uploads/2020/05/image-1.png?w=1024" alt="" class="wp-image-546" srcset="https://zhiyuchen.com/wp-content/uploads/2020/05/image-1.png?w=1024 1024w, https://zhiyuchen.com/wp-content/uploads/2020/05/image-1.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2020/05/image-1.png?w=300 300w, https://zhiyuchen.com/wp-content/uploads/2020/05/image-1.png?w=768 768w, https://zhiyuchen.com/wp-content/uploads/2020/05/image-1.png 1030w" sizes="(max-width: 1024px) 100vw, 1024px"></figure>



<h2 class="wp-block-heading">2. Answer</h2>



<p>First, a query is parsed into (answer type, quantity condition, rest tokens in the query), or (t,q,X).  The query parser uses YAGO types and predifined quantity units to recognize t and q.</p>



<p>To match the answer, given the identified answer type and quantity condition, a list of candidate entities and their quantity-context pairs are returned.  A list of unit conversion rules are used to filter Qfacts with the unmatched quantity condition. After that, each candidate entity is assgined a score based on the context matching. Finally, the candidate entities are ranked by the matching scores.</p>



<p>  </p>
<div id="jp-post-flair" class="sharedaddy sd-like-enabled sd-sharing-enabled"><div class="sharedaddy sd-sharing-enabled"><div class="robots-nocontent sd-block sd-social sd-social-icon-text sd-sharing"><h3 class="sd-title">共享此文章：</h3><div class="sd-content"><ul><li class="share-twitter"><a rel="nofollow noopener noreferrer" data-shared="sharing-twitter-543" class="share-twitter sd-button share-icon" href="https://zhiyuchen.com/2020/05/29/paper-reading-entities-with-quantities-extraction-search-and-ranking/?share=twitter" target="_blank" aria-labelledby="sharing-twitter-543">
				<span id="sharing-twitter-543" hidden="">Click to share on X (Opens in new window)</span>
				<span>X</span>
			</a></li><li class="share-facebook"><a rel="nofollow noopener noreferrer" data-shared="sharing-facebook-543" class="share-facebook sd-button share-icon" href="https://zhiyuchen.com/2020/05/29/paper-reading-entities-with-quantities-extraction-search-and-ranking/?share=facebook" target="_blank" aria-labelledby="sharing-facebook-543">
				<span id="sharing-facebook-543" hidden="">Click to share on Facebook (Opens in new window)</span>
				<span>Facebook</span>
			</a></li><li class="share-end"></li></ul></div></div></div><div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" id="like-post-wrapper-122293174-543-6937707c167e2" data-src="//widgets.wp.com/likes/index.html?ver=20251209#blog_id=122293174&amp;post_id=543&amp;origin=zhiyusite.wordpress.com&amp;obj_id=122293174-543-6937707c167e2&amp;domain=zhiyuchen.com" data-name="like-post-frame-122293174-543-6937707c167e2" data-title="Like or Reblog"><div class="likes-widget-placeholder post-likes-widget-placeholder" style="height: 55px;"><span class="button"><span>Like</span></span> <span class="loading">Loading...</span></div><span class="sd-text-color"></span><a class="sd-link-color"></a></div>
<div id="jp-relatedposts" class="jp-relatedposts">
	<h3 class="jp-relatedposts-headline"><em>Related</em></h3>
</div></div>			
