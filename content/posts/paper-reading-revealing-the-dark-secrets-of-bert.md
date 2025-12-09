---
title: Zhiyu's Blog
date: '2019-12-23T03:25:17.000Z'
tags:
  - BERT
  - Paper Reading
  - BERT
  - Explain
---

		<p>The paper tries to answer the following questions:</p>
<ol>
<li><span class="fontstyle0">What are the common<strong> attention patterns</strong>, how do they change during fine-tuning, and how does that impact the performance on a given task?&nbsp;</span></li>
<li><span class="fontstyle0">What <strong>linguistic knowledge is encoded in self-attention weights</strong> of the fine-tuned models and what portion of it comes from the pre-trained BERT?</span></li>
<li><span class="fontstyle0">How different are the self-attention patterns of different heads, and how important are they for a given task?</span></li>
</ol>
<p>Here is link to the code:&nbsp;<a href="https://github.com/text-machine-lab/dark-secrets-of-BERT">https://github.com/text-machine-lab/dark-secrets-of-BERT</a></p>
<h3><span class="fontstyle0">1. BERT’s self-attention patterns</span></h3>
<p>After manual inspection of self-attention weights for both basic and fine-tuned BERT models, it shows that there are 5 frequently occurring patterns:</p>
<ol>
<li><strong> <span class="fontstyle0">Vertical</span></strong><span class="fontstyle1">: mainly corresponds to attention to special BERT tokens </span><span class="fontstyle0">[CLS] </span><span class="fontstyle1">and </span><span class="fontstyle0">[SEP]</span></li>
<li><strong><span class="fontstyle0">Diagonal</span></strong><span class="fontstyle1">: formed by the attention to the previous/following tokens</span></li>
<li><strong><span class="fontstyle0">Vertical+Diagonal</span></strong><span class="fontstyle1">: a mix of the previous two types</span></li>
<li><strong><span class="fontstyle0">Block</span></strong><span class="fontstyle1">: intra-sentence attention for the tasks with two distinct sentences (such as, for example, RTE or MRPC)</span></li>
<li><strong><span class="fontstyle0">Heterogeneous</span></strong><span class="fontstyle1">: highly variable depending on the specific input and cannot be characterized by a distinct structure.</span> (This one is assumed to be more likely to capture interpretable linguistic features.)<img data-attachment-id="139" data-permalink="https://zhiyuchen.com/2019/12/22/paper-reading-revealing-the-dark-secrets-of-bert/attention-type/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2019/12/attention-type.png" data-orig-size="1320,440" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="attention type" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2019/12/attention-type.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2019/12/attention-type.png?w=720" class="alignnone size-full wp-image-139" src="https://zhiyuchen.com/wp-content/uploads/2019/12/attention-type.png" alt="attention type" width="1320" height="440" srcset="https://zhiyuchen.com/wp-content/uploads/2019/12/attention-type.png 1320w, https://zhiyuchen.com/wp-content/uploads/2019/12/attention-type.png?w=150&amp;h=50 150w, https://zhiyuchen.com/wp-content/uploads/2019/12/attention-type.png?w=300&amp;h=100 300w, https://zhiyuchen.com/wp-content/uploads/2019/12/attention-type.png?w=768&amp;h=256 768w, https://zhiyuchen.com/wp-content/uploads/2019/12/attention-type.png?w=1024&amp;h=341 1024w" sizes="(max-width: 1320px) 100vw, 1320px"></li>
</ol>
<p>400 self-attention weights are manually annotated and it turns out that 30% belongs to “Vertical” class. Then a CNN classifier is trained to estimate the proportion of attention types across different tasks(GLUE benchmark). The results are shown in Figure 2. It seems that s <span class="fontstyle0">elf-attention map types are consistently repeated across different heads and tasks.</span></p>
<p><img data-attachment-id="140" data-permalink="https://zhiyuchen.com/2019/12/22/paper-reading-revealing-the-dark-secrets-of-bert/att_glue/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2019/12/att_glue.png" data-orig-size="845,500" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="att_glue" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2019/12/att_glue.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2019/12/att_glue.png?w=720" class="  wp-image-140 aligncenter" src="https://zhiyuchen.com/wp-content/uploads/2019/12/att_glue.png" alt="att_glue" width="395" height="234" srcset="https://zhiyuchen.com/wp-content/uploads/2019/12/att_glue.png?w=395&amp;h=234 395w, https://zhiyuchen.com/wp-content/uploads/2019/12/att_glue.png?w=790&amp;h=467 790w, https://zhiyuchen.com/wp-content/uploads/2019/12/att_glue.png?w=150&amp;h=89 150w, https://zhiyuchen.com/wp-content/uploads/2019/12/att_glue.png?w=300&amp;h=178 300w, https://zhiyuchen.com/wp-content/uploads/2019/12/att_glue.png?w=768&amp;h=454 768w" sizes="(max-width: 395px) 100vw, 395px"></p>
<p></p>


