"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54127],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=m(n),u=a,k=s["".concat(p,".").concat(u)]||s[u]||d[u]||i;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},47574:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return c},default:function(){return s}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],l={id:"knex.knex-1.migrationsource",title:"Interface: MigrationSource<TMigrationSpec>",sidebar_label:"MigrationSource",custom_edit_url:null,hide_title:!0},p="Interface: MigrationSource<TMigrationSpec>",m={unversionedId:"api/interfaces/knex.knex-1.migrationsource",id:"version-4.5/api/interfaces/knex.knex-1.migrationsource",isDocsHomePage:!1,title:"Interface: MigrationSource<TMigrationSpec>",description:"knex.Knex.MigrationSource",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.migrationsource.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.knex-1.migrationsource",permalink:"/docs/api/interfaces/knex.knex-1.migrationsource",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Fathy Boundjadj",lastUpdatedAt:1638800705,formattedLastUpdatedAt:"12/6/2021",frontMatter:{id:"knex.knex-1.migrationsource",title:"Interface: MigrationSource<TMigrationSpec>",sidebar_label:"MigrationSource",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Migration",permalink:"/docs/api/interfaces/knex.knex-1.migration"},next:{title:"Migrator",permalink:"/docs/api/interfaces/knex.knex-1.migrator"}},c=[{value:"Type parameters",id:"type-parameters",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"getMigration",id:"getmigration",children:[{value:"Parameters:",id:"parameters",children:[],level:4}],level:3},{value:"getMigrationName",id:"getmigrationname",children:[{value:"Parameters:",id:"parameters-1",children:[],level:4}],level:3},{value:"getMigrations",id:"getmigrations",children:[{value:"Parameters:",id:"parameters-2",children:[],level:4}],level:3}],level:2}],d={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-migrationsourcetmigrationspec"},"Interface: MigrationSource<TMigrationSpec",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".MigrationSource"),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TMigrationSpec"))))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"getmigration"},"getMigration"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getMigration"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"migration"),": TMigrationSpec): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migration"},(0,i.kt)("em",{parentName:"a"},"Migration"))),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"migration")),(0,i.kt)("td",{parentName:"tr",align:"left"},"TMigrationSpec")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migration"},(0,i.kt)("em",{parentName:"a"},"Migration"))),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2117"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getmigrationname"},"getMigrationName"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getMigrationName"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"migration"),": TMigrationSpec): ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"migration")),(0,i.kt)("td",{parentName:"tr",align:"left"},"TMigrationSpec")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2116"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getmigrations"},"getMigrations"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getMigrations"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"loadExtensions"),": readonly ",(0,i.kt)("em",{parentName:"p"},"string"),"[]): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<TMigrationSpec[]",">"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"loadExtensions")),(0,i.kt)("td",{parentName:"tr",align:"left"},"readonly ",(0,i.kt)("em",{parentName:"td"},"string"),"[]")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<TMigrationSpec[]",">"),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2115"))}s.isMDXComponent=!0}}]);