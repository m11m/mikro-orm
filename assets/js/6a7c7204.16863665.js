"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61797],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=r,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||a;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30609:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),i=["components"],l={title:"Relationship Loading Strategies",sidebar_label:"Loading Strategies"},s=void 0,p={unversionedId:"loading-strategies",id:"version-4.2/loading-strategies",title:"Relationship Loading Strategies",description:"JOINED loading strategy is SQL only feature.",source:"@site/versioned_docs/version-4.2/loading-strategies.md",sourceDirName:".",slug:"/loading-strategies",permalink:"/docs/4.2/loading-strategies",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/loading-strategies.md",tags:[],version:"4.2",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1643673602,formattedLastUpdatedAt:"2/1/2022",frontMatter:{title:"Relationship Loading Strategies",sidebar_label:"Loading Strategies"},sidebar:"version-4.2/docs",previous:{title:"Propagation",permalink:"/docs/4.2/propagation"},next:{title:"Serializing",permalink:"/docs/4.2/serializing"}},c=[{value:"Changing the loading strategy globally",id:"changing-the-loading-strategy-globally",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"JOINED")," loading strategy is SQL only feature.")),(0,a.kt)("p",null,"Controls how relationships get loaded when querying. By default, populated relationships\nare loaded via the ",(0,a.kt)("inlineCode",{parentName:"p"},"select-in")," strategy. This strategy issues one additional ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT"),"\nstatement per relation being loaded."),(0,a.kt)("p",null,"The loading strategy can be specified both at mapping time and when loading entities."),(0,a.kt)("p",null,"For example, given the following entities:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Entity, LoadStrategy, OneToMany, ManyToOne } from '@mikro-orm/core';\n\n@Entity()\nexport class Author {\n  @OneToMany(() => Book, b => b.author)\n  books = new Collection<Book>(this);\n}\n\n@Entity()\nexport class Book {\n  @ManyToOne()\n  author: Author;\n}\n")),(0,a.kt)("p",null,"The following will issue two SQL statements.\nOne to load the author and another to load all the books belonging to that author:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const author = await orm.em.findOne(Author, 1, ['books']);\n")),(0,a.kt)("p",null,"If we update the ",(0,a.kt)("inlineCode",{parentName:"p"},"Author.books")," mapping to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Entity, LoadStrategy, OneToMany } from '@mikro-orm/core';\n\n@Entity()\nexport class Author {\n  @OneToMany({\n    entity: () => Book,\n    mappedBy: b => b.author,\n    strategy: LoadStrategy.JOINED,\n  })\n  books = new Collection<Book>(this);\n}\n")),(0,a.kt)("p",null,"The following will issue ",(0,a.kt)("strong",{parentName:"p"},"one")," SQL statement:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const author = await orm.em.findOne(Author, 1, ['books']);\n")),(0,a.kt)("p",null,"You can also specify the load strategy as needed. This will override whatever strategy is declared in the mapping.\nThis also works for nested populates:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// one level\nconst author = await orm.em.findOne(Author, 1, { \n  populate: {\n    books: LoadStrategy.JOINED,\n  },\n});\n\n// two or more levels - use `FindOptions.strategy`\nconst author = await orm.em.findOne(Author, 1, {\n  populate: {\n    books: { publisher: true },\n  },\n  strategy: LoadStrategy.JOINED\n});\n")),(0,a.kt)("h2",{id:"changing-the-loading-strategy-globally"},"Changing the loading strategy globally"),(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"loadStrategy")," option in the ORM config:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"MikroORM.init({\n  loadStrategy: LoadStrategy.JOINED,\n});\n")),(0,a.kt)("p",null,"This value will be used as the default, specifying the loading strategy on\nproperty level has precedence, as well as specifying it in the ",(0,a.kt)("inlineCode",{parentName:"p"},"FindOptions"),"."))}d.isMDXComponent=!0}}]);