"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2659],{3905:function(e,t,o){o.d(t,{Zo:function(){return l},kt:function(){return y}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(o),y=r,d=m["".concat(p,".").concat(y)]||m[y]||u[y]||i;return o?n.createElement(d,a(a({ref:t},l),{},{components:o})):n.createElement(d,a({ref:t},l))}));function y(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},67743:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var n=o(83117),r=o(80102),i=(o(67294),o(3905)),a=["components"],s={title:"Using EntityRepository instead of EntityManager",sidebar_label:"Entity Repository"},p=void 0,c={unversionedId:"repositories",id:"version-4.4/repositories",title:"Using EntityRepository instead of EntityManager",description:"More convenient way of fetching entities from database is by using EntityRepository, that",source:"@site/versioned_docs/version-4.4/repositories.md",sourceDirName:".",slug:"/repositories",permalink:"/docs/4.4/repositories",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/repositories.md",tags:[],version:"4.4",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1639696766,formattedLastUpdatedAt:"12/16/2021",frontMatter:{title:"Using EntityRepository instead of EntityManager",sidebar_label:"Entity Repository"},sidebar:"version-4.4/docs",previous:{title:"Collections",permalink:"/docs/4.4/collections"},next:{title:"Transactions and Concurrency",permalink:"/docs/4.4/transactions"}},l=[{value:"Custom Repository",id:"custom-repository",children:[{value:"Inferring custom repository type",id:"inferring-custom-repository-type",children:[],level:3}],level:2}],u={toc:l};function m(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"More convenient way of fetching entities from database is by using ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityRepository"),", that\ncarries the entity name so you do not have to pass it to every ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"findOne")," calls:"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const booksRepository = orm.em.getRepository(Book);\n\n// with sorting, limit and offset parameters, populating author references\nconst books = await booksRepository.find({ author: '...' }, ['author'], { title: QueryOrder.DESC }, 2, 1);\n\n// or with options object\nconst books = await booksRepository.find({ author: '...' }, { \n  populate: ['author'],\n  limit: 1,\n  offset: 2,\n  sort: { title: QueryOrder.DESC },\n});\n\nconsole.log(books); // Book[]\n")),(0,i.kt)("h2",{id:"custom-repository"},"Custom Repository"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Since v4, we need to make sure we are working with correctly typed ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityRepository"),"\nto have access to driver specific methods (like ",(0,i.kt)("inlineCode",{parentName:"p"},"createQueryBuilder()"),"). Use the one\nexported from your driver package."))),(0,i.kt)("p",null,"To use custom repository, just extend ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityRepository<T>")," class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { EntityRepository } from '@mikro-orm/mysql'; // or any other driver package\n\n@Repository(Author)\nexport class CustomAuthorRepository extends EntityRepository<Author> {\n\n  // your custom methods...\n  public findAndUpdate(...) {\n    // ...\n  }\n\n}\n")),(0,i.kt)("p",null,"You can also omit the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Repository")," decorator and register your repository in ",(0,i.kt)("inlineCode",{parentName:"p"},"@Entity"),"\ndecorator instead:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity({ customRepository: () => CustomAuthorRepository })\nexport class Author {\n  // ...\n}\n")),(0,i.kt)("p",null,"Note that we need to pass that repository reference inside a callback so we will not run\ninto circular dependency issues when using entity references inside that repository."),(0,i.kt)("p",null,"Now you can access your custom repository via ",(0,i.kt)("inlineCode",{parentName:"p"},"em.getRepository()")," method."),(0,i.kt)("h3",{id:"inferring-custom-repository-type"},"Inferring custom repository type"),(0,i.kt)("p",null,"To have the ",(0,i.kt)("inlineCode",{parentName:"p"},"em.getRepository()")," method return correctly typed custom repository\ninstead of the generic ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityRepository<T>"),", we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityRepositoryType"),"\nsymbol:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@Entity({ customRepository: () => AuthorRepository })\nexport class Author {\n\n  [EntityRepositoryType]?: AuthorRepository;\n\n}\n\nconst repo = em.getRepository(Author); // repo has type AuthorRepository\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can also register custom base repository (for all entities where you do not specify\n",(0,i.kt)("inlineCode",{parentName:"p"},"customRepository"),") globally, via ",(0,i.kt)("inlineCode",{parentName:"p"},"MikroORM.init({ entityRepository: CustomBaseRepository })"),".")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note that you cannot use both ",(0,i.kt)("inlineCode",{parentName:"p"},"@Repository(Author)")," on the repository and ",(0,i.kt)("inlineCode",{parentName:"p"},"{ customRepository: () => AuthorRepository }")," on the entity at the same time. This will cause a circular dependency and throws an error. Either one of options achieves the same goal.")),(0,i.kt)("p",null,"For more examples, take a look at\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/master/tests/EntityManager.mongo.test.ts"},(0,i.kt)("inlineCode",{parentName:"a"},"tests/EntityManager.mongo.test.ts")),"\nor ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/master/tests/EntityManager.mysql.test.ts"},(0,i.kt)("inlineCode",{parentName:"a"},"tests/EntityManager.mysql.test.ts")),"."))}m.isMDXComponent=!0}}]);