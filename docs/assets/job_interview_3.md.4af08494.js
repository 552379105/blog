import{_ as e,c as n,o as t,a as l}from"./app.3399ac2e.js";const m='{"title":"\u6DF1\u5165JS","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5982\u4F55\u7406\u89E3\u539F\u578B\uFF1F","slug":"\u5982\u4F55\u7406\u89E3\u539F\u578B\uFF1F"},{"level":2,"title":"\u5982\u4F55\u7406\u89E3\u539F\u578B\u94FE\uFF1F","slug":"\u5982\u4F55\u7406\u89E3\u539F\u578B\u94FE\uFF1F"},{"level":2,"title":"\u6DF1\u5165\u804A\u804Acall\u3001apply \u53CA bind \u51FD\u6570\uFF1F","slug":"\u6DF1\u5165\u804A\u804Acall\u3001apply-\u53CA-bind-\u51FD\u6570\uFF1F"},{"level":2,"title":"\u6DF1\u5165\u8C08\u8C08 new \u7684\u539F\u7406\uFF1F","slug":"\u6DF1\u5165\u8C08\u8C08-new-\u7684\u539F\u7406\uFF1F"},{"level":2,"title":"instanceof \u7684\u539F\u7406\u662F\u4EC0\u4E48\uFF1F","slug":"instanceof-\u7684\u539F\u7406\u662F\u4EC0\u4E48\uFF1F"},{"level":2,"title":"\u8C08\u8C08JS\u4E2D\u7684\u6A21\u5757\u5316\uFF1F","slug":"\u8C08\u8C08js\u4E2D\u7684\u6A21\u5757\u5316\uFF1F"},{"level":2,"title":"\u8C08\u8C08JS\u4E2D\u7684\u5F02\u6B65\uFF1F","slug":"\u8C08\u8C08js\u4E2D\u7684\u5F02\u6B65\uFF1F"},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3"}],"relativePath":"job/interview/3.md","lastUpdated":1647240294332}',a={},i=l(`<h1 id="\u6DF1\u5165js" tabindex="-1">\u6DF1\u5165JS <a class="header-anchor" href="#\u6DF1\u5165js" aria-hidden="true">#</a></h1><p>JS\u8FD9\u95E8\u8BED\u8A00\uFF0C\u5165\u95E8\u5BB9\u6613\uFF0C\u6DF1\u5165\u96BE\uFF0C\u56E0\u6B64\u5BF9\u4E8E\u5DE5\u4F5C3\u5E74\u4EE5\u4E0A\u7684\u7801\u519C\uFF0C\u9762\u8BD5\u5B98\u4F1A\u7ECF\u5E38\u8003\u5BDF\u5173\u4E8EJS\u5E95\u5C42\u539F\u7406\u7684\u4E00\u4E9B\u77E5\u8BC6\u70B9\uFF0C\u8FD9\u91CC\u6536\u96C6\u4E86\u8FD9\u51E0\u5E74\u6211\u771F\u5B9E\u9762\u8BD5\u8FC7\u7A0B\u4E2D\u9047\u5230\u7684\u4E00\u4E9B\u95EE\u9898\u3002</p><h2 id="\u5982\u4F55\u7406\u89E3\u539F\u578B\uFF1F" tabindex="-1">\u5982\u4F55\u7406\u89E3\u539F\u578B\uFF1F <a class="header-anchor" href="#\u5982\u4F55\u7406\u89E3\u539F\u578B\uFF1F" aria-hidden="true">#</a></h2><p>\u539F\u578B\u662F\u539F\u578B\u5BF9\u8C61\u7684\u7B80\u79F0\uFF0CJS\u5982\u6B64\u8BBE\u8BA1\u4E3B\u8981\u7528\u4E8E\u5B9E\u73B0\u7EE7\u627F\uFF0CJavaScript \u8BED\u8A00\u7684\u7EE7\u627F\u4E0D\u901A\u8FC7 class\uFF0C\u800C\u662F\u901A\u8FC7\u201C\u539F\u578B\u5BF9\u8C61\u201D\uFF08prototype\uFF09\u5B9E\u73B0\u3002</p><p>\u539F\u578B\u5BF9\u8C61\u7684\u6240\u6709\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u90FD\u80FD\u88AB\u5B9E\u4F8B\u5BF9\u8C61\u6240\u5171\u4EAB\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5982\u679C\u5C5E\u6027\u548C\u65B9\u6CD5\u5B9A\u4E49\u5728\u539F\u578B\u4E0A\uFF0C\u90A3\u4E48\u6240\u6709\u5B9E\u4F8B\u5BF9\u8C61\u5C31\u80FD\u5171\u4EAB\uFF0C\u4E0D\u4EC5\u8282\u7701\u4E86\u5185\u5B58\uFF0C\u8FD8\u4F53\u73B0\u4E86\u5B9E\u4F8B\u5BF9\u8C61\u4E4B\u95F4\u7684\u8054\u7CFB\u3002</p><p>JavaScript \u89C4\u5B9A\uFF0C\u6BCF\u4E2A\u51FD\u6570\u90FD\u6709\u4E00\u4E2Aprototype\u5C5E\u6027\uFF0C\u6307\u5411\u4E00\u4E2A\u5BF9\u8C61\uFF1A</p><div class="language-"><pre><code>function func() {}
typeof func.prototype // &quot;object&quot;
</code></pre></div><p>\u53EF\u4EE5\u770B\u5230\uFF0Cfunc\u51FD\u6570\u5177\u6709prototype\u8FD9\u4E2A\u9ED8\u8BA4\u5C5E\u6027\uFF0C\u6307\u5411\u4E00\u4E2A\u5BF9\u8C61\u3002\u5BF9\u4E8E\u6784\u9020\u51FD\u6570\u6765\u8BF4\uFF0C\u751F\u6210\u5B9E\u4F8B\u7684\u65F6\u5019\uFF0C\u8BE5\u5C5E\u6027\u4F1A\u81EA\u52A8\u6210\u4E3A\u5B9E\u4F8B\u5BF9\u8C61\u7684\u539F\u578B\u3002</p><p>\u539F\u578B\u5BF9\u8C61\u7684\u5C5E\u6027\u4E0D\u662F\u5B9E\u4F8B\u5BF9\u8C61\u81EA\u8EAB\u7684\u5C5E\u6027\uFF0C\u53EA\u8981\u4FEE\u6539\uFF0C\u5C31\u4F1A\u7ACB\u523B\u4F1A\u4F53\u73B0\u5728\u6240\u6709\u5B9E\u4F8B\u5BF9\u8C61\u4E0A\u3002</p><div class="language-"><pre><code>function Coder(name) {
  this.name = name;
}
Coder.prototype.sex = &#39;male&#39;;

const c1 = new Coder(&#39;\u5C0F\u660E&#39;);
const c2 = new Coder(&#39;\u5C0F\u4E8C&#39;);
c1.sex // &#39;male&#39;
c2.sex // &#39;male&#39;

Coder.prototype.sex = &#39;female&#39;;
c1.sex // &#39;female&#39;
c2.sex // &#39;female&#39;
</code></pre></div><p>\u53EF\u4EE5\u770B\u5230\uFF0CCoder\u6784\u9020\u51FD\u6570\u539F\u578B\u5BF9\u8C61\u7684sex\u5C5E\u6027\u7684\u503C\u53D8\u4E3Afemale\uFF0C\u4E24\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\u7684sex\u5C5E\u6027\u7ACB\u523B\u8DDF\u7740\u53D8\u4E86\u3002</p><p>\u8FD9\u662F\u56E0\u4E3A\u5B9E\u4F8B\u5BF9\u8C61\u5176\u5B9E\u6CA1\u6709sex\u5C5E\u6027\uFF0C\u90FD\u662F\u8BFB\u53D6\u539F\u578B\u5BF9\u8C61\u7684color\u5C5E\u6027\u3002</p><ul><li>\u5F53\u5B9E\u4F8B\u5BF9\u8C61\u672C\u8EAB\u6CA1\u6709\u67D0\u4E2A\u5C5E\u6027\u6216\u65B9\u6CD5\u7684\u65F6\u5019\uFF0C\u5B83\u4F1A\u5230\u539F\u578B\u5BF9\u8C61\u53BB\u5BFB\u627E\u8BE5\u5C5E\u6027\u6216\u65B9\u6CD5\uFF1B</li><li>\u5982\u679C\u5B9E\u4F8B\u5BF9\u8C61\u81EA\u8EAB\u5C31\u6709\u67D0\u4E2A\u5C5E\u6027\u6216\u65B9\u6CD5\uFF0C\u5B83\u5C31\u4E0D\u4F1A\u518D\u53BB\u539F\u578B\u5BF9\u8C61\u5BFB\u627E\u8FD9\u4E2A\u5C5E\u6027\u6216\u65B9\u6CD5\u3002</li></ul><p>\u603B\u4E4B\uFF0C\u539F\u578B\u5BF9\u8C61\u7684\u4F5C\u7528\uFF0C\u5C31\u662F\u5B9A\u4E49\u6240\u6709\u5B9E\u4F8B\u5BF9\u8C61\u5171\u4EAB\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u3002</p><h2 id="\u5982\u4F55\u7406\u89E3\u539F\u578B\u94FE\uFF1F" tabindex="-1">\u5982\u4F55\u7406\u89E3\u539F\u578B\u94FE\uFF1F <a class="header-anchor" href="#\u5982\u4F55\u7406\u89E3\u539F\u578B\u94FE\uFF1F" aria-hidden="true">#</a></h2><p>\u901A\u8FC7\u524D\u9762\uFF0C\u6211\u4EEC\u4E86\u89E3\u5230 JS \u89C4\u5B9A\uFF0C\u6240\u6709\u5BF9\u8C61\u90FD\u6709\u81EA\u5DF1\u7684\u539F\u578B\u5BF9\u8C61\uFF0C\u8FD9\u610F\u5473\u7740\uFF1A</p><ul><li>\u4EFB\u4F55\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u90FD\u53EF\u4EE5\u5145\u5F53\u5176\u4ED6\u5BF9\u8C61\u7684\u539F\u578B\uFF1B</li><li>\u7531\u4E8E\u539F\u578B\u5BF9\u8C61\u4E5F\u662F\u5BF9\u8C61\uFF0C\u4E5F\u6709\u81EA\u5DF1\u7684\u539F\u578B\u3002</li></ul><p>\u663E\u7136\uFF0C\u5728\u8BFB\u53D6\u5BF9\u8C61\u5C5E\u6027\u65F6\uFF0C\u4ECE\u5BF9\u8C61\u5230\u539F\u578B\u3001\u518D\u5230\u539F\u578B\u7684\u539F\u578B\uFF0C\u76F4\u5230\u539F\u578B\u53D8\u4E3Anull\uFF0C\u5C31\u5F62\u6210\u4E00\u4E2A\u539F\u578B\u94FE\uFF08prototype chain\uFF09\u3002</p><p>\u5728JS\u4E2D\uFF0C\u6240\u6709\u5BF9\u8C61\u901A\u8FC7\u539F\u578B\u94FE\uFF0C\u6700\u7EC8\u4F1A\u5230Object.prototype\uFF0C\u5373Object\u6784\u9020\u51FD\u6570\u7684prototype\u5C5E\u6027\u3002</p><p>\u56E0\u6B64\uFF0C\u6240\u6709\u5BF9\u8C61\u90FD\u7EE7\u627F\u4E86\u5185\u7F6E Object \u5BF9\u8C61\u7684prototype\u5C5E\u6027\uFF0C\u8FD9\u5C31\u662F\u6240\u6709\u5BF9\u8C61\u90FD\u6709valueOf\u548CtoString\u65B9\u6CD5\u7684\u539F\u56E0\uFF0C\u56E0\u4E3A\u8FD9\u662F\u4ECEObject.prototype\u7EE7\u627F\u7684\u3002</p><p>Object.prototype\u7684\u539F\u578B\u662Fnull\uFF0C\u56E0\u4E3Anull\u6CA1\u6709\u4EFB\u4F55\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u6240\u4EE5\u539F\u578B\u94FE\u7684\u5C3D\u5934\u5C31\u662Fnull\u3002</p><div class="language-"><pre><code>Object.getPrototypeOf(Object.prototype) // null
</code></pre></div><p>\u7531\u6B64\u53EF\u4EE5\u77E5\u9053\uFF0C\u8BFB\u53D6\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u65F6\uFF0CJavaScript \u5F15\u64CE\u4F1A\u6309\u7167\u539F\u578B\u94FE\u7684\u987A\u5E8F\u67E5\u627E\uFF1A</p><ul><li>\u5148\u5BFB\u627E\u5BF9\u8C61\u672C\u8EAB\u7684\u5C5E\u6027\uFF1B</li><li>\u5982\u679C\u627E\u4E0D\u5230\uFF0C\u5C31\u5230\u5B83\u7684\u539F\u578B\u53BB\u627E\uFF1B</li><li>\u5982\u679C\u8FD8\u662F\u627E\u4E0D\u5230\uFF0C\u5C31\u5230\u539F\u578B\u7684\u539F\u578B\u53BB\u627E\uFF1B</li><li>\u5982\u679C\u76F4\u5230\u6700\u9876\u5C42\u7684Object.prototype\u8FD8\u662F\u627E\u4E0D\u5230\uFF0C\u5219\u8FD4\u56DEundefined\u3002</li></ul><p>\u5BF9\u4E8E\u539F\u578B\u94FE\u9700\u8981\u6CE8\u610F\uFF1A</p><ul><li>\u201C\u8986\u76D6\u201D\uFF08overriding\uFF09\u95EE\u9898\uFF1A\u5982\u679C\u5BF9\u8C61\u81EA\u8EAB\u548C\u5B83\u7684\u539F\u578B\uFF0C\u90FD\u5B9A\u4E49\u4E86\u4E00\u4E2A\u540C\u540D\u5C5E\u6027\uFF0C\u90A3\u4E48\u4F18\u5148\u8BFB\u53D6\u5BF9\u8C61\u81EA\u8EAB\u7684\u5C5E\u6027\uFF1B</li><li>\u6027\u80FD\u95EE\u9898\uFF1A\u5982\u679C\u5BFB\u627E\u67D0\u4E2A\u4E0D\u5B58\u5728\u7684\u5C5E\u6027\uFF0C\u5C06\u4F1A\u904D\u5386\u6574\u4E2A\u539F\u578B\u94FE\uFF0C\u6240\u5BFB\u627E\u7684\u5C5E\u6027\u5728\u8D8A\u4E0A\u5C42\u7684\u539F\u578B\u5BF9\u8C61\uFF0C\u5BF9\u6027\u80FD\u7684\u5F71\u54CD\u8D8A\u5927\u3002</li></ul><h2 id="\u6DF1\u5165\u804A\u804Acall\u3001apply-\u53CA-bind-\u51FD\u6570\uFF1F" tabindex="-1">\u6DF1\u5165\u804A\u804Acall\u3001apply \u53CA bind \u51FD\u6570\uFF1F <a class="header-anchor" href="#\u6DF1\u5165\u804A\u804Acall\u3001apply-\u53CA-bind-\u51FD\u6570\uFF1F" aria-hidden="true">#</a></h2><p>\u4E4B\u6240\u4EE5\u6709\u8FD9\u4E09\u4E2A\u51FD\u6570\uFF0C\u662F\u56E0\u4E3A this \u7684\u52A8\u6001\u5207\u6362\uFF0C\u4F7F\u5F97JS\u7F16\u7A0B\u53D8\u5F97\u56F0\u96BE\u548C\u6A21\u7CCA\uFF0C\u6240\u4EE5JS\u5F97\u63D0\u4F9B\u5207\u6362/\u56FA\u5B9Athis\u7684\u6307\u5411\u7684\u673A\u5236\uFF0C\u907F\u514D\u51FA\u73B0\u610F\u60F3\u4E0D\u5230\u7684\u60C5\u51B5\u3002</p><p>\u4EC0\u4E48\u662Fthis\u5462\uFF1F\u5176\u5B9E\u5B83\u662Fthis\u5BF9\u8C61\u7684\u7B80\u79F0\uFF0C\u5C31\u662F\u5C5E\u6027\u6216\u65B9\u6CD5\u201C\u5F53\u524D\u201D\u6240\u5728\u7684\u5BF9\u8C61\u3002</p><p>\u5728JS \u4E2D\uFF0C\u4E00\u5207\u7686\u5BF9\u8C61\uFF0C\u8FD0\u884C\u73AF\u5883\u4E5F\u662F\u5BF9\u8C61\uFF0C\u6240\u4EE5\u51FD\u6570\u90FD\u662F\u5728\u67D0\u4E2A\u5BF9\u8C61\u4E4B\u4E2D\u8FD0\u884C\uFF0Cthis\u5C31\u662F\u51FD\u6570\u8FD0\u884C\u65F6\u6240\u5728\u7684\u5BF9\u8C61\uFF08\u73AF\u5883\uFF09\u3002</p><p>\u4F46\u662F JS\u652F\u6301\u8FD0\u884C\u73AF\u5883\u52A8\u6001\u5207\u6362\uFF0C\u610F\u5473\u7740\u6CA1\u6709\u529E\u6CD5\u4E8B\u5148\u786E\u5B9A\u5230\u5E95 this \u6307\u5411\u54EA\u4E2A\u5BF9\u8C61\uFF0C\u6240\u4EE5\u5F97\u63D0\u4F9Bcall\u3001apply \u53CA bind \u51FD\u6570\uFF0C\u8BA9\u5F00\u53D1\u8005\u63A7\u5236this\u6307\u5411\u3002</p><p>JS\u652F\u6301\u51FD\u6570\u5F0F\u7F16\u7A0B\uFF0C\u4F7F\u5F97\u51FD\u6570\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u8FD0\u884C\u73AF\u5883\u6267\u884C\uFF0C\u6240\u4EE5\u9700\u8981\u6709\u4E00\u79CD\u673A\u5236\uFF0C\u80FD\u591F\u5728\u51FD\u6570\u4F53\u5185\u90E8\u83B7\u5F97\u5F53\u524D\u7684\u8FD0\u884C\u73AF\u5883\uFF08context\uFF09\u3002</p><p>\u6240\u4EE5\uFF0Cthis\u5C31\u51FA\u73B0\u4E86\uFF0C\u5B83\u7684\u8BBE\u8BA1\u76EE\u7684\u5C31\u662F\u5728\u51FD\u6570\u4F53\u5185\u90E8\uFF0C\u83B7\u53D6\u51FD\u6570\u5F53\u524D\u7684\u8FD0\u884C\u73AF\u5883\u3002</p><p>\u8C08\u5B8C\u4E86\u4E3A\u4F55\u9700\u8981call\u3001apply \u53CA bind \u51FD\u6570\uFF0C\u6211\u4EEC\u804A\u804A\u4ED6\u4EEC\u7684\u5F02\u540C\uFF1A</p><ul><li>\u90FD\u53EF\u4EE5\u6539\u53D8this\u6307\u5411\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u90FD\u662Fthis\u8981\u6307\u5411\u7684\u5BF9\u8C61\uFF0C\u4E5F\u5C31\u662F\u60F3\u6307\u5B9A\u7684\u4E0A\u4E0B\u6587\uFF0C\u90FD\u53EF\u4EE5\u5229\u7528\u540E\u7EED\u53C2\u6570\u4F20\u53C2\uFF1B</li><li>\u4F20\u53C2\u65B9\u5F0F\u4E0D\u540C\uFF0Capply\u63A5\u6536\u4E00\u4E2A\u6570\u7EC4\u4F5C\u4E3A\u51FD\u6570\u6267\u884C\u65F6\u7684\u53C2\u6570\uFF0C\u5176\u4ED6\u53EF\u4EE5\u4F20\u591A\u4E2A\u53C2\u6570\uFF1B</li><li>bind \u662F\u8FD4\u56DE\u5BF9\u5E94\u51FD\u6570\uFF0C\u4FBF\u4E8E\u7A0D\u540E\u8C03\u7528\uFF0C\u800Capply \u3001call \u5219\u662F\u7ACB\u5373\u8C03\u7528 \u3002</li></ul><p><strong>\u624B\u52A8\u5B9E\u73B0call\u65B9\u6CD5</strong>\uFF1A</p><ul><li>\u7ED9\u65B0\u5BF9\u8C61\u6DFB\u52A0\u4E00\u4E2A\u51FD\u6570\uFF0C\u5E76\u8BA9this \u6307\u5411\u8FD9\u4E2A\u51FD\u6570;</li><li>\u6267\u884C\u8FD9\u4E2A\u51FD\u6570</li><li>\u6267\u884C\u5B8C\u540E\u5220\u9664</li><li>\u5C06\u6267\u884C\u7ED3\u679C\u8FD4\u56DE</li></ul><div class="language-"><pre><code>Function.prototype.myCall = function(ctx) {
    if(typeof this !== &#39;function&#39;) {
        throw new TypeError(&#39;\u8BF7\u4F20\u5165\u51FD\u6570\uFF01&#39;);
    }
    const args = [...arguments].slice(1);
    // \u4E3A\u5F53\u524D\u5BF9\u8C61\u6DFB\u52A0\u51FD\u6570fn, \u503C\u4E3A\u8981\u8C03\u7528\u7684\u51FD\u6570;
    ctx.fn = this ;
    // \u6267\u884C\u6DFB\u52A0\u7684\u51FD\u6570fn
    const res = ctx.fn(...args);
    // \u6267\u884C\u5B8C\u540E\u5220\u9664
    delete ctx.fn;
    return res;
}

var n = 1;
var obj = { n: 2 };

function getValue() {
  console.log(this.n);
}

getValue.myCall(window) // 1
getValue.myCall(obj) // 2
</code></pre></div><p><strong>\u624B\u52A8\u5B9E\u73B0apply\u65B9\u6CD5</strong>\uFF1A</p><div class="language-"><pre><code>// \u4E0Ecall\u7684\u601D\u60F3\u7C7B\u4F3C\uFF0C\u53EA\u662F\u9700\u8981\u5224\u65AD\u4E00\u4E0B\u53C2\u6570\u6570\u7EC4\u662F\u5426\u5B58\u5728
Function.prototype.myApply = function(ctx) {
    if(typeof this != &#39;function&#39;) {
        throw new TypeError(&#39;\u8BF7\u4F20\u5165\u51FD\u6570\uFF01&#39;);
    }
    ctx.fn = this
    const  res = arguments[1] ? ctx.fn(...arguments[1]: ctx.fn();
    delete ctx.fn;
    return res;
}

var n = 1;
var obj = { n: 2 };

function getValue() {
  console.log(this.n);
}

getValue.myApply(window) // 1
getValue.myApply(obj) // 2
</code></pre></div><p><strong>\u624B\u52A8\u5B9E\u73B0bind\u65B9\u6CD5</strong>\uFF1A</p><ul><li>\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\uFF0C\u5176\u4ED6\u4E0Ecall, apply\u7C7B\u4F3C\uFF1B</li><li>\u5982\u679C\u8FD4\u56DE\u7684\u51FD\u6570\u4F5C\u4E3A\u6784\u9020\u51FD\u6570\uFF0Cbind\u65F6\u6307\u5B9A\u7684 this \u503C\u4F1A\u5931\u6548\uFF0C\u4F46\u4F20\u5165\u7684\u53C2\u6570\u4F9D\u7136\u751F\u6548\u3002</li></ul><div class="language-"><pre><code>Function.prototype.myBind = function(ctx, ...rest) {
  var self = this;
  return function func(...args) {
    if (this instanceof func) {
      return new self(...rest, ...args)
    }
    return self.apply(ctx, rest.concat(args))
  }
}

var n = 1;
var obj = { n: 2 };

function getValue() {
  console.log(this.n);
}

const getValue1 = getValue.myBind(window) 
getValue1(); // 1
const getValue2 =getValue.myBind(obj)
getValue2(); // 2
</code></pre></div><h2 id="\u6DF1\u5165\u8C08\u8C08-new-\u7684\u539F\u7406\uFF1F" tabindex="-1">\u6DF1\u5165\u8C08\u8C08 new \u7684\u539F\u7406\uFF1F <a class="header-anchor" href="#\u6DF1\u5165\u8C08\u8C08-new-\u7684\u539F\u7406\uFF1F" aria-hidden="true">#</a></h2><p>\u8C08new\u4E4B\u524D\uFF0C\u5F97\u5148\u4E86\u89E3JS\u4E2D\u7684\u6784\u9020\u51FD\u6570\uFF1A\u6211\u4EEC\u77E5\u9053JS\u662F\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u7684\u8BED\u8A00\uFF0C\u7B2C\u4E00\u6B65\u5C31\u662F\u8981\u751F\u6210\u5BF9\u8C61\uFF0C\u800C\u201D\u6784\u9020\u51FD\u6570\u201D\uFF0C\u5C31\u662F\u4E13\u95E8\u7528\u6765\u751F\u6210\u5B9E\u4F8B\u5BF9\u8C61\u7684\u51FD\u6570\u3002</p><p>\u6784\u9020\u51FD\u6570\u7684\u7279\u70B9\u6709\uFF1A</p><ul><li>\u7B2C\u4E00\u4E2A\u5B57\u6BCD\u901A\u5E38\u5927\u5199\uFF1B</li><li>\u51FD\u6570\u4F53\u5185\u90E8\u4F7F\u7528\u4E86this\u5173\u952E\u5B57\uFF0C\u4EE3\u8868\u4E86\u6240\u8981\u751F\u6210\u7684\u5BF9\u8C61\u5B9E\u4F8B\uFF1B</li><li>\u751F\u6210\u5BF9\u8C61\u7684\u65F6\u5019\uFF0C\u5FC5\u987B\u4F7F\u7528new\u547D\u4EE4\u3002</li></ul><p>\u56E0\u6B64\uFF0C\u6211\u4EEC\u53EF\u4EE5\u77E5\u9053\uFF0Cnew\u547D\u4EE4\u7684\u4F5C\u7528\uFF0C\u5C31\u662F\u6267\u884C\u6784\u9020\u51FD\u6570\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u4F1A\u4F9D\u6B21\u6267\u884C\u4E0B\u9762\u7684\u6B65\u9AA4:</p><ul><li>\u521B\u5EFA\u4E00\u4E2A\u7A7A\u5BF9\u8C61\uFF0C\u4F5C\u4E3A\u5C06\u8981\u8FD4\u56DE\u7684\u5BF9\u8C61\u5B9E\u4F8B\uFF1B</li><li>\u5C06\u8FD9\u4E2A\u7A7A\u5BF9\u8C61\u7684\u539F\u578B\uFF0C\u6307\u5411\u6784\u9020\u51FD\u6570\u7684prototype\u5C5E\u6027\uFF1B</li><li>\u5C06\u8FD9\u4E2A\u7A7A\u5BF9\u8C61\u8D4B\u503C\u7ED9\u51FD\u6570\u5185\u90E8\u7684this\u5173\u952E\u5B57\uFF1B</li><li>\u5F00\u59CB\u6267\u884C\u6784\u9020\u51FD\u6570\u5185\u90E8\u7684\u4EE3\u7801\u3002</li></ul><p>\u5BF9\u4E8E\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\u6765\u8BF4\uFF0C\u65E0\u8BBA\u6027\u80FD\u4E0A\u8FD8\u662F\u53EF\u8BFB\u6027\uFF0C\u4E00\u822C\u90FD\u63A8\u8350\u4F7F\u7528\u5B57\u9762\u91CF\u7684\u65B9\u5F0F\u521B\u5EFA\u5BF9\u8C61\uFF0C\u56E0\u4E3A\u4F7F\u7528 new Object() \u7684\u65B9\u5F0F\u521B\u5EFA\u5BF9\u8C61\u9700\u8981\u901A\u8FC7\u4F5C\u7528\u57DF\u94FE\u4E00\u5C42\u5C42\u627E\u5230 Object\u3002</p><p>\u81EA\u5DF1\u624B\u52A8\u5B9E\u73B0\u4E00\u4E2Anew:</p><div class="language-"><pre><code>function myNew (func, ...arg) {
    // \u521B\u5EFA\u4E00\u4E2A\u65B0\u5BF9\u8C61\u4E14\u5C06\u5176\u9690\u5F0F\u539F\u578B\u6307\u5411\u6784\u9020\u51FD\u6570\u539F\u578B
    const obj = {
        __proto__: func.prototype 
    }
    // \u6267\u884C\u6784\u9020\u51FD\u6570
    func.apply(obj, arg);
    // \u8FD4\u56DE\u8BE5\u5BF9\u8C61
    return obj;
}

function Person (name, age) {
    this.name = name ;
    this.age = age
}

const p = myNew(Person, &#39;lilei&#39;, &#39;12&#39;);
console.log(p);
</code></pre></div><h2 id="instanceof-\u7684\u539F\u7406\u662F\u4EC0\u4E48\uFF1F" tabindex="-1">instanceof \u7684\u539F\u7406\u662F\u4EC0\u4E48\uFF1F <a class="header-anchor" href="#instanceof-\u7684\u539F\u7406\u662F\u4EC0\u4E48\uFF1F" aria-hidden="true">#</a></h2><p>instanceof \u7684\u5185\u90E8\u673A\u5236\u662F\u901A\u8FC7\u5224\u65AD\u5BF9\u8C61\u7684\u539F\u578B\u94FE\u4E2D\u662F\u4E0D\u662F\u80FD\u627E\u5230\u7C7B\u578B\u7684 prototype\uFF0C\u6240\u4EE5\u53EF\u4EE5\u6B63\u786E\u5224\u65AD\u5BF9\u8C61\u7684\u7C7B\u578B\uFF0C\u5176\u539F\u7406\u5982\u4E0B\uFF1A</p><ul><li>\u83B7\u53D6\u7C7B\u578B\u7684\u539F\u578B\uFF1B</li><li>\u83B7\u5F97\u5BF9\u8C61\u7684\u539F\u578B\uFF1B</li><li>\u5FAA\u73AF\u5224\u65AD\u5BF9\u8C61\u7684\u539F\u578B\u662F\u5426\u7B49\u4E8E\u7C7B\u578B\u7684\u539F\u578B\uFF0C\u76F4\u5230\u5BF9\u8C61\u539F\u578B\u4E3A null\u3002</li></ul><p>\u81EA\u5DF1\u5B9E\u73B0 instanceof:</p><div class="language-"><pre><code>function myInstanceof(left, right) {
  const prototype = right.prototype;
  left = left.__proto__;
  while (true) {
    if (left === null || left === undefined) {
        return false;
    } 
    if (prototype === left){
       return true;
    }
    left = left.__proto__;
  }
}
</code></pre></div><h2 id="\u8C08\u8C08js\u4E2D\u7684\u6A21\u5757\u5316\uFF1F" tabindex="-1">\u8C08\u8C08JS\u4E2D\u7684\u6A21\u5757\u5316\uFF1F <a class="header-anchor" href="#\u8C08\u8C08js\u4E2D\u7684\u6A21\u5757\u5316\uFF1F" aria-hidden="true">#</a></h2><p>\u5728ES6\u4E4B\u524D\uFF0CJS\u4E00\u76F4\u6CA1\u6709\u6A21\u5757\u4F53\u7CFB\uFF0C\u65E0\u6CD5\u5C06\u4E00\u4E2A\u5927\u7A0B\u5E8F\u62C6\u5206\u6210\u4E92\u76F8\u4F9D\u8D56\u7684\u5C0F\u6587\u4EF6\uFF0C\u518D\u7528\u7B80\u5355\u7684\u65B9\u6CD5\u62FC\u88C5\u8D77\u6765\u3002</p><p>\u8FD9\u5BF9\u5F00\u53D1\u5927\u578B\u7684\u3001\u590D\u6742\u7684\u9879\u76EE\u5F62\u6210\u4E86\u5DE8\u5927\u969C\u788D\uFF0C\u4F7F\u7528\u6A21\u5757\u5316\u7684\u6709\u4EE5\u4E0B\u597D\u5904\uFF1A</p><ul><li>\u89E3\u51B3\u547D\u540D\u51B2\u7A81</li><li>\u63D0\u4F9B\u590D\u7528\u6027</li><li>\u63D0\u9AD8\u4EE3\u7801\u53EF\u7EF4\u62A4\u6027</li></ul><p>\u5728\u65E9\u671F\uFF0C\u4F7F\u7528\u7ACB\u5373\u6267\u884C\u51FD\u6570\u5B9E\u73B0\u6A21\u5757\u5316\u662F\u5E38\u89C1\u7684\u624B\u6BB5\uFF0C\u901A\u8FC7\u51FD\u6570\u4F5C\u7528\u57DF\u89E3\u51B3\u4E86\u547D\u540D\u51B2\u7A81\u3001\u6C61\u67D3\u5168\u5C40\u4F5C\u7528\u57DF\u7684\u95EE\u9898\uFF1A</p><div class="language-"><pre><code>(function(globalVariable){
   globalVariable.test = function() {}
   // ... \u58F0\u660E\u7684\u53D8\u91CF\u3001\u51FD\u6570\u90FD\u4E0D\u4F1A\u6C61\u67D3\u5168\u5C40\u4F5C\u7528\u57DF
})(globalVariable)
</code></pre></div><p>\u5728 ES6 \u4E4B\u524D\uFF0C\u793E\u533A\u5236\u5B9A\u4E86 CommonJS(\u7528\u4E8E\u670D\u52A1\u5668) \u548C AMD(\u7528\u4E8E\u6D4F\u89C8\u5668) \u7B49\u6A21\u5757\u52A0\u8F7D\u65B9\u6848\uFF0C\u76F4\u5230ES6 \u5728\u8BED\u8A00\u6807\u51C6\u7684\u5C42\u9762\u4E0A\uFF0C\u5B9E\u73B0\u4E86\u6A21\u5757\u529F\u80FD\u3002</p><p>CommonJS \u6700\u65E9\u5728 Nodejs \u4E2D\u4F7F\u7528\uFF0C\u867D\u7136\u73B0\u5728\u6709\u4E86 ES Module\uFF0C\u4F46\u76EE\u524D\u670D\u52A1\u7AEF\u8FD8\u5728\u5E7F\u6CDB\u4F7F\u7528\uFF0C\u6BD4\u5982\u5728 Webpack \u4E2D\u4F60\u5C31\u80FD\u89C1\u5230\u5B83\uFF1A</p><div class="language-"><pre><code>// x.js
module.exports = {
    x: 0
}
// \u6216
exports.x = 0;

// y.js
const x = require(&#39;./x.js&#39;)
x.x // 0
</code></pre></div><p>\u5728 CommonJs \u7684\u6A21\u5757\u5316\u89C4\u8303\u4E2D\uFF0C\u6BCF\u4E00\u4E2A\u6587\u4EF6\u5C31\u662F\u4E00\u4E2A\u6A21\u5757\uFF0C\u62E5\u6709\u81EA\u5DF1\u72EC\u7ACB\u7684\u4F5C\u7528\u57DF\u3001\u53D8\u91CF\u3001\u4EE5\u53CA\u65B9\u6CD5\u7B49\uFF0C\u5BF9\u5176\u4ED6\u7684\u6A21\u5757\u90FD\u4E0D\u53EF\u89C1\u3002</p><p>CommonJS\u89C4\u8303\u89C4\u5B9A\uFF0C\u6BCF\u4E2A\u6A21\u5757\u5185\u90E8\uFF0Cmodule \u53D8\u91CF\u4EE3\u8868\u5F53\u524D\u6A21\u5757\u3002\u8FD9\u4E2A\u53D8\u91CF\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5B83\u7684 exports \u5C5E\u6027\uFF08module.exports\uFF09\u662F\u5BF9\u5916\u7684\u63A5\u53E3\u3002</p><p>\u52A0\u8F7D\u67D0\u4E2A\u6A21\u5757\uFF0C\u5176\u5B9E\u662F\u52A0\u8F7D\u8BE5\u6A21\u5757\u7684 module.exports \u5C5E\u6027\uFF0Crequire \u65B9\u6CD5\u7528\u4E8E\u52A0\u8F7D\u6A21\u5757\u3002</p><p>\u867D\u7136 exports \u548C module.exports \u7528\u6CD5\u76F8\u4F3C\uFF0C\u4F46\u662F\u4E0D\u80FD\u5BF9 exports \u76F4\u63A5\u8D4B\u503C\u3002</p><p>\u56E0\u4E3A const exports = module.exports \u8FD9\u53E5\u4EE3\u7801\u8868\u660E\u4E86 exports \u548C module.exports \u4EAB\u6709\u76F8\u540C\u5730\u5740\uFF0C\u901A\u8FC7\u6539\u53D8\u5BF9\u8C61\u7684\u5C5E\u6027\u503C\u4F1A\u5BF9\u4E24\u8005\u90FD\u8D77\u6548\uFF0C\u4F46\u662F\u5982\u679C\u76F4\u63A5\u5BF9 exports \u8D4B\u503C\u5C31\u4F1A\u5BFC\u81F4\u4E24\u8005\u4E0D\u518D\u6307\u5411\u540C\u4E00\u4E2A\u5185\u5B58\u5730\u5740\uFF0C\u4FEE\u6539\u5E76\u4E0D\u4F1A\u5BF9 module.exports \u8D77\u6548\u3002</p><p>ES Module \u662F\u539F\u751F\u5B9E\u73B0\u7684\u6A21\u5757\u5316\u65B9\u6848\uFF0C\u4E0E CommonJS \u6709\u4EE5\u4E0B\u51E0\u4E2A\u533A\u522B</p><ul><li>CommonJS \u652F\u6301\u52A8\u6001\u5BFC\u5165\uFF0C\u4E5F\u5C31\u662F require(\${path}/xx.js)\uFF0C\u540E\u8005\u76EE\u524D\u4E0D\u652F\u6301\uFF0C\u4F46\u662F\u5DF2\u6709\u63D0\u6848</li><li>CommonJS \u662F\u540C\u6B65\u5BFC\u5165\uFF0C\u56E0\u4E3A\u7528\u4E8E\u670D\u52A1\u7AEF\uFF0C\u6587\u4EF6\u90FD\u5728\u672C\u5730\uFF0C\u540C\u6B65\u5BFC\u5165\u5373\u4F7F\u5361\u4F4F\u4E3B\u7EBF\u7A0B\u5F71\u54CD\u4E5F\u4E0D\u5927;</li><li>ES Module\u662F\u5F02\u6B65\u5BFC\u5165\uFF0C\u56E0\u4E3A\u7528\u4E8E\u6D4F\u89C8\u5668\uFF0C\u9700\u8981\u4E0B\u8F7D\u6587\u4EF6\uFF0C\u5982\u679C\u4E5F\u91C7\u7528\u540C\u6B65\u5BFC\u5165\u4F1A\u5BF9\u6E32\u67D3\u6709\u5F88\u5927\u5F71\u54CD;</li><li>CommonJS \u5728\u5BFC\u51FA\u65F6\u90FD\u662F\u503C\u62F7\u8D1D\uFF0C\u5C31\u7B97\u5BFC\u51FA\u7684\u503C\u53D8\u4E86\uFF0C\u5BFC\u5165\u7684\u503C\u4E5F\u4E0D\u4F1A\u6539\u53D8\uFF0C\u6240\u4EE5\u5982\u679C\u60F3\u66F4\u65B0\u503C\uFF0C\u5FC5\u987B\u91CD\u65B0\u5BFC\u5165\u4E00\u6B21;</li><li>ES Module \u91C7\u7528\u5B9E\u65F6\u7ED1\u5B9A\u7684\u65B9\u5F0F\uFF0C\u5BFC\u5165\u5BFC\u51FA\u7684\u503C\u90FD\u6307\u5411\u540C\u4E00\u4E2A\u5185\u5B58\u5730\u5740\uFF0C\u6240\u4EE5\u5BFC\u5165\u503C\u4F1A\u8DDF\u968F\u5BFC\u51FA\u503C\u53D8\u5316</li><li>ES Module \u4F1A\u7F16\u8BD1\u6210 require/exports \u6765\u6267\u884C\u7684</li></ul><div class="language-"><pre><code>import x from &#39;./x.js&#39;
import { x } from &#39;./x.js&#39;
// \u5BFC\u51FA\u6A21\u5757 API
export function a() {}
export default function() {}
</code></pre></div><h2 id="\u8C08\u8C08js\u4E2D\u7684\u5F02\u6B65\uFF1F" tabindex="-1">\u8C08\u8C08JS\u4E2D\u7684\u5F02\u6B65\uFF1F <a class="header-anchor" href="#\u8C08\u8C08js\u4E2D\u7684\u5F02\u6B65\uFF1F" aria-hidden="true">#</a></h2><p>\u5BF9\u4E8E\u6709\u4E00\u5B9A\u5F00\u53D1\u7ECF\u9A8C\u7684\u7801\u519C\uFF0C\u5E94\u8BE5\u90FD\u77E5\u9053JavaScript \u91C7\u7528\u5355\u7EBF\u7A0B\uFF0C\u800C\u4E0D\u662F\u591A\u7EBF\u7A0B\u3002</p><p>\u56E0\u4E3A\u591A\u7EBF\u7A0B\u9700\u8981\u5171\u4EAB\u8D44\u6E90\u3001\u4E14\u6709\u53EF\u80FD\u4FEE\u6539\u5F7C\u6B64\u7684\u8FD0\u884C\u7ED3\u679C\uFF0C\u6D4F\u89C8\u5668\u5B9E\u73B0JS\u8FD9\u4E2A\u811A\u672C\u8BED\u8A00\uFF0C\u5C31\u4F1A\u53D8\u5F97\u5F88\u590D\u6742\u3002</p><p>\u6240\u4EE5\uFF0C\u4E3A\u4E86\u907F\u514D\u590D\u6742\u6027\uFF0CJavaScript \u4E00\u5F00\u59CB\u5C31\u662F\u5355\u7EBF\u7A0B\uFF0C\u8FD9\u5DF2\u7ECF\u6210\u4E86\u8FD9\u95E8\u8BED\u8A00\u7684\u6838\u5FC3\u7279\u5F81\uFF0C\u5C06\u6765\u4E5F\u4E0D\u4F1A\u6539\u53D8\u3002</p><p>\u5355\u7EBF\u7A0B\u6A21\u578B\u867D\u7136\u5BF9 JavaScript \u6784\u6210\u4E86\u5F88\u5927\u7684\u9650\u5236\uFF0C\u4F46\u4E5F\u56E0\u6B64\u4F7F\u5B83\u5177\u5907\u4E86\u5176\u4ED6\u8BED\u8A00\u4E0D\u5177\u5907\u7684\u4F18\u52BF\u3002</p><p>\u5982\u679C\u7528\u5F97\u597D\uFF0CJavaScript \u7A0B\u5E8F\u662F\u4E0D\u4F1A\u51FA\u73B0\u5835\u585E\u7684\uFF0C\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48 Node \u53EF\u4EE5\u7528\u5F88\u5C11\u7684\u8D44\u6E90\uFF0C\u5E94\u4ED8\u5927\u6D41\u91CF\u8BBF\u95EE\u7684\u539F\u56E0\u3002</p><p>\u7A0B\u5E8F\u91CC\u9762\u6240\u6709\u7684\u4EFB\u52A1\uFF0C\u53EF\u4EE5\u5206\u6210\uFF1A</p><ul><li>\u540C\u6B65\u4EFB\u52A1\uFF08synchronous\uFF09\uFF1A\u6CA1\u6709\u88AB\u5F15\u64CE\u6302\u8D77\u3001\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u6392\u961F\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u53EA\u6709\u524D\u4E00\u4E2A\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\uFF0C\u624D\u80FD\u6267\u884C\u540E\u4E00\u4E2A\u4EFB\u52A1\u3002</li><li>\u5F02\u6B65\u4EFB\u52A1\uFF08asynchronous\uFF09\uFF1A\u88AB\u5F15\u64CE\u653E\u5728\u4E00\u8FB9\uFF0C\u4E0D\u8FDB\u5165\u4E3B\u7EBF\u7A0B\u3001\u800C\u8FDB\u5165\u4EFB\u52A1\u961F\u5217\u7684\u4EFB\u52A1\uFF0C\u6392\u5728\u5F02\u6B65\u4EFB\u52A1\u540E\u9762\u7684\u4EE3\u7801\uFF0C\u4E0D\u7528\u7B49\u5F85\u5F02\u6B65\u4EFB\u52A1\u7ED3\u675F\u4F1A\u9A6C\u4E0A\u8FD0\u884C\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5F02\u6B65\u4EFB\u52A1\u4E0D\u5177\u6709\u201C\u5835\u585E\u201D\u6548\u5E94\u3002</li></ul><p>JS\u8FD0\u884C\u65F6\uFF0C\u9664\u4E86\u4E00\u4E2A\u6B63\u5728\u8FD0\u884C\u7684\u4E3B\u7EBF\u7A0B\uFF0C\u5F15\u64CE\u8FD8\u63D0\u4F9B\u4E00\u4E2A\u4EFB\u52A1\u961F\u5217\uFF0C\u91CC\u9762\u662F\u5404\u79CD\u9700\u8981\u5F53\u524D\u7A0B\u5E8F\u5904\u7406\u7684\u5F02\u6B65\u4EFB\u52A1\u3002</p><p>\u4E3A\u4E86\u5904\u7406\u5F02\u6B65\u4EFB\u52A1\uFF0CJS\u5F15\u64CE\u63D0\u4F9B\u4E86\u4E8B\u4EF6\u5FAA\u73AF\u7684\u673A\u5236\uFF1A\u4E0D\u505C\u5730\u68C0\u67E5\uFF0C\u53EA\u8981\u540C\u6B65\u4EFB\u52A1\u6267\u884C\u5B8C\u4E86\uFF0C\u5F15\u64CE\u5C31\u4F1A\u53BB\u68C0\u67E5\u90A3\u4E9B\u6302\u8D77\u6765\u7684\u5F02\u6B65\u4EFB\u52A1\uFF0C\u662F\u4E0D\u662F\u53EF\u4EE5\u8FDB\u5165\u4E3B\u7EBF\u7A0B\u4E86\u3002</p><p>\u5F02\u6B65\u64CD\u4F5C\u7684\u6A21\u5F0F\u6709\uFF1A</p><ul><li>\u56DE\u8C03\u51FD\u6570\uFF1A\u5F02\u6B65\u64CD\u4F5C\u6700\u57FA\u672C\u7684\u65B9\u6CD5\uFF0C\u4F18\u70B9\u662F\u7B80\u5355\u3001\u5BB9\u6613\u7406\u89E3\u548C\u5B9E\u73B0\uFF0C\u7F3A\u70B9\u662F\u4E0D\u5229\u4E8E\u4EE3\u7801\u7684\u9605\u8BFB\u548C\u7EF4\u62A4\uFF0C\u5404\u4E2A\u90E8\u5206\u4E4B\u95F4\u9AD8\u5EA6\u8026\u5408\uFF0C\u4F7F\u5F97\u7A0B\u5E8F\u7ED3\u6784\u6DF7\u4E71\u3001\u6D41\u7A0B\u96BE\u4EE5\u8FFD\u8E2A\u3002</li><li>\u4E8B\u4EF6\u76D1\u542C\uFF1A\u6267\u884C\u4E0D\u53D6\u51B3\u4E8E\u4EE3\u7801\u7684\u987A\u5E8F\uFF0C\u800C\u53D6\u51B3\u4E8E\u67D0\u4E2A\u4E8B\u4EF6\u662F\u5426\u53D1\u751F\uFF0C\u4F18\u70B9\u662F\u5BB9\u6613\u7406\u89E3\u548C\u7ED1\u5B9A\u591A\u4E2A\u4E8B\u4EF6\u53CA\u56DE\u8C03\u51FD\u6570\uFF0C\u8026\u5408\u4F4E\u4E14\u5229\u4E8E\u6A21\u5757\u5316\uFF0C\u7F3A\u70B9\u662F\u6574\u4E2A\u7A0B\u5E8F\u90FD\u8981\u53D8\u6210\u4E8B\u4EF6\u9A71\u52A8\u578B\uFF0C\u8FD0\u884C\u6D41\u7A0B\u4F1A\u4E0D\u6E05\u6670\uFF0C\u5F88\u96BE\u770B\u51FA\u4E3B\u6D41\u7A0B\u3002</li><li>\u53D1\u5E03/\u8BA2\u9605\uFF1A\u5B58\u5728\u4E00\u4E2A\u201C\u4FE1\u53F7\u4E2D\u5FC3\u201D\uFF0C\u67D0\u4E2A\u4EFB\u52A1\u6267\u884C\u5B8C\u6210\uFF0C\u5C31\u5411\u4FE1\u53F7\u4E2D\u5FC3\u201C\u53D1\u5E03\u201D\u4E00\u4E2A\u4FE1\u53F7\uFF0C\u5176\u4ED6\u4EFB\u52A1\u53EF\u4EE5\u5411\u4FE1\u53F7\u4E2D\u5FC3\u201C\u8BA2\u9605\u201D\uFF08subscribe\uFF09\u8FD9\u4E2A\u4FE1\u53F7\uFF0C\u4ECE\u800C\u77E5\u9053\u4EC0\u4E48\u65F6\u5019\u81EA\u5DF1\u53EF\u4EE5\u5F00\u59CB\u6267\u884C\u3002</li><li>Promise \u5BF9\u8C61\uFF1A\u4E0D\u662F\u65B0\u7684\u8BED\u6CD5\u529F\u80FD\uFF0C\u800C\u662F\u4E00\u79CD\u65B0\u7684\u5199\u6CD5\uFF0C\u5141\u8BB8\u5C06\u56DE\u8C03\u51FD\u6570\u7684\u5D4C\u5957\uFF0C\u6539\u6210\u94FE\u5F0F\u8C03\u7528\uFF0C\u5199\u6CD5\u53EA\u662F\u56DE\u8C03\u51FD\u6570\u7684\u6539\u8FDB\uFF0C\u4F7F\u7528then\u65B9\u6CD5\u4EE5\u540E\uFF0C\u5F02\u6B65\u4EFB\u52A1\u7684\u6267\u884C\u770B\u5F97\u66F4\u6E05\u695A\uFF0C\u5B58\u5728\u7684\u6700\u5927\u95EE\u9898\u662F\u4EE3\u7801\u5197\u4F59\u3002</li><li>ES6 Generator \u51FD\u6570\uFF1A\u6267\u884C\u540E\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u6307\u5411\u5185\u90E8\u72B6\u6001\u7684\u904D\u5386\u5668\u6307\u9488\u5BF9\u8C61\uFF0C\u6BCF\u6B21\u8C03\u7528\u904D\u5386\u5668\u5BF9\u8C61\u7684next\u65B9\u6CD5\uFF0C\u5C31\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u6709\u7740value\u548Cdone\u4E24\u4E2A\u5C5E\u6027\u7684\u5BF9\u8C61\uFF0C\u5F02\u6B65\u64CD\u4F5C\u9700\u8981\u6682\u505C\u7684\u5730\u65B9\uFF0C\u90FD\u7528yield\u8BED\u53E5\u6CE8\u660E\uFF0CGenerator \u51FD\u6570\u53EF\u4EE5\u6682\u505C\u6267\u884C\u548C\u6062\u590D\u6267\u884C\uFF0C\u8FD9\u662F\u5B83\u80FD\u5C01\u88C5\u5F02\u6B65\u4EFB\u52A1\u7684\u6839\u672C\u539F\u56E0\u3002</li><li>ES7 async \u51FD\u6570\uFF1A\u53EA\u662F Generator \u51FD\u6570\u7684\u8BED\u6CD5\u7CD6\uFF0C\u53EA\u662F\u5185\u7F6E\u4E86\u6267\u884C\u5668\uFF0C\u901A\u8FC7async\u548Cawait \u63D0\u4F9B\u66F4\u597D\u7684\u8BED\u4E49\uFF0C\u8FD4\u56DE\u503C\u662F Promise \u5BF9\u8C61\uFF0C\u6BD4 Generator \u51FD\u6570\u7684\u8FD4\u56DE\u503C\u662F Iterator \u5BF9\u8C61\u65B9\u4FBF\uFF0C\u8FD9\u53EF\u4EE5\u770B\u4F5C\u662F\u591A\u4E2A\u5F02\u6B65\u64CD\u4F5C\u5305\u88C5\u6210\u7684\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0C\u800Cawait\u547D\u4EE4\u5C31\u662F\u5185\u90E8then\u547D\u4EE4\u7684\u8BED\u6CD5\u7CD6\u3002</li></ul><p>\u624B\u52A8\u5B9E\u73B0promise\u5BF9\u8C61\uFF1A</p><ul><li>\u9762\u8BD5\u65F6\u53EA\u9700\u5199\u51FA\u7B80\u5355\u7248\u5373\u53EF\uFF1A</li></ul><div class="language-"><pre><code>class MyPromise {
  constructor(fn) {
      this.value = null\uFF1B // \u5B9A\u4E49\u4F20\u9012\u5230then\u7684value
      this.state = &#39;PENDING&#39;\uFF1B  // \u5B9A\u4E49\u5F53\u524DPromise\u8FD0\u884C\u72B6\u6001
      this.resolvedCallBacks = []\uFF1B// \u5B9A\u4E49Promise\u5931\u8D25\u72B6\u6001\u7684\u56DE\u8C03\u51FD\u6570\u96C6\u5408
      this.rejectedCallBacks = []; // \u5B9A\u4E49Promise\u6210\u529F\u72B6\u6001\u7684\u56DE\u8C03\u51FD\u6570\u96C6\u5408
      MyPromise.that = this; // \u4E3A\u9759\u6001\u65B9\u6CD5\u5B9A\u4E49\u5176\u5185\u90E8\u4F7F\u7528\u7684that  
      try {
          // \u6267\u884C new MyPromise() \u5185\u4F20\u5165\u7684\u65B9\u6CD5
          fn(MyPromise.resolve, MyPromise.reject);
      } catch (error) {
          MyPromise.reject(this.value)
      }
  }
  static resolve(value) {}
  static reject(value) {}
  then(onFulfilled, onRejected) {}
}
</code></pre></div><ul><li>\u5B8C\u6574\u5B9E\u73B0\u53C2\u8003\u7248\uFF1A</li></ul><div class="language-"><pre><code>class MyPromise {
  constructor(fn) {
      this.states = {
          PENDING: &#39;PENDING&#39;, 
          RESOLVED: &#39;RESOLVED&#39;, 
          REJECTED: &#39;REJECTED&#39;
      }
      this.value = null\uFF1B // \u5B9A\u4E49\u4F20\u9012\u5230then\u7684value
      this.state = this.states.PENDING\uFF1B  // \u5B9A\u4E49\u5F53\u524DPromise\u8FD0\u884C\u72B6\u6001
      this.resolvedCallBacks = []\uFF1B// \u5B9A\u4E49Promise\u5931\u8D25\u72B6\u6001\u7684\u56DE\u8C03\u51FD\u6570\u96C6\u5408
      this.rejectedCallBacks = []; // \u5B9A\u4E49Promise\u6210\u529F\u72B6\u6001\u7684\u56DE\u8C03\u51FD\u6570\u96C6\u5408
      MyPromise.that = this; // \u4E3A\u9759\u6001\u65B9\u6CD5\u5B9A\u4E49\u5176\u5185\u90E8\u4F7F\u7528\u7684that  
      try {
          // \u6267\u884C new MyPromise() \u5185\u4F20\u5165\u7684\u65B9\u6CD5
          fn(MyPromise.resolve, MyPromise.reject);
      } catch (error) {
          MyPromise.reject(this.value)
      }
  }
   // \u9759\u6001resolve\u65B9\u6CD5\uFF0CMyPromise\u5B9E\u4F8B\u4E0D\u53EF\u8BBF\u95EE\uFF1B
  static resolve(value) {
      const that = MyPromise.that;
      // \u5224\u65AD\u662F\u5426\u662FMyPromise\u5B9E\u4F8B\u8BBF\u95EEresolve
      const f = that instanceof MyPromise
      // MyPromise\u5B9E\u4F8B\u5BF9\u8C61\u8BBF\u95EEresolve
      if (f &amp;&amp; that.state == that.states.PENDING) {
          that.state = that.states.RESOLVED
          that.value = value
          that.resolvedCallBacks.map(cb =&gt; (that.value = cb(that.value)))
      }
      // MyPromise\u7C7B\u8BBF\u95EEresolve
      if (!f) {
          const obj = new MyPromise()
          return Object.assign(obj, {
              state: obj.states.RESOLVED,
              value
          })
      }
  }
  static reject(value) {
      const that = MyPromise.that;
      const f = that instanceof MyPromise
      if (f &amp;&amp; that.state == that.states.PENDING) {
          that.state = that.states.REJECTED
          that.value = value
          that.rejectedCallBacks.map(cb =&gt; (that.value = cb(that.value)))
      }
      if (!f) {
          const obj = new MyPromise()
          return Object.assign(obj, {
              state: obj.states.REJECTED,
              value
          })
      }
  }
  // \u5B9A\u4E49\u5728MyPromise\u539F\u578B\u4E0A\u7684then\u65B9\u6CD5
  then(onFulfilled, onRejected) {
      const { PENDING, RESOLVED, REJECTED } = this.states;
      const f = typeof onFulfilled == &quot;function&quot; ? onFulfilled : c =&gt; c;
      const r = typeof onRejected == &quot;function&quot; ? onRejected : c =&gt; throw c;
      switch (this.state) {
          case PENDING:
              this.resolvedCallBacks.push(f)
              this.rejectedCallBacks.push(r)
              break;
          case RESOLVED:
              this.value = f(this.value)
              break;
          case REJECTED:
              this.value = r(this.value)
              break;
          default:
              break;
      }
      // \u6EE1\u8DB3\u94FE\u5F0F\u8C03\u7528then\uFF0C\u8FD4\u56DEMyPromise\u5B9E\u4F8B\u5BF9\u8C61
      return this;
  }
}
</code></pre></div><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u8FD9\u91CC\u53EA\u662F\u5217\u4E3E\u4E86\u4E00\u4E9BJS\u4E2D\u5E95\u5C42\u539F\u7406\u6216\u7591\u96BE\u7684\u77E5\u8BC6\u70B9\uFF0C\u4E00\u822C\u9762\u8BD5\u65F6\u95F4\u90FD\u6709\u9650\uFF0C\u9762\u8BD5\u5B98\u53EA\u4F1A\u6311\u5176\u4E2D\u7684\u4E00\u4E24\u9053\u8FDB\u884C\u8003\u5BDF\uFF0C\u53EA\u6709\u67B6\u6784\u5E08\u5C97\u4F4D\uFF0C\u6216\u8005\u5927\u516C\u53F8\u7684\u4E2D\u9AD8\u7EA7\u5C97\u4F4D\uFF0C\u624D\u53EF\u80FD\u4F1A\u8003\u5BDF\u3002</p><p>\u5B9E\u9645\u4E0A\uFF0C\u6211\u5728\u771F\u5B9E\u9762\u8BD5\u4E2D\uFF0C\u88AB\u95EE\u5230\u7684\u4E5F\u6781\u5C11\uFF0C\u53EA\u80FD\u90A3\u4E9B\u4E0D\u7740\u6025\u62DB\u4EBA\u7684\u5927\u516C\u53F8\uFF0C\u624D\u6709\u53EF\u80FD\u5728\u9762\u8BD5\u4E2D\u548C\u4F60\u804A\u4E00\u4E9BJS\u6BD4\u8F83\u6DF1\u5165\u7684\u8BDD\u9898\uFF0C\u56E0\u6B64\u5927\u5BB6\u4E86\u89E3\u5373\u53EF\u3002</p><p>\u56E0\u4E3A\u524D\u7AEF\u6280\u672F\u53D8\u5316\u5F88\u5FEB\uFF0C\u4F01\u4E1A\u751F\u5B58\u538B\u529B\u5927\uFF0C\u5C3D\u53EF\u80FD\u638C\u63E1\u591A\u7AEF\u6280\u672F\u6846\u67B6\u54CD\u5E94\u4E1A\u52A1\u9700\u6C42\u624D\u662F\u771F\u6B63\u7528\u4EBA\u65B9\u770B\u91CD\u7684\u6280\u80FD\u3002</p>`,95),o=[i];function s(r,p,c,u,d,h){return t(),n("div",null,o)}var v=e(a,[["render",s]]);export{m as __pageData,v as default};