<h3 class="wp-block-heading">2. Relation-specific heads in BERT</h3>



<p>The authors also tested whether the BERT self-atttention can capture different syntactic and semantic relations.  Specifically, they examine the  semantic role relations in <strong>FrameNet</strong>  and whether the links between two units(frame-evoking lexical units and core frame elements) produce higher attention weights in certain specific heads.</p>



<p>For each link/token pairs, they average the maximum absolute attention weight of the corresponding links of all heads.  Figure 3 shows  the averaged attention scores over all examples . It suggests that 2 out of 144 heads tend to attend to  token pairs with certain relations.  An example the attention patterns from two heads is also shown in Figure 3.<br></p>



<div class="wp-block-image"><figure class="aligncenter size-large is-resized"><img data-attachment-id="145" data-permalink="https://zhiyuchen.com/f3/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2019/12/f3.png" data-orig-size="1321,657" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="f3" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2019/12/f3.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2019/12/f3.png?w=720" src="https://zhiyuchen.com/wp-content/uploads/2019/12/f3.png?w=1024" alt="" class="wp-image-145" width="608" height="301" srcset="https://zhiyuchen.com/wp-content/uploads/2019/12/f3.png?w=1024 1024w, https://zhiyuchen.com/wp-content/uploads/2019/12/f3.png?w=608 608w, https://zhiyuchen.com/wp-content/uploads/2019/12/f3.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2019/12/f3.png?w=300 300w, https://zhiyuchen.com/wp-content/uploads/2019/12/f3.png?w=768 768w" sizes="(max-width: 608px) 100vw, 608px"></figure></div>



<h3 class="wp-block-heading">3. Change in self-attention patterns after fine-tuning<br></h3>



<p>This section studies how attention per head changes on average   due to fine-tuning  for each of GLUE tasks .  To do this, they calculate the cosine similarity between  pre-trained and fine-tuned BERT’s flattened arrays of attention weights. The derived similarities are averaged over all development sets. </p>



<p>From Figure 5 we can see that fine-tuning has the largest impact on the final 2 layers, which inditates that the last two layers encode task-specific features. The lower layers may capture more fundamental and low-level features.<br></p>



<div class="wp-block-image"><figure class="aligncenter size-large is-resized"><img data-attachment-id="149" data-permalink="https://zhiyuchen.com/f5/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2019/12/f5.png" data-orig-size="1321,391" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="f5" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2019/12/f5.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2019/12/f5.png?w=720" loading="lazy" src="https://zhiyuchen.com/wp-content/uploads/2019/12/f5.png?w=1024" alt="" class="wp-image-149" width="577" height="170" srcset="https://zhiyuchen.com/wp-content/uploads/2019/12/f5.png?w=1024 1024w, https://zhiyuchen.com/wp-content/uploads/2019/12/f5.png?w=577 577w, https://zhiyuchen.com/wp-content/uploads/2019/12/f5.png?w=1154 1154w, https://zhiyuchen.com/wp-content/uploads/2019/12/f5.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2019/12/f5.png?w=300 300w, https://zhiyuchen.com/wp-content/uploads/2019/12/f5.png?w=768 768w" sizes="(max-width: 577px) 100vw, 577px"></figure></div>



<h3 class="wp-block-heading">4. Attention to linguistic features<br></h3>



<p>In this experiment, they investigate whether slef-attention patterns that emphasize specific linguistic features are created by fine-tuning BERT.  Therefore, they check whether there are vertical stripe patterns corresponding to linguistically interpretable features, and to what extent such features are relevant for solving a given task.</p>



<p>Specifically,  attention to nouns, verbs, pronouns, subjects, objects, and<br>negation words and special BERT tokens are of intetests.  For every head, the sum of attention weights assigned to the token of interest is calculated. The sum is normalized by sequence length. If there are multiple tokens of the same type (e.g. several nouns ), the maximum value is taken.<br></p>



