/*! For license information please see 50.d3cee45f.chunk.js.LICENSE.txt */
(this.webpackJsonpexcalidraw=this.webpackJsonpexcalidraw||[]).push([[50],{205:function(e,s,i){"use strict";i.r(s);const t=async e=>{const s=await e.getFile();return s.handle=e,s};s.default=async(e={})=>{const s=await window.chooseFileSystemEntries({accepts:[{description:e.description||"",mimeTypes:e.mimeTypes||["*/*"],extensions:e.extensions||[""]}],multiple:e.multiple||!1});return e.multiple?Promise.all(s.map(t)):t(s)}}}]);
//# sourceMappingURL=50.d3cee45f.chunk.js.map