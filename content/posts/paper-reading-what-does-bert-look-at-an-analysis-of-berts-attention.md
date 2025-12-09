---
title: Zhiyu's Blog
date: '2020-01-05T22:54:13.000Z'
tags:
  - BERT
  - Paper Reading
  - BERT
  - Explain
---

		
<p>code of this paper: <a rel="noreferrer noopener" aria-label="link (opens in a new tab)" href="https://github.com/clarkkev/attention-analysis" target="_blank">link</a></p>



<h3 class="wp-block-heading">High-level Summary</h3>



<p>This paper studies the attention maps of the pre-trained BERT-base model.  More specically, it :</p>



<ul class="wp-block-list"><li>explore generally how BERT’s attention heads behave.<ul><li>eg. attending to fixed positional offsets.</li><li>eg. attending broadly over the whole sentence.</li><li>a large amount of attention attends to [SEP].</li><li>attention heads in the same layer behave similarly.</li></ul></li><li>probe each attention head for linguistic phenomena.<ul><li>given a word as input, output the  most-attended-to other word. Does the word-pair correspond to any syntactic relation ?<ul><li>particular heads correspond remarkably well to particular relations (direct objects of verbs, determiners of nouns, objects of prepositions, and objects of possessive pronouns with &gt;75% accuracy).</li></ul></li><li>The same method can be applied to coreference resolution. It also performs well.</li></ul></li></ul>



<h3 class="wp-block-heading">1. Surface-Level Patterns in Attention</h3>



<p>Attentin maps analyzed in this section are based over 1000 random Wikipedia segments. Some example attention maps are shown in Figure 1.</p>



<figure class="wp-block-image size-large"><img data-attachment-id="229" data-permalink="https://zhiyuchen.com/f1-2/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2020/01/f1.png" data-orig-size="1220,554" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="f1" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2020/01/f1.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2020/01/f1.png?w=720" width="1024" height="464" src="https://zhiyuchen.com/wp-content/uploads/2020/01/f1.png?w=1024" alt="" class="wp-image-229" srcset="https://zhiyuchen.com/wp-content/uploads/2020/01/f1.png?w=1024 1024w, https://zhiyuchen.com/wp-content/uploads/2020/01/f1.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2020/01/f1.png?w=300 300w, https://zhiyuchen.com/wp-content/uploads/2020/01/f1.png?w=768 768w, https://zhiyuchen.com/wp-content/uploads/2020/01/f1.png 1220w" sizes="(max-width: 1024px) 100vw, 1024px"></figure>



<h4 class="wp-block-heading">1.1 Relative Position</h4>



<ul class="wp-block-list"><li>most heads put<strong> little attention</strong> on the <strong>current token</strong>.</li><li>there are heads that specialize to<strong> attending heavily on the next or previous token, </strong>especially in earlier layers of the network.</li></ul>



<h4 class="wp-block-heading">1.2 Attending to Separator Tokens</h4>



<p>In Figure 2 and Figure 3,  each point corresponds to the average attention a  head puts toward a token type. </p>



<figure class="wp-block-image size-large"><img data-attachment-id="231" data-permalink="https://zhiyuchen.com/f2/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2020/01/f2.png" data-orig-size="670,426" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="f2" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2020/01/f2.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2020/01/f2.png?w=670" width="670" height="426" src="https://zhiyuchen.com/wp-content/uploads/2020/01/f2.png?w=670" alt="" class="wp-image-231" srcset="https://zhiyuchen.com/wp-content/uploads/2020/01/f2.png 670w, https://zhiyuchen.com/wp-content/uploads/2020/01/f2.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2020/01/f2.png?w=300 300w" sizes="(max-width: 670px) 100vw, 670px"><figcaption>Figure 2</figcaption></figure>



<p>Figure 2 shows that  </p>



<ul class="wp-block-list"><li>Heads often attend to “special” tokens.</li><li>Early heads attend to [CLS].</li><li>Middle heads attend to [SEP].</li><li>Deep heads attend to periods and commas.</li></ul>



<p>One possible reasons that head attend a lot to “special” tokens is that<strong> every input has [SEP] and [CLS].  Also, punctuations commonly appear. </strong></p>



<p>Another explaination is that [SEP] aggregates segment-level information which can then be read by other heads.   In this case, One would expect attention heads processing [SEP] to attend broadly over the whole segment.They also cast doubt on it. Figure 3 shows that they entirely attend to themselves and the other  [SEP] token.</p>



