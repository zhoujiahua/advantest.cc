/*! For license information please see 54.2069a1d3.chunk.js.LICENSE.txt */
(this.webpackJsonpexcalidraw=this.webpackJsonpexcalidraw||[]).push([[54],{212:function(e,i,t){"use strict";t.r(i),i.default=async(e,i={},t=null,a=!1)=>{i.fileName=i.fileName||"Untitled";const s={};if(i.mimeTypes?(i.mimeTypes.push(e.type),i.mimeTypes.map((e=>{s[e]=i.extensions||[]}))):s[e.type]=i.extensions||[],t)try{await t.getFile()}catch(e){if(t=null,a)throw e}const c=t||await window.showSaveFilePicker({suggestedName:i.fileName,types:[{description:i.description||"",accept:s}]}),n=await c.createWritable();return await n.write(e),await n.close(),c}}}]);
//# sourceMappingURL=54.2069a1d3.chunk.js.map