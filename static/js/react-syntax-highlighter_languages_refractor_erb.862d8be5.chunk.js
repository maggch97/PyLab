(this["webpackJsonp@hedgehog/lab"]=this["webpackJsonp@hedgehog/lab"]||[]).push([[38,81,120],{2972:function(e,n,t){"use strict";function r(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,r,a,i){if(t.language===r){var s=t.tokenStack=[];t.code=t.code.replace(a,(function(e){if("function"===typeof i&&!i(e))return e;for(var a,o=s.length;-1!==t.code.indexOf(a=n(r,o));)++o;return s[o]=e,a})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,r){if(t.language===r&&t.tokenStack){t.grammar=e.languages[r];var a=0,i=Object.keys(t.tokenStack);!function s(o){for(var l=0;l<o.length&&!(a>=i.length);l++){var g=o[l];if("string"===typeof g||g.content&&"string"===typeof g.content){var u=i[a],d=t.tokenStack[u],p="string"===typeof g?g:g.content,c=n(r,u),b=p.indexOf(c);if(b>-1){++a;var f=p.substring(0,b),m=new e.Token(r,e.tokenize(d,t.grammar),"language-"+r,d),y=p.substring(b+c.length),h=[];f&&h.push.apply(h,s([f])),h.push(m),y&&h.push.apply(h,s([y])),"string"===typeof g?o.splice.apply(o,[l,1].concat(h)):g.content=h}}else g.content&&s(g.content)}return o}(t.tokens)}}}})}(e)}e.exports=r,r.displayName="markupTemplating",r.aliases=[]},2975:function(e,n,t){"use strict";function r(e){!function(e){e.languages.ruby=e.languages.extend("clike",{comment:[/#.*/,{pattern:/^=begin\s[\s\S]*?^=end/m,greedy:!0}],keyword:/\b(?:alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|protected|private|public|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/});var n={pattern:/#\{[^}]+\}/,inside:{delimiter:{pattern:/^#\{|\}$/,alias:"tag"},rest:e.languages.ruby}};delete e.languages.ruby.function,e.languages.insertBefore("ruby","keyword",{regex:[{pattern:/%r([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1[gim]{0,3}/,greedy:!0,inside:{interpolation:n}},{pattern:/%r\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/,greedy:!0,inside:{interpolation:n}},{pattern:/%r\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/,greedy:!0,inside:{interpolation:n}},{pattern:/%r\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/,greedy:!0,inside:{interpolation:n}},{pattern:/%r<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/,greedy:!0,inside:{interpolation:n}},{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}],variable:/[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,symbol:{pattern:/(^|[^:]):[a-zA-Z_]\w*(?:[?!]|\b)/,lookbehind:!0},"method-definition":{pattern:/(\bdef\s+)[\w.]+/,lookbehind:!0,inside:{function:/\w+$/,rest:e.languages.ruby}}}),e.languages.insertBefore("ruby","number",{builtin:/\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,constant:/\b[A-Z]\w*(?:[?!]|\b)/}),e.languages.ruby.string=[{pattern:/%[qQiIwWxs]?([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/,greedy:!0,inside:{interpolation:n}},{pattern:/%[qQiIwWxs]?\((?:[^()\\]|\\[\s\S])*\)/,greedy:!0,inside:{interpolation:n}},{pattern:/%[qQiIwWxs]?\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/,greedy:!0,inside:{interpolation:n}},{pattern:/%[qQiIwWxs]?\[(?:[^\[\]\\]|\\[\s\S])*\]/,greedy:!0,inside:{interpolation:n}},{pattern:/%[qQiIwWxs]?<(?:[^<>\\]|\\[\s\S])*>/,greedy:!0,inside:{interpolation:n}},{pattern:/("|')(?:#\{[^}]+\}|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0,inside:{interpolation:n}}],e.languages.rb=e.languages.ruby}(e)}e.exports=r,r.displayName="ruby",r.aliases=["rb"]},3025:function(e,n,t){"use strict";var r=t(2972),a=t(2975);function i(e){var n;e.register(r),e.register(a),(n=e).languages.erb=n.languages.extend("ruby",{}),n.languages.insertBefore("erb","comment",{delimiter:{pattern:/^<%=?|%>$/,alias:"punctuation"}}),n.hooks.add("before-tokenize",(function(e){n.languages["markup-templating"].buildPlaceholders(e,"erb",/<%=?(?:[^\r\n]|[\r\n](?!=begin)|[\r\n]=begin\s[\s\S]*?^=end)+?%>/gm)})),n.hooks.add("after-tokenize",(function(e){n.languages["markup-templating"].tokenizePlaceholders(e,"erb")}))}e.exports=i,i.displayName="erb",i.aliases=[]}}]);