---
title: Zhiyu's Blog
date: '2017-09-01T04:59:18.000Z'
tags:
  - algorithm
---

		<h3 id="Problem-Statement">Problem Statement</h3>
<p>Randomly choosing k items from a list S containing n items where n is too large or unknown.</p>
<h3 id="Method-Reservoir-Sampling">Method: Reservoir Sampling</h3>
<p>Steps:</p>
<ol>
<li>keep the first item in memory</li>
<li>for the next item i (i &gt; 1)
<ul>
<li>keep the new item with probability 1/i</li>
<li>ignore the new item with probability 1 – 1/i</li>
</ul>
</li>
</ol>
<p>It is easy to prove that when there are n items, each item is kept with probability 1/n.</p>
<h3 id="Python-Implementation">Python Implementation</h3>
<p>Suppose we have a long document but only keep 10 tokens from the document.</p>
<pre><code>import random
SAMPLE_COUNT = 10

random.seed(2333)

doc = '''Reservoir sampling is a family of randomized algorithms for randomly choosing a sample of k items from a list S containing n items, where n is either a very large or unknown number. Typically n is large enough that the list doesn't fit into main memory.'''

tokens = doc.split(' ')

sample_tokens = []
for idx, token in enumerate(tokens):
        # Generate the reservoir
        if idx &lt; SAMPLE_COUNT:
                sample_tokens.append(token)
        else:
                # Randomly replace elements in the reservoir
                r = random.randint(0, idx)
                if r &lt; SAMPLE_COUNT:
                        sample_tokens[r] = token

print(sample_tokens)</code></pre>
<p>&nbsp;</p>
<div id="jp-post-flair" class="sharedaddy sd-like-enabled sd-sharing-enabled"><div class="sharedaddy sd-sharing-enabled"><div class="robots-nocontent sd-block sd-social sd-social-icon-text sd-sharing"><h3 class="sd-title">共享此文章：</h3><div class="sd-content"><ul><li class="share-twitter"><a rel="nofollow noopener noreferrer" data-shared="sharing-twitter-53" class="share-twitter sd-button share-icon" href="https://zhiyuchen.com/2017/09/01/reservoir-sampling/?share=twitter" target="_blank" aria-labelledby="sharing-twitter-53">
				<span id="sharing-twitter-53" hidden="">Click to share on X (Opens in new window)</span>
				<span>X</span>
			</a></li><li class="share-facebook"><a rel="nofollow noopener noreferrer" data-shared="sharing-facebook-53" class="share-facebook sd-button share-icon" href="https://zhiyuchen.com/2017/09/01/reservoir-sampling/?share=facebook" target="_blank" aria-labelledby="sharing-facebook-53">
				<span id="sharing-facebook-53" hidden="">Click to share on Facebook (Opens in new window)</span>
				<span>Facebook</span>
			</a></li><li class="share-end"></li></ul></div></div></div><div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" id="like-post-wrapper-122293174-53-693771df01da8" data-src="//widgets.wp.com/likes/index.html?ver=20251209#blog_id=122293174&amp;post_id=53&amp;origin=zhiyusite.wordpress.com&amp;obj_id=122293174-53-693771df01da8&amp;domain=zhiyuchen.com" data-name="like-post-frame-122293174-53-693771df01da8" data-title="Like or Reblog"><div class="likes-widget-placeholder post-likes-widget-placeholder" style="height: 55px;"><span class="button"><span>Like</span></span> <span class="loading">Loading...</span></div><span class="sd-text-color"></span><a class="sd-link-color"></a></div>
<div id="jp-relatedposts" class="jp-relatedposts">
	<h3 class="jp-relatedposts-headline"><em>Related</em></h3>
</div></div>			
