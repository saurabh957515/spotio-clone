import{a4 as t}from"./index-IeegpAPg.js";import{t as m}from"./VertexElementDescriptor-BOD-G50G.js";function a(r,o=0){const i=r.stride;return Array.from(r.fields.keys()).map(e=>{const n=r.fields.get(e),f=n.constructor.ElementCount,u=p(n.constructor.ElementType),s=n.offset,c=n.optional?.glNormalized??!1;return new m(e,f,u,s,i,c,o)})}function p(r){const o=N[r];if(o)return o;throw new Error("BufferType not supported in WebGL")}const N={u8:t.UNSIGNED_BYTE,u16:t.UNSIGNED_SHORT,u32:t.UNSIGNED_INT,i8:t.BYTE,i16:t.SHORT,i32:t.INT,f32:t.FLOAT};export{a as t};