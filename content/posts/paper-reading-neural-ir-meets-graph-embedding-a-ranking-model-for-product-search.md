---
title: Zhiyu's Blog
date: '2020-02-22T23:10:55.000Z'
tags:
  - GNN
  - Information Retrieval
  - Paper Reading
  - IR
---

		
<p>This paper claims it is the first study on how to use the click-graph features in neural models for retrieval. The graph embedding techniques proposed in this paper can be plugged into other scenarios where graph-structure information is available(ensemble).</p>



<h2 class="wp-block-heading">1. Baseline</h2>



<p>First we describe the basic IR model for product search without proposed graph embedding techniques(baseline). As shown in Figure 1,  CNN is used to extract semantic query features <img src="https://s0.wp.com/latex.php?latex=v_q%5E%7Bsem%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=v_q%5E%7Bsem%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=v_q%5E%7Bsem%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="v_q^{sem}" class="latex"> and semantic product features <img src="https://s0.wp.com/latex.php?latex=v_p%7Bsem%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=v_p%7Bsem%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=v_p%7Bsem%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="v_p{sem}" class="latex"> from product descriptions. The product id embedding <img src="https://s0.wp.com/latex.php?latex=v_p&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=v_p&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=v_p&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="v_p" class="latex"> is concatenated with <img src="https://s0.wp.com/latex.php?latex=v_q%5E%7Bsem%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=v_q%5E%7Bsem%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=v_q%5E%7Bsem%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="v_q^{sem}" class="latex"> and <img src="https://s0.wp.com/latex.php?latex=v_p%7Bsem%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=v_p%7Bsem%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=v_p%7Bsem%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="v_p{sem}" class="latex">. Finally, an MLP is used to predict the relevance score. In fact, the structure is similar to <strong>C-DSSM</strong>.</p>



<div class="wp-block-image"><figure class="aligncenter size-large"><img data-attachment-id="464" data-permalink="https://zhiyuchen.com/image-1-2/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2020/02/image-1.png" data-orig-size="555,449" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="image-1" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2020/02/image-1.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2020/02/image-1.png?w=555" width="555" height="449" src="https://zhiyuchen.com/wp-content/uploads/2020/02/image-1.png?w=555" alt="" class="wp-image-464" srcset="https://zhiyuchen.com/wp-content/uploads/2020/02/image-1.png 555w, https://zhiyuchen.com/wp-content/uploads/2020/02/image-1.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2020/02/image-1.png?w=300 300w" sizes="(max-width: 555px) 100vw, 555px"><figcaption>Figure 1</figcaption></figure></div>



<h2 class="wp-block-heading">2. Graph Embedding-based Ranking Model  </h2>



<p>Assume we have a query graph <img src="https://s0.wp.com/latex.php?latex=G_%7Bquery%7D+%3D+%28Q%2C+E_Q%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=G_%7Bquery%7D+%3D+%28Q%2C+E_Q%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=G_%7Bquery%7D+%3D+%28Q%2C+E_Q%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="G_{query} = (Q, E_Q)" class="latex"> and a product graph <img src="https://s0.wp.com/latex.php?latex=G_%7Bproduct%7D+%3D+%28Q%2C+E_P%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=G_%7Bproduct%7D+%3D+%28Q%2C+E_P%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=G_%7Bproduct%7D+%3D+%28Q%2C+E_P%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="G_{product} = (Q, E_P)" class="latex">.  There could be different ways to construct such graphs(e.g. click-through data). For example, quries clicking the same product can be linked, products appearing in the same order can be linked as shown in Figure 2. Those graphs can prodivde additional information for retrieval tasks. </p>



<div class="wp-block-image"><figure class="aligncenter size-large"><img data-attachment-id="467" data-permalink="https://zhiyuchen.com/image-2-2/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2020/02/image-2.png" data-orig-size="469,595" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="image-2" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2020/02/image-2.png?w=236" data-large-file="https://zhiyuchen.com/wp-content/uploads/2020/02/image-2.png?w=469" width="469" height="595" src="https://zhiyuchen.com/wp-content/uploads/2020/02/image-2.png?w=469" alt="" class="wp-image-467" srcset="https://zhiyuchen.com/wp-content/uploads/2020/02/image-2.png 469w, https://zhiyuchen.com/wp-content/uploads/2020/02/image-2.png?w=118 118w, https://zhiyuchen.com/wp-content/uploads/2020/02/image-2.png?w=236 236w" sizes="(max-width: 469px) 100vw, 469px"><figcaption>Figure 2</figcaption></figure></div>



