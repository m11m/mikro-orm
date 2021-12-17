"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66729],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return k}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=s(t),k=r,m=u["".concat(p,".").concat(k)]||u[k]||c[k]||l;return t?i.createElement(m,o(o({ref:n},d),{},{components:t})):i.createElement(m,o({ref:n},d))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=u;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var s=2;s<l;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},42182:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var i=t(83117),r=t(80102),l=(t(67294),t(3905)),o=["components"],a={id:"knex.knex-1.pgconnectionconfig",title:"Interface: PgConnectionConfig",sidebar_label:"PgConnectionConfig",custom_edit_url:null,hide_title:!0},p="Interface: PgConnectionConfig",s={unversionedId:"api/interfaces/knex.knex-1.pgconnectionconfig",id:"version-4.5/api/interfaces/knex.knex-1.pgconnectionconfig",title:"Interface: PgConnectionConfig",description:"knex.Knex.PgConnectionConfig",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.pgconnectionconfig.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.knex-1.pgconnectionconfig",permalink:"/docs/api/interfaces/knex.knex-1.pgconnectionconfig",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1639696766,formattedLastUpdatedAt:"12/16/2021",frontMatter:{id:"knex.knex-1.pgconnectionconfig",title:"Interface: PgConnectionConfig",sidebar_label:"PgConnectionConfig",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"OrderBy",permalink:"/docs/api/interfaces/knex.knex-1.orderby"},next:{title:"PoolConfig",permalink:"/docs/api/interfaces/knex.knex-1.poolconfig"}},d=[{value:"Properties",id:"properties",children:[{value:"application_name",id:"application_name",children:[],level:3},{value:"connectionString",id:"connectionstring",children:[],level:3},{value:"connectionTimeoutMillis",id:"connectiontimeoutmillis",children:[],level:3},{value:"database",id:"database",children:[],level:3},{value:"host",id:"host",children:[],level:3},{value:"keepAlive",id:"keepalive",children:[],level:3},{value:"keepAliveInitialDelayMillis",id:"keepaliveinitialdelaymillis",children:[],level:3},{value:"password",id:"password",children:[],level:3},{value:"port",id:"port",children:[],level:3},{value:"ssl",id:"ssl",children:[],level:3},{value:"statement_timeout",id:"statement_timeout",children:[],level:3},{value:"stream",id:"stream",children:[],level:3},{value:"user",id:"user",children:[],level:3}],level:2}],c={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"interface-pgconnectionconfig"},"Interface: PgConnectionConfig"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".PgConnectionConfig"),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"application_name"},"application","_","name"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"application","_","name"),": ",(0,l.kt)("em",{parentName:"p"},"string")),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2057"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"connectionstring"},"connectionString"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"connectionString"),": ",(0,l.kt)("em",{parentName:"p"},"string")),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2050"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"connectiontimeoutmillis"},"connectionTimeoutMillis"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"connectionTimeoutMillis"),": ",(0,l.kt)("em",{parentName:"p"},"number")),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2054"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"database"},"database"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"database"),": ",(0,l.kt)("em",{parentName:"p"},"string")),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2046"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"host"},"host"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"host"),": ",(0,l.kt)("em",{parentName:"p"},"string")),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2049"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"keepalive"},"keepAlive"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"keepAlive"),": ",(0,l.kt)("em",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2051"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"keepaliveinitialdelaymillis"},"keepAliveInitialDelayMillis"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"keepAliveInitialDelayMillis"),": ",(0,l.kt)("em",{parentName:"p"},"number")),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2055"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"password"},"password"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"password"),": ",(0,l.kt)("em",{parentName:"p"},"string")),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2047"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"port"},"port"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"port"),": ",(0,l.kt)("em",{parentName:"p"},"number")),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2048"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"ssl"},"ssl"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"ssl"),": ",(0,l.kt)("em",{parentName:"p"},"boolean")," ","|"," ConnectionOptions"),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2056"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"statement_timeout"},"statement","_","timeout"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"statement","_","timeout"),": ",(0,l.kt)("em",{parentName:"p"},"number")," ","|"," ",(0,l.kt)("em",{parentName:"p"},"false")),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2053"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"stream"},"stream"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"stream"),": ",(0,l.kt)("em",{parentName:"p"},"Duplex")),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2052"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"user"},"user"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"user"),": ",(0,l.kt)("em",{parentName:"p"},"string")),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2045"))}u.isMDXComponent=!0}}]);