---
title: Zhiyu's Blog
date: '2019-12-22T08:45:31.000Z'
tags:
  - dataset
  - Paper Reading
  - dataset
  - word embedding evaluation
---

		
<h3 class="wp-block-heading">Introduction</h3>



<p>Previous methods to evaluate word embeddings intrinsiclly (e.g. WordSim-353, SimLex-999, word analogy task) ignore the context and treat words in isolation. This paper proposes a dataset CoSimLex to evaluate the ability of word embeddings that reflect similarity judgements in context and answer the following question:</p>



<p class="has-text-align-left"><strong>How well do word embeddings model the effects that context has on word meaning?</strong><br></p>



<p> CoSimLex  is used as the gold standard of task 3 at SemEval2020:  <a rel="noreferrer noopener" aria-label=" (opens in a new tab)" href="https://competitions.codalab.org/competitions/20905" target="_blank">https://competitions.codalab.org/competitions/20905</a></p>



<h3 class="wp-block-heading">Related Work</h3>



<p>The Stanford Contextual Word Similarity (SCWS) dataset also takes context into account and contains graded similarity judgements of word pairs. But it evaluates a discrete multi-prototype model and focuses on selecting one of the word senses, which means each word has its own distinct context.</p>



<p>Words-in-Context (WiC) dataset also focuses on discret word senses and cannot capture continuous effects of context in the judgements of similarity between different words.</p>



<h3 class="wp-block-heading">Dataset and Task Design</h3>



<p>CoSimLex is based on pairs of words from SimLex-999. The English dataset consists of 333 pairs. It also has 111 pairs for each of other three languages. Each pair is rated within two different contexts, giving a total of 1554 scores of contextual similarity. The task is to suitable, organically occurring contexts for each pair.<br></p>



<p>Each line of CoSimLex will be made of a pair of words selected from Simlex-999; two different contexts extracted from Wikipedia in which these two words appear; two scores of similarity, each one related to one of the contexts; and two scores of standard deviation. Figure 1 shows 1 example.</p>



<figure class="wp-block-image size-large"><img data-attachment-id="159" data-permalink="https://zhiyuchen.com/f1/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2019/12/f1.png" data-orig-size="1417,437" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="f1" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2019/12/f1.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2019/12/f1.png?w=720" width="1024" height="315" src="https://zhiyuchen.com/wp-content/uploads/2019/12/f1.png?w=1024" alt="" class="wp-image-159" srcset="https://zhiyuchen.com/wp-content/uploads/2019/12/f1.png?w=1024 1024w, https://zhiyuchen.com/wp-content/uploads/2019/12/f1.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2019/12/f1.png?w=300 300w, https://zhiyuchen.com/wp-content/uploads/2019/12/f1.png?w=768 768w, https://zhiyuchen.com/wp-content/uploads/2019/12/f1.png 1417w" sizes="(max-width: 1024px) 100vw, 1024px"></figure>



<p>In order to evaluate how well  context-dependent embeddings can predict the effect of context in human perception of similarity, two subtasks and two metrics are proposed:</p>



<ol class="wp-block-list"><li><strong>Predicting Changes</strong>:  predicting the change in similarity ratings between the two contexts. The scores of difference from human annotators  are averaged. Finnally the  uncentered Pearson correlation is calculated.</li><li><strong>Predicting Ratings</strong>: predicting the absolute similarity rating for each pair in each context.  Spearman correlation with gold-standard judgements is used for evaluation.</li></ol>



<p></p>
<div id="jp-post-flair" class="sharedaddy sd-like-enabled sd-sharing-enabled"><div class="sharedaddy sd-sharing-enabled"><div class="robots-nocontent sd-block sd-social sd-social-icon-text sd-sharing"><h3 class="sd-title">共享此文章：</h3><div class="sd-content"><ul><li class="share-twitter"><a rel="nofollow noopener noreferrer" data-shared="sharing-twitter-153" class="share-twitter sd-button share-icon" href="https://zhiyuchen.com/2019/12/22/paper-reading-cosimlex-a-resource-for-evaluating-graded-word-similarity-in-context/?share=twitter" target="_blank" aria-labelledby="sharing-twitter-153">
				<span id="sharing-twitter-153" hidden="">Click to share on X (Opens in new window)</span>
				<span>X</span>
			</a></li><li class="share-facebook"><a rel="nofollow noopener noreferrer" data-shared="sharing-facebook-153" class="share-facebook sd-button share-icon" href="https://zhiyuchen.com/2019/12/22/paper-reading-cosimlex-a-resource-for-evaluating-graded-word-similarity-in-context/?share=facebook" target="_blank" aria-labelledby="sharing-facebook-153">
				<span id="sharing-facebook-153" hidden="">Click to share on Facebook (Opens in new window)</span>
				<span>Facebook</span>
			</a></li><li class="share-end"></li></ul></div></div></div><div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" id="like-post-wrapper-122293174-153-693771de76017" data-src="//widgets.wp.com/likes/index.html?ver=20251209#blog_id=122293174&amp;post_id=153&amp;origin=zhiyusite.wordpress.com&amp;obj_id=122293174-153-693771de76017&amp;domain=zhiyuchen.com" data-name="like-post-frame-122293174-153-693771de76017" data-title="Like or Reblog"><div class="likes-widget-placeholder post-likes-widget-placeholder" style="height: 55px;"><span class="button"><span>Like</span></span> <span class="loading">Loading...</span></div><span class="sd-text-color"></span><a class="sd-link-color"></a></div>
<div id="jp-relatedposts" class="jp-relatedposts">
	<h3 class="jp-relatedposts-headline"><em>Related</em></h3>
</div></div>			