<p>The paper proposes to replace product id embeddings with product graph embeddings as shown in Figure 3.  They concatenate embeddings from DeepWalk with 1st order embeddings from LINE in their framework for graph embeddings.</p>



<div class="wp-block-image"><figure class="aligncenter size-large"><img data-attachment-id="468" data-permalink="https://zhiyuchen.com/image-3-2/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2020/02/image-3.png" data-orig-size="637,584" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="image-3" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2020/02/image-3.png?w=300" data-large-file="https://zhiyuchen.com/wp-content/uploads/2020/02/image-3.png?w=637" width="637" height="584" src="https://zhiyuchen.com/wp-content/uploads/2020/02/image-3.png?w=637" alt="" class="wp-image-468" srcset="https://zhiyuchen.com/wp-content/uploads/2020/02/image-3.png 637w, https://zhiyuchen.com/wp-content/uploads/2020/02/image-3.png?w=150 150w, https://zhiyuchen.com/wp-content/uploads/2020/02/image-3.png?w=300 300w" sizes="(max-width: 637px) 100vw, 637px"><figcaption>Figure 3</figcaption></figure></div>



<p>It is more challenging to use query graph embeddings considering there could be a lot of new queries not in the query graph in the training time. One way is to use a regression model(e.g. CNN or RNN) with query terms as input that “mimics” the query graph embeddings:</p>



<p class="has-text-align-center"><img src="https://s0.wp.com/latex.php?latex=argmin_f+%7C%7Cf%28t_1%5E%7B%28q%29%7D%2C...%2Ct_M%5E%7B%28q%29%7D%29-e_q%7C%7C%5E2&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=argmin_f+%7C%7Cf%28t_1%5E%7B%28q%29%7D%2C...%2Ct_M%5E%7B%28q%29%7D%29-e_q%7C%7C%5E2&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=argmin_f+%7C%7Cf%28t_1%5E%7B%28q%29%7D%2C...%2Ct_M%5E%7B%28q%29%7D%29-e_q%7C%7C%5E2&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="argmin_f ||f(t_1^{(q)},...,t_M^{(q)})-e_q||^2" class="latex"></p>



<p>and then use f to recreate query embeddings. However, this method can easily overfit. This paper propose to use an MLP to transform <img src="https://s0.wp.com/latex.php?latex=v_q%5E%7Bsem%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=v_q%5E%7Bsem%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=v_q%5E%7Bsem%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="v_q^{sem}" class="latex"> into the same vector space as <img src="https://s0.wp.com/latex.php?latex=e_q&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=e_q&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=e_q&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="e_q" class="latex"> and minimize the reconstruction error as shown in Figure 3:</p>



<p class="has-text-align-center"><img src="https://s0.wp.com/latex.php?latex=min.+%5Cmathcal%7BL%7D_re+%3D+%7C%7C%5Chat%7Be_q%7D+-+e_q%7C%7C%5E2&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=min.+%5Cmathcal%7BL%7D_re+%3D+%7C%7C%5Chat%7Be_q%7D+-+e_q%7C%7C%5E2&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=min.+%5Cmathcal%7BL%7D_re+%3D+%7C%7C%5Chat%7Be_q%7D+-+e_q%7C%7C%5E2&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="min. \mathcal{L}_re = ||\hat{e_q} - e_q||^2" class="latex"> </p>



<p class="has-text-align-center"><img src="https://s0.wp.com/latex.php?latex=st.+%5Chat%7Be_q%7D+%3D+MLP%28v_q%5E%7Bsem%7D%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=st.+%5Chat%7Be_q%7D+%3D+MLP%28v_q%5E%7Bsem%7D%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=st.+%5Chat%7Be_q%7D+%3D+MLP%28v_q%5E%7Bsem%7D%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="st. \hat{e_q} = MLP(v_q^{sem})" class="latex"></p>