<figure class="wp-block-image size-large"><img data-attachment-id="233" data-permalink="https://zhiyuchen.com/f3-2/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2020/01/f3.png" data-orig-size="702,395" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="f3" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2020/01/f3.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2020/01/f3.png?w=702" width="702" height="395" src="https://zhiyuchen.com/wp-content/uploads/2020/01/f3.png?w=702" alt="" class="wp-image-233" srcset="https://zhiyuchen.com/wp-content/uploads/2020/01/f3.png 702w, https://zhiyuchen.com/wp-content/uploads/2020/01/f3.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2020/01/f3.png?w=300 300w" sizes="(max-width: 702px) 100vw, 702px"><figcaption>Figure 3: heads attend to [SEP] tokens  even more when the current token is [SEP] itself.</figcaption></figure>



<p>Examples in Section 2 indicate that attention over special tokens might be <strong>used as “no-op” when the attention head’s function is not application.</strong> An example is shown in Figure 4.  Head 8-10 may have the function that direct objects attend to their verbs. So non-nouns mostly attend to [SEP].</p>



<div class="wp-block-image"><figure class="aligncenter size-large is-resized"><img data-attachment-id="235" data-permalink="https://zhiyuchen.com/f4/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2020/01/f4.png" data-orig-size="565,534" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="f4" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2020/01/f4.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2020/01/f4.png?w=565" loading="lazy" src="https://zhiyuchen.com/wp-content/uploads/2020/01/f4.png?w=565" alt="" class="wp-image-235" width="393" height="371" srcset="https://zhiyuchen.com/wp-content/uploads/2020/01/f4.png?w=393 393w, https://zhiyuchen.com/wp-content/uploads/2020/01/f4.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2020/01/f4.png?w=300 300w, https://zhiyuchen.com/wp-content/uploads/2020/01/f4.png 565w" sizes="(max-width: 393px) 100vw, 393px"><figcaption>Figure 4</figcaption></figure></div>



<p>Gradient-based measures of feature importance is used to test the hypothesis.  Intuitively, they measure how much changing the attention to a token will change BERT’s outputs. Results are shown in Figure 5. Starting from layer 5, the gradients of attention to [SEP] become very small, indicating changing the attentions to it does not change BERT’s outputs too much.</p>



<div class="wp-block-image"><figure class="aligncenter size-large is-resized"><img data-attachment-id="236" data-permalink="https://zhiyuchen.com/f5-2/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2020/01/f5.png" data-orig-size="679,468" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="f5" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2020/01/f5.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2020/01/f5.png?w=679" loading="lazy" src="https://zhiyuchen.com/wp-content/uploads/2020/01/f5.png?w=679" alt="" class="wp-image-236" width="329" height="226" srcset="https://zhiyuchen.com/wp-content/uploads/2020/01/f5.png?w=329 329w, https://zhiyuchen.com/wp-content/uploads/2020/01/f5.png?w=658 658w, https://zhiyuchen.com/wp-content/uploads/2020/01/f5.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2020/01/f5.png?w=300 300w" sizes="(max-width: 329px) 100vw, 329px"><figcaption>Figure 5</figcaption></figure></div>



<h3 class="wp-block-heading">1.3  Focused vs Broad Attention</h3>



<p>Average entropy of each head’s attention distribution is shown in Figure 6.</p>



<p>Attentions at low layers are broad with high entropy, and the output of those heads is roughly a bag-of-vectors of the sentence. </p>



<p>Entropies for all heads from only the [CLS] token are also calculated. The results are close to Figure 6. And [CLS] from the last layer has a high entropy which indicates broad attention.</p>



<div class="wp-block-image"><figure class="aligncenter size-large is-resized"><img data-attachment-id="240" data-permalink="https://zhiyuchen.com/image/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2020/01/image.png" data-orig-size="700,413" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="image" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2020/01/image.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2020/01/image.png?w=700" loading="lazy" src="https://zhiyuchen.com/wp-content/uploads/2020/01/image.png?w=700" alt="" class="wp-image-240" width="337" height="199" srcset="https://zhiyuchen.com/wp-content/uploads/2020/01/image.png?w=337 337w, https://zhiyuchen.com/wp-content/uploads/2020/01/image.png?w=674 674w, https://zhiyuchen.com/wp-content/uploads/2020/01/image.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2020/01/image.png?w=300 300w" sizes="(max-width: 337px) 100vw, 337px"><figcaption>Figure 6</figcaption></figure></div>



<h3 class="wp-block-heading">2. Probing Individual Attention Heads</h3>



<p>I skip  writing this part since the methods and results in this section are similar to  the paper<a rel="noreferrer noopener" aria-label=" &quot;Do Attention Heads in BERT Track Syntactic&nbsp;Dependencies?&quot; (opens in a new tab)" href="https://zhiyuchen.com/2019/12/19/paper-reading-do-attention-heads-in-bert-track-syntactic-dependencies/" target="_blank"> “Do Attention Heads in BERT Track Syntactic&nbsp;Dependencies?”</a>. The different part is how to preprocess the multiple word pieces correspond to a single word. </p>