<p>The results show that vertical attention pattern is associated predominantly with attention to [CLS] and [SEP]. Though there are heads that pay increased attention to nouns, objects of predicates and negation. compared with the pre-trained BERT, the weights are negligible compared to [CLS] and [SEP].   Figure 6 shows the attention weights to [SEP] and [CLS] that are averaged over input lengths and per-task dataset examples .</p>



<figure class="wp-block-image size-large"><img data-attachment-id="166" data-permalink="https://zhiyuchen.com/f6/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2019/12/f6.png" data-orig-size="1228,508" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="f6" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2019/12/f6.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2019/12/f6.png?w=720" loading="lazy" width="1024" height="423" src="https://zhiyuchen.com/wp-content/uploads/2019/12/f6.png?w=1024" alt="" class="wp-image-166" srcset="https://zhiyuchen.com/wp-content/uploads/2019/12/f6.png?w=1024 1024w, https://zhiyuchen.com/wp-content/uploads/2019/12/f6.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2019/12/f6.png?w=300 300w, https://zhiyuchen.com/wp-content/uploads/2019/12/f6.png?w=768 768w, https://zhiyuchen.com/wp-content/uploads/2019/12/f6.png 1228w" sizes="(max-width: 1024px) 100vw, 1024px"></figure>



<p>They believe that the stripped attention maps come from pre-trained tasks rather than task-specific fine-tuning.</p>



<h3 class="wp-block-heading">5. Token-to-token attention</h3>



<p>This experiment is complemenraty to previous one.  Specifically, tokens of interest(e.g. those have verb-subject relation,noun-pronoun relation)  are checked whether they get higher attention weights while [CLS] in the last layer is processed, since this [CLS] is used for final prediction. The features in Section 4 are used.</p>



<p><br>The found that potential head candidates that prioritize noun-pronoun and verb-subject links coincide with diagonally structured attention maps. One possible reasons is that some tokens with relations are close to each other under the English syntax. Figure 7 shows the attention distribution for [CLS] in the last layer.  For majority tasks, [SEP] gets attended the most. They also mention that for some tasks, punctuations get attended similar to [SEP].<br><br></p>



<figure class="wp-block-image size-large"><img data-attachment-id="170" data-permalink="https://zhiyuchen.com/f7/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2019/12/f7.png" data-orig-size="1303,474" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="f7" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2019/12/f7.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2019/12/f7.png?w=720" loading="lazy" width="1024" height="372" src="https://zhiyuchen.com/wp-content/uploads/2019/12/f7.png?w=1024" alt="" class="wp-image-170" srcset="https://zhiyuchen.com/wp-content/uploads/2019/12/f7.png?w=1024 1024w, https://zhiyuchen.com/wp-content/uploads/2019/12/f7.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2019/12/f7.png?w=300 300w, https://zhiyuchen.com/wp-content/uploads/2019/12/f7.png?w=768 768w, https://zhiyuchen.com/wp-content/uploads/2019/12/f7.png 1303w" sizes="(max-width: 1024px) 100vw, 1024px"></figure>



<h3 class="wp-block-heading">6. Disabling self-attention heads</h3>



<p>Disabling a head is defined as modifying the attention values of the head to be constant <img src="https://s0.wp.com/latex.php?latex=a%3D%5Cfrac%7B1%7D%7BL%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=a%3D%5Cfrac%7B1%7D%7BL%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=a%3D%5Cfrac%7B1%7D%7BL%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="a=\frac{1}{L}" class="latex"> for every token in the input, where L is the length of input. So that every token has the same attention. </p>



<p>Disabling some heads hurt the performance. However, disabling some heads or disabling a whole layer can improve the results.  Figure 8 shows the results of disabling a single head and Figure 9 shows the results of disabling a whole layer.</p>