<p>This approach can jointly optimize reconstruction error with final ranking loss. </p>



<h2 class="wp-block-heading">3. Training</h2>



<p>Given a query <img src="https://s0.wp.com/latex.php?latex=q&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=q&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=q&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="q" class="latex"> along with a positive product <img src="https://s0.wp.com/latex.php?latex=p_%7B%2B%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=p_%7B%2B%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=p_%7B%2B%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="p_{+}" class="latex"> and a negative product <img src="https://s0.wp.com/latex.php?latex=p_%7B-%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=p_%7B-%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=p_%7B-%7D&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="p_{-}" class="latex">, the loss is defined as :</p>



<p class="has-text-align-center"><img src="https://s0.wp.com/latex.php?latex=%5Cmathcal%7BL%7D_%7Brank%7D%28q%2Cp_%7B%2B%7D%2Cp_%7B-%7D%29+%3D+h%28score%28q%2Cp_%7B%2B%7D%29%2Cscore%28q%2Cp_%7B-%7D%29%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=%5Cmathcal%7BL%7D_%7Brank%7D%28q%2Cp_%7B%2B%7D%2Cp_%7B-%7D%29+%3D+h%28score%28q%2Cp_%7B%2B%7D%29%2Cscore%28q%2Cp_%7B-%7D%29%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=%5Cmathcal%7BL%7D_%7Brank%7D%28q%2Cp_%7B%2B%7D%2Cp_%7B-%7D%29+%3D+h%28score%28q%2Cp_%7B%2B%7D%29%2Cscore%28q%2Cp_%7B-%7D%29%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="\mathcal{L}_{rank}(q,p_{+},p_{-}) = h(score(q,p_{+}),score(q,p_{-}))" class="latex"></p>



<p>where $score$ is the relevance score from model proposed in previous section and h is the <strong>smoothed hinge loss</strong>. At the same time, the reconstruction error can be minimized. So the overall loss function is:</p>



<p class="has-text-align-center"><img src="https://s0.wp.com/latex.php?latex=%5Cmathcal%7BL%7D+%3D+%5Csum_%7Bq+%5Cin+Q%7D%5Csum_%7Bp_%7B%2B%7D%7D%5Csum_%7Bp_%7B-%7D%7D+%5Cmathcal%7BL%7D_%7Brank%7D%28q%2Cp_%7B%2B%7D%2Cp_%7B-%7D%29%2B+%5Calpha+%5Cdot+%5Csum_%7Bq+%5Cin+Q%7D+%5Cmathcal%7BL%7D_%7Bre%7D%28q%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002" srcset="https://s0.wp.com/latex.php?latex=%5Cmathcal%7BL%7D+%3D+%5Csum_%7Bq+%5Cin+Q%7D%5Csum_%7Bp_%7B%2B%7D%7D%5Csum_%7Bp_%7B-%7D%7D+%5Cmathcal%7BL%7D_%7Brank%7D%28q%2Cp_%7B%2B%7D%2Cp_%7B-%7D%29%2B+%5Calpha+%5Cdot+%5Csum_%7Bq+%5Cin+Q%7D+%5Cmathcal%7BL%7D_%7Bre%7D%28q%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002 1x, https://s0.wp.com/latex.php?latex=%5Cmathcal%7BL%7D+%3D+%5Csum_%7Bq+%5Cin+Q%7D%5Csum_%7Bp_%7B%2B%7D%7D%5Csum_%7Bp_%7B-%7D%7D+%5Cmathcal%7BL%7D_%7Brank%7D%28q%2Cp_%7B%2B%7D%2Cp_%7B-%7D%29%2B+%5Calpha+%5Cdot+%5Csum_%7Bq+%5Cin+Q%7D+%5Cmathcal%7BL%7D_%7Bre%7D%28q%29&amp;bg=ffffff&amp;fg=222222&amp;s=0&amp;c=20201002&amp;zoom=4.5 4x" alt="\mathcal{L} = \sum_{q \in Q}\sum_{p_{+}}\sum_{p_{-}} \mathcal{L}_{rank}(q,p_{+},p_{-})+ \alpha \dot \sum_{q \in Q} \mathcal{L}_{re}(q)" class="latex"></p>



