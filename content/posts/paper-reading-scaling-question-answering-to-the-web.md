---
title: Zhiyu's Blog
date: '2020-04-27T20:18:58.000Z'
tags:
  - Paper Reading
  - Question Answering
  - QA
---

		
<p>slides: <a href="https://docs.google.com/presentation/d/1FUB4e7gjS5O4iP2gvo0ympTa1oI6T1YPsZv2quXMJqA/edit?usp=sharing">here</a></p>



<p>Venue: WWW 2001</p>



<p>paper link: <a href="https://dl.acm.org/doi/pdf/10.1145/371920.371973">here</a></p>



<p>Mulder is the 1st general-purpose, fully-automated question answering(QA) system. Instead of indexing any structured corpora, Mulder uses a commercial search engine as its knowledge base. The system has 6 components:</p>



<ol class="wp-block-list"><li><strong>Question Parser</strong>: it constructs a tree of the question’s phrasal structure and determines the question’s syntactic structure. The results from the question parser are also used in other components(2,3). The paper uses MEI parser and PC-KIMMO parser to parse the questions.</li><li><strong>Question Classifier</strong>: it can narrow the number of candidate answers and is used in answer extraction(5) to filter answer candidates of unexpected types. A set of rules based on the wh-phrase recognition by question parser are used to classify the answer type to be either numerical, nominal or temporal. For example, if the MEI parser recognizes Wh-adjective phrases(e.g. how tall) in the question, then the answer type is classified as numerical.</li><li><strong>Query Formulation</strong>: this component translates the question into a set of keyword queries. The motivation behind is that the reformulated queries may include terms in the target sentences. For example, given the questio “When did Nixon visit China”, we may expect the term “visited” in th target sentence. This strategy is called <strong>verb conversion</strong> which replaces th auxiliary and main verb with the conjugated verb. The 2nd strategy<strong> quer expansion</strong> is to replace the adjective in the question with its attribute nou in WordNet. For example, given the question “How tall is Mt. Everest”, th term “tall” is replaced with “height”. The 3rd strategy <strong>noun phrase formation</strong> is to compose a query with noun phrases that do not contain othe noun phrases. By treating single noun phrase as a query, more pages ca be returned from a search engine which may increase the recall of the Q system. The 4th strategy <strong>transformation</strong> uses rules of Transformationa Grammar to translate the question into equivalent assertions. For example given the question “who shot JFK” and the rule of stripping the interrogative, we have the new question “shot JFK”.</li><li><strong>Search Engine</strong>: the original question and the ones generated from query formulation(3) will be sent to Google to get a list of Web pages.</li><li><strong>Answer Extraction</strong>: this component aims to find candidate answers from the Web pages obtained from Google. The 1st step is to score each page summary. The scoring function gives higher scores to the summaries with more important keywords which are close to each other. Then top ranked summaries will be parsed by MEI parser to obtain phrases which are considered as candidate answers. As mentioned earlier, those phrases in unexpected types(not matching with question classification) will be filtered.</li><li><strong>Answer Selection</strong>: this component first assigns a score to each candidate answer. It gives higher scores to candidate answers which have more important keywords nearby. Then the candidate answers will be clustered into groups by a simplified version of suffix tree clustering algorithm, where answers that share the same words will be clustered into the same group. Then clusters are ranked according to sum of scores of their member answers, and for each cluster, answers are ranked by their individual scores.</li></ol>



<p>The authors experiment Mulder on TREC-8 dataset and compare it with Google and AskJeeves. The results show that Mulder has the highest recall when user effort is fixed. And when recall is fixed, Mulder has the least user effort. The ablation study shows that the answer extraction is the most important component.</p>
<div id="jp-post-flair" class="sharedaddy sd-like-enabled sd-sharing-enabled"><div class="sharedaddy sd-sharing-enabled"><div class="robots-nocontent sd-block sd-social sd-social-icon-text sd-sharing"><h3 class="sd-title">共享此文章：</h3><div class="sd-content"><ul><li class="share-twitter"><a rel="nofollow noopener noreferrer" data-shared="sharing-twitter-537" class="share-twitter sd-button share-icon" href="https://zhiyuchen.com/2020/04/27/paper-reading-scaling-question-answering-to-the-web/?share=twitter" target="_blank" aria-labelledby="sharing-twitter-537">
				<span id="sharing-twitter-537" hidden="">Click to share on X (Opens in new window)</span>
				<span>X</span>
			</a></li><li class="share-facebook"><a rel="nofollow noopener noreferrer" data-shared="sharing-facebook-537" class="share-facebook sd-button share-icon" href="https://zhiyuchen.com/2020/04/27/paper-reading-scaling-question-answering-to-the-web/?share=facebook" target="_blank" aria-labelledby="sharing-facebook-537">
				<span id="sharing-facebook-537" hidden="">Click to share on Facebook (Opens in new window)</span>
				<span>Facebook</span>
			</a></li><li class="share-end"></li></ul></div></div></div><div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" id="like-post-wrapper-122293174-537-6937707c54eb0" data-src="//widgets.wp.com/likes/index.html?ver=20251209#blog_id=122293174&amp;post_id=537&amp;origin=zhiyusite.wordpress.com&amp;obj_id=122293174-537-6937707c54eb0&amp;domain=zhiyuchen.com" data-name="like-post-frame-122293174-537-6937707c54eb0" data-title="Like or Reblog"><div class="likes-widget-placeholder post-likes-widget-placeholder" style="height: 55px;"><span class="button"><span>Like</span></span> <span class="loading">Loading...</span></div><span class="sd-text-color"></span><a class="sd-link-color"></a></div>
<div id="jp-relatedposts" class="jp-relatedposts">
	<h3 class="jp-relatedposts-headline"><em>Related</em></h3>
</div></div>			