<figure class="wp-block-image size-large"><img data-attachment-id="175" data-permalink="https://zhiyuchen.com/f8/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2019/12/f8.png" data-orig-size="1217,362" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="f8" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2019/12/f8.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2019/12/f8.png?w=720" loading="lazy" width="1024" height="304" src="https://zhiyuchen.com/wp-content/uploads/2019/12/f8.png?w=1024" alt="" class="wp-image-175" srcset="https://zhiyuchen.com/wp-content/uploads/2019/12/f8.png?w=1024 1024w, https://zhiyuchen.com/wp-content/uploads/2019/12/f8.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2019/12/f8.png?w=300 300w, https://zhiyuchen.com/wp-content/uploads/2019/12/f8.png?w=768 768w, https://zhiyuchen.com/wp-content/uploads/2019/12/f8.png 1217w" sizes="(max-width: 1024px) 100vw, 1024px"></figure>



<figure class="wp-block-image size-large"><img data-attachment-id="176" data-permalink="https://zhiyuchen.com/f9/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2019/12/f9.png" data-orig-size="1238,499" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="f9" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2019/12/f9.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2019/12/f9.png?w=720" loading="lazy" width="1024" height="412" src="https://zhiyuchen.com/wp-content/uploads/2019/12/f9.png?w=1024" alt="" class="wp-image-176" srcset="https://zhiyuchen.com/wp-content/uploads/2019/12/f9.png?w=1024 1024w, https://zhiyuchen.com/wp-content/uploads/2019/12/f9.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2019/12/f9.png?w=300 300w, https://zhiyuchen.com/wp-content/uploads/2019/12/f9.png?w=768 768w, https://zhiyuchen.com/wp-content/uploads/2019/12/f9.png 1238w" sizes="(max-width: 1024px) 100vw, 1024px"></figure>



<h3 class="wp-block-heading">Comments</h3>



<ul class="wp-block-list"><li>For section 3(section 4.3 in the original paper), it is possible that the phenomena in Figure 5  results from the optimization properties. During the training, will the top layers always obtain larger gradients ?  Besides, there is a optimization strategy in <a href="https://arxiv.org/pdf/1801.06146.pdf">https://arxiv.org/pdf/1801.06146.pdf</a> called ” <strong>discriminative fine-tuning</strong>“, that top layers have larger learning rate. If this strategy is used, it is not surprising that top-layers changes more after fine-tuning.</li><li> I cast a doubt on  section 4 (section 4.4 in the original paper), since the authors don’t show the actual results that compare the pre-trained BERT and fine-tuned BERT.)</li></ul>



<p></p>
<div id="jp-post-flair" class="sharedaddy sd-like-enabled sd-sharing-enabled"><div class="sharedaddy sd-sharing-enabled"><div class="robots-nocontent sd-block sd-social sd-social-icon-text sd-sharing"><h3 class="sd-title">共享此文章：</h3><div class="sd-content"><ul><li class="share-twitter"><a rel="nofollow noopener noreferrer" data-shared="sharing-twitter-132" class="share-twitter sd-button share-icon" href="https://zhiyuchen.com/2019/12/22/paper-reading-revealing-the-dark-secrets-of-bert/?share=twitter" target="_blank" aria-labelledby="sharing-twitter-132">
				<span id="sharing-twitter-132" hidden="">Click to share on X (Opens in new window)</span>
				<span>X</span>
			</a></li><li class="share-facebook"><a rel="nofollow noopener noreferrer" data-shared="sharing-facebook-132" class="share-facebook sd-button share-icon" href="https://zhiyuchen.com/2019/12/22/paper-reading-revealing-the-dark-secrets-of-bert/?share=facebook" target="_blank" aria-labelledby="sharing-facebook-132">
				<span id="sharing-facebook-132" hidden="">Click to share on Facebook (Opens in new window)</span>
				<span>Facebook</span>
			</a></li><li class="share-end"></li></ul></div></div></div><div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" id="like-post-wrapper-122293174-132-693771de3d66b" data-src="//widgets.wp.com/likes/index.html?ver=20251209#blog_id=122293174&amp;post_id=132&amp;origin=zhiyusite.wordpress.com&amp;obj_id=122293174-132-693771de3d66b&amp;domain=zhiyuchen.com" data-name="like-post-frame-122293174-132-693771de3d66b" data-title="Like or Reblog"><div class="likes-widget-placeholder post-likes-widget-placeholder" style="height: 55px;"><span class="button"><span>Like</span></span> <span class="loading">Loading...</span></div><span class="sd-text-color"></span><a class="sd-link-color"></a></div>
<div id="jp-relatedposts" class="jp-relatedposts">
	<h3 class="jp-relatedposts-headline"><em>Related</em></h3>
</div></div>			