<h2 class="wp-block-heading">4. Results</h2>



<p>Here I summarize some interesting results. First,  they find that the performance of baseline method starts to decline for long tail queries while the proposed method remains robust. Second, they also show the baseline tends to rank popular products than propose method.</p>



<div class="wp-block-image"><figure class="aligncenter size-large"><img data-attachment-id="479" data-permalink="https://zhiyuchen.com/image-5-2/" data-orig-file="https://zhiyuchen.com/wp-content/uploads/2020/02/image-5.png" data-orig-size="446,504" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="image-5" data-image-description="" data-image-caption="" data-medium-file="https://zhiyuchen.com/wp-content/uploads/2020/02/image-5.png?w=265" data-large-file="https://zhiyuchen.com/wp-content/uploads/2020/02/image-5.png?w=446" loading="lazy" width="446" height="504" src="https://zhiyuchen.com/wp-content/uploads/2020/02/image-5.png?w=446" alt="" class="wp-image-479" srcset="https://zhiyuchen.com/wp-content/uploads/2020/02/image-5.png 446w, https://zhiyuchen.com/wp-content/uploads/2020/02/image-5.png?w=133 133w, https://zhiyuchen.com/wp-content/uploads/2020/02/image-5.png?w=265 265w" sizes="(max-width: 446px) 100vw, 446px"><figcaption>Figure 4</figcaption></figure></div>



<p>They also show the proposed model can better capture transitivity  and discriminate among those decreasingly relevant query-product pairs (3-hop, 5-hop and so on relatively to totally random).</p>



<p></p>
<div id="jp-post-flair" class="sharedaddy sd-like-enabled sd-sharing-enabled"><div class="sharedaddy sd-sharing-enabled"><div class="robots-nocontent sd-block sd-social sd-social-icon-text sd-sharing"><h3 class="sd-title">共享此文章：</h3><div class="sd-content"><ul><li class="share-twitter"><a rel="nofollow noopener noreferrer" data-shared="sharing-twitter-461" class="share-twitter sd-button share-icon" href="https://zhiyuchen.com/2020/02/22/paper-reading-neural-ir-meets-graph-embedding-a-ranking-model-for-product-search/?share=twitter" target="_blank" aria-labelledby="sharing-twitter-461">
				<span id="sharing-twitter-461" hidden="">Click to share on X (Opens in new window)</span>
				<span>X</span>
			</a></li><li class="share-facebook"><a rel="nofollow noopener noreferrer" data-shared="sharing-facebook-461" class="share-facebook sd-button share-icon" href="https://zhiyuchen.com/2020/02/22/paper-reading-neural-ir-meets-graph-embedding-a-ranking-model-for-product-search/?share=facebook" target="_blank" aria-labelledby="sharing-facebook-461">
				<span id="sharing-facebook-461" hidden="">Click to share on Facebook (Opens in new window)</span>
				<span>Facebook</span>
			</a></li><li class="share-end"></li></ul></div></div></div><div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" id="like-post-wrapper-122293174-461-6937707d02d71" data-src="//widgets.wp.com/likes/index.html?ver=20251209#blog_id=122293174&amp;post_id=461&amp;origin=zhiyusite.wordpress.com&amp;obj_id=122293174-461-6937707d02d71&amp;domain=zhiyuchen.com" data-name="like-post-frame-122293174-461-6937707d02d71" data-title="Like or Reblog"><div class="likes-widget-placeholder post-likes-widget-placeholder" style="height: 55px;"><span class="button"><span>Like</span></span> <span class="loading">Loading...</span></div><span class="sd-text-color"></span><a class="sd-link-color"></a></div>
<div id="jp-relatedposts" class="jp-relatedposts">
	<h3 class="jp-relatedposts-headline"><em>Related</em></h3>
</div></div>			