<p>For dependency syntax,  certain heads specialize to specific dependency relations with high accuracy.</p>



<p>For corefence resolution,  one head achieves decent performance, particularly good with nominal mentions.</p>



<div class="wp-block-image"><figure class="aligncenter size-large is-resized"><img data-attachment-id="244" data-permalink="https://zhiyuchen.com/image-1/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2020/01/image-1.png" data-orig-size="493,437" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="image-1" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2020/01/image-1.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2020/01/image-1.png?w=493" loading="lazy" src="https://zhiyuchen.com/wp-content/uploads/2020/01/image-1.png?w=493" alt="" class="wp-image-244" width="290" height="257" srcset="https://zhiyuchen.com/wp-content/uploads/2020/01/image-1.png?w=290 290w, https://zhiyuchen.com/wp-content/uploads/2020/01/image-1.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2020/01/image-1.png?w=300 300w, https://zhiyuchen.com/wp-content/uploads/2020/01/image-1.png 493w" sizes="(max-width: 290px) 100vw, 290px"><figcaption>Figure 7</figcaption></figure></div>



<h3 class="wp-block-heading">3. Probing Attention Head Combinations</h3>



<p>This section proposes attention-based probing classifiers and applies it to dependency parsing. Given an input word, the classifier produces a probability distribution over the words  in the sentence indicating how likely each other word is to be syntactivc head of the current one.</p>



<ul class="wp-block-list"><li><strong>Attention-Only Probe</strong>: simple linear combination of attention weights from all heads(two directions of attention). Only combination weights are trained.</li></ul>



<div class="wp-block-image"><figure class="aligncenter size-large is-resized"><img data-attachment-id="247" data-permalink="https://zhiyuchen.com/image-2/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2020/01/image-2.png" data-orig-size="485,120" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="image-2" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2020/01/image-2.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2020/01/image-2.png?w=485" loading="lazy" src="https://zhiyuchen.com/wp-content/uploads/2020/01/image-2.png?w=485" alt="" class="wp-image-247" width="363" height="90" srcset="https://zhiyuchen.com/wp-content/uploads/2020/01/image-2.png?w=363 363w, https://zhiyuchen.com/wp-content/uploads/2020/01/image-2.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2020/01/image-2.png?w=300 300w, https://zhiyuchen.com/wp-content/uploads/2020/01/image-2.png 485w" sizes="(max-width: 363px) 100vw, 363px"></figure></div>



<ul class="wp-block-list"><li><strong>Attention-and-Words Probe</strong>:  sets the weights of the attention heads based on the GloVe and assigns the probability of word i being word j’s head as </li></ul>



<div class="wp-block-image"><figure class="aligncenter size-large is-resized"><img data-attachment-id="248" data-permalink="https://zhiyuchen.com/image-3/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2020/01/image-3.png" data-orig-size="593,204" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="image-3" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2020/01/image-3.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2020/01/image-3.png?w=593" loading="lazy" src="https://zhiyuchen.com/wp-content/uploads/2020/01/image-3.png?w=593" alt="" class="wp-image-248" width="375" height="128" srcset="https://zhiyuchen.com/wp-content/uploads/2020/01/image-3.png?w=375 375w, https://zhiyuchen.com/wp-content/uploads/2020/01/image-3.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2020/01/image-3.png?w=300 300w, https://zhiyuchen.com/wp-content/uploads/2020/01/image-3.png 593w" sizes="(max-width: 375px) 100vw, 375px"></figure></div>



<p class="has-text-align-left">v denotes GoVe embeddings, ⊕ denotes concatenation. Only W and U are trained.</p>



<p>Results are shown in Table 1. Attn + Glove achieves a decent results. It means that  BERT learns some aspects syntax purely as a by-product of self-supervised training.</p>



<p></p>



<div class="wp-block-image"><figure class="aligncenter size-large is-resized"><img data-attachment-id="250" data-permalink="https://zhiyuchen.com/image-4/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2020/01/image-4.png" data-orig-size="531,278" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="image-4" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2020/01/image-4.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2020/01/image-4.png?w=531" loading="lazy" src="https://zhiyuchen.com/wp-content/uploads/2020/01/image-4.png?w=531" alt="" class="wp-image-250" width="391" height="205" srcset="https://zhiyuchen.com/wp-content/uploads/2020/01/image-4.png?w=391 391w, https://zhiyuchen.com/wp-content/uploads/2020/01/image-4.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2020/01/image-4.png?w=300 300w, https://zhiyuchen.com/wp-content/uploads/2020/01/image-4.png 531w" sizes="(max-width: 391px) 100vw, 391px"><figcaption>Table 1</figcaption></figure></div>



