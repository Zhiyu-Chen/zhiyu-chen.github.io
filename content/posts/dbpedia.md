---
title: Zhiyu's Blog
date: '2017-04-27T05:17:16.000Z'
tags:
  - knowledge base
---

		<div class="article-entry">
<h3 id="Limits-of-DBPedia-service">Limits of DBPedia service</h3>
<p><a href="https://medium.com/openlink-software-blog/dbpedia-usage-report-a78b3802a1d3" target="_blank" rel="noopener">from usage report</a></p>
<ol>
<li>Connection limit of 50 parallel connections per IP address.</li>
<li>Rate limit of 100 requests per second per IP address, with an initial burst of 120 requests.</li>
</ol>
<p>Ideally, applications should be written to check the HTTP status code of each request, and in case of a 503 status code, perform a 1–2 second sleep before retrying the request.</p>
<h3 id="Online-Access">Online Access</h3>
<p><a href="http://wiki.dbpedia.org/OnlineAccess" target="_blank" rel="noopener">ref</a></p>
<p>We could use&nbsp;<a href="https://github.com/RDFLib/sparqlwrapper" target="_blank" rel="noopener">sparqlwrapper</a>&nbsp;to make requests:</p>
<pre><code>from SPARQLWrapper import SPARQLWrapper, JSON

sparql = SPARQLWrapper("http://dbpedia.org/sparql")
sparql.setQuery("""
    PREFIX owl: &lt;http://www.w3.org/2002/07/owl#&gt;
    PREFIX xsd: &lt;http://www.w3.org/2001/XMLSchema#&gt;
    PREFIX rdfs: &lt;http://www.w3.org/2000/01/rdf-schema#&gt;
    PREFIX rdf: &lt;http://www.w3.org/1999/02/22-rdf-syntax-ns#&gt;
    PREFIX foaf: &lt;http://xmlns.com/foaf/0.1/&gt;
    PREFIX dc: &lt;http://purl.org/dc/elements/1.1/&gt;
    PREFIX : &lt;http://dbpedia.org/resource/&gt;
    PREFIX dbpedia2: &lt;http://dbpedia.org/property/&gt;
    PREFIX dbpedia: &lt;http://dbpedia.org/&gt;
    PREFIX skos: &lt;http://www.w3.org/2004/02/skos/core#&gt;
    SELECT ?abstract    
    WHERE { &lt;http://dbpedia.org/resource/Asturias&gt; dbo:abstract ?abstract }
""")
sparql.setReturnFormat(JSON)
results = sparql.query().convert()
print results['results']['bindings'][3]['abstract']['value']
</code></pre>
<h3 id="SPARQL-Tutorial">SPARQL Tutorial</h3>
<ol>
<li><a href="https://www.w3.org/2009/Talks/0615-qbe/" target="_blank" rel="noopener">SPARQL By Example</a></li>
<li><a href="http://www.cambridgesemantics.com/semantic-university/sparql-by-example" target="_blank" rel="noopener">SPARQL By Example 2</a></li>
<li><a href="https://www.slideshare.net/m_ackermann/d-bpedia-tutorialdublin2015" target="_blank" rel="noopener">DBpedia Tutorial</a></li>
</ol>
</div>
<div class="article-info article-info-index">
<div class="article-tag tagcloud"></div>
<div class="page-modal wx-share js-wx-box">
<div class="wx-qrcode"></div>
</div>
<div class="mask js-mask"></div>
</div>
<div id="jp-post-flair" class="sharedaddy sd-like-enabled sd-sharing-enabled"><div class="sharedaddy sd-sharing-enabled"><div class="robots-nocontent sd-block sd-social sd-social-icon-text sd-sharing"><h3 class="sd-title">共享此文章：</h3><div class="sd-content"><ul><li class="share-twitter"><a rel="nofollow noopener noreferrer" data-shared="sharing-twitter-59" class="share-twitter sd-button share-icon" href="https://zhiyuchen.com/2017/04/27/dbpedia/?share=twitter" target="_blank" aria-labelledby="sharing-twitter-59">
				<span id="sharing-twitter-59" hidden="">Click to share on X (Opens in new window)</span>
				<span>X</span>
			</a></li><li class="share-facebook"><a rel="nofollow noopener noreferrer" data-shared="sharing-facebook-59" class="share-facebook sd-button share-icon" href="https://zhiyuchen.com/2017/04/27/dbpedia/?share=facebook" target="_blank" aria-labelledby="sharing-facebook-59">
				<span id="sharing-facebook-59" hidden="">Click to share on Facebook (Opens in new window)</span>
				<span>Facebook</span>
			</a></li><li class="share-end"></li></ul></div></div></div><div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" id="like-post-wrapper-122293174-59-693771df4195d" data-src="//widgets.wp.com/likes/index.html?ver=20251209#blog_id=122293174&amp;post_id=59&amp;origin=zhiyusite.wordpress.com&amp;obj_id=122293174-59-693771df4195d&amp;domain=zhiyuchen.com" data-name="like-post-frame-122293174-59-693771df4195d" data-title="Like or Reblog"><div class="likes-widget-placeholder post-likes-widget-placeholder" style="height: 55px;"><span class="button"><span>Like</span></span> <span class="loading">Loading...</span></div><span class="sd-text-color"></span><a class="sd-link-color"></a></div>
<div id="jp-relatedposts" class="jp-relatedposts">
	<h3 class="jp-relatedposts-headline"><em>Related</em></h3>
</div></div>			
