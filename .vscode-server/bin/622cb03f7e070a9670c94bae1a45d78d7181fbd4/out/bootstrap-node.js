"use strict";exports.injectNodeModuleLookupPath=function(t){if(!t)throw new Error("Missing injectPath");const i=require("module"),a=require("path").join(__dirname,"../node_modules"),c=i._resolveLookupPaths;i._resolveLookupPaths=function(n,e){const r=c(n,e);if(Array.isArray(r)){for(let s=0,p=r.length;s<p;s++)if(r[s]===a){r.splice(s,0,t);break}}return r}},exports.removeGlobalNodeModuleLookupPaths=function(){const t=require("module"),i=t.globalPaths,l=t._resolveLookupPaths;t._resolveLookupPaths=function(a,c){const n=l(a,c);let e=0;for(;e<n.length&&n[n.length-1-e]===i[i.length-1-e];)e++;return n.slice(0,n.length-e)}},exports.configurePortable=function(t){const i=require("fs"),l=require("path"),a=l.dirname(__dirname);function c(o){return process.env.VSCODE_DEV?a:process.platform==="darwin"?o.dirname(o.dirname(o.dirname(a))):o.dirname(o.dirname(a))}function n(o){if(process.env.VSCODE_PORTABLE)return process.env.VSCODE_PORTABLE;if(process.platform==="win32"||process.platform==="linux")return o.join(c(o),"data");const u=t.portable||`${t.applicationName}-portable-data`;return o.join(o.dirname(c(o)),u)}const e=n(l),r=!("target"in t)&&i.existsSync(e),s=l.join(e,"tmp"),p=r&&i.existsSync(s);return r?process.env.VSCODE_PORTABLE=e:delete process.env.VSCODE_PORTABLE,p&&(process.platform==="win32"?(process.env.TMP=s,process.env.TEMP=s):process.env.TMPDIR=s),{portableDataPath:e,isPortable:r}};

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/622cb03f7e070a9670c94bae1a45d78d7181fbd4/core/bootstrap-node.js.map