<h3 class="wp-block-heading">4. Clustering Attention Heads</h3>



<p>The distance between two heads is calculated by :</p>



<div class="wp-block-image"><figure class="aligncenter size-large is-resized"><img data-attachment-id="252" data-permalink="https://zhiyuchen.com/image-5/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2020/01/image-5.png" data-orig-size="446,82" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="image-5" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2020/01/image-5.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2020/01/image-5.png?w=446" loading="lazy" src="https://zhiyuchen.com/wp-content/uploads/2020/01/image-5.png?w=446" alt="" class="wp-image-252" width="378" height="70" srcset="https://zhiyuchen.com/wp-content/uploads/2020/01/image-5.png?w=378 378w, https://zhiyuchen.com/wp-content/uploads/2020/01/image-5.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2020/01/image-5.png?w=300 300w, https://zhiyuchen.com/wp-content/uploads/2020/01/image-5.png 446w" sizes="(max-width: 378px) 100vw, 378px"></figure></div>



<p>JS is the Jensen-Shannon Divergence between attention distributions.<br>With thsese distances, the heads are embed in 2-D space by applying multidimensional scaling. Results are shown in Figure 8.</p>



<div class="wp-block-image"><figure class="aligncenter size-large"><img data-attachment-id="254" data-permalink="https://zhiyuchen.com/image-6/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2020/01/image-6.png" data-orig-size="444,891" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="image-6" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2020/01/image-6.png?w=149" data-large-file="https://zhiyuchen.com/wp-content/uploads/2020/01/image-6.png?w=444" loading="lazy" width="444" height="891" src="https://zhiyuchen.com/wp-content/uploads/2020/01/image-6.png?w=444" alt="" class="wp-image-254" srcset="https://zhiyuchen.com/wp-content/uploads/2020/01/image-6.png 444w, https://zhiyuchen.com/wp-content/uploads/2020/01/image-6.png?w=75 75w, https://zhiyuchen.com/wp-content/uploads/2020/01/image-6.png?w=149 149w" sizes="(max-width: 444px) 100vw, 444px"><figcaption>Figure 8</figcaption></figure></div>



<p>We can observe that</p>



<ul class="wp-block-list"><li>There are several clusters of heads that behave similarly.</li><li>Heads within the same layer are often fairly close to each other, meaning that heads within the layer have similar attention distribution.</li></ul>
<div id="jp-post-flair" class="sharedaddy sd-like-enabled sd-sharing-enabled"><div class="sharedaddy sd-sharing-enabled"><div class="robots-nocontent sd-block sd-social sd-social-icon-text sd-sharing"><h3 class="sd-title">共享此文章：</h3><div class="sd-content"><ul><li class="share-twitter"><a rel="nofollow noopener noreferrer" data-shared="sharing-twitter-222" class="share-twitter sd-button share-icon" href="https://zhiyuchen.com/2020/01/05/paper-reading-what-does-bert-look-at-an-analysis-of-berts-attention/?share=twitter" target="_blank" aria-labelledby="sharing-twitter-222">
				<span id="sharing-twitter-222" hidden="">Click to share on X (Opens in new window)</span>
				<span>X</span>
			</a></li><li class="share-facebook"><a rel="nofollow noopener noreferrer" data-shared="sharing-facebook-222" class="share-facebook sd-button share-icon" href="https://zhiyuchen.com/2020/01/05/paper-reading-what-does-bert-look-at-an-analysis-of-berts-attention/?share=facebook" target="_blank" aria-labelledby="sharing-facebook-222">
				<span id="sharing-facebook-222" hidden="">Click to share on Facebook (Opens in new window)</span>
				<span>Facebook</span>
			</a></li><li class="share-end"></li></ul></div></div></div><div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" id="like-post-wrapper-122293174-222-693771dd90855" data-src="//widgets.wp.com/likes/index.html?ver=20251209#blog_id=122293174&amp;post_id=222&amp;origin=zhiyusite.wordpress.com&amp;obj_id=122293174-222-693771dd90855&amp;domain=zhiyuchen.com" data-name="like-post-frame-122293174-222-693771dd90855" data-title="Like or Reblog"><div class="likes-widget-placeholder post-likes-widget-placeholder" style="height: 55px;"><span class="button"><span>Like</span></span> <span class="loading">Loading...</span></div><span class="sd-text-color"></span><a class="sd-link-color"></a></div>
<div id="jp-relatedposts" class="jp-relatedposts">
	<h3 class="jp-relatedposts-headline"><em>Related</em></h3>
</div></div>			
