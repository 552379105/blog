import{_ as e,c as a,o as t,a as n}from"./app.3399ac2e.js";const h='{"title":"5_2 \u5BFC\u822A\u680F\u7684\u5438\u9876","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5BFC\u822A\u680F\u8FD8\u5B58\u5728\u7684\u95EE\u9898","slug":"\u5BFC\u822A\u680F\u8FD8\u5B58\u5728\u7684\u95EE\u9898"},{"level":2,"title":"\u5B9E\u73B0\u601D\u8DEF","slug":"\u5B9E\u73B0\u601D\u8DEF"}],"relativePath":"tech/site/5_2.md","lastUpdated":1647240294348}',o={},l=n(`<h1 id="_5-2-\u5BFC\u822A\u680F\u7684\u5438\u9876" tabindex="-1">5_2 \u5BFC\u822A\u680F\u7684\u5438\u9876 <a class="header-anchor" href="#_5-2-\u5BFC\u822A\u680F\u7684\u5438\u9876" aria-hidden="true">#</a></h1><p>\u672C\u8282\u5C06\u5206\u4EAB\u7684\u662F\u5438\u9876\u5BFC\u822A\u680F\u7684\u5B9E\u73B0\u3002</p><h2 id="\u5BFC\u822A\u680F\u8FD8\u5B58\u5728\u7684\u95EE\u9898" tabindex="-1">\u5BFC\u822A\u680F\u8FD8\u5B58\u5728\u7684\u95EE\u9898 <a class="header-anchor" href="#\u5BFC\u822A\u680F\u8FD8\u5B58\u5728\u7684\u95EE\u9898" aria-hidden="true">#</a></h2><p>\u5F53\u9875\u9762\u6BD4\u8F83\u957F\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5F80\u4E0B\u6ED1\u52A8\u5F97\u6BD4\u8F83\u591A\u7684\u65F6\u5019\uFF0C\u60F3\u56DE\u5230\u5934\u90E8\u5BFC\u822A\u4F4D\u7F6E\uFF0C\u76EE\u524D\u53EA\u80FD\u901A\u8FC7\u5F80\u56DE\u6EDA\u52A8\u5230\u5BFC\u822A\u4F4D\u7F6E\uFF0C\u8FD9\u6837\u7684\u64CD\u4F5C\u663E\u5F97\u7E41\u7410\u4E0E\u4E0D\u4FBF\u3002</p><p>\u4E00\u822C\u4F18\u5316\u7684\u65B9\u5F0F\u6709\u4E24\u79CD\uFF1A</p><ul><li>\u5728\u9875\u9762\u53F3\u4FA7\u52A0\u4E00\u4E2A\uFF0C\u56FA\u5B9A\u7684\u201D\u56DE\u5230\u9876\u90E8\u201D\u6309\u94AE\uFF0C\u70B9\u51FB\u91CD\u65B0\u6EDA\u52A8\u56DE\u5230\u9876\u90E8\u5BFC\u822A\u680F\uFF1B</li><li>\u8BA9\u5BFC\u822A\u680F\u5728\u9875\u9762\u5411\u4E0B\u6EDA\u52A8\u540E\u5438\u9876\uFF0C</li></ul><p>\u5176\u6700\u5927\u7684\u597D\u5904\u662F\u5C06\u6700\u5E38\u7528\u6216\u8005\u4EA7\u54C1\u60F3\u8BA9\u7528\u6237\u770B\u5230\u7684\u5185\u5BB9\u3001\u529F\u80FD\u4FDD\u6301\u5728\u7528\u6237\u9762\u524D\uFF0C\u4E3A\u7528\u6237\u63D0\u4F9B\u4E86\u6781\u5927\u7684\u4FBF\u5229\u4E0E\u786E\u4FDD\u4E86\u826F\u597D\u7684\u4EA4\u4E92\u4F53\u9A8C\u3002</p><h2 id="\u5B9E\u73B0\u601D\u8DEF" tabindex="-1">\u5B9E\u73B0\u601D\u8DEF <a class="header-anchor" href="#\u5B9E\u73B0\u601D\u8DEF" aria-hidden="true">#</a></h2><ul><li>\u76D1\u542C scroll \u4E8B\u4EF6\uFF0C\u5224\u65AD\u5F53\u524D\u9875\u9762\u7684\u6EDA\u52A8\u4F4D\u7F6E\uFF0C\u5F53\u6EDA\u52A8\u8DDD\u79BB\u5927\u4E8E\u5BFC\u822A\u6761\u8DDD\u9876\u90E8\u7684\u8DDD\u79BB\u65F6\uFF0C\u4E3A\u5BFC\u822A\u6761\u91C7\u7528\u7A97\u53E3\u5B9A\u4F4D\u3002</li></ul><div class="language-"><pre><code>  var navBar = document.getElementById(&quot;nav&quot;);
  var titleTop = navBar.offsetTop;
  document.onscroll = function(){
    var btop = document.body.scrollTop || document.documentElement.scrollTop;
    if (btop &gt; titleTop) {
      navBar.className = &quot;fix&quot;;
    } else {
      navBar.className = &quot;&quot;;
    }
  }
</code></pre></div><ul><li>\u7136\u540E\u5728\u54EAcss\u6587\u4EF6\u4E2D\u52A0\u5165fix\u7684\u6837\u5F0F\u5B9A\u4E49\uFF1A</li></ul><div class="language-"><pre><code>.fix {
  position:fixed;
  top:0;
  left:0;
  background-color:#000;
  color: #fff;
}
.fix a {
  color: #fff;
}

</code></pre></div>`,12),r=[l];function i(c,s,d,p,_,u){return t(),a("div",null,r)}var v=e(o,[["render",i]]);export{h as __pageData,v as default};
